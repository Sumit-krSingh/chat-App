import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import userSignup from '../../hooks/userSignup'


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
  });
  const {loading, signup} = userSignup();
  

  const handleCheckboxChange =(gender) =>{
    setInputs({
      ...inputs,
      gender
    })
    
  };
  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(inputs);

    // call the signup hook for connecting mongodb and registration in database

    await signup(inputs)
    
  };
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-2xl font-semibold text-center text-blue-400'>
        SignUp
      <span className='text-red-400'> ChatApp</span>
      </h1>

      <form onSubmit={handleSubmit} >
      <div>
         <label className='label p-2'>
          <span className='text-base label-text'>Full-Name</span>
         </label>
         <input type="text" placeholder='Sumit Singh' className='w-full input input-bordered h-10' 
         value={inputs.fullName} onChange={(e) =>setInputs({...inputs, fullName:e.target.value})}
         />
        </div>
        <div>
         <label className='label p-2'>
          <span className='text-base label-text'>Username</span>
         </label>
         <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
         value={inputs.username} onChange={(e) =>setInputs({...inputs,username: e.target.value})}
         />
        </div>
        <div>
         <label className='label p-2'>
          <span className='text-base label-text'>Password</span>
         </label>
         <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' 
         value={inputs.password} onChange={(e) =>setInputs({...inputs, password:e.target.value})}
         />
        </div>
        <div>
         <label className='label p-2'>
          <span className='text-base label-text'> Confirm Password</span>
         </label>
         <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' 
         value={inputs.confirmPassword} onChange={(e) =>setInputs({...inputs, confirmPassword:e.target.value})}
         />
        </div>

        {/*gendercheck box page code  */}

        <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender = {inputs.gender}/>

        <Link to ={"/login"} className="text-lg text-pink-400 hover:underline hover:text-pink-600 mt-3 inline-block">Already have account ?</Link> 

        <div>
          <button className='btn btn-block mt-2 btn-sm' disabled ={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Signup"}
          </button>
        </div>
      </form>
    </div>

  </div>
  )
}

export default SignUp