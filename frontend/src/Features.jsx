import React from 'react'

const Features = () => {

    const features=[
        {"title":"Sentiment Breakdown",
            "description":"Get a detailed breakdown of positive, neutral and negative sentiments in your video's comments"
        },
        {"title":"Sentiment Summarizer",
            "description":"Get a detailed breakdown of positive, neutral and negative sentiments in your video's comments"
        },
        {"title":"Common Queries",
            "description":"Get a detailed breakdown of positive, neutral and negative sentiments in your video's comments"
        }
    ]

  return (
    <div className='mx-auto w-3/4 mt-8 py-4'>
       <h1 className='font-bold text-4xl mt-12'>Key Features</h1>
       <p className='font-thin text-lg mb-4'>Explore the powerful features that make our sentiment analysis tool stand out</p>
        <div className='flex flex-col md:flex-row space-x-4 justify-between'>
           {
            features.map((feature, index)=>(
            <div key={index} className='w-1/3 px-4 py-2 border border-[#2C3E50] rounded-xl'>
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