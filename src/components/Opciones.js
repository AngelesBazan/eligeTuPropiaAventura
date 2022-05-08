import React from "react";

const Opciones = ({handleClickA, handleClickB, opcionA, opcionB}) => {
  return (
    <div className="opciones">
      <div className="opcion">
        <button id="A" className="botones" onClick={ handleClickA }>
          A
        </button>
        <h2>{ opcionA }</h2>
      </div>
      <div className="opcion">
        <button id="B" className="botones" onClick={ handleClickB }>
          B
        </button>
        <h2>{ opcionB }</h2>
      </div>
    </div>
  );
}

export default Opciones;