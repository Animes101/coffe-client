import React from 'react'

const Login = () => {


    const handleSubmit=(e)=>{
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value;

        const userInfo={email,password }

        console.log(userInfo)

    }
  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
           
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password"  name='password'/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='' className="btn btn-neutral mt-4">Login</button>

                    </form>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Login