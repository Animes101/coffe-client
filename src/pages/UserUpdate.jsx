import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const UserUpdate = () => {
    const {id}=useParams();
    const navigate=useNavigate();


    useEffect(()=>{


        fetch(`http://localhost:3000/users/${id}`)
        .then(res=> res.json())
        .then(data=>console.log(data))


    },[id])


    const handleSubmit=(e)=>{

      e.preventDefault();


      const email=e.target.email.value;

       fetch(`http://localhost:3000/userUpdate/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email}),
            })
            .then((res) => res.json())
            .then((data) =>{

              if(data.data.modifiedCount>0){
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Update data successfully ",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')

              }
            });


    }

  return (
    <div>


        <form onSubmit={handleSubmit} action="" className='flex justify-center items-center flex-col space-y-6'>
         <h1 className='mt-12 font-bold text-2xl'>Update Email Adress</h1>

          <input type="email" placeholder="gmail Update" className="input input-success" name='email'  />
          <button type="submit" className="bg-green-300 py-3 px-6 rounded-md cursor-pointer">Update Gamil</button>

        </form>
        
    </div>
  )
}

export default UserUpdate;