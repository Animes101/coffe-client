import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const Home = () => {

  const [users, setUsers]=useState([])

  // user delet function

  const handleDelete=id=>{

    
         Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((res) => res.json())
            .then((data) =>{
              if(data.success){

                const deletOne=users.filter((item)=> item._id !== id);

                setUsers(deletOne);
              }
            });
      }
    });
  }


  useEffect(()=>{

    fetch('http://localhost:3000/users')
    .then(res=> res.json())
    .then(data=> setUsers(data.data));


  },[])


  return (
    <div className='container mx-auto'>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className='text-4xl font-bold text-green-500'>Name</th>
                <th className='text-4xl font-bold text-green-500'>Password</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user)=>{
                return (
                  <tr>
                    <td className='text-gray-500 font-bold text-2xl'>{user.email}</td>
                    <th className='text-red-400 font-bold text-xl'>{user.password}</th>
                    <button className='text-lg text-green-50 bg-green-500 py-3 px-6 rounded-md mr-5'><Link to={`/userUpdate/${user._id}`}>Update</Link></button>
                    <button  onClick={()=> handleDelete(user._id)}  className='text-lg text-green-50 bg-green-500 py-3 px-6 rounded-md mr-5'>Delete</button>
                  </tr>
                )
              })}
             
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home