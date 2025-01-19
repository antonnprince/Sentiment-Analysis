import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';
dotenv.config()


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "These are the comments of a youtube video. I want you to analyse these comments and divide them into 3 categories - agree,disagree and neutral. Return the answer in json format, with the corresponding number of comments for each field.";

const result = await model.generateContent(prompt);
console.log(result.response.text());