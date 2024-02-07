import React from "react";
import './Marcas.css';
import comma from '../../assets/img/logos/comma.png';
import melissa from '../../assets/img/logos/melissa.png';
import forever from '../../assets/img/logos/forever.png';
import zara from '../../assets/img/logos/zara.png';
import ann from '../../assets/img/logos/ann-taylor.png'

function Marcas(){
    return(
        <div className="marcas">
            <div className="img-marcas">
                <img src={comma} alt="" />
                <img src={melissa} alt="" />
                <img src={forever} alt="" />
                <img src={zara} alt="" />
                <img src={ann} alt="" />
            </div>
        </div>
    )
}

export default Marcas;