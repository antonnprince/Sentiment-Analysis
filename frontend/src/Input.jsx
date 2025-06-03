import React from 'react'
import {   Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Nav } from './Nav'

const InputPage = () => {
  const [url, setUrl] = useState("")
  const navigate=useNavigate()


  const sendData= async()=>{
    // const res = await axios.post(`${import.meta.env.VITE_SERVER_ROUTE}get_comments`, {url:url})
const res = await axios.post(`http://localhost:3000/get_comments`, {url:url})
    const analysis = res.data
    console.log(typeof(analysis)," ", analysis)
    navigate('/analysis',{state: {analysis}})
  }
  return (
    <div className='flex justify-center bg-[#101323] h-screen'>
    <Nav />
         
    </div>
  )
}

export default InputPage