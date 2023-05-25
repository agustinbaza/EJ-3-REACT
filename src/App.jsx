import React, { useState } from "react";

function Saludo(props) {
  const [msj, setMsj] = useState("(from changed state)");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const mostrar = () => {
    setMostrarMensaje(true);
  };

  return (

    <div>
      <h1>
        Hola {props.name} {mostrarMensaje && msj} !!!
      </h1>
      <button onClick={mostrar}>Mostrar mensaje</button>
    </div>

  );
}

function App() {
  return (
    <div>
      <Saludo name="mi amigo" />
    </div>
  );
}

export default App;
