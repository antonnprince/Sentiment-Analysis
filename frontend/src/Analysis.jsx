import { useState, useEffect } from 'react';
// import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios'

const Analysis = () => {
  const [url,setUrl] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const getAnalysis = async () => {
    console.log("rs hit");
    let res = await axios.post("http://localhost:3000/get_comments", {
      url: "https://www.youtube.com/watch?v=B_VSUOdVvsQ",
    });

    const raw = res.data; 
    res = raw.trim().replace(/```json|```/g,"")
    res = JSON.parse(res)
    console.log(res)
    setResult(res) 
  }


  const formatUrl =(videoUrl)=>{
    if(!videoUrl.includes("https://www.youtube.com/watch"))
    {
      console.log('false')
    }
      // else console.log("false")
    }

  return (
    <div className=' bg-[#101323] h-screen px-4 sm:px-8 py-8'>
      <h1 className='font-bold text-2xl sm:text-4xl text-slate-200'>YouTube Sentiment Analysis</h1>
              <p className=' pt-2 pb-4 text-slate-200 text-xs sm:text-md '>Paste a valid URL of youtube video to get started! </p>

      <div className='w-full flex flex-col md:flex-row'>
        <input 
          className="w-full md:w-1/2 bg-blue-950 py-2 text-sm sm:text-md my-2 px-4 focus:outline-none text-slate-300 rounded-lg"
          type='text'
          placeholder='Enter YouTube video URL'
          onChange={(e)=>setUrl(e.target.value)}
        />
                
          <button
          className='text-zinc-200 w-1/2 md:w-fit text-sm sm:text-md 
          hover:bg-blue-700
          font-semibold bg-blue-900 px-4 py-1 mx-auto md:mx-4 rounded-lg'
          onClick={getAnalysis}
          disabled={loading}
          >
            Analyze 
          </button>
      </div>

      {
          result ? 
          <>
              <div className='w-full lg:w-1/2 mx-auto my-8 p-4 rounded-lg shadow-stone-950 shadow-lg'>
              <h1 className='text-center sm:text-left font-bold text-xl text-slate-200'>Sentiment Breakdown</h1>
          <BarChart
          borderRadius={10}
             xAxis={[
              {
                id: 'barCategories',
                data: ['Positive ', 'Neutral', 'Negative'],
                sx: {
                  '.MuiChartsAxis-tickLabel': { fill: '#62748e' }, 
                  },
                },
              ]}
              yAxis={[
                {
                  sx: {
                    '.MuiChartsAxis-tickLabel': { fill: '#62748e' }, // y-axis label color (if present)
                  },
                },
              ]}
            series={[
              {
                data: [result.positive, result.neutral, result.negative],
                color: '#193cb8',
              },
            ]}
            height={200}
          />
      </div>
      
      <div className='flex flex-col mx-auto'>
        <h2 className='font-bold text-xl text-center sm:text-3xl text-slate-200'>Positive Comments</h2>
         <p className='text-center'>{result.positive_comments_summary}</p>
         
         <h2 className='font-bold text-xl text-center sm:text-3xl text-slate-200'>Negative Comments</h2>
         <p className='text-center'>{result.negative_comments_summary}</p>

        <h2 className='font-bold text-xl text-center sm:text-3xl text-slate-200'>Most Commonly Asked</h2>
         <p className='text-center'>
          {
            result.queries.map((item,index)=><p key={index}>{index + 1}. {item}</p>)
          }
         </p>


        <h2 className='font-bold text-xl text-center sm:text-3xl text-slate-200'>Additional Information</h2>
         <p className='text-center'>{result.additional_info}</p>
      </div>
          </> : 
          <>
            <h1>Enter some link to see results</h1>
          </>
      } 
    
    </div>
  )
}

export default Analysis