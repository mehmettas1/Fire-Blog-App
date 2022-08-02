import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRouter = () => {
    const currentUser = true
  return currentUser ? <Outlet/> : <Navigate to="/Login"/>
}

export default PrivateRouter