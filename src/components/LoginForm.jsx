import React, { useState } from 'react'

const LoginForm = () => {
  const [todo,setTodo] = useState({
    email:"",
    password:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email,password } = todo;

    // Validación de los campos
    if (!email.trim() || !password.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Oops",
        text: "Todos los campos son obligatorios",
      });
    }

    Swal.fire({
      icon: "success",
      title: "Login",
      text: "Iniciando Sesion.",
    });

    // Reiniciar el formulario
    setTodo({
      email: "",
      password:"",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]:value,
    });
  };
  const handleCancel = () =>{
    setTodo({
      email:"",
      password:""
    })
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>
              Email:
            </label>
            <input type="text" 
            className='form-control' 
            id='email' 
            name='email'
            value={todo.email}
            onClick={handleChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" 
            className='form-label'>
              Contraseña:
            </label>
            <input type="text" 
            className='form-control' 
            id='password' 
            name='password'
            value={todo.password} 
            onClick={handleChange}/>
          </div>
        </form>
        <button type='submit' className='btn btn-primary'>Aceptar</button>
        <button type='submit' className='btn btn-primary' onClick={handleCancel}>Cancelar</button>
    </div>
  )
}

export default LoginForm