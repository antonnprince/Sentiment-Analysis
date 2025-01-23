import React from 'react'
import {   Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { useLocation } from 'react-router-dom'


const Analysis = () => {

const location = useLocation()
const {analysis} = location.state || {}
console.log(JSON.stringify(analysis))

  return (
    <div className='mx-4 my-8 flex flex-row space-x-4'>
     
     <Card className="bg-black text-white w-1/2 ">
        <CardHeader>
            <CardTitle
            className="text-center text-2xl font-bold"
            >Analysis Results</CardTitle>
        </CardHeader>
            
        <CardContent>
        <Label className="text-2xl font-semibold">Agree</Label>
        <Progress value={19}  className="bg-[#44403C] mb-4"/>
        <Label className="text-2xl font-semibold">Neutral</Label>
        <Progress value={33} className="bg-[#44403C] mb-4"/>
        <Label className="text-2xl font-semibold">Disagree</Label>
        <Progress value={33} className="bg-[#44403C] mb-4"/>
        
        </CardContent>
            
      </Card> 

      <Card className="bg-black text-white  w-1/2 ">
        <CardHeader>
            <CardTitle
            className="text-center text-2xl font-bold"
            >Total Comments</CardTitle>
        </CardHeader>
            
        <CardContent>
            
        
        </CardContent>
            
      </Card> 
    </div>
  )
}

export default Analysis