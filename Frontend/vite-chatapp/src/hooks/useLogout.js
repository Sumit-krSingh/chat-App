import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }

            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data);

            localStorage.removeItem("chat-user");
            setAuthUser(null)


        } catch (error) {
            console.log("error in signup", error.message);
            toast.error(error.message);

        } finally {
            setLoading(false)
        }
    }

    return {loading, logout};
}

export default useLogout;