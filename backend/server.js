import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';

const app = express();
app.use(express.json());
app.use(cors());

// Load YouTube API
const youtube = google.youtube({
  version: 'v3',
  auth: 'process.env.YOUTUBE_API' // Set your API key here
});

app.listen(3000, () => console.log("Server is running on port 3000"));

// Endpoint to get comments
app.post('/get_comments', async (req, res) => {
  try {
    const { url } = req.body;
    const videoId = extractVideoId(url);

    const response = await youtube.commentThreads.list({
      part: 'snippet,replies',
      videoId: videoId,
      maxResults: 5 // You can specify the number of comments to fetch
    });

    // Process the response
    const comments = response.data.items.map(item => {
      const comment = item.snippet.topLevelComment.snippet;
      return {
        commentId: item.id,
        author: comment.authorDisplayName,
        text: comment.textOriginal,
        likeCount: comment.likeCount,
        publishedAt: comment.publishedAt,
        replies: item.replies ? item.replies.comments.map(reply => reply.snippet.textOriginal) : []
      };
    });

    console.log(comments); // Log the formatted comments
    res.status(200).json(comments); // Return the formatted comments
  } catch (error) {
    console.error("Error fetching comments", error);
    res.status(500).json({ message: "Error fetching comments" });
  }
});


// Helper function to extract video ID from YouTube URL
function extractVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^?&]+)/;
  const match = url.match(regex);
  return match ? (match[1] || match[2]) : null;
}
