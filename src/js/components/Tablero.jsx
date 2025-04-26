import React from "react";

const Tablero = ({ tablero = [], manejarClick }) => {
  // Comprobamos si 'tablero' es un array antes de intentar mapearlo
  if (!Array.isArray(tablero)) {
    console.error("El prop 'tablero' debe ser un array.");
    return <div>Error: 'tablero' no es un array válido.</div>;
  }

  return (
    <div className="board">
      {tablero.map((valor, index) => (
        <div
          key={index}
          className={`cell ${valor === "X" ? "x" : valor === "O" ? "o" : ""}`}
          onClick={() => manejarClick(index)}
        >
          {valor}
        </div>
      ))}
    </div>
  );
};

export default Tablero;
