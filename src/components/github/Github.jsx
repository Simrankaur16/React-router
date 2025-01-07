import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

const Github = () => {

const data2 = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Simrankaur16')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })

    // }, [])
  return (
    <div className='text-center m-4 p-4 text-3xl text-white bg-gray-800'>
        
        Github {data2.login}
        <img src={data2.avatar_url} className='text-center' alt="Git picture " width={300} />
        
        </div>
  )
}

export default Github


export const gitInfoLoader = async() => {
   const res = await fetch('https://api.github.com/users/Simrankaur16')
   return res.json()
}