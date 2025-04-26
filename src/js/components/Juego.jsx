import React, { useState, useEffect } from "react";
import Tablero from "./Tablero";

const tableroInicial = Array(9).fill(null);

const verificarGanador = (tablero) => {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of combinacionesGanadoras) {
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a];
    }
  }
  return null;
};

const Juego = ({ nombreJugador1, nombreJugador2, simboloInicial, volverAlInicio }) => {
  const [turnoX, setTurnoX] = useState(simboloInicial === "X");
  const [tablero, setTablero] = useState(tableroInicial);
  const [ganador, setGanador] = useState(null);

  useEffect(() => {
    const resultado = verificarGanador(tablero);
    if (resultado) {
      setGanador(resultado);
    }
  }, [tablero]);

  const manejarClick = (indice) => {
    if (tablero[indice] || ganador) return;
    const nuevoTablero = [...tablero];
    nuevoTablero[indice] = turnoX ? "X" : "O";
    setTablero(nuevoTablero);
    setTurnoX(!turnoX);
  };

  const reiniciarJuego = () => {
    setTablero(tableroInicial);
    setTurnoX(simboloInicial === "X");
    setGanador(null);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Tic Tac Toe</h1>
      <div className="row justify-content-center">
        <div className="col-6">
          <Tablero tablero={tablero} manejarClick={manejarClick} />
          <div className="mt-4">
            {ganador ? (
              <h2 className="text-success">
                Ganador: {ganador === "X" ? nombreJugador1 : nombreJugador2}
              </h2>
            ) : (
              <h2>
                Turno de: {turnoX ? nombreJugador1 : nombreJugador2} ({turnoX ? "X" : "O"})
              </h2>
            )}
            
            <div className="d-flex justify-content-center gap-3 mt-3">
              {ganador && (
                <button className="btn btn-secondary px-4" onClick={volverAlInicio}>
                  Empezar Nueva Partida
                </button>
              )}
              <button className="btn btn-primary px-4" onClick={reiniciarJuego}>
                Reiniciar Juego
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juego;

