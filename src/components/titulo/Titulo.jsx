import React from "react";
import './Titulo.css';

function Titulo(props){
    return(
        <h2 className="titulo">{props.texto}</h2>
    )
}

export default Titulo;