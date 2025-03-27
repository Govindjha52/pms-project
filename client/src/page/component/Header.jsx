import './header.css';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import logo from '../assests/logo1.png';
import { FaBell } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Header = ({ notifications }) => {
    // State variables
    const [notificationCount, setNotificationCount] = useState(0); // Initialize with 0
    const [showNotificationList, setShowNotificationList] = useState(false);
    const [readNotifications, setReadNotifications] = useState([]);
    const [acceptedNotes, setAcceptedNotes] = useState(new Set());
    const [selectedNote, setSelectedNote] = useState(null);

    // Toggle visibility of notification list
    const toggleNotificationList = () => {
        setShowNotificationList(!showNotificationList);
    };

    // Mark all notifications as read
    const markAllAsRead = () => {
        setReadNotifications(notifications.map(note => note.id));
        setNotificationCount(0);
        setShowNotificationList(false);
    };

    // Accept a note
    const handleAcceptNote = (note) => {
        alert(`You have accepted the note for ${note.classRoomNo}. ₹300 has been credited to your account.`);
        setAcceptedNotes(prev => new Set(prev).add(note.id)); // Remove the "Accept" button after accepting
        setSelectedNote(note);
    };

    // Mark a note as read and decrease notification count
    const handleMarkAsRead = (note) => {
        if (!readNotifications.includes(note.id)) {
            setReadNotifications([...readNotifications, note.id]);
            setNotificationCount(prevCount => Math.max(prevCount - 1, 0)); // Decrease count by 1
        }
    };

    // Update notification count when new notifications are received
    useEffect(() => {
        setNotificationCount(
            notifications.filter(note => !readNotifications.includes(note.id)).length // Unread notifications count
        );
    }, [notifications, readNotifications]);

    // Print selected note details
    const printNoteDetails = () => {
        if (!selectedNote) return;

        const printContent = `
            <h3>Note Details</h3>
            <p><strong>Name:</strong> ${selectedNote.name}</p>
            <p><strong>Reason:</strong> ${selectedNote.reason}</p>
            <p><strong>Class Room No:</strong> ${selectedNote.classRoomNo}</p>
            <p><strong>Division:</strong> ${selectedNote.division}</p>
            <p><strong>Subject Name:</strong> ${selectedNote.subjectName}</p>
            <p><strong>Start Time:</strong> ${selectedNote.startTime}</p>
            <p><strong>End Time:</strong> ${selectedNote.endTime}</p>
            <p><strong>Raised At:</strong> ${new Date(selectedNote.id).toLocaleString()}</p>
        `;

        const printWindow = window.open('', '_blank', 'width=600,height=400');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Note Details</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        h3 { color: #333; }
                        p { margin: 5px 0; }
                    </style>
                </head>
                <body>
                    ${printContent}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <>
            {/* Header Section */}
            <header className="header">
                <img src={logo} alt="React Logo" className="header-logo" />
                <div className="header-left">Proxy Management System</div>
                <div className="header-right">
                    <div className="notification-icon" onClick={toggleNotificationList}>
                        <FaBell className="icon" />
                        <span className="notification-count">{notificationCount}</span> {/* Always show the count, even if it's 0 */}
                    </div>
                    <a href="/login">Login</a>
                </div>
            </header>

            {/* Notification List Dropdown */}
            {showNotificationList && (
                <div className="notification-dropdown">
                    <div className="notification-header">
                        <span>Notifications</span>&nbsp; &nbsp;
                        <button onClick={markAllAsRead}>Mark All as Read</button>
                    </div>
                    {notifications.length === 0 ? (
                        <div>No notifications now.</div>
                    ) : (
                        <ul className="notification-list">
                            {[...notifications].reverse().map((note, index) => (
                                <li
                                    key={index}
                                    className={`notification-item ${readNotifications.includes(note.id) ? 'read' : 'unread'}`}
                                    onClick={() => handleMarkAsRead(note)} // Mark as read on click
                                >
                                    <div className="note-details">
                                        <strong>Reason: {note.reason}</strong><br />
                                        Raised by: {note.name}
                                        <br />
                                        <small>Div: {note.division}</small><br />
                                        <small>Sub: {note.subjectName}</small>
                                    </div>

                                    {/* Remove "Accept" button after note is accepted */}
                                    {acceptedNotes.has(note.id) ? (
                                        <button onClick={() => setSelectedNote(note)}>Show Details</button>
                                    ) : (
                                        <button
                                            className="btn accept-btn"
                                            onClick={(e) => { e.stopPropagation(); handleAcceptNote(note); }}
                                        >
                                            Accept
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {/* Note Details Modal */}
            {selectedNote && (
                <div className="note-details-modal">
                    <div className="modal-content">
                        <h3>Note Details</h3>
                        <div className="modal-details">
                            <p><strong>Name:</strong> {selectedNote.name}</p>
                            <p><strong>Reason:</strong> {selectedNote.reason}</p>
                            <p><strong>Class Room No:</strong> {selectedNote.classRoomNo}</p>
                            <p><strong>Division:</strong> {selectedNote.division}</p>
                            <p><strong>Subject Name:</strong> {selectedNote.subjectName}</p>
                            <p><strong>Start Time:</strong> {selectedNote.startTime}</p>
                            <p><strong>End Time:</strong> {selectedNote.endTime}</p>
                            <p><strong>Raised At:</strong> {new Date(selectedNote.id).toLocaleString()}</p>
                        </div>
                        <button className="btn close-btn" onClick={() => setSelectedNote(null)}>Close</button>&nbsp;
                        <button className="btn close-btn" onClick={printNoteDetails}>Print</button>
                    </div>
                </div>
            )}

            {/* Navigation Section */}
            <nav className="header-nav">
                <ul>
                    <li id = "myhome"><a href="/Home">Home</a></li>
                    <li><a href="/raise-note">Raise a Note</a></li>
                    <li><a href="/transaction-history">Transaction History</a></li>
                    <li className="header-nav-right"><a href="/my-account">My Account</a></li>
                </ul>
            </nav>
        </>
    );
};

// Define prop types for validation
Header.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            reason: PropTypes.string.isRequired,
            classRoomNo: PropTypes.string.isRequired,
            division: PropTypes.string.isRequired,
            subjectName: PropTypes.string.isRequired,
            startTime: PropTypes.string.isRequired,
            endTime: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Header;