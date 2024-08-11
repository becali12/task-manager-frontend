import React, { useState } from 'react';
import '../styles/SignIn.css';

function SignInPage() {
    // form variables
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // bool state variables
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const ErrorMessage = () => <div>error</div>;
    const SuccessMessage = () => <div>success</div>;

    const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password && email) {
            setSubmitted(true);
        }
        else {
            setError(true);
        }
    }

    return (
        <div className='signin-container'>
            <div className='signin-form'>
                <h1>Login</h1>
                {error && <ErrorMessage />}
                {submitted && <SuccessMessage />}
                <form onSubmit={handleSubmit}>
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
                    <span>Don't have an account? <a href='/signup'> Sign up here</a>.</span>
                </form>
            </div>
        </div>
    );

}

export default SignInPage;
