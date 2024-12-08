import React from 'react';
import { UsePaises } from '../hooks/UsePaises';
import banderaEspaña from '../assets/bandera-españa.jpg';


const InfoPais  = () => {
    const {
      countries,
      currentPage,
      loading,
      error,
      goToNextPage,
      goToPrevPage,
    } = UsePaises();
  
    return (
      <section className="novedades">
        <h1 className="novedades__titulo">Destinos</h1>
  
        {error ? (
          <p className="error">Error al cargar países: {error}</p>
        ) : loading ? (
          <p className="loading">Cargando países...</p>
        ) : (
          countries.map((country) => (
            <article className="novedades__producto" key={country.code}>
              <img
                className="producto__imagen"
                src={banderaEspaña} // Cambiar según corresponda a la bandera del país
                alt={`Bandera de ${country.name}`}
              />
              <h2 className="producto__titulo">{country.name}</h2>
              <p>
                Descubre {country.name}, un país fascinante con su propia cultura
                y tradiciones.
              </p>
              <p>Capital: {country.capital || "Desconocida"}</p>
              <p>Población: {country.population || "Datos no disponibles"}</p>
              <p>Moneda: {country.currencyCodes?.join(", ") || "Datos no disponibles"}</p>
              <button className="btn btn-pais">Acceder</button>
            </article>
          ))
        )}
  
        <div className="pagination-controls">
          <button
            className="btn btn-anterior"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span className="pagination__info">Página {currentPage}</span>
          <button
            className="btn btn-siguiente"
            onClick={goToNextPage}
            disabled={currentPage * 4 >= 12}
          >
            Siguiente
          </button>
        </div>
      </section>
    );
  };
  
  export default InfoPais;