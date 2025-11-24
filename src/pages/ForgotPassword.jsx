import React, { useState } from "react";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        if(!email.includes('@')) return;

        // simulação
        localStorage.setItem('recovery_email', email);
        setSent(true);
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Recuperar senha</h2>

                {sent ? (
                    <p>Enviamos um link de redefinição para seu e-mail.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="auth-form">
                        <input
                            className="input"
                            type="email"
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn" type="submit">Enviar link</button>
                    </form>
                )}
            </div>
        </div>
    );
}
