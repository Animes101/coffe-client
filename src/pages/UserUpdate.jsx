import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserUpdate = () => {
    const {id}=useParams();


    useEffect(()=>{


        fetch(`http://localhost:3000/users/${id}`)
        .then(res=> res.json())
        .then(data=>console.log(data))


    },[id])
  return (
    <div>


        <h1>ehllo user update</h1>
    </div>
  )
}

export default UserUpdate;