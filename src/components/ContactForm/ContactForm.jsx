import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_EMAIL_ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className='contact-form'>
                <input
                    type="text"
                    name="nombre"
                    placeholder='Nombre'
                    autoComplete='off'
                    required
                />
                <input
                    type="email"
                    name="mail"
                    placeholder='Email'
                    autoComplete='off'
                    required
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder='Nro. de telefono'
                    autoComplete='off'
                />
                <textarea
                    name="mensaje"
                    placeholder='Mensaje'
                    required
                />
                <button type="submit" className='btn-contact'>Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm;