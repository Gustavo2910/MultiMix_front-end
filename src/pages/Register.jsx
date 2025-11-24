import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import AuthForm from "../components/AuthForm";
import AuthError from "../components/AuthError";


export default function Register(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleRegister(e){
        e.preventDefault()
        if(!email.includes('@')){
            setError('Digite um e-mail válido.')
            return
        }
        if(password.length < 4){
            setError('A senha deve ter pelo menos 4 caracteres.')
            return
        }

    localStorage.setItem('newTech_user', JSON.stringify({email, password}))
    navigate('/login')
    }
    return(
        <AuthForm
        title="Criar  Conta"
        buttonText= "Cadastrar"
        onSubmit={handleRegister}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        linkText="Já possui conta? Entrar"
        linkHref='/login'
        >
            <AuthError message={error}/>
        </AuthForm>
    )
}