import React, { useEffect, useState }from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import axios from 'axios'

const Index = () => {

  const[data, setData] = useState([])

  const handleFetch = ()=>{
    axios.get("https://listing-api-c19z.onrender.com/data?info.location.city_like=")
    .then((res)=>{
      setData(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    handleFetch()
  },[])
 

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
