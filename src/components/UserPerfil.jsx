import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserPerfil = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        dni: '',
        age: '',
        email: '',
        changePassword: false,
        hobbies: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Requerido'),
        lastName: Yup.string().required('Requerido'),
        dni: Yup.string().required('Requerido'),
        age: Yup.number().required('Requerido').positive().integer(),
        email: Yup.string().email('Email inválido').required('Requerido'),
        hobbies: Yup.string().required('Selecciona un hobby'),
    });

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange }) => (
                <Form>
                    <label>
                        Nombre:
                        <Field type="text" name="firstName" />
                        <ErrorMessage name="firstName" component="div" />
                    </label>
                    <label>
                        Apellido:
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="div" />
                    </label>
                    <label>
                        DNI:
                        <Field type="text" name="dni" />
                        <ErrorMessage name="dni" component="div" />
                    </label>
                    <label>
                        Edad:
                        <Field type="number" name="age" />
                        <ErrorMessage name="age" component="div" />
                    </label>
                    <label>
                        Email:
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </label>
                    <label>
                        Cambiar Contraseña:
                        <Field type="checkbox" name="changePassword" />
                    </label>
                    <fieldset>
                        <legend>Hobbies:</legend>
                        <label>
                            <Field type="radio" name="hobbies" value="Deportes" />
                            Deportes
                        </label>
                        <label>
                            <Field type="radio" name="hobbies" value="Música" />
                            Música
                        </label>
                        <label>
                            <Field type="radio" name="hobbies" value="Viajar" />
                            Viajar
                        </label>
                        <label>
                            <Field type="radio" name="hobbies" value="Leer" />
                            Leer
                        </label>
                        <ErrorMessage name="hobbies" component="div" />
                    </fieldset>
                    <button type="submit">Enviar</button>
                </Form>
            )}
        </Formik>
    );
};

export default UserPerfil;