import React from 'react'
import { ButtonComponent } from './components/ui/ButtonComponent'

const Hero = () => {
  return (
    <div className='mx-auto bg-gradient-to-b from-sky-950 via-blue-900 to blue-950 shadow-xl w-3/4 text-center py-32 px-16 mt-8 rounded-xl'>
        <h1 className='font-bold text-7xl  my-4'>Understand Your Audience</h1>
        <p className='text-lg font-thin my-8'>Gain valuable insights into your YouTube video's performance by analyzing viewer sentiment. Discover what your audience loves and needs improvement.
            <br/>
            Just enter the link and hit analyze
        </p>
        <ButtonComponent text={"Analyze"}/>
    </div>
  )
}

export default Hero