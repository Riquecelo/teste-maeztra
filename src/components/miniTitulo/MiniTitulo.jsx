import React from "react";
import './MiniTitulo.css'

function MiniTitulo(props){
    return(
        <h3 className="mini-titulo">{props.texto}</h3>
    )
}

export default MiniTitulo;