"use client"
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect } from 'react'
import { UserDetailContext } from './_context/UserDetailContext';

function Provider({children}) {

    const {user} = useUser();
    const [userDetail, setUserDetail] = useState([]);

    useEffect(() =>{
        user && saveUserInfo();
    },[user])

    const saveUserInfo = async () => {
        const result = await axios.post('/api/user', {
            user: user
        }
        );
        setUserDetail(result?.data);
        console.log(result.data);
    }


  return (
    <div>
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
        {children}
        </UserDetailContext.Provider>
    </div>
  )
}

export default Provider
