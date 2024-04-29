import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure path is correct
import AuthForm from './AuthForm';  // Adjusted path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthForm />
    </React.StrictMode>
);



