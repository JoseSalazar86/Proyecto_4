import React, { useContext, useEffect } from 'react';
import { login } from '../config/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const LoginForm = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  const onSubmit = async ({ email, password }, { setSubmitting, setErrors, resetForm }) => {
    try {
      await login({ email, password });
      console.log('User logged in');
      resetForm();
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        return setErrors({ credentials: 'Credenciales inválidas' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email('Email no válido').required('El campo email es requerido'),
    password: Yup.string().trim().min(6, 'Mínimo 6 caracteres').required('El campo password es requerido'),
  });

  return (
    <Box>
      <Formik
        initialValues={{ email: 'test@test.com', password: '123456' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, handleBlur, errors, touched }) => (
          <Box component="form" onSubmit={handleSubmit}>
            {/* Campo Email */}
            <TextField
              type="text"
              placeholder="email@email.com"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
              id="email"
              label="Introduce el email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />

            {/* Campo Password */}
            <TextField
              type="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
              name="password"
              onBlur={handleBlur}
              id="password"
              label="Introduce el password"
              error={errors.password && touched.password}
              helperText={errors.password && touched.password && errors.password}
            />

            {/* Botón de Acceso */}
            <LoadingButton
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Acceder
            </LoadingButton>

            {/* Botón de Registro */}
            <Button component={Link} to="/Register" type="submit" disabled={isSubmitting}>
              ¿No tienes cuenta? Regístrate
            </Button>

            {/* Error de Credenciales */}
            {errors.credentials && <p>{errors.credentials}</p>}
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
