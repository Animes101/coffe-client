import React, { useContext } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { authContext } from '../context/AuthProveder'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const {createUserEmailOrPassword}=useContext(authContext)
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value;

        const userInfo={email,password }


        createUserEmailOrPassword(email,password)
        .then((result)=> {

          console.log(result)

          fetch('http://localhost:3000/users',{
          method:'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(userInfo),
        })
        .then(res=> res.json())
        .then(data=>{

          if(data.data.insertedId){

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login success fully ",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          }
        })
        })
        .catch(err=> console.log(err.message));




    }
  return (
    <div>

       <div>
        <div className="hero bg-base-200 min-h-screen">
           
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email"  name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button  type='submit' className="btn btn-neutral mt-4">|Register|</button>
                    </form>
                </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Register