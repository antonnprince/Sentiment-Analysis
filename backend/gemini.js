import { Groq } from 'groq-sdk';
import dotenv from 'dotenv'

dotenv.config()

const groq = new Groq({apiKey: process.env.GROQ_KEY});

export const chatCompletion=({comments}) = await groq.chat.completions.create({
  "messages": [
    {
      "role": "user",
      "content": `I want you to analyze these comments and divide
      them into 3 categories - agree, disagree, and neutral. Return the answer in JSON format, with the corresponding number of comments for each field. Give a concise and accurate summary from postive and negative comments, along with queries the viewers have mentioned in the comments. Also, provide any additional information from all the comments that might be useful. 
      The comments are:
       ${comments}
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
`
    },
  ],
  "model": "deepseek-r1-distill-llama-70b",
  "temperature": 0.6,
  "max_completion_tokens": 4096,
  "top_p": 0.95,
  "stream": true,
  "stop": null
});

for await (const chunk of chatCompletion) {
  // process.stdout.write(chunk.choices[0]?.delta?.content || '');
  return JSON.stringify(chunk.choices[0]?.delta?.content)
}

const result = await chatCompletion("hi")
if(result){
  console.log("Result is:",result)
}


