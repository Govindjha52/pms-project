// Transaction_History.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ notifications }) => {
    return (
        <main style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Transaction History</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {notifications.length === 0 ? (
                    <p>No notes raised yet.</p>
                ) : (
                    notifications.map((note) => (
                        <li key={note.id} style={{ margin: '10px 0' }}>
                            <div>
                                <strong>Name:</strong> {note.name}<br />
                                <strong>Reason:</strong> {note.reason}<br />
                                <strong>Date:</strong> {new Date(note.id).toLocaleString()}<br />
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </main>
    );
};

Transaction.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            reason: PropTypes.string.isRequired,
            classRoomNo: PropTypes.string,
            division: PropTypes.string,
            subjectName: PropTypes.string,
            startTime: PropTypes.string,
            endTime: PropTypes.string,
        })
    ).isRequired,
};

export default Transaction;