import React, { useState, useEffect } from 'react';

const UserItinerario = () => {
  const [itinerarios, setItinerarios] = useState(() => {
    const savedItinerarios = localStorage.getItem('itinerarios');
    return savedItinerarios ? JSON.parse(savedItinerarios) : [];
  });

  const [nuevoItinerario, setNuevoItinerario] = useState('');

  const handleInputChange = (event) => {
    setNuevoItinerario(event.target.value);
  };

  const handleAddItinerario = () => {
    if (nuevoItinerario.trim() === '') return; // No agregar si está vacío
    const updatedItinerarios = [...itinerarios, nuevoItinerario];
    setItinerarios(updatedItinerarios);
    setNuevoItinerario(''); // Limpiar el campo de entrada
    localStorage.setItem('itinerarios', JSON.stringify(updatedItinerarios)); // Guardar en localStorage
  };

  const handleDeleteItinerario = (index) => {
    const updatedItinerarios = itinerarios.filter((_, i) => i !== index);
    setItinerarios(updatedItinerarios);
    localStorage.setItem('itinerarios', JSON.stringify(updatedItinerarios)); // Guardar en localStorage
  };

  return (
    <div className="itinerario-container">
      <h2>Itinerario</h2>

      {/* Lista de itinerarios */}
      <ul className="itinerario-list">
        {itinerarios.map((itinerario, index) => (
          <li key={index}>
            {itinerario}
            <button onClick={() => handleDeleteItinerario(index)} className="itinerario-delete-button">Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Campo de entrada y botón para agregar */}
      <input
        type="text"
        value={nuevoItinerario}
        onChange={handleInputChange}
        placeholder="Agregar nuevo itinerario"
        className="itinerario-input"
      />
      <button onClick={handleAddItinerario} className="btn btn__itinerario">Agregar</button>
    </div>
  );
};

export default UserItinerario;