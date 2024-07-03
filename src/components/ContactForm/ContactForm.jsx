import React from 'react';
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
                <div className="field-container">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        autoComplete='off'
                        required
                    />
                </div>
                <div className="field-container">
                    <label htmlFor="mail">Email</label>
                    <input
                        type="email"
                        id="mail"
                        name="mail"
                        autoComplete='off'
                        required
                    />
                </div>
                <div className="field-container">
                    <label htmlFor="telefono">Nro. de telefono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        autoComplete='off'
                    />
                </div>
                <div className="field-container">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                    />
                </div>
                <button type="submit" className='btn-contact'>Enviar</button>
            </form>

        </div>
    )
}

export default ContactForm;