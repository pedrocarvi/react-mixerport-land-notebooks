import React from 'react';
import './WhatsappButton.css';
import WhatsappIcon from '../../assets/whatsapp_icon_45.png'

const WhatsAppButton = () => {
    const phoneNumber = '541128859227';
    const message = 'Hola, estoy interesado en sus productos.';

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button className="whatsapp-button" onClick={handleClick} id='whatsapp-float-button'>
            <img src={WhatsappIcon} alt="WhatsApp" width={40} />
        </button>
    );
};

export default WhatsAppButton;