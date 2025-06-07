import React from 'react'
import { ButtonComponent } from './components/ui/ButtonComponent'

const Hero = () => {
  return (
    <div className='mx-auto bg-gradient-to-b from-sky-950
     via-blue-900 to blue-950 shadow-xl
     px-4
     w-3/4 text-center py-32 mt-8 rounded-xl'>
        <h1 className='font-bold text-center text-3xl sm:text-5xl lg:text-7xl text-shadow-lg my-4'>Understand Your Audience</h1>
        <p className='text-sm md:text-lg font-thin my-8 '>Gain valuable insights into your YouTube video's performance by analyzing viewer sentiment. Discover what your audience loves and needs improvement.
            <br/>
            Just enter the link and hit <span className='text-sky-400 font-semibold'>analyze</span>
        </p>
        <ButtonComponent text={"Analyze"} link={"/analysis"}/>
    </div>
  )
}

export default Hero