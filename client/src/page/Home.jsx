// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.css'; 
import Thought from './thought';

const Home = ({ notifications }) => {
    const handleAcceptNote = (note) => {
        alert(`You have accepted the note for ${note.classRoomNo}. ₹300 has been credited to your account.`);
    };

    useEffect(() => {
        console.log('Notifications updated:', notifications);
    }, [notifications]); 

    return (
        
        
        <main className="home-container">
            <h1 className="home-title">Proxy Management System</h1>
            <p className="home-subtitle">Manage lectures seamlessly without interruptions</p>

            <div className="thought">
                <b><p>Great Thoughts</p></b><hr />
                <h3>Quote of the Moment is:</h3>
            <Thought/> <br />
            </div>
            
            {/* Display platform information */}
            <div className="platform-info">
                <h3>About Our Platform</h3>
                <p>
                    This system provides a solution for managing lecture attendance efficiently. 
                    Each faculty member has their own account, ensuring secure access to the platform. 
                    If a faculty member cannot conduct a class, they can raise a note explaining the reason, 
                    which can then be approved or rejected by higher authorities. 
                    Once approved, other faculty members can accept the note and conduct the class, receiving 
                    ₹300 for their assistance.
                </p>
                <p>
                    With this platform, we ensure that classes are held without breaks or mass bunking, 
                    providing a seamless educational experience for students and faculty a like.
                </p>
            </div>

            {/* Notifications Section */}
            {notifications.length > 0 ? (
                <div className="notification-section">
                    <h3>Pending Notifications</h3>
                    <ul className="notification-list">
                        {notifications.map((note) => (
                            <li key={note.id} className="notification-item">
                                <div className="note-details">
                                    <p><strong>Reason:</strong> {note.reason}</p>
                                    <p><strong>Class Room No:</strong> {note.classRoomNo}</p>
                                    <p><strong>Division:</strong> {note.division}</p>
                                    <p><strong>Subject Name:</strong> {note.subjectName}</p>
                                </div>
                                <div className="note-actions">
                                    <button 
                                        className="btn accept-btn" 
                                        onClick={() => handleAcceptNote(note)}
                                    >
                                        Accept Note
                                    </button>
                                    <button 
                                        className="btn discard-btn"
                                        onClick={() => alert(`You discarded the note for ${note.classRoomNo}.`)}
                                    >
                                        Discard Note
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="no-notifications">
                    <h3>No Pending Notifications</h3>
                    <h3>All the classes are conducted without any interruptions</h3>
                    <p>All lectures are covered. Enjoy your day!</p>
                </div>
            )}
        </main>
    );
};

// Define prop types for validation
Home.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            reason: PropTypes.string.isRequired,
            classRoomNo: PropTypes.string.isRequired,
            division: PropTypes.string.isRequired,
            subjectName: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Home;
