import React from 'react'
import { useState } from 'react';
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Resetting errors
        setErrors({});

        // Validation
        const errorsObj = {};
        if (!username.trim()) {
            errorsObj.username = 'Username is required';
        }
        if (!password.trim()) {
            errorsObj.password = 'Password is required';
        }

        if (Object.keys(errorsObj).length > 0) {
            setErrors(errorsObj);
            return;
        }

        // If validation passes, you can proceed with your login logic
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                    <button type="submit">login</button>
                </form>
            </div>
        </div>
    );
}

export default Login

