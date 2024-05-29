import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/Harsh639703')
    //      .then(response =>response.json())
    //      .then(data=>{
    //         console.log(data);
    //         setData(data)
    //      })
    // },[])
    return (
        <div className='bg-gray-700 text-white m-4 p-3 text-3xl text-center'>Github Public Repositories : {data.public_repos}  
        <img src={data.avatar_url} alt="Git pic" width={200}  />
        </div>

        
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Harsh639703')
    return response.json()
}