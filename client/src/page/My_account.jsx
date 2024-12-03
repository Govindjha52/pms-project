// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const MyAccount = ({ onNoteAccepted }) => {
    const [balance, setBalance] = useState(5000);
    const [raisedNotesCount, setRaisedNotesCount] = useState(0);
    const [acceptedNotesCount, setAcceptedNotesCount] = useState(0);
    
    // Function to handle raising a note
    const raiseNote = () => {
        if (balance >= 300) {
            setBalance(balance - 300); // Deduct 300 from balance
            setRaisedNotesCount(raisedNotesCount + 1);
        } else {
            alert('Insufficient balance to raise a note.');
        }
    };

    // Function to accept a note
    const acceptNote = () => {
        setBalance(balance + 300); 
        setAcceptedNotesCount(acceptedNotesCount + 1);
        onNoteAccepted(); 
    };

    // Function to handle withdrawal
    const withdrawAmount = () => {
        const confirmation = window.confirm('Are you sure you want to withdraw your amount?');
        if (confirmation) {
            const amountToWithdraw = prompt('Enter the amount you want to withdraw:');
            const amount = parseInt(amountToWithdraw, 10);

            if (!isNaN(amount) && amount > 0) {
                if (balance - amount >= 5000) {
                    setBalance(balance - amount);
                    alert(`Successfully withdrew ₹${amount}. Your new balance is ₹${balance - amount}.`);
                } else {
                    alert('Withdrawal failed. You must maintain a minimum balance of ₹5000.');
                }
            } else {
                alert('Invalid amount. Please enter a valid number.');
            }
        }
    };

    return (
        <main style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Welcome to Your Profile</h2>
            <p>Current Account Balance: ₹{balance}</p>
            <p>Notes Raised: {raisedNotesCount}</p>
            <p>Notes Accepted: {acceptedNotesCount}</p>
            <div>
                <button onClick={raiseNote}>Raise Note</button> &nbsp;
                <button onClick={acceptNote}>Accept Note</button> &nbsp;
                <button onClick={withdrawAmount}>Withdraw Amount</button>
            </div>
        </main>
    );
};

MyAccount.propTypes = {
    onNoteAccepted: PropTypes.func.isRequired,
};

export default MyAccount;