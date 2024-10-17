// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './feedback.css';

export default function Feedback() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission logic here (e.g., send the data to the backend)
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Comments:", comments);
        alert('Thank you for your feedback!');
    };

    return (
        <>
            <h3>Thank you for taking the time to provide feedback</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea 
                        id="comments" 
                        value={comments} 
                        onChange={(e) => setComments(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </>
    );
}
