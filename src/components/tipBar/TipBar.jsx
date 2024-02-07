import React from "react";
import './TipBar.css';
import iconGlobo from '../../assets/img/icones/globo.png';
import iconGalpao from '../../assets/img/icones/galpao.png';
import iconTroca from '../../assets/img/icones/troca.png';
import iconEtiqueta from '../../assets/img/icones/etiqueta.png';
import iconCaminhao from '../../assets/img/icones/caminhao.png';


function TipBar(){


    return(
        <div className="tipbar">
            <div className="box-tipbar">
                <img src={iconGlobo} alt="" />
                <p>
                    <strong>Produtos importdos</strong>
                    <br />
                    Produtos de Alta Qualidade
                </p>
            </div>

            <div className="box-tipbar">
                <img src={iconGalpao} alt="" />
                <p>
                    <strong>Estoque no Brasil</strong>
                    <br />
                    Produtos mais perto de você!
                </p>
            </div>

            <div className="box-tipbar">
                <img src={iconTroca} alt="" />
                <p>
                    <strong>Trocas Garantidas</strong>
                    <br />
                    Trocas em até 48 horas, veja as regras
                </p>
            </div>

            <div className="box-tipbar">
                <img src={iconEtiqueta} alt="" />
                <p>
                    <strong>Ganhe 5% off</strong>
                    <br />
                    Pagando à vista no Cartão
                </p>
            </div>

            <div className="box-tipbar">
                <img src={iconCaminhao} alt="" />
                <p>
                    <strong>Frete Grátis </strong>
                    <br />
                    Em compras acima de R$ 499,00
                </p>
            </div>
        </div>
    )
}

export default TipBar;