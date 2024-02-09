import React from 'react';
import Modal from 'react-modal';
import './ModalComponent.css';


const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro semi-transparente
      zIndex: 1000, // Defina o zIndex do overlay
    },
    content: {
        width: '50%',
        height: '50%',
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
        <div >
        <h2>Este é um modal com botão de fechar!</h2>
        <button onClick={onClose}>Fechar Modal</button>
        </div>
        
        </Modal>
    );
};

export default ModalComponent;
