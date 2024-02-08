import React from "react";
import './Newsletter.css'

function Newsletter (){
    return(
        <form className="news-container">
            <h3>Receba Nossa Newsletter</h3>
            <div className="news-input">
                <input type="email" placeholder="Digite seu e-mail" />
                <button>Enviar</button>
            </div>
        </form>
    )
}

export default Newsletter;