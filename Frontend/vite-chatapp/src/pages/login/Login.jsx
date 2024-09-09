import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-blue-400'>
          Login
        <span className='text-red-400'> ChatApp</span>
        </h1>

        <form >
          <div>
           <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
           </label>
           <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>
          <div>
           <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
           </label>
           <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>

          <Link to ={"/signup"} className="text-lg text-pink-400 hover:underline hover:text-pink-600 mt-3 inline-block">{"don't"} Have a account ?</Link> 

          <div>
            <button className='btn btn-block mt-2 btn-sm'>Login</button>
          </div>
        </form>
      </div>

    </div>
  ) 
}

export default Login
