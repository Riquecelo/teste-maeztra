import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import {register} from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Fullbanner from './components/fullBanner/FullBanner';
import Section from './components/section/Section';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import ModalComponent from './components/modalComponent/ModalComponent';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ModalComponent
      isOpen={modalIsOpen}
      onClose={handleCloseModal}
      />
      <Header/>
      <Fullbanner/>
      <Section/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
