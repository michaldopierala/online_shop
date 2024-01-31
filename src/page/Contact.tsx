import React, { useState, FormEvent, useEffect } from 'react';
import ReactGA4 from 'react-ga4';
import { useLocation } from 'react-router-dom';


export default function Contact() {
    const location = useLocation();
    useEffect(() => {
        if (window.location.hostname !== "localhost") {
          ReactGA4.send({ hitType: "pageview", page: location.pathname });
        }
      }, [location]);

    const ContactDataBase: string | undefined = process.env.REACT_APP_API_URL2;
    const [messageSent, setMessageSent] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const handleSubmit = async (event: FormEvent) => {

        event.preventDefault();
        try {
            const response = await fetch(`${ContactDataBase}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });
            if (response.ok) {
                setMessageSent(true);
                console.log(response);
            } else {
                console.error('Error saving data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='Contact'>
            <div className='baner'>
                <div className='column'>
                    <div className='text'>
                        <div className='head'>Contact</div>
                        For inquiries related to orders: changes in delivery details, products, order cancellations, payment issues – please contact us through the form or by email.
                        <div className='star1'><img src='/img/star1.png' /> </div>
                        <div className='star2'><img src='/img/star2.png' /></div>
                    </div>
                </div>
                <div className='column'><img src='/img/contact.jpg' /></div>
            </div>
            <div className='container'>
                {messageSent ? (
                    <div>
                        The message was sent successfully.
                        <br></br>
                        We will reply to you as soon as posible.
                    </div>
                ) : (
                    <div className="contact-form-container">
                        <div className='title'>Contact form</div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                    // id="name"
                                    // name="name"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    // id="email"
                                    // name="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Message"
                                    id="message"
                                    name="message"
                                    className="form-control"
                                />
                            </div>
                            <div className='button'>
                                <button type="submit" className="submit-button">Submit</button>
                            </div>
                        </form>
                    </div>
                )}
                <div className='dane-kontaktowe'>
                    <div className='block'>
                        <div className='title'>Contact details</div>
                        <div className='email'><img src='/img/email-outline.png' /><div>michal6452@gmail.com</div> </div>
                        <div className='email'><img src='/img/telephone.png' /><div>795 090 614</div> </div>
                    </div>
                    <div className='block'>
                        <div className='title'>Company's data</div>
                        <div>ul. Petuniowa 20<br /> 53-238 Wroclaw<br /> NIP: 844871239856</div>
                    </div>

                </div>
            </div>

        </div >
    );
}

