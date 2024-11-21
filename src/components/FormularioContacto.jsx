import React, { useState } from "react";
import Swal from "sweetalert2";

const FormularioContacto = () => {
  const [todo, setTodo] = useState({
    nombre: "",
    apellido: "",
    email: "",
    asunto: "",
    usuario: false,
    cajaTexto: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    apellido: "",
    email: "",
    asunto: "",
    cajaTexto: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, email, asunto, cajaTexto } = todo;

    // Validación de los campos
    if (nombre.trim().length < 3) {
      setErrores((prev) => ({ ...prev, nombre: "El nombre debe tener al menos 3 caracteres." }));
      return;
    }

    if (apellido.trim().length < 3) {
      setErrores((prev) => ({ ...prev, apellido: "El apellido debe tener al menos 3 caracteres." }));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrores((prev) => ({ ...prev, email: "Por favor, ingresa un email válido." }));
      return;
    }

    if (asunto === "") {
      setErrores((prev) => ({ ...prev, asunto: "Por favor, selecciona un asunto." }));
      return;
    }

    if (cajaTexto.trim().length === 0) {
      setErrores((prev) => ({ ...prev, cajaTexto: "Por favor, escribe tu consulta en el campo de texto." }));
      return;
    }

    // Mensaje de éxito
    Swal.fire({
      icon: "success",
      title: "Formulario enviado",
      text: "Gracias por tu consulta. Te responderemos pronto.",
    });

    // Reiniciar el formulario
    setTodo({
      nombre: "",
      apellido: "",
      email: "",
      asunto: "",
      usuario: false,
      cajaTexto: "",
    });

    setErrores({});
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validar individualmente cada campo
    if (name === "nombre" && value.trim().length < 3) {
      setErrores((prev) => ({ ...prev, nombre: "El nombre debe tener al menos 3 caracteres." }));
    } else if (name === "apellido" && value.trim().length < 3) {
      setErrores((prev) => ({ ...prev, apellido: "El apellido debe tener al menos 3 caracteres." }));
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrores((prev) => ({ ...prev, email: "Por favor, ingresa un email válido." }));
    } else if (name === "asunto" && value === "") {
      setErrores((prev) => ({ ...prev, asunto: "Por favor, selecciona un asunto." }));
    } else if (name === "cajaTexto" && value.trim().length === 0) {
      setErrores((prev) => ({ ...prev, cajaTexto: "Por favor, escribe tu consulta en el campo de texto." }));
    } else {
      // Limpiar error si el campo es válido
      setErrores((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={todo.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.nombre && <p className="text-danger">{errores.nombre}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellidos:
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={todo.apellido}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.apellido && <p className="text-danger">{errores.apellido}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={todo.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.email && <p className="text-danger">{errores.email}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">
            Asunto:
          </label>
          <select
            className="form-select"
            name="asunto"
            id="asunto"
            value={todo.asunto}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Selecciona un asunto</option>
            <option value="otros">Otros</option>
            <option value="guardar_perfil">Guardar perfil</option>
            <option value="pagina_busqueda">Página de búsqueda</option>
            <option value="problema_itinerario">Problemas al cargar tu itinerario</option>
            <option value="problema_inicio_sesion">Problemas al iniciar sesión</option>
            <option value="olvido_contrasena">Olvidó su contraseña</option>
          </select>
          {errores.asunto && <p className="text-danger">{errores.asunto}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="cajaTexto" className="form-label">
            Indícanos tu consulta:
          </label>
          <textarea
            className="form-control"
            name="cajaTexto"
            id="cajaTexto"
            value={todo.cajaTexto}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errores.cajaTexto && <p className="text-danger">{errores.cajaTexto}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;
