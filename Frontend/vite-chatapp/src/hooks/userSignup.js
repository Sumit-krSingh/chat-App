import React from 'react'
import {useState} from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';


const userSignup = () => {

    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({fullName, username, password, confirmPassword, gender}) =>{
      const success = handleInputsError({fullName, username, password, confirmPassword, gender});
      if(!success) return;

      setLoading(false)
      try {
        const res = await fetch("/api/auth/signup", {
          method : "POST",
          headers : {"Content-Type":"application/json"},
          body: JSON.stringify({fullName, username, password, confirmPassword, gender})

        });
        const data = await res.json();
        if(data.error){
          throw new Error(data.error)
        };
        console.log(data)
        // set localstorage from database

        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
        
      } catch (error) {
        console.log("error in signup", error.message);
        toast.error(error.message);
        
      }finally{
        setLoading(false)
    }

    }
  return{loading, signup};
   
  
};

export default userSignup;

const handleInputsError = ({fullName, username, password, confirmPassword, gender}) =>{
  if(!fullName || !username || !password || !confirmPassword || !gender){

    toast.error('fill all the field')
    return false
  }
  if(password.length < 6 ){
    toast.error('password must be greater than 6 character')
    return false
  }
  if (password !== confirmPassword){
    toast.error('password not match')
    return false
  }
   return true;
}

