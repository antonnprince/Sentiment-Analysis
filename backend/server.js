import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import dotenv from 'dotenv'
import {chatCompletion} from "./ds.js"


dotenv.config()

const app = express();

app.use(cors({
  origin: "https://sentiment-analysis-lac.vercel.app/"}));

app.use(express.json());



const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API // Set your API key here
});



app.listen(3000, () => console.log("Server is running on port 3000"));

app.post('/get_comments', async (req, res) => {
  try {
    const { url } = req.body;
    const videoId = extractVideoId(url);

    const response = await youtube.commentThreads.list({
      part: 'snippet,replies',
      videoId: videoId,
      maxResults: 100 // You can specify the number of comments to fetch
    });

    // Process the response
      const comments = response.data.items.map(item => {
      const comment = item.snippet.topLevelComment.snippet;
      return (
        {
        "text":  comment.textOriginal,
          "date": comment.publishedAt
        }
      )
    });


    let analysis = await chatCompletion(comments)
    console.log(analysis)
    analysis=analysis.split("</think>")[1]
    res.status(200).json(analysis);
  } 
  catch (error) {
    console.error("Error fetching comments", error);
    res.status(500).json({ message: "Error fetching comments" });
  }
});


function extractVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^?&]+)/;
  const match = url.match(regex);
  return match ? (match[1] || match[2]) : null;
}


