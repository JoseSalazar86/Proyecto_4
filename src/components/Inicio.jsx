import React from 'react';
import mapaDelMundo from '../assets/mapa-del-mundo.jpg'
const Inicio = () => {
  return (
    <main className='contenedor__inicio'>
      <section className="hero">
        <img src={mapaDelMundo} alt="mapaMundi" />
        <h1>Planifica tus vacaciones con facilidad</h1>
        <p>Planifica tus vacaciones de manera sencilla y visual con nuestra aplicación.</p>
      </section>

      <section className="features">
        <h2>Características de nuestra aplicación</h2>
        <article>
          <img src="mapa-interactivo.png" alt="Mapa interactivo mostrando itinerario completo" />
          <h3>Visualiza tu itinerario completo en un mapa interactivo</h3>
        </article>
        <article>
          <img src="calendario.png" alt="Calendario de planificación" />
          <h3>Gestiona y ajusta tu plan de viaje con facilidad</h3>
        </article>
        <article>
          <img src="bloc-de-notas.png" alt="Bloc de notas para detalles" />
          <h3>Añade notas y detalles sobre cada parada</h3>
        </article>
        <article>
          <img src="grupo-de-personas.png" alt="Personas colaborando en planes de viaje" />
          <h3>Colabora y comparte planes de viaje con amigos o familiares</h3>
        </article>
      </section>

      <section className="benefits">
        <h2>¿Por qué elegir nuestra aplicación?</h2>
        <article>
          <img src="reloj.png" alt="Icono de reloj para ahorro de tiempo" />
          <h3>Ahorra tiempo y esfuerzo en la planificación de tus vacaciones</h3>
        </article>
        <article>
          <img src="mapa-del-mundo.png" alt="Mapa del mundo con destinos turísticos" />
          <h3>Explora nuevos destinos y lugares turísticos</h3>
        </article>
        <article>
          <img src="grupo-de-personas.png" alt="Grupo de personas planificando juntas" />
          <h3>Mejora la experiencia de planificación en grupo</h3>
        </article>
      </section>

      <section className="call-to-action">
        <h2>¡Comienza a planificar tus vacaciones ahora!</h2>
        <button>¡Regístrate ahora!</button>
        <p>Descarga nuestra aplicación en la App Store o Google Play.</p>
      </section>
    </main>
  );
};

export default Inicio;
