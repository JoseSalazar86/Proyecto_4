import React, { useContext, useEffect, useState } from 'react'
import { register } from '../config/Firebase'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab'

const RegisterForm = () => {

  const {user} = useContext(UserContext);

  const navigate = useNavigate()

  useEffect(() => {
      if(user) navigate ("/dashboard")
  }, [user])

  const onSubmit = async ({email,password},{setSubmitting, setErrors, resetForm }) => {
      try{
          await register({email,password})
          console.log("User logged in")
          resetForm()

      }catch (error) {
          if(error.code === "auth/invalid-credential")
              return setErrors({credentials:"Credenciales inválidas"})
          
      }
      finally {
          setSubmitting(false)
      }
      
  }

  const validationSchema = Yup.object().shape({
      email:Yup.string().trim().email('Email no válido').required("El campo email es requerido"),
      password:Yup.string().trim().min(6,"Mínimo 6 caracteres").required("El campo password es requerido")
  })
  return (
    <Box sx={{mt:"1rem",maxWidth:"400px",textAlign:"center"}}>
    <Avatar sx={{mx:"auto",bgcolor:"#111"}}>
        <LoginIcon/>
    </Avatar>
    <Typography
        variant='h5'
        component="h1"
    >Registro
    </Typography>
    <Formik
        initialValues={{email:'test@test.com',password:'123456'}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {
            ({ values, handleChange, handleSubmit, isSubmitting, handleBlur, errors, touched })=>(
            <Box 
                sx={{mt:1}}
                component={'form'}
                onSubmit={handleSubmit}>
                <TextField
                    type='text'
                    placeholder='email@email.com'
                    value={values.email}
                    onChange={handleChange}
                    name='email'
                    onBlur={handleBlur}
                    id='email'
                    label='Introduce el email'
                    fullWidth
                    sx={{mb:3}}
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                />
                
                <TextField
                    type='password'
                    placeholder='password'
                    value={values.password}
                    onChange={handleChange}
                    name='password'
                    onBlur={handleBlur}
                    id='password'
                    label='Introduce el password'
                    fullWidth
                    sx={{mb:3}}
                    error={errors.password && touched.password}
                    helperText={errors.password && touched.password && errors.password}
                />

                <LoadingButton
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    fullWidth
                    sx={{mb:3}}
                >
                    Registrarse
                </LoadingButton>
            
                <Button 
                    fullWidth
                    component={Link}
                    to={"/login"}
                    type='submit' 
                    disabled={isSubmitting}
                >¿Ya tienes cuenta? Inicia sesión
                </Button>

                {
                errors.credentials && <p>{errors.credentials}</p>
                }
            </Box>
            )
        } 
    </Formik>     
</Box>
  )
}

export default RegisterForm
