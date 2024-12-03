// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './raise.css';

const Raise = ({ onNoteRaised }) => {
    const [yourname, setYourName] = useState('');
    const [reason, setReason] = useState('');
    const [classRoomNo, setClassRoomNo] = useState('');
    const [division, setDivision] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [startTime, setStartTime] = useState(''); 
    const [endTime, setEndTime] = useState(''); 

    // Function to handle raising a note
    const raiseNote = () => {
        const currentTime = new Date();
        const start = new Date(`${currentTime.toDateString()} ${startTime}`);
        const end = new Date(`${currentTime.toDateString()} ${endTime}`);

        if (!startTime || !endTime || !yourname || !reason || !classRoomNo || !division || !subjectName) {
            alert('Please fill in all fields.');
            return;
        }

        // Ensure startTime is greater than the current time
        if (start <= currentTime) {
            alert('Starting time should be greater than the current time.');
            return;
        }

        // Ensure startTime is less than endTime
        if (start >= end) {
            alert('Ending time should be greater than starting time.');
            return;
        }

        const newNote = {
            name: yourname,
            reason: reason,
            classRoomNo: classRoomNo,
            division: division,
            subjectName: subjectName,
            startTime: start.toString(),
            endTime: end.toString(),
            id: Date.now(),
            expired: false,  // Add expiration flag
        };

        onNoteRaised(newNote);
        resetForm();

        // Set a timeout to mark the note as expired after the class duration
        const classDuration = end.getTime() - start.getTime();
        setTimeout(() => {
            onNoteExpired(newNote.id);
        }, classDuration);
    };

    // Function to reset the input fields
    const resetForm = () => {
        setYourName('');
        setReason('');
        setClassRoomNo('');
        setDivision('');
        setSubjectName('');
        setStartTime('');
        setEndTime('');
    };

    // Function to handle note expiration
    const onNoteExpired = (noteId) => {
        // Call this function when a note expires
        console.log(`Note with ID ${noteId} has expired.`);
        // You can trigger a state update or display logic here to show it as expired in the UI
        // Example: You could pass a callback from the parent to mark the note as expired
    };

    return (
        <main className="raise-container">
            <h2 className="raise-title">Raise a Note</h2>
            <div className="raise-form">
                <input
                    type="text"
                    value={yourname}
                    onChange={(e) => setYourName(e.target.value)}
                    placeholder="Enter your name here:"
                    className="raise-input"
                />
                <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Reason for Proxy"
                    className="raise-input"
                />
                <input
                    type="text"
                    value={classRoomNo}
                    onChange={(e) => setClassRoomNo(e.target.value)}
                    placeholder="Class Room No"
                    className="raise-input"
                />
                <input
                    type="text"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    placeholder="Division"
                    className="raise-input"
                />
                <input
                    type="text"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    placeholder="Subject Name"
                    className="raise-input"
                />
                <label className="raise-label">Class Starting Time:</label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="raise-input"
                />
                <label className="raise-label">Class Ending Time:</label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="raise-input"
                />
                <button onClick={raiseNote} className="raise-button">Raise Note</button>
            </div>
        </main>
    );
};

// Define prop types for validation
Raise.propTypes = {
    onNoteRaised: PropTypes.func.isRequired,
};

export default Raise;