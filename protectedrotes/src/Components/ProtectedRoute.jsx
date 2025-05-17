import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
const ProtectedRoute = () => {
    const users = useSelector((state) => {
       return state.userInfor.user;
     });
     console.log('data', users);
    if(!users){
       return <Navigate to="/login" replace/>
    }

     return <Outlet/>
   

}

export default ProtectedRoute