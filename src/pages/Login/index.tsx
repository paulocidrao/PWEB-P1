import { Link, useNavigate } from 'react-router-dom';

import Button from "../../components/Button";
import { LoginContainer, LoginFormContainer } from "./styles";

export default function Login() {
    const navigate = useNavigate();

    function handleSubmit() {
        navigate("/")
    }

    return (
        <LoginContainer>
            <LoginFormContainer>
                <h1>Login</h1>
                <p>Insira suas credenciais para entrar na plataforma.</p>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Digite seu nome de usuario" />
                    </div>

                    <div>
                        <label htmlFor="">Senha</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <Button text="Sign in" />
                    <span>Não tem uma conta? <Link to="/signup">Clique aqui</Link>.</span>
                </form>
            </LoginFormContainer>
        </LoginContainer>
    )
}