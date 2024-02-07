import React from "react";
import './HeaderMain.css'
import logo from '../../../assets/img/logos/logo-maeztra-novo.png';
import iconUser from '../../../assets/img/icones/icon-user.png';
import iconHeart from '../../../assets/img/icones/icon-heart.png';
import iconBag from '../../../assets/img/icones/icon-bag.png'

function HeaderMain(){
    return(
        <header className="header">
            <h1 alt="logo maeztra"><img src={logo} alt="logo maeztra" /></h1>

            <div className="search-header">
                <input type="search" placeholder="O Que Você Busa?" />
                <button>Buscar</button>
            </div>

            <ul className="user-header">
                <li>
                    <a href="#">
                        <img src={iconUser} alt="" />
                        minha conta
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={iconHeart} alt="" />
                        minha conta
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={iconBag} alt="" />
                        meu carrinho
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default HeaderMain;