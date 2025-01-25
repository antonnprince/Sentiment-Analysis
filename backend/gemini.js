import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';
dotenv.config()


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getAnalysis(comments) {
    const prompt = `These are the comments of a YouTube video:
    ${comments}
    I want you to analyze these comments and divide them into 3 categories - agree, disagree, and neutral. Return the answer
    in JSON format, with the corresponding number of comments for each field.
    Generate the output as:
    {
      "total": xxx,
      "agree": xxx,
      "neutral": xxx,
      "disagree": xxx
    }
    Do not include any backticks or other strings in the final result  outside the object
    `;
    
    console.log('Comments passed to prompt:', comments);
    try {
        const result = await model.generateContent(prompt);
        const rawOutput = result.response.text();
        const formattedOutput = rawOutput.replace(/```json|```/g,"").trim()
        console.log(formattedOutput)
        return JSON.parse(formattedOutput)
    } catch (error) {
        console.error('Error generating content or parsing JSON:', error);
        return { error: 'Failed to generate content, try again' };
    }
}


export default getAnalysis
