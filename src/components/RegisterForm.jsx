import React from 'react'

const RegisterForm = () => {
  return (
    <div>
        <form action="">
        <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email:</label>
            <input type="text" className='form-control' id='email' name='' />
        </div>
        <div className='mb-3'>
            <label htmlFor="password" className='form-label'>Contraseña:</label>
            <input type="text" className='form-control' id='password' name='password' />
        </div>
        <div className='mb-3'>
            <label htmlFor="repeat-password" className='form-label'>Repetir Contraseña:</label>
            <input type="text" className='form-control' id='repeat-password' name='repeat-password' />
        </div>
        </form>
        <button type='submit' className='btn btn-primary'>Aceptar</button>
        <button type='submit' className='btn btn-primary'>Cancelar</button>
    </div>
  )
}

export default RegisterForm
