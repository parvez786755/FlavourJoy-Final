import React, { useState } from 'react';
import './sign.css'; // External CSS (if needed)

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('/submit-login', {
                method: 'POST',
                body: formData,
            });

            const result = await response.text();

            if (response.ok) {
                window.location.href = '/welcome'; // Redirect to welcome page
            } else {
                setErrorMsg(result); // Display error message
            }
        } catch (error) {
            setErrorMsg('An error occurred, please try again.');
        }
    };

    return (
        <div className="login-container">
            <img
                src="https://github.com/parvez786755/FlavoursJoy/blob/main/logooooo.png?raw=trnodeue"
                alt="FlavorJoy Logo"
                className="logo"
            />
            <form onSubmit={handleSubmit} id="loginForm">
                <div className="input-group">
                    <span className="icon">📧</span>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <span className="icon">🔒</span>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
                {errorMsg && <div id="errorMsg" className="error">{errorMsg}</div>}
            </form>
            <div className="social-login">
                <p>Continue with:</p>
                <div className="social-icons">
                    <img
                        src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                        alt="Google"
                        className="social-logo"
                    />
                    <img
                        src="https://pngimg.com/uploads/microsoft/microsoft_PNG13.png"
                        alt="Microsoft"
                        className="social-logo"
                    />
                    <img
                        src="https://i.pinimg.com/736x/65/22/5a/65225ab6d965e5804a632b643e317bf4.jpg"
                        alt="Apple"
                        className="social-logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
