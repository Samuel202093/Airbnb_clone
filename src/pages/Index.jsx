import React, { useEffect, useState }from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import axios from 'axios'
import useSWR from 'swr'


const fetcher = (url)=>axios.get(url).then((res)=>res.data)

const Index = () => {
let {data, isLoading, error} = useSWR("https://listing-api-c19z.onrender.com/data?info.location.city_like=", fetcher)
  

if (isLoading) {
  return <div class="loader"></div>
}

if (error) {
  return (
    <div className='absolute top-[40%] left-[20%] md:left-[38%] lg:top-[45%] lg:left-[45%] flex flex-col gap-2 text-slate-600'>
        <h1 className='text-xl font-semibold'>Poor Internet Connections</h1>
        <button className='flex transition-all delay-300 ease-in-out self-center py-1 px-3 font-semibold border-[1px] border-slate-600 rounded-md hover:bg-slate-600 hover:text-[#f2f2f0]' onClick={() => window.location.reload(true)}>Refresh</button>
    </div>
  )
}
 

  return (
    <div className='w-[95%] mx-auto'>
      <NavBar/>
      {/* Grid display section */}
       <div className='main-index-container-layout'>
         <Card data={data}/>
       </div>
    </div>
  )
}

export default Index
