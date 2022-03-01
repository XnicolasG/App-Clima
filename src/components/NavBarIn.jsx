import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAsync } from '../actions/LoginActions'

const NavBarIn = () => {
    const dispatch = useDispatch()
    const handleLogout = () =>{
      dispatch(logoutAsync())
    }
  return (
    <nav className='ContNav'>
        <div className='ContIcon'>
            <img className='Icon' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1645997109/Personal/1163661_ynyb9c.png" alt="." />
        </div>
            <div className='ContLink'>
                <Link className='links' to='/home'>Inicio</Link>
                <Link className='links'to='/login/login' onClick={()=>handleLogout()} >Salir</Link>
            </div>
        
    </nav>
  )
}

export default NavBarIn