import React from "react";
import './Marcas.css';
import comma from '../../assets/img/logos/comma.png';
import melissa from '../../assets/img/logos/melissa.png';
import forever from '../../assets/img/logos/forever.png';
import zara from '../../assets/img/logos/zara.png';
import ann from '../../assets/img/logos/ann-taylor.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Marcas(){

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
        <div className="marcas">
            <div className="img-marcas">
                <Slider {...settings}>
                    <img src={comma} alt="" />
                    <img src={melissa} alt="" />
                    <img src={forever} alt="" className="forever"/>
                    <img src={zara} alt="" />
                    <img src={ann} alt="" />
                </Slider>
                
            </div>
        </div>
    )
}

export default Marcas;