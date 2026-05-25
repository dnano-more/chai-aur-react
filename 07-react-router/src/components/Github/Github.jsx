import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
  console.log(data)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/dnano-more')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 flex flex-col items-center gap-4'>
    <img className='rounded-full h-96' src={data.avatar_url} alt="Github profile pic"/> Github followers: {data.followers}
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/dnano-more')
  return response.json()
}