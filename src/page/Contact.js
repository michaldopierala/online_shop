// ContactForm.js
import React, { useState } from 'react';

export default function Contact()  {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here
        console.log(formData);
    };

    return (
        <div className='Contact'>
            <div className='baner'>
                <div className='column'>
                    <div className='text'>
                        <div className='head'>Contact</div>
                        W sprawach dotyczących zamówień: zmiana danych do dostawy, produktu, anulowanie zamówienia, problemy z płatnością – prosimy o kontakt przez formularz lub drogą mailową.
                        <div className='star1'><img src='/img/star1.png' /> </div>
                        <div className='star2'><img src='/img/star2.png' /></div>
                    </div>
                </div>
                <div className='column'><img src='/img/contact.jpg' /></div>
            </div>
            <div className='container'>
                <div className="contact-form-container">
                    <div className='title'>Formularz kontaktowy</div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}

                            />
                        </div>
                        <div className='button'>
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='dane-kontaktowe'>
                    <div className='block'>
                        <div className='title'>Dane kontaktowe</div>
                        <div className='email'><img src='/img/email-outline.png' /><div>noszesztuke.sales@gmail.com</div> </div>
                        <div className='email'><img src='/img/telephone.png' /><div>518 198 080</div> </div>
                    </div>
                    <div className='block'>
                        <div className='title'>Dane firmy</div>
                        <div>ul. Okrzei 12<br /> 19-500 Gołdap<br /> NIP: 8471628854</div>
                    </div>

                </div>
            </div>

        </div>
    );
}

