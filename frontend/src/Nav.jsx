import React from 'react'

export const Nav = () => {
  return (
    <div className='flex-col sm:flex md:flex-row w-full md:justify-between p-4 border-b-2 border-gray-300 h-fit'>
    
      <h1 className='font-bold'>Video Insights</h1>

      <ul className='flex font-semibold flex-row gap-4 lg:gap-8 text-sm  items-center'>

        <li >Features</li>
        <li>Contact</li>
        <li className='bg-blue-950 px-4 py-1  rounded-lg'>Analyze Video</li>
      </ul>
    </div>
  )
}
