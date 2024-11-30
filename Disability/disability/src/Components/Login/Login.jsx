import React, { useState, useEffect } from 'react';
import "./Login.css";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import { MdLockPerson, MdEmail, MdSave, MdCancel } from "react-icons/md";

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
    const [loggedInUser, setLoggedInUser] = useState(null);

    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        fullName: ''
    });

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const activeUser = localStorage.getItem('loggedInUser');
        if (activeUser) {
            const parsedUser = JSON.parse(activeUser);
            setLoggedInUser(parsedUser);
            setProfileData({
                username: parsedUser.username,
                email: parsedUser.email || '',
                fullName: parsedUser.fullName || ''
            });
        } else if (savedUser) {
            setLoggedInUser(null);
        }
    }, []);

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleProfileChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (
            savedUser &&
            savedUser.username === loginData.username &&
            savedUser.password === loginData.password
        ) {
            alert('Login successful');
            setLoggedInUser(savedUser);
            localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
        } else {
            alert(savedUser ? 'Invalid username or password' : 'You do not have an account, please register first.');
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(
            'user',
            JSON.stringify({
                username: registerData.username,
                email: registerData.email,
                password: registerData.password,
            })
        );
        alert('Registration successful');
        setAction('');
    };

    const handleSaveProfile = () => {
        const updatedUser = { 
            ...loggedInUser, 
            ...profileData 
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        setLoggedInUser(updatedUser);
        setIsEditingProfile(false);
        alert('Profile updated successfully');
    };

    const handleLogout = () => {
        setLoggedInUser(null);
        localStorage.removeItem('loggedInUser');
    };

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };

    return loggedInUser ? (
        <div className="wrapper logged-in">
            {!isEditingProfile ? (
                <div className="profile-view">
                    <h1>Welcome, {loggedInUser.username}!</h1>
                    <div className="profile-details">
                        <p><strong>Username:</strong> {profileData.username}</p>
                        <p><strong>Email:</strong> {profileData.email || 'Not set'}</p>
                        <p><strong>Full Name:</strong> {profileData.fullName || 'Not set'}</p>
                    </div>
                    <div className="profile-actions">
                        <button 
                            className="edit-profile-button" 
                            onClick={() => setIsEditingProfile(true)}
                        >
                            <FaEdit /> Edit Profile
                        </button>
                        <button 
                            className="logout-button" 
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            ) : (
                <div className="profile-edit">
                    <h1>Edit Profile</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={profileData.username}
                            onChange={handleProfileChange}
                            required
                        />
                        <FaUserCircle className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={profileData.email}
                            onChange={handleProfileChange}
                        />
                        <MdEmail className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={profileData.fullName}
                            onChange={handleProfileChange}
                        />
                        <FaUserCircle className="icon" />
                    </div>
                    <div className="profile-edit-actions">
                        <button 
                            className="save-button" 
                            onClick={handleSaveProfile}
                        >
                            <MdSave /> Save Profile
                        </button>
                        <button 
                            className="cancel-button" 
                            onClick={() => setIsEditingProfile(false)}
                        >
                            <MdCancel /> Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    ) : (
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Log In</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={loginData.username}
                            onChange={handleLoginChange}
                            required
                        />
                        <FaUserCircle className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                        <MdLockPerson className="icon" />
                    </div>
                    <button type="submit">Log In</button>
                    <div className="register-link">
                        <p>
                            Don't have an account?{' '}
                            <a href="#" onClick={registerLink}>
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={registerData.username}
                            onChange={handleRegisterChange}
                            required
                        />
                        <FaUserCircle className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                        />
                        <MdEmail className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                        />
                        <MdLockPerson className="icon" />
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>
                            Already have an account?{' '}
                            <a href="#" onClick={loginLink}>
                                Log In
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
