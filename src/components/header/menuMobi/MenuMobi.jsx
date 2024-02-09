import React from "react";
import './MenuMobi.css';
import icoMenu from '../../../assets/img/icones/icon-menu.png';
import logoMaeztra from '../../../assets/img/logos/logo-maeztra-novo.png';
import icoLupa from '../../../assets/img/icones/icon-busca.png';
import icoSacola from '../../../assets/img/icones/icon-sacola.png';

function MenuMobi(){
    return(
        <nav className="menu-mobile">
            <img src={icoMenu} alt="" />
            <img src={logoMaeztra} alt="" className="mz"/>
            <img src={icoLupa} alt="" />
            <img src={icoSacola} alt="" />
        </nav>
    )
}

export default MenuMobi;