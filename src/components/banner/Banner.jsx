import React from "react";
import './Banner.css';
import banner from '../../assets/img/banners/banner-desktop2.png';
import bannerMobile from '../../assets/img/banners/banner-desktop2-mobile.png'

function Banner(){
    return(
        <div className="banner-container">
            <div className="box-banner">
                <div className="info-colecao">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed necessitatibus, obcaecati reiciendis cupiditate architecto illo expedita natus repellat minima ratione vel id, iste quo. Hic at officiis architecto necessitatibus qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed necessitatibus, obcaecati reiciendis cupiditate architecto illo expedita natus repellat minima ratione vel id, iste quo. Hic at officiis architecto necessitatibus qui.</p>
                </div>
                <picture>
                    <source media="(max-width:425px)" srcSet={bannerMobile} type="image/png" />
                    <img src={banner} alt="" />
                </picture>
            </div>
        </div>
    )
}

export default Banner;