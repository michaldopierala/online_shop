import React, { useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const About = () => {
    const location = useLocation();
    useEffect(() => {
        if (window.location.hostname !== "localhost") {
          ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
        }
      }, [location]);

    const apiUrl = process.env.REACT_APP_API_URL;
    const ContactDataBase = process.env.REACT_APP_API_URL2;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // const response = await fetch( `${ContactDataBase}`, {
            const response = await fetch(`${ContactDataBase}`, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email })
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Data saved:', data);
            } else {
                console.error('Error saving data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='About'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                {/* <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                /> */}
                <button type="submit">Submit</button>
            </form>
            <h1>Environment Variable Example</h1>
            <p>The API URL is: {ContactDataBase}</p>
        </div>

    );
};

export default About;
