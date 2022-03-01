import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerAsync } from '../actions/registerActions'
import { useForm } from '../hooks/useForms'

const SingIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ formValue, handleInputChange, reset ] = useForm({
        name:'',
        email:'',
        password1: '',
        password2: ''
    })
    const {name, email, password1, password2} = formValue;

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(registerAsync(email,password1,name ))
        navigate('/')
        reset()
    }
    
    return (
        <div className='MainCont'>
            <form className='Formulario' onSubmit={handleSubmit} >
                <h4 className='Titulo'>Registrarse</h4>
                <input className='inputs' name='name' value={name} onChange={handleInputChange} placeholder='Ingrese su nombre' type="text" />
                <input className='inputs' name='email' value={email} onChange={handleInputChange} placeholder='Ingrese su correo' type="email" />
                <input className='inputs' name='password1' value={password1} onChange={handleInputChange} placeholder='Ingrese una contraseña' type="password" />
                <input className='inputs' name='password2' value={password2} onChange={handleInputChange} placeholder='Repita la contraseña' type="password" />
                <div className='contBtn'>
                <button className='btn'>Registrarse</button>
                <Link className='linkto' to='/login'>Log In</Link>
                </div>
            </form>
        </div>
    )
}

export default SingIn