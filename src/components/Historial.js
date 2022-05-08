import React from "react";

const Historial = ({seleccionAnterior, historialOpciones}) => {
  return (
    <div className="recordatorio">
      <h3>Selección anterior: { seleccionAnterior }</h3>
      <h4>Historial de opciones elegidas: </h4>
      <ul>{ historialOpciones }</ul>
    </div>
  );
}
export default Historial;