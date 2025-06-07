import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Analysis = () => {
const [results, setResults] = useState({})
const location = useLocation()
const {analysis} = location.state || {}

  return (
    <div className='mx-4 my-8 flex flex-row space-x-4'>
      Analysis page
    </div>
  )
}

export default Analysis