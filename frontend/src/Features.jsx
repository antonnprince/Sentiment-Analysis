import React from 'react'

const Features = () => {
const features = [
    {
        "title": "Sentiment Breakdown",
        "description": "Get a detailed breakdown of positive, neutral, and negative sentiments in your video's comments. Visualize sentiment distribution using charts, track changes over time, and identify sentiment spikes during key moments of your video."
    },
    {
        "title": "Sentiment Summarizer",
        "description": "Automatically generate concise summaries of the overall viewer sentiment. Understand the key emotional tone of your audience at a glance and get short, paragraph-level takeaways representing collective opinions."
    },
    {
        "title": "Common Queries",
        "description": "Identify frequently asked questions or recurring topics from your video's comments. Understand what your viewers are curious about, what confuses them, or what they expect in future videos—ideal for content planning and improving engagement."
    }
];


  return (
    <div className='mx-auto w-3/4 mt-8 py-4'>
       <h1 className='font-bold text-3xl md:text-4xl mt-4 md:mt-12'>Key Features</h1>
       <p className='font-thin text-sm md:text-lg mb-4'>Explore the powerful features that make our sentiment analysis tool stand out</p>
        <div className='flex flex-col md:flex-row space-y-2  m-0  space-x-4 justify-between'>
           {
            features.map((feature, index)=>(
                <div key={index} className='w-full sm:w-1/3 m-0 px-4 py-2 border border-[#2C3E50] rounded-xl'>
                    <h1 className='text-lg font-bold'>{feature.title}</h1>
                    <p className='text-sm text-slate-400'>{feature.description}</p>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Features