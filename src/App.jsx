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


function App() {

  return (
    <>
      <Header/>
      <Fullbanner/>
      <MiniTitulo texto="Por que comprar na Maeztra?"/>
      <h1>maeztra</h1>
    </>
  )
}

export default App
