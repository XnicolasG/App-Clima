import React from 'react'
import { Link } from 'react-router-dom'

const NavBarOut = () => {
  return (
    <nav className='ContNav'>
        <div className='ContIcon'>
            <img className='Icon' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1645997109/Personal/1163661_ynyb9c.png" alt="." />
        </div>
            <div className='ContLink'>
                <Link className='links' to='/login/register'>Registro</Link>
                <Link className='links' to='/login/login'>Login</Link>
            </div>
        
    </nav>
  )
}

export default NavBarOut