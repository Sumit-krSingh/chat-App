import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const{setAuthUser} = useAuthContext();

    const login = async (username, password) =>{
        const success = handleInputsError(username,password);
        if(!success) return;
            setLoading(true);
        
        try {
            const res = await fetch("/api/auth/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password}),
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            console.log(data);
             localStorage.setItem("chat-user",JSON.stringify(data));
             setAuthUser(data)
             

            
        } catch (error) {
            console.log("error in login side",error.message);
            
            toast.error(error.message);
            
        }finally{
            setLoading(false)
        }
    }

    return{loading, login}
 
}

export default useLogin;

const handleInputsError = (username,password) =>{
    if(!username || !password){
        toast.error("fill all the details");
        return false;
    }
    if(password.length < 6 ){
        toast.error('password must be greater than 6 character')
        return false
      }
      return true

}