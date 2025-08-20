import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import CoffeCard from '../components/CoffeCard';


const Coffe = () => {

  const [coffes, setCoffes]=useState([])

  useEffect(()=>{

    fetch('http://localhost:3000/coffe')
    .then((res)=> res.json())
    .then(data=>setCoffes(data.data))
    

  },[])

  const remove=(id)=>{

    const deleteResult = coffes.filter(item=> item._id !==id)

    setCoffes(deleteResult);


  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-3xl font-bold mt-5'>coffes all</h1>
      <button className='w-[200px] bg-green-300 mx-auto block rounded-md my-7'><Link to={'/cofeadd'} >Add New Coffe</Link></button>
      <div className='grid md:grid-cols-3 gap-4 '>  
          {coffes.map((coffe)=><CoffeCard  
          key={coffe._id} remove={remove} coffe={coffe} />)}
      </div>
    </div>
  )
}

export default Coffe