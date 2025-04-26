import React from "react";

const Inicio = ({
  nombreJugador1,
  setNombreJugador1,
  nombreJugador2,
  setNombreJugador2,
  simboloInicial,
  setSimboloInicial,
  comenzarJuego,
}) => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Tic Tac Toe</h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre del Jugador 1"
          className="form-control mb-2"
          value={nombreJugador1}
          onChange={(e) => setNombreJugador1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre del Jugador 2"
          className="form-control mb-2"
          value={nombreJugador2}
          onChange={(e) => setNombreJugador2(e.target.value)}
        />
        <select
          className="form-select mb-3"
          value={simboloInicial}
          onChange={(e) => setSimboloInicial(e.target.value)}
        >
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
        <button className="btn btn-success" onClick={comenzarJuego}>
          Comenzar Juego
        </button>
      </div>
    </div>
  );
};

export default Inicio;
