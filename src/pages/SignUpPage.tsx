import React, { useState } from 'react';
import '../styles/SignIn.css';

function SignUpPage() {
    // form variables
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // bool state variables
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const ErrorMessage = () => <div>error</div>;
    const SuccessMessage = () => <div>success</div>;

    const handleFirstName = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e : React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (firstName && lastName && password && email) {
            setSubmitted(true);
        }
        else {
            setError(true);
        }
    }

    return (
        <div className='signin-container'>
            <div className='signin-form'>
                <h1>Sign Up</h1>
                {error && <ErrorMessage />}
                {submitted && <SuccessMessage />}
                <form onSubmit={handleSubmit}>
                    <label className="label">First Name</label>
                    <input
                        onChange={handleFirstName}
                        className="input"
                        value={firstName}
                        type="text"
                    />
                    <label className="label">Last Name</label>
                    <input
                        onChange={handleLastName}
                        className="input"
                        value={lastName}
                        type="text"
                    />
                    <label className="label">Email address</label>
                    <input
                        onChange={handleEmail}
                        className="input"
                        value={email}
                        type="email"
                    />
                    <label className="label">Password</label>
                    <input
                        onChange={handlePassword}
                        className="input"
                        value={password}
                        type="password"
                    />
                    <button type="submit">Submit</button>
                    <span>Already have an account? <a href='www.google.com'> Sign in</a> instead.</span>
                </form>
            </div>
        </div>
    );

}

export default SignUpPage;
