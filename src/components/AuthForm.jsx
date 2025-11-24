import React from "react";
import { Link } from "react-router-dom";
import '../styles/AuthForm.css';

export default function AuthForm({
    title,
    buttonText,
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    linkText,
    linkHref,
    children
}) {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>{title}</h2>

                <form onSubmit={onSubmit} className="auth-form">
                    <input
                        className="input"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="input"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn" type="submit">
                        {buttonText}
                    </button>
                </form>

                {children}

                <p style={{ marginTop: '1rem', textAlign: 'center' }}>
    <a href={linkHref}>{linkText}</a><br/>
    <a href="/forgot-password">Esqueceu sua senha?</a>
</p>
            </div>
        </div>
    );
}
