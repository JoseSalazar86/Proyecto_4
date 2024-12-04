import React, { useState, useEffect } from 'react';

const Paises = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); // Agrega un estado de carga
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          'x-rapidapi-key': '4e6f6d05dbmshb395a5cc6138642p1d6aecjsn74713eae50da', // Cambia por tu clave API
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data.data); // La lista de países está en la propiedad `data`
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Cambia el estado de carga a false al final
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error }; // Retorna los estados
};

export default Paises;