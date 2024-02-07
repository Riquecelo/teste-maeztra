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


function App() {

  return (
    <>
      <Header/>
      <Fullbanner/>
      <h1>maeztra</h1>
    </>
  )
}

export default App
