import React from 'react'
import {   Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const InputPage = () => {
  const [url, setUrl] = useState("")

  const sendData= async()=>{
    const res = await axios.post("http://localhost:3000/get_comments", {url:url})
  }
  return (
    <div className='flex my-64 justify-center'>
        <Card className="bg-black text-white  w-1/4 ">
            <CardHeader>
                <CardTitle
                className="text-center text-2xl font-bold"
                >YouTube Comments Analyzer</CardTitle>
                <CardDescription>Enter a YouTube video URL to analyze its comments</CardDescription>
            </CardHeader>
            <CardContent>
            <Input
        type="text"
        placeholder="https://www.youtube.com/watch?v="
        onChange={(e)=>setUrl(e.target.value)}
        />
            </CardContent>
            <CardFooter>
               <Button className="bg-white text-black text-center w-full"
               onClick={sendData}
               >
                <Link to="/analysis">
                  Analyze Comments
                </Link>
               </Button>
            </CardFooter>
            </Card>
    </div>
  )
}

export default InputPage