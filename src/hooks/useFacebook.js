import { useEffect, useState } from 'react';


export default function useFacebok(key, initialValue) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here you would trigger the event to your backend
        await fetch('YOUR_BACKEND_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event_name: 'SubmitContactForm',
                data: formData,
            }),
        });

        // Reset form or provide feedback to the user
    };
}