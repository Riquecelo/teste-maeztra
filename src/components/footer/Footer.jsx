import React from "react";
import './Footer.css';
import face from '../../assets/img/icones/facebook.png';
import lkdin from '../../assets/img/icones/linkedin.png';
import inst from '../../assets/img/icones/instagram.png';
import tube from '../../assets/img/icones/youtube.png';
import visa from '../../assets/img/icones/visa.png';
import master from '../../assets/img/icones/mastercard.png';
import vtex from '../../assets/img/icones/vtex-footer.png';
import mz from '../../assets/img/icones/Maeztra-logo.png'

function Footer(){
    return(
        <footer>
            <div className="footer-list">
                <ul>
                    <li>Informações</li>
                    <li>Quem Somos</li>
                    <li>Prazo de Envio</li>
                    <li>Trocas e Devoluções</li>
                    <li>Promoções e Cupons</li>
                </ul>
                <ul>
                    <li>Minha Conta</li>
                    <li>Minha Conta</li>
                    <li>Meus Pedidos</li>
                    <li>Cadastre-se</li>
                </ul>
                <ul>
                    <li>Onde nos Encontrar</li>
                    <li>Lojas</li>
                    <li>Endereço</li>
                </ul>
            </div>
            <div className="footer-icons">
                <div className="social">
                    <a href="#"><img src={face} alt="" /></a>
                    <a href=""><img src={lkdin} alt="" /></a>
                    <a href=""><img src={inst} alt="" /></a>
                    <a href=""><img src={tube} alt="" /></a>
                </div>
                <div className="cartao">
                    <img src={visa} alt="" />
                    <img src={master} alt="" />
                    <img src={visa} alt="" />
                    <img src={master} alt="" />
                </div>
                <div className="logos">
                    <div>
                        <p>Powerd by</p>
                        <img src={vtex} alt="" />
                    </div>
                    <div>
                        <p>Developer by</p>
                        <img src={mz} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;