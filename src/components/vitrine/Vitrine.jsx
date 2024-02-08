import React from "react";
import './Vitrine.css';
import { Swiper, SwiperSlide } from "swiper/react";
import saia from '../../assets/img/produtos/308x381-1.png';
import saiaEstampa from '../../assets/img/produtos/308x381-2.png'
import 'swiper/css';

function Vitrine(){
    return(
        <div id="vitrine">
            <Swiper
            spaceBetween={25}
            slidesPerView={4}
            navigation
        >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
        </Swiper>
        </div>
        
    )
}

export default Vitrine;