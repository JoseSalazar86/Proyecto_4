import React from 'react';
import banderaEspaña from "../assets/bandera-españa.jpg"; // Asegúrate de que esta ruta sea correcta
import Paises from '../hooks/Paises';

const Countries = () => {
  const { countries, loading, error } = Paises(); // Asegúrate de que Paises esté correctamente definido

  return (
    <section className="novedades">
      <h1 className="novedades__titulo">Destinos</h1>

      {error ? (
        <p>Error al cargar países: {error}</p>
      ) : loading ? (
        <p>Cargando países...</p>
      ) : (
        countries.map((country) => (
          <article className="novedades__producto" key={country.code}>
            <img
              className="producto__imagen"
              src={banderaEspaña} // Cambia esto a la imagen correspondiente si es necesario
              alt={`Bandera de ${country.name}`}
            />
            <h2 className="producto__titulo">{country.name}</h2>
            <p>
              Descubre {country.name}, un país fascinante con su propia cultura
              y tradiciones.
            </p>
            <p>Capital: {country.capital || 'Desconocida'}</p>
            <p>Población: {country.population || 'Datos no disponibles'}</p>
            <p>Moneda: {country.currencyCodes?.join(', ') || 'Datos no disponibles'}</p>
            <button className="btn btn-pais">Acceder</button>
          </article>
        ))
      )}
    </section>
  );
}

export default Countries;