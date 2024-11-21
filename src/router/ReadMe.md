# Plataforma de Planificación y Organización de Viajes

# Entrega 1

## 1. Idea de la Aplicación

La aplicación propuesta es una plataforma de planificación y organización de viajes que permite a los usuarios crear itinerarios de vacaciones completamente personalizados y visualmente estructurados. Su principal objetivo es facilitar la organización de viajes, permitiendo que los usuarios seleccionen destinos, actividades, gestionen sus horarios y presupuesto, y compartan el itinerario con amigos o familiares para una planificación colaborativa.

A diferencia de otras aplicaciones que simplemente muestran mapas o proporcionan itinerarios genéricos, nuestra aplicación proporciona una experiencia más flexible y personalizada, lo que permite agregar recomendaciones, notas, detalles específicos sobre cada actividad y las preferencias personales de cada viajero.

Los usuarios podrán, en un solo lugar, gestionar todo lo relacionado con su viaje: desde la selección de destinos hasta la visualización de actividades diarias, el control del presupuesto y la colaboración con otros usuarios en tiempo real. Además, la aplicación será intuitiva y fácil de usar, diseñada para viajeros que buscan organizarse sin la necesidad de herramientas complejas.

## 2. Audiencia Objetivo

La aplicación está diseñada para cualquier persona que quiera planificar sus vacaciones de forma ordenada, desde viajeros solitarios hasta grupos de amigos o familias. Está especialmente dirigida a:

- **Viajeros individuales** que buscan tener un itinerario organizado y detallado de su viaje.
- **Grupos de amigos o familias** que necesitan una plataforma colaborativa para coordinar actividades y ajustar los planes de manera conjunta.
- **Turistas frecuentes** que desean personalizar y organizar sus viajes con anticipación.
- **Viajeros de negocios** que necesiten coordinar viajes de trabajo con múltiples reuniones y actividades en diferentes ubicaciones.

Los usuarios se beneficiarán al poder gestionar todos los aspectos de su viaje desde un solo lugar, ahorrar tiempo organizando su itinerario, mantener el control sobre el presupuesto y asegurarse de que todo el grupo esté al tanto de los cambios en el plan.

## 3. Análisis de Mercado

En el mercado existen varias aplicaciones de planificación de viajes, pero la mayoría de ellas tienen limitaciones o carecen de ciertas funcionalidades. Algunas de las aplicaciones más populares incluyen:

- **TripIt**: Permite crear itinerarios a partir de correos electrónicos de confirmación de vuelos y reservas, pero su personalización es limitada y no tiene características colaborativas para grupos.
- **Google Trips**: Ofrece itinerarios automáticos basados en reservas de vuelos y hoteles, pero no permite agregar actividades personalizadas ni colaborar en tiempo real con otros usuarios.
- **Roadtrippers**: Se enfoca en la planificación de rutas para viajes por carretera, pero tiene una funcionalidad limitada para organizar actividades turísticas dentro de esos destinos.

En comparación con estas aplicaciones, nuestra plataforma ofrece una experiencia más personalizada y flexible, permitiendo a los usuarios no solo agregar destinos y actividades, sino también agregar recomendaciones, notas personales y colaborar de manera efectiva en un itinerario común. Además, la posibilidad de gestionar el presupuesto y los gastos también es un valor añadido que muchas aplicaciones existentes no ofrecen.

## 4. Funcionalidades Clave

A continuación se describen las funcionalidades principales que ofrecerá la aplicación (aunque no sé si será posible todas las funciones ya que tendría que utilizar varias APIs):

- **Creación de Itinerarios Personalizados**: Los usuarios podrán crear un itinerario completo, asignando destinos, actividades y fechas específicas. Podrán agregar, editar y eliminar destinos o actividades, y organizar el itinerario a su propio ritmo.
- **Selección de Destinos y Actividades**: Permite seleccionar destinos de una lista predefinida o ingresar un destino personalizado. Además, los usuarios podrán agregar actividades específicas en cada destino, como visitar museos, hacer senderismo o explorar parques naturales.
- **Presupuesto de Viaje**: Los usuarios podrán asignar un presupuesto global para su viaje, y luego registrar sus gastos a medida que avanzan en la planificación. La aplicación podrá calcular si los gastos se mantienen dentro del presupuesto, alertando sobre cualquier desviación.
- **Recomendaciones y Notas**: Los usuarios podrán agregar notas adicionales y recomendaciones sobre cada destino y actividad. Esto incluye información útil como horarios de apertura de atracciones, precios de entradas, o recomendaciones personales de otros viajeros.
- **Exportación de Itinerarios**: Los usuarios podrán exportar sus itinerarios en formato PDF o enviarlos por correo electrónico para tener una copia física o digital del plan de viaje. También se podrán generar resúmenes del presupuesto y actividades en formato descargable.

## 5. Tecnologías a Utilizar

La aplicación será desarrollada principalmente con las siguientes tecnologías:

### Frontend

- **React**: Framework principal para el desarrollo de la interfaz de usuario. React es ideal para aplicaciones interactivas de una sola página (SPA), proporcionando una experiencia de usuario fluida y eficiente.
- **React Router**: Para gestionar la navegación entre las diferentes páginas de la aplicación, como la creación de itinerarios, el calendario de actividades y la vista de recomendaciones.

### Estilo y Diseño

- **CSS/Styled Components**: Para la parte visual, se utilizarán estas tecnologías que permiten definir y gestionar los estilos de forma modular y reutilizable, haciendo que la interfaz sea atractiva y fácil de modificar.
- **Material UI (opcional)**: Una librería de componentes de interfaz que proporciona una base sólida para los elementos visuales de la aplicación (botones, tarjetas, calendarios).

### Almacenamiento Local

- **LocalStorage o IndexedDB**: Para almacenar los datos de los itinerarios, destinos y actividades de manera persistente en el navegador sin necesidad de un backend, lo que permite a los usuarios acceder a su información en cualquier momento, incluso sin conexión a internet.

### Otras Herramientas

- **PDF.js**: Para la generación de archivos PDF con los itinerarios de viaje, presupuesto y actividades programadas.
- **Moment.js (opcional)**: Para manejar fechas y horas de forma más sencilla y evitar errores de formato.

### Justificación de Tecnologías

- **React** es la opción ideal para construir aplicaciones interactivas y modulares, permitiendo una actualización eficiente de la interfaz sin recargar la página.
- **CSS/Styled Components** permiten un estilo modular que puede ser fácilmente adaptado o extendido conforme crece la aplicación.
- **LocalStorage o IndexedDB** aseguran que los usuarios puedan tener acceso a sus datos incluso si no están conectados a internet, haciendo la aplicación más accesible y conveniente.






# Entrega 2

Este proyecto es una aplicación web diseñada para ayudar a los usuarios a planificar y gestionar destinos y planes de vacaciones. Está construida con **React** y utiliza **React Router** para la navegación entre páginas. La aplicación está organizada en varias rutas y componentes, facilitando una experiencia de usuario clara y modular.

## Descripción del Proyecto

### Objetivo

El objetivo de la aplicación es permitir a los usuarios:
- Ver destinos disponibles para sus vacaciones.
- Consultar y gestionar sus planes de vacaciones.
- Enviar consultas a través de un formulario de contacto.
- Registrarse e iniciar sesión en la aplicación para acceder a sus planes personalizados.

### Estructura del Proyecto

El proyecto está compuesto por varias secciones clave que garantizan la modularidad y la reutilización de los componentes.

#### LayoutPublic

El componente `LayoutPublic` actúa como un contenedor para todas las rutas públicas de la aplicación. Dentro de este componente, se incluye:
- **Header**: El encabezado de la página, que contiene el menú de navegación y el logotipo.
- **Footer**: El pie de página, que aparece en todas las páginas.
- **Outlet**: Un espacio reservado donde se renderiza el contenido correspondiente a la ruta activa.

Este enfoque permite que las páginas compartan una estructura común (encabezado y pie de página) y que el contenido específico de cada página se cargue dentro del área principal, gestionada por `Outlet`.

#### Rutas de la Aplicación

Las rutas se gestionan utilizando **React Router**, y todas las rutas públicas están envueltas dentro del componente `LayoutPublic`. Las rutas definidas incluyen:

- **Home**: Página principal con información destacada o bienvenida.
- **Destinos**: Página donde los usuarios pueden explorar destinos disponibles para sus vacaciones.
- **MisPlanes**: Página donde los usuarios pueden consultar y gestionar sus planes de vacaciones.
- **Contactos**: Página con un formulario de contacto para que los usuarios puedan enviar consultas.
- **Login y Register**: Páginas para gestionar la autenticación de los usuarios, permitiendo el registro e inicio de sesión.

#### Formulario de Contacto

La página de **Contactos** incluye un formulario para que los usuarios envíen consultas. El formulario está diseñado para:
- Validar los campos antes de enviarlos (como nombre, apellido, email, etc.).
- Proporcionar mensajes de error si los campos no cumplen con los requisitos.
- Mostrar una alerta de éxito cuando el formulario se envía correctamente.

#### Uso de React Router

El proyecto utiliza **React Router** para gestionar la navegación entre las páginas. Esto permite que cada página se cargue dinámicamente sin necesidad de recargar toda la aplicación, proporcionando una experiencia de usuario fluida.

## ¿Por qué esta estructura?

1. **Modularidad y Reutilización**: La aplicación está organizada en componentes modulares (como `LayoutPublic`, `Header`, `Footer`), lo que facilita la reutilización del código y mejora la mantenibilidad.
   
2. **Navegación Declarativa**: Al usar **React Router**, la navegación entre las diferentes páginas es más sencilla y declarativa, lo que mejora la claridad del código.

3. **Formulario Controlado**: El formulario de contacto está diseñado como un formulario controlado en React, lo que significa que el estado de los campos del formulario es gestionado por el componente. Esto permite un control total sobre la validación y el envío de los datos.


