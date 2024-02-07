import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/img/banners/banner-main-desktop.png';
import './FullBanner.css'

function Fullbanner() {
    return (
    <Swiper
        slidesPerView={1}
        pagination={{clickable:true}}
        navigation
    >
        <SwiperSlide>
            <div className="img-box">
                <div className="call-to-action">
                    <h2 className="headline">Promoções de Outono</h2>
                    <p className="subhead">Confiras os melhores looks para combinar com você nesse Outono</p>
                    <button className="to-action">Conferir</button>
                </div>
                <img className="img-item" src={img1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img-box">
                <div className="call-to-action">
                    <h2 className="headline">Promoções de Outono</h2>
                    <p className="subhead">Confiras os melhores looks para combinar com você nesse Outono</p>
                    <button className="to-action">Conferir</button>
                </div>
                <img className="img-item" src={img1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img-box">
                <div className="call-to-action">
                    <h2 className="headline">Promoções de Outono</h2>
                    <p className="subhead">Confiras os melhores looks para combinar com você nesse Outono</p>
                    <button className="to-action">Conferir</button>
                </div>
                <img className="img-item" src={img1} alt="" />
            </div>
        </SwiperSlide>
    </Swiper>
    );
}

export default Fullbanner;
