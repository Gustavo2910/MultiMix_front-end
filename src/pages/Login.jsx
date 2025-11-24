import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import AuthForm from "../components/AuthForm";
import AuthError from "../components/AuthError";

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    

    function handleLogin(e){
        e.preventDefault()
        if(!email.includes('@')){
            setError('E-mail inválido')
            return
        }
        if(password.length < 4){
            setError('Caracteres de senha insuficientes')
            return
        }

    localStorage.setItem('newTech_user', JSON.stringify({email, password}))
    navigate('/products')
    }
    
    return(
        <AuthForm
        title="Entrar - NewTech"
        buttonText= "Entrar"
        onSubmit={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        linkText="Criar conta"
        linkHref='/register'
        >
            <AuthError message={error}/>
        </AuthForm>
    )
}