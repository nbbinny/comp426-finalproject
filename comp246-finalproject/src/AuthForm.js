import React, { useState } from 'react';
import './AuthForm.css';  // Assuming you have CSS specific to this form

function AuthForm() {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div>
            <header>
                <h1>COMP 426 Project</h1>
            </header>

            <div className="toggle-div">
                {!isRegistering && (
                    <button onClick={() => setIsRegistering(true)}>Click to register</button>
                )}
                {isRegistering && (
                    <button onClick={() => setIsRegistering(false)}>Click to log-in</button>
                )}
            </div>

            {!isRegistering && (
                <form action="/" method="post" className="log-in">
                    <h1>Log-in</h1>
                    <fieldset>
                        <label htmlFor="loginName">Name</label>
                        <input type="text" id="loginName" name="name" placeholder="your name" required />

                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" id="loginPassword" name="user_password" placeholder="your password" required />
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            )}

            {isRegistering && (
                <form action="/" method="post" className="register">
                    <h1>Register</h1>
                    <fieldset>
                        <label htmlFor="registerName">Name</label>
                        <input type="text" id="registerName" name="name" placeholder="your name" required />

                        <label htmlFor="registerEmail">Email</label>
                        <input type="email" id="registerEmail" name="user_email" placeholder="email@domain.com" required />

                        <label htmlFor="registerPassword">Password</label>
                        <input type="password" id="registerPassword" name="user_password" placeholder="your password" required />
                        
                        <label htmlFor="bio">Bio Sketch</label>
                        <textarea id="bio" name="user_bio" placeholder="what do you want us to know?"></textarea>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default AuthForm;
