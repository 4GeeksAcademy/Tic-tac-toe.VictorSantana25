import { useState } from "react";
import Inicio from "./Inicio";
import Juego from "./Juego";

const Home = () => {
  const [vistaInicio, setVistaInicio] = useState(true);
  const [nombreJugador1, setNombreJugador1] = useState("");
  const [nombreJugador2, setNombreJugador2] = useState("");
  const [simboloInicial, setSimboloInicial] = useState("X");

  const comenzarJuego = () => {
    if (!nombreJugador1 || !nombreJugador2) return;
    setVistaInicio(false);
  };

  const volverAlInicio = () => {
    setNombreJugador1("");
    setNombreJugador2("");
    setSimboloInicial("X");
    setVistaInicio(true);
  };

  return vistaInicio ? (
    <Inicio
      nombreJugador1={nombreJugador1}
      setNombreJugador1={setNombreJugador1}
      nombreJugador2={nombreJugador2}
      setNombreJugador2={setNombreJugador2}
      simboloInicial={simboloInicial}
      setSimboloInicial={setSimboloInicial}
      comenzarJuego={comenzarJuego}
    />
  ) : (
    <Juego
      nombreJugador1={nombreJugador1}
      nombreJugador2={nombreJugador2}
      simboloInicial={simboloInicial}
      volverAlInicio={volverAlInicio}
    />
  );
};

export default Home;
