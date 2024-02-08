import React from "react";
import './Vitrine.css';
import saia from '../../assets/img/produtos/308x381-1.png';
import saiaEstampa from '../../assets/img/produtos/308x381-2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Vitrine(){

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        responsive:[
            { 
                breakpoint: 1730,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    }
                },
            { 
            breakpoint: 1390,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            { 
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1,
                    }
            },
            { 
            breakpoint: 700,
            settings: {
                slidesToShow: 1.07,
                slidesToScroll: 1,
                arrows:false,
                }
            },
        ],
    };



    return(
        <div id="vitrine">
            <Slider {...settings}>
                <div className="vitrine">
                    <img src={saia} alt="" />
                    <div className="info">
                        <div className="cores">
                        <input className="v-liso-1" type="checkbox" />
                        <input className="v-liso-2" type="checkbox" />
                        <input className="v-liso-3" type="checkbox" />
                        <input className="v-liso-4" type="checkbox" />
                    </div>
                    <h3>R$ 500,00</h3>
                    <h4>Faux Suede Mini Skirt</h4>
                    <p>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    </div>
                    <button>Adicionar</button>
                </div>
                <div className="vitrine">
                    <img src={saiaEstampa} alt="" />
                    <div className="info">
                        <div className="cores">
                        <input className="v-estamp-1" type="checkbox" />
                        <input className="v-estamp-2" type="checkbox" />
                        <input className="v-estamp-3" type="checkbox" />
                        <input className="v-estamp-4" type="checkbox" />
                    </div>
                    <h3>R$ 320,00</h3>
                    <h4>Ruched Rose Print Mini Skirt</h4>
                    <p>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>
                    </div>
                    <button>Adicionar</button>
                </div>

                <div className="vitrine">
                    <img src={saia} alt="" />
                    <div className="info">
                        <div className="cores">
                        <input className="v-liso-1" type="checkbox" />
                        <input className="v-liso-2" type="checkbox" />
                        <input className="v-liso-3" type="checkbox" />
                        <input className="v-liso-4" type="checkbox" />
                    </div>
                    <h3>R$ 500,00</h3>
                    <h4>Faux Suede Mini Skirt</h4>
                    <p>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    </div>
                    <button>Adicionar</button>
                </div>
                <div className="vitrine">
                    <img src={saiaEstampa} alt="" />
                    <div className="info">
                        <div className="cores">
                        <input className="v-estamp-1" type="checkbox" />
                        <input className="v-estamp-2" type="checkbox" />
                        <input className="v-estamp-3" type="checkbox" />
                        <input className="v-estamp-4" type="checkbox" />
                    </div>
                    <h3>R$ 320,00</h3>
                    <h4>Ruched Rose Print Mini Skirt</h4>
                    <p>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>
                    </div>
                    <button>Adicionar</button>
                </div>

                <div className="vitrine">
                    <img src={saia} alt="" />
                    <div className="info">
                        <div className="cores">
                        <input className="v-liso-1" type="checkbox" />
                        <input className="v-liso-2" type="checkbox" />
                        <input className="v-liso-3" type="checkbox" />
                        <input className="v-liso-4" type="checkbox" />
                    </div>
                    <h3>R$ 500,00</h3>
                    <h4>Faux Suede Mini Skirt</h4>
                    <p>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    </div>
                    <button>Adicionar</button>
                </div>
                <div className="vitrine">
                    <img src={saiaEstampa} alt="" />
                    <div className="info">
                        <div className="cores">
                        <input className="v-estamp-1" type="checkbox" />
                        <input className="v-estamp-2" type="checkbox" />
                        <input className="v-estamp-3" type="checkbox" />
                        <input className="v-estamp-4" type="checkbox" />
                    </div>
                    <h3>R$ 320,00</h3>
                    <h4>Ruched Rose Print Mini Skirt</h4>
                    <p>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>
                    </div>
                    <button>Adicionar</button>
                </div>
        </Slider>
        </div>
        
        
        
    )
}

export default Vitrine;