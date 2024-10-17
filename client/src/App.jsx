// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './page/Home';
import Raise from './page/raise_note'; 
import MyAccount from './page/My_account'; 
import Transaction from './page/Transaction_History'; 
import MyWallet from './page/Mywallet'; 
import Login from './page/login/login';
import Register from './page/login/register'; // Add Register component import
import Forgot from './page/login/forgot'; // Add Forgot component import
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function App() {
    const [notifications, setNotifications] = useState([]);

    const handleNoteRaised = (note) => {
        const newNotification = {
            ...note,
            id: Date.now(),
        };
        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
    };

    return (
        <Router>
            <div>
                <Header notifications={notifications} />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="/home" element={<Home notifications={notifications} />} />
                    <Route path="/raise-note" element={<Raise onNoteRaised={handleNoteRaised} />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/transaction-history" element={<Transaction notifications={notifications} />} />
                    <Route path="/my-wallet" element={<MyWallet />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Register />} /> {/* Add register route */}
                    <Route path="/forgot-password" element={<Forgot />} /> {/* Add forgot password route */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
