import React from "react";
import { Avatar, Box, TextField, Button} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup"; // Importamos Yup para validaciones



const FormularioContacto = () => {
 // Validaciones con Yup
 const validationSchema = Yup.object({
  nombre: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: Yup.string()
    .required("El apellido es obligatorio")
    .min(2, "El apellido debe tener al menos 2 caracteres"),
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),
  asunto: Yup.string().required("Selecciona un asunto"),
  cajaTexto: Yup.string()
    .required("La consulta es obligatoria")
    .min(10, "La consulta debe tener al menos 10 caracteres"),
});

// Acción al enviar el formulario
const onSubmit = (values) => {
  console.log("Datos enviados:", values);
};

  return (
    <>
    <h1>Contacto</h1>
    <Box className="form-container"> 
   
    {/* Formulario con Formik */}
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
        <Box
          component={"form"}
          onSubmit={handleSubmit}
         
        >
          {/* Campo Nombre */}
          <TextField
            type="text"
            placeholder="Nombre"
            value={values.nombre}
            onChange={handleChange}
            name="nombre"
            onBlur={handleBlur}
            id="nombre"
            label="Introduce tu Nombre"
            fullWidth
            error={Boolean(errors.nombre && touched.nombre)}
            helperText={touched.nombre && errors.nombre}
          />

          {/* Campo Apellido */}
          <TextField
            type="text"
            placeholder="Apellidos"
            value={values.apellido}
            onChange={handleChange}
            name="apellido"
            onBlur={handleBlur}
            id="apellido"
            label="Introduce tus Apellidos"
            fullWidth
            error={Boolean(errors.apellido && touched.apellido)}
            helperText={touched.apellido && errors.apellido}
          />

          {/* Campo Email */}
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
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
          />

          {/* Campo Asunto */}
          <TextField
            select
            label="Selecciona un Asunto"
            name="asunto"
            value={values.asunto}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            error={Boolean(errors.asunto && touched.asunto)}
            helperText={touched.asunto && errors.asunto}
          >
            <option value="">Selecciona un asunto</option>
            <option value="otros">Otros</option>
            <option value="guardar_perfil">Guardar perfil</option>
            <option value="pagina_busqueda">Página de búsqueda</option>
            <option value="problema_itinerario">
              Problemas al cargar tu itinerario
            </option>
            <option value="problema_inicio_sesion">
              Problemas al iniciar sesión
            </option>
            <option value="olvido_contrasena">Olvidó su contraseña</option>
          </TextField>

          {/* Campo Consulta */}
          <TextField
            multiline
            rows={4}
            placeholder="Describe tu consulta"
            value={values.cajaTexto}
            onChange={handleChange}
            name="cajaTexto"
            onBlur={handleBlur}
            id="cajaTexto"
            label="Consulta"
            fullWidth
            error={Boolean(errors.cajaTexto && touched.cajaTexto)}
            helperText={touched.cajaTexto && errors.cajaTexto}
          />

          {/* Botón Enviar */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
          >
            Enviar
          </Button>
        </Box>
      )}
    </Formik>
  </Box>
  </>
  )
}

export default FormularioContacto;
