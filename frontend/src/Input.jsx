import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Nav } from './Nav'
import Hero from "./Hero"
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
    <div className='justify-center bg-[#101323] h-screen'>
    <Nav /> 
    <Hero />
    </div>
  )
}

export default InputPage