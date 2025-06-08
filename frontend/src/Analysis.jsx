import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


const Analysis = () => {
  const [url,setUrl] = useState("")


  const formatUrl =(videoUrl)=>{
    if(videoUrl.includes("ttps://www.youtube.com/watch"))
    {
      console.log('true')
    }
      else console.log("false")
    }

  return (
    <div className=' bg-[#101323] h-screen p-4 pb-8'>
      <h1 className='font-bold text-4xl'>Analysis</h1>

      <div className='w-full justify-center'>
        <input 
          className="w-3/4 sm:w-1/2  flex py-2 px-4 focus:outline-none text-slate-600 rounded-full mx-auto"
          type='text'
          placeholder='Enter YouTube video URL'
          onChange={(e)=>setUrl(e.target.value)}
        />
      </div>

      <button
      onClick={()=>formatUrl(url)}
      >
        Click here
      </button>
      <div className='w-1/2 mx-auto'>
          <BarChart
          borderRadius={10}
            xAxis={[
              {
                id: 'barCategories',
                data: ['bar A', 'bar B', 'bar C'],
              },
            ]}
            series={[
              {
                data: [2, 5, 3],
              },
            ]}
            height={200}
          />
      </div>

    </div>
  )
}

export default Analysis