import React from "react";
import './HeaderMenu.css'
import icon from '../../../assets/img/icones/icon-dress.png'

function HeaderMenu(){
    return(
        <nav className="menu-desk">
            <ul>
                <li>
                    <img src={icon} alt="" />
                    <a href="#">Novidades</a>
                </li>
                <li>
                    <a href="#">Vestidos</a>
                </li>
                <li>
                    <a href="#">Roupas</a>
                </li>
                <li>
                    <a href="#">Sapatos</a>
                </li>
                <li>
                    <a href="#">Lingerie</a>
                </li>
                <li>
                    <a href="#">Acessórios</a>
                </li>
                <li>
                    <a href="#">OUTLET</a>
                </li>
            </ul>
        </nav>
    )
};

export default HeaderMenu;