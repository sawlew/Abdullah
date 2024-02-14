import React from 'react'
import { Link } from 'react-router-dom'

const Lost = () => {
  return (
    <div className='bg-[#FF5349] flex justify-center items-center h-full'>
        <div>
            <p className='text-blue-950 text-9xl font-bold'>LOST?</p>
            <p className='text-center'>Go back
                <Link to={"/"} className='font-bold text-green-500 hover:text-purple-950'> Home</Link>
            </p>
        </div>

    </div>
  )
}

export default Lost