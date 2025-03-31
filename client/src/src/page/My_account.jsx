// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate} from 'react-router-dom';
import './myaccount.css';

const MyAccount = ({ onNoteAccepted }) => {
    let [balance, setBalance] = useState(5000);
    const [raisedNotesCount, setRaisedNotesCount] = useState(0);
    const [acceptedNotesCount, setAcceptedNotesCount] = useState(0);
    const navigate=useNavigate();
  
    // Function to handle raising a note
    const raiseNote = () => {
        <Link to="/raise-note"></Link>
        navigate('/raise-note');  //navigate to raise-note page
        if (balance >= 300) {
            setBalance(balance - 300); 
            setRaisedNotesCount(raisedNotesCount + 1);
        } else {
            alert('Insufficient balance to raise a note.');
        }       
    };

    // Function to accept a note
    const acceptNote = () => {
        // now,handle manually for example
      let count=1;
    
        if(count >=1){
            setBalance(balance + 300); 
            setAcceptedNotesCount(acceptedNotesCount + 1);
            onNoteAccepted(); 
        }
        else{
            alert(`There Is No Note Is Available Right Now..  `)
        } 
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
                    alert(`Successfully withdrAw ₹${amount}. Your new balance is ₹${balance - amount}.`);
                } else {
                    alert('Withdrawal failed. You must maintain a minimum balance of ₹5000.');
                }
            } else {
                alert('Invalid amount. Please enter a valid number.');
            }
    }
    };


    let Addamount = () => {
        alert(`Your Current Balance is: ${balance}`);
        let newAmount = prompt("Enter the Amount to Add to Your Account: ");
        if (newAmount !== null) {    
          let amount = parseFloat(newAmount);         
          if (!isNaN(amount)) {
            // Update the balance
            setBalance(balance + amount);
          } else {
            alert("Invalid amount. Please enter a valid number.");
          }
        }
      };


    return (
        <div className='box'>
            <h2>Welcome to Your Profile</h2>
            <p>Current Account Balance: ₹{balance}</p>
            <p>Notes Raised: {raisedNotesCount}</p>
            <p>Notes Accepted: {acceptedNotesCount}</p>

            <div id='button-gr'>
                <button onClick={raiseNote}>Raise Note</button> 
                <button onClick={acceptNote}>Accept Note</button> 
                <button onClick={withdrawAmount}>Withdraw Amount</button>
                <button onClick={Addamount}>Add Amount </button>
            </div>
        </div>
    );
};

MyAccount.propTypes = {
    onNoteAccepted: PropTypes.func.isRequired,
};

export default MyAccount;