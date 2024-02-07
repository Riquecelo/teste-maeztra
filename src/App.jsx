import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {register} from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Fullbanner from './components/fullBanner/FullBanner';
import MiniTitulo from './components/miniTitulo/MiniTitulo';
import TipBar from './components/tipBar/TipBar';
import Titulo from './components/titulo/Titulo';
import Marcas from './components/marcas/Marcas';


function App() {

  return (
    <>
      <Header/>
      <Fullbanner/>
      <MiniTitulo texto="Por que comprar na Maeztra?"/>
      <TipBar/>
      <Titulo texto="Marcas Parceiras"/>
      <Marcas/>
      <h1>maeztra</h1>
    </>
  )
}

export default App
