import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({loginStatus,children}) => {
  return loginStatus ? children : <Navigate to='/login' />
}

export default PrivateRoutes