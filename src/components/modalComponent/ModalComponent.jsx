import React from 'react';
import Modal from 'react-modal';
import './ModalComponent.css';
import img from '../../assets/img/banners/bg-newsletter.jpg';
import icoEnv from '../../assets/img/icones/icon-envelope.png';
import icoAviao from '../../assets/img/icones/icon-aviao.png';

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro semi-transparente
      zIndex: 1000, // Defina o zIndex do overlay
    },
    content: {
        width: '851px',
        height: '558px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        right: 0,
        bottom: 0,
        border: 'none', // Remova a borda padrão
        borderRadius: 0, // Remova a borda arredondada padrão
        padding: 0, // Remova o preenchimento padrão
        zIndex: 1001, // Defina o zIndex do conteúdo do modal
        display: 'flex',
        alignItems:'center',
        flexDirection:'column',
        background:'transparent',
    },
};

const ModalComponent = ({ isOpen, onClose }) => {
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Modal"
        style={customStyles}
        >
        <button onClick={onClose} className='fechar'>Fechar</button>
        <div className='box-modal'>
            <img src={img} alt="" className='image-bg' />

            <form className='form-modal'>
                <img src={icoEnv} alt="" />
                <h4>Bem vindo à Maeztra</h4>
                <h3>Receba em Primeira mão 
                    <br /> 
                    <strong>descontos e ofertas exclusivas</strong>
                </h3>
                <input type="email" name="" id="" placeholder='Digite seu e-mail' />
                <button>Enviar <img src={icoAviao} alt="" /></button>
            </form>
        </div>
        
        </Modal>
    );
};

export default ModalComponent;
