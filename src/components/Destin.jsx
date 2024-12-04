import React from 'react'
import banderaEspaña from "../assets/bandera-españa.jpg";

const Destin = () => {
  return (
    <>
      <section className="novedades">
      <h1 className="novedades__titulo">Destinos</h1>

      <article className="novedades__producto">
        <img
          className="producto__imagen"
          src={banderaEspaña}
          alt="Esto es una gorra"
        />
        <h2 className="producto__titulo">España</h2>
        <p>Un país vibrante y diverso, famoso por su rica cultura, 
          deliciosa gastronomía y espectaculares paisajes. 
          Desde las playas mediterráneas hasta la historia de sus ciudades, 
          como Madrid, Barcelona y Sevilla, España es el destino perfecto
          para disfrutar de arte, sol y una vida nocturna animada.</p>
        <p>Capital: Madrid</p>
        <p>Poblacion: 48.797.875 habitantes (2024)</p>
        <p>Moneda: Euro</p>
        <button className="btn btn-pais" >
          Acceder
        </button>
      </article>
      <article className="novedades__producto">
        <img
          className="producto__imagen"
          src={banderaEspaña}
          alt="Esto es una gorra"
        />
        <h2 className="producto__titulo">España</h2>
        <p>Un país vibrante y diverso, famoso por su rica cultura, 
          deliciosa gastronomía y espectaculares paisajes. 
          Desde las playas mediterráneas hasta la historia de sus ciudades, 
          como Madrid, Barcelona y Sevilla, España es el destino perfecto
          para disfrutar de arte, sol y una vida nocturna animada.</p>
        <p>Capital: Madrid</p>
        <p>Poblacion: 48.797.875 habitantes (2024)</p>
        <p>Moneda: Euro</p>
        <button className="btn btn-pais" >
          Acceder
        </button>
      </article>
      <article className="novedades__producto">
        <img
          className="producto__imagen"
          src={banderaEspaña}
          alt="Esto es una gorra"
        />
        <h2 className="producto__titulo">España</h2>
        <p>Un país vibrante y diverso, famoso por su rica cultura, 
          deliciosa gastronomía y espectaculares paisajes. 
          Desde las playas mediterráneas hasta la historia de sus ciudades, 
          como Madrid, Barcelona y Sevilla, España es el destino perfecto
          para disfrutar de arte, sol y una vida nocturna animada.</p>
        <p>Capital: Madrid</p>
        <p>Poblacion: 48.797.875 habitantes (2024)</p>
        <p>Moneda: Euro</p>
        <button className="btn btn-pais" >
          Acceder
        </button>
      </article>

    </section>
    
    </>
  )
}

export default Destin