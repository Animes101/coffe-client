import React from 'react'
import { useNavigate, useParams } from "react-router-dom";


const Update = () => {


    const {id}=useParams()
    const navigate=useNavigate();



  const handleSubmit = (e) => {
      e.preventDefault();

      const coffeName = e.target.coffeName.value;
      const price = e.target.prices.value;

      const update={coffeName, price}

      
       fetch(`http://localhost:3000/coffeUpdate/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(update),
            })
            .then((res) => res.json())
            .then((data) =>{

              if(data.data.modifiedCount>0){
                navigate('/coffe')
              }

              
            });

    };


  return (
    <form onSubmit={handleSubmit}  className='flex flex-col justify-center items-center space-y-10'>
        <h1 className='text-2xl font-bold space-y-10'>Update Coffe</h1>
        <input className=' border outline outline-indigo-600 border-green-200'  placeholder='Coffe Name' type="text" name="coffeName" id="coffeName" />
        <input className=' border outline outline-indigo-600 border-green-200'  placeholder='Price Coffe' type="number" name="prices" id="prices" />
        <button  className='bg-green-500 px-6 py-3 rounded-sm' type='submit'>Submit</button>
    </form>
  )
}

export default Update