import React from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const FormularioContacto = () => {
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .required("El nombre es obligatorio")
      .min(3, "El nombre debe tener al menos 3 caracteres"),
    apellido: Yup.string()
      .required("El apellido es obligatorio")
      .min(4, "El apellido debe tener al menos 4 caracteres"),
    email: Yup.string()
      .email("Debe ser un email válido")
      .required("El email es obligatorio"),
    asunto: Yup.string().required("Selecciona un asunto"),
    cajaTexto: Yup.string()
      .required("La consulta es obligatoria")
      .min(10, "La consulta debe tener al menos 10 caracteres"),
  });

  const onSubmit = (values) => {
    console.log("Datos enviados:", values);
  };

  return (
    <Box className="form__container">
      <h1>Formulario de Contacto</h1>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          asunto: "",
          cajaTexto: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Box component="form" onSubmit={handleSubmit} className="form-box">
            <TextField
              label="Nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.nombre && touched.nombre)}
              helperText={touched.nombre && errors.nombre}
              className="form-field"
            />
            <TextField
              label="Apellido"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.apellido && touched.apellido)}
              helperText={touched.apellido && errors.apellido}
              className="form-field"
            />
            <TextField
              label="Correo Electrónico"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.email && touched.email)}
              helperText={touched.email && errors.email}
              className="form-field"
            />
            <TextField
              select
              label="Asunto"
              name="asunto"
              value={values.asunto}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.asunto && touched.asunto)}
              helperText={touched.asunto && errors.asunto}
              className="form-field"
            >
              <MenuItem value="">Selecciona un asunto</MenuItem>
              <MenuItem value="otros">Otros</MenuItem>
              <MenuItem value="guardar_perfil">Guardar perfil</MenuItem>
              <MenuItem value="pagina_busqueda">Página de búsqueda</MenuItem>
              <MenuItem value="problema_itinerario">
                Problemas al cargar tu itinerario
              </MenuItem>
              <MenuItem value="problema_inicio_sesion">
                Problemas al iniciar sesión
              </MenuItem>
              <MenuItem value="olvido_contrasena">Olvidó su contraseña</MenuItem>
            </TextField>
            <TextField
              label="Consulta"
              name="cajaTexto"
              value={values.cajaTexto}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline
              rows={4}
              error={Boolean(errors.cajaTexto && touched.cajaTexto)}
              helperText={touched.cajaTexto && errors.cajaTexto}
              className="form-field"
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              className="form-button"
            >
              Enviar
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default FormularioContacto;
