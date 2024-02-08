import React from "react";
import "./Section.css";
import MiniTitulo from '../miniTitulo/MiniTitulo';
import TipBar from '../tipBar/TipBar';
import Titulo from '../titulo/Titulo';
import Marcas from '../marcas/Marcas';
import Vitrine from '../vitrine/Vitrine';
import Banner from '../banner/Banner';


function Section() {
    return (
        <section id="section-container">
        <MiniTitulo texto="Por que comprar na Maeztra?" />
        <TipBar />
        <Titulo texto="Marcas Parceiras" />
        <Marcas />
        <Titulo texto="As Mais Pedidas" />
        <Vitrine />
        <Banner />
        
        </section>
    );
}

export default Section;
