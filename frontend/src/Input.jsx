import React from 'react'
import {   Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

const InputPage = () => {
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
        />
            </CardContent>
            <CardFooter>
               <Button className="bg-white text-black text-center w-full">
                Analyze Comments
               </Button>
            </CardFooter>
            </Card>
    </div>
  )
}

export default InputPage