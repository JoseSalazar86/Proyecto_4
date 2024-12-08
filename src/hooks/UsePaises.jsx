import { useState, useEffect } from "react";

const paises = ["ES", "IT", "FR", "DE", "US", "CA", "MX", "CU", "BR", "UY", "AR", "CL", "ZA", "CV", "EG", "MA", "CN", "JP", "KR", "TH", "AU", "NZ", "FJ", "WS"];
const paginacionPorPaises = 4;

const apiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4e6f6d05dbmshb395a5cc6138642p1d6aecjsn74713eae50da",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const UsePaises = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      const startIndex = (currentPage - 1) * paginacionPorPaises;
      const endIndex = startIndex + paginacionPorPaises;
      const currentCountries = paises.slice(startIndex, endIndex);

      try {
        const countryDataPromises = currentCountries.map((code) =>
          fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${code}`, apiOptions)
            .then((res) => {
              if (!res.ok) throw new Error("No se pudo cargar el país.");
              return res.json();
            })
            .then((data) => data.data)
        );
        const results = await Promise.all(countryDataPromises);
        setCountries(results);
      } catch (err) {
        if (err.message.includes("429")) {
          // Manejar el error por exceso de solicitudes
          setError("Exceso de solicitudes. Espere un momento antes de intentar nuevamente.");
          // Retrasar la próxima solicitud para manejar el error
          setTimeout(fetchCountries, 60000); // Retraso de 60 segundos
        } else {
          setError(`Error al cargar países: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [currentPage]);

  // Cambiar a la siguiente página
  const goToNextPage = () => {
    if (currentPage * paginacionPorPaises < paises.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Cambiar a la página anterior
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    countries,
    currentPage,
    loading,
    error,
    goToNextPage,
    goToPrevPage,
  };
};
