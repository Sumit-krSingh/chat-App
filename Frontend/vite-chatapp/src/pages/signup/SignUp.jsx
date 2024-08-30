import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-2xl font-semibold text-center text-blue-400'>
        SignUp
      <span className='text-red-400'> ChatApp</span>
      </h1>

      <form >
      <div>
         <label className='label p-2'>
          <span className='text-base label-text'>Full-Name</span>
         </label>
         <input type="text" placeholder='Sumit Singh' className='w-full input input-bordered h-10' />
        </div>
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
        <div>
         <label className='label p-2'>
          <span className='text-base label-text'> Confirm Password</span>
         </label>
         <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' />
        </div>

        <a href='#' className="text-lg text-pink-400 hover:underline hover:text-pink-600 mt-3 inline-block">Already have account ?</a> 

        <div>
          <button className='btn btn-block mt-2 btn-sm'>SignUp</button>
        </div>
      </form>
    </div>

  </div>
  )
}

export default SignUp