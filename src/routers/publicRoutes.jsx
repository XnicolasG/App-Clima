import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({loginStatus,children}) => {
  return !loginStatus ? children : <Navigate to='/home'/>
}

export default PublicRoutes