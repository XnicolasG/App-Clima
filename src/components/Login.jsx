import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginEmailPassword, loginGoogle } from '../actions/LoginActions'

const Login = ({login}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = user;
    const handleInput = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        })

    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password));
        console.log(login);
        navigate('/')
        // reset()
    }
    const handleGoogle = () => {
        dispatch(loginGoogle())
        navigate('/')
    }

    return (
        <div className='MainContLog'>
            <form className='Formulario' onSubmit={handleSubmit}>
                <h4 className='Titulo'>Iniciar Sesion</h4>
                <input className='inputs' name='email' value={email} onChange={handleInput} placeholder='Ingrese su correo' type="email" />
                <input className='inputs' name='password' value={password} onChange={handleInput} placeholder='Ingrese su contraseña' type="password" />
                <div className='contBtn'>
                    <button type='submit' className='btn'>Ingresar</button>
                    <Link className='linkto' to='/login/register'>Registro</Link>
                    <p className='TitGoo'>Ingresar con mi cuenta Google</p>
                    <button type='submit' className='btn-google' onClick={handleGoogle} ><img className='IconGoogle' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1645936851/Personal/281764_jiclok.png" alt="" /></button>
                </div>
            </form>
        </div>
    )
}

export default Login