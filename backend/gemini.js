import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';
dotenv.config()


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getAnalysis(comments){
    const prompt = `These are the comments of a youtube video
    ${comments}
    . I want you to analyse these comments and divide them into 3 categories - agree,disagree and neutral. Return the answer
     in json format, with the corresponding number of comments for each field.
     Generate the output as 
     {
        total: xxx,
        agree:xxx,
        neutral:xxx,
        disagree:xxx
     }`;
    console.log(comments)
        try {
            const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return JSON.parse(result.response.text())        
        } catch (error) {
            console.error('Error generating content:', error);
        return { error: 'Failed to generate content, try again' };
        }
}

export default getAnalysis
