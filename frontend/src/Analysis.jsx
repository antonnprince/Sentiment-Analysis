import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


const Analysis = () => {
  const [url,setUrl] = useState("")


  const formatUrl =(videoUrl)=>{
    if(videoUrl.includes("https://www.youtube.com/watch"))
    {
      console.log('true')
    }
      else console.log("false")
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
          className='text-zinc-200 w-1/2 md:w-fit text-sm sm:text-md font-semibold bg-blue-900 px-4 py-1 mx-auto md:mx-4 rounded-lg'
          onClick={()=>formatUrl(url)}>
            Analyze 
          </button>
      </div>

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
                data: [2, 5, 3],
                color: '#193cb8',
              },
            ]}
            height={200}
          />
      </div>
      
      <div className='flex flex-col mx-auto'>
        <h2 className='font-bold text-xl text-center sm:text-3xl text-slate-200'>Additional Information</h2>
            <p className=' text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}

export default Analysis