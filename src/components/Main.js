import React, { useState } from 'react';
import data from './data';
import Opciones from './Opciones';
import Historial from './Historial';

const Main = () => {
  
  const obtenerPorId = (id) => {
    return data.find(opcion => opcion.id === id);
  }

  const [estado, setEstado] = useState(2);
  const [historiaActual, setHistoriaActual] = useState(obtenerPorId("1").historia);
  const [opcionaActual, setOpcionaActual] = useState(obtenerPorId("1").opciones.a);
  const [opcionbActual, setOpcionbActual] = useState(obtenerPorId("1").opciones.b);
  const [anterior, setAnterior] = useState("");
  const [recordatorio, setRecordatorio] = useState("");

  const handleClickA = () => {
    if(estado > 5){
      alert("¡FIN!");
    } else{
      setEstado(estado + 1);
      const idFinal = `${estado}a`;
      const {historia, opciones: {a, b}} = obtenerPorId(idFinal);
      setHistoriaActual(historia);
      setOpcionaActual(a);
      setOpcionbActual(b);
      setAnterior("a");
      setRecordatorio(recordatorio + anterior);
    }
  };

  const handleClickB = () => {
    if(estado > 5){
      alert("¡FIN!");
    } else{
      setEstado(estado + 1);
      const idFinal = `${estado}b`;
      const {historia, opciones: {a, b}} = obtenerPorId(idFinal);
      setHistoriaActual(historia);
      setOpcionaActual(a);
      setOpcionbActual(b);
      setAnterior("b");
      setRecordatorio(recordatorio + anterior);
    }
  };

  const listaHistorial = [...recordatorio];

  return (
    <div className="layout">
        <h1 className="historia">{ historiaActual }</h1>

        <Opciones
          handleClickA={ handleClickA }
          handleClickB={ handleClickB }
          opcionA={ opcionaActual }
          opcionB={ opcionbActual }
        />
        
        <Historial
          seleccionAnterior={ anterior }
          historialOpciones={ listaHistorial.map(
            (e, index) => (
              <li key={ index }>{ e }</li>
            ),
            anterior
          )}
        />
      </div>
  )
}

export default Main;