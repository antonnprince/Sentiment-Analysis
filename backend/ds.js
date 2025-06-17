import { Groq } from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_KEY });

export const chatCompletion = async (comments) => {
  // Convert array of comment objects into a string
  const commentText = comments.map((c, i) => `${i + 1}. ${c.text}`).join('\n');

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `I want you to analyze these comments and divide
        them into 3 categories - agree, disagree, and neutral. Return the answer in JSON format, with the corresponding number of comments for each field. Give a concise and accurate summary from positive and negative comments, along with queries the viewers have mentioned in the comments. Also, provide any additional information from all the comments that might be useful. 
        The comments are:
        ${commentText}
        Generate the output as:   
        {
            total: (total comments in numerical value),
            positive: (positive comments in numerical value),   
            neutral: (neutral comments in numerical value),   
            negative: (negative comments in numerical value),
            positive_comments_summary:(summary of positive comments),
            negative_comments_summary: (negative comments summary), 
            queries:(list of queries mentioned in the comments),
            additional_info: (any additional information from the comments)
        }
        I want you to analyze these comments and return a clean JSON object. 

      Do not include any XML-like tags such as <think>, <thoughts>, <output>, etc.

    Respond ONLY with a raw JSON object inside curly braces. Do NOT add any extra explanation, markdown formatting, or tags.
        `,
      },
    ],
    model: 'deepseek-r1-distill-llama-70b',
    temperature: 0.6,
    max_completion_tokens: 4096,
    top_p: 0.95,
    stream: true,
    stop: null,
  });

  let output = "";

  for await (const chunk of completion) {
    output += chunk.choices[0]?.delta?.content || '';
  }

  return output; // returns a JSON string
};
