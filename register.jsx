import React, { useState } from 'react';

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: ''
    });
    const [errorMsg, setErrorMsg] = useState('');

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg(''); // Clear any existing error messages

        try {
            const response = await fetch('/sign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                window.location.href = 'logout.html'; // Redirect on success
            } else {
                setErrorMsg(result.message);
            }
        } catch (error) {
            setErrorMsg('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container" style={styles.container}>
            <img
                src="https://github.com/parvez786755/FlavoursJoy/blob/main/logooooo.png?raw=true"
                alt="FlavorJoy Logo"
                style={styles.logo}
            />
            <h1 style={styles.title}>Register</h1>
            <form onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <span style={styles.icon}>👤</span>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <span style={styles.icon}>👤</span>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <span style={styles.icon}>📧</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <span style={styles.icon}>🔒</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <span style={styles.icon}>📱</span>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Register</button>
                {errorMsg && <div style={styles.error}>{errorMsg}</div>}
            </form>
        </div>
    );
}

// Styles for the component
const styles = {
    container: {
        width: '40%',
        margin: '50px auto',
        padding: '30px',
        backgroundColor: '#fff5e8',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
    },
    logo: {
        display: 'block',
        margin: '0 auto 20px',
        width: '150px',
        height: 'auto'
    },
    title: {
        color: '#6c5b7b',
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '2.5rem'
    },
    inputGroup: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    icon: {
        marginRight: '10px',
        fontSize: '1.5rem'
    },
    input: {
        width: 'calc(100% - 40px)',
        padding: '10px',
        fontSize: '1.1rem',
        border: '2px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
        transition: 'border 0.3s'
    },
    button: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#6c5b7b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    error: {
        color: 'red',
        marginTop: '10px',
        textAlign: 'center'
    }
};

export default Registration;
