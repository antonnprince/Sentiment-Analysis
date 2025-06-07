import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Analysis = () => {
const [results, setResults] = useState({})
const location = useLocation()
const {analysis} = location.state || {}
  return (
    <div className='mx-4 my-8 flex flex-row space-x-4'>
     
    <Card className="bg-black text-white w-1/2 ">
        <CardHeader>
            <CardTitle
            className="text-left text-3xl font-extrabold"
            >Sentiment Analysis</CardTitle>
        </CardHeader>
            
        <CardContent>
        
        <div className='flex flex-row'>
        <Label className="text-2xl font-normal">Agree</Label>
        <h1 className='text-white text-xl font-bold ml-auto'>{Math.round(analysis.agree / analysis.total * 100)}%</h1>
        </div>
        <Progress value={analysis.agree}  className="bg-[#44403C] mb-4"/>
        
        <div className='flex flex-row'>
        <Label className="text-2xl font-normal">Neutral</Label>
        <h1 className='text-white text-xl font-bold ml-auto'>{Math.round(analysis.neutral / analysis.total * 100)}%</h1>
        </div>
        <Progress value={analysis.neutral}  className="bg-[#44403C] mb-4"/>

        <div className='flex flex-row'>
        <Label className="text-2xl font-normal">Disagree</Label>
        <h1 className='text-white text-xl font-bold ml-auto'>{Math.round(analysis.disagree / analysis.total * 100)}%</h1>
        </div>
        <Progress value={analysis.disagree}  className="bg-[#44403C] mb-4"/>

        </CardContent>
            
    </Card> 


      <Card className="bg-black text-white  w-1/2 mx-8">
        <CardContent>
        <CardHeader className="text-2xl font-normal mb-4">
        Total Comments
        <br/>
        <h1 className='text-5xl font-bold'>{analysis.total}</h1>  
        </CardHeader>          

      <div className='flex flex-row space-x-64 justify-center'>
        
        <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-extrabold' >{analysis.agree}</h2>
        <h1 className='text-lg font-semibold' >Agree</h1>
        </div>

        <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-extrabold' >{analysis.neutral}</h2>
        <h1 className='text-lg font-semibold' >Neutral</h1>
        </div>

        <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-extrabold' >{analysis.disagree}</h2>
        <h1 className='text-lg font-semibold' >Disagree</h1>
        </div>

      </div>
        </CardContent>
            
      </Card> 
    </div>
  )
}

export default Analysis