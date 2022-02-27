import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForms'
import {useDispatch} from 'react-redux'
import { ManualLogin, loginGoogle } from '../actions/LoginActions'

const Login = () => {
    const dispatch = useDispatch()
    const [ formValue, handleInputChange, reset ] = useForm({
        Email: '',
        Password: ''
    })
    const {Email, Password} = formValue;

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(ManualLogin(Email,Password));
        // reset()
    }
    const handleGoogle = () =>{
        dispatch(loginGoogle())
    }

  return (
    <div className='MainContLog'>
            <form className='Formulario' onSubmit={handleSubmit}>
                <h4 className='Titulo'>Iniciar Sesion</h4>
                <input className='inputs' name='Email' /* value={Email} */ onChange={handleInputChange} placeholder='Ingrese su correo' type="email" />
                <input className='inputs' name='Password' /* value={Password} */ onChange={handleInputChange} placeholder='Ingrese su contraseña' type="password" />
                <div className='contBtn'>
                <button className='btn'>Ingresar</button>
                <Link className='linkto' to='/'>Registro</Link>
                <p className='TitGoo'>Ingresar con mi cuenta Google</p>
                <button type='submit' className='btn-google'onClick={handleGoogle} ><img className='IconGoogle' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1645936851/Personal/281764_jiclok.png" alt="" /></button>
                </div>
            </form>
        </div>
  )
}

export default Login