import React from "react";
import './TipBar.css';
import iconGlobo from '../../assets/img/icones/globo.png';
import iconGalpao from '../../assets/img/icones/galpao.png';
import iconTroca from '../../assets/img/icones/troca.png';
import iconEtiqueta from '../../assets/img/icones/etiqueta.png';
import iconCaminhao from '../../assets/img/icones/caminhao.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function TipBar(){

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        swipe:false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    swipe:true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    swipe:true,
                }
            },
            {
                breakpoint: 845,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    swipe:true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe:true,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    swipe:true,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1.05,
                    slidesToScroll: 1,
                    swipe:true,
                }
            },
        ]
    };

    return(
        <div className="tipbar">
            <Slider {...settings}>
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
            </Slider>
        </div>
    )
}

export default TipBar;