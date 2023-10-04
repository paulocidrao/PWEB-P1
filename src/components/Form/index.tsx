import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormContainer, FormPageContainer } from "./styles";
import Button from "../Button";

type InputProps = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type SubmitParams = {
    data: InputProps;
    destiny: string;
};

export default function Form() {
    const navigate = useNavigate();
    const location = useLocation();

    function handleRedirectUser(destiny: string) {
        navigate(destiny)
    }

    const onSubmit: SubmitHandler<SubmitParams> = ({ data, destiny }) => {
        handleRedirectUser(destiny);
        console.log(data);
    };

    return (
        <FormPageContainer>
            {location.pathname === '/signIn' && <SignInForm onSubmit={onSubmit} />}
            {location.pathname === '/signUp' && <SignUpForm onSubmit={onSubmit} />}
            {location.pathname === '/resetPassword' && <ResetPasswordForm onSubmit={onSubmit} />}
        </FormPageContainer>
    )
}

type SignInFormProps = {
    onSubmit: SubmitHandler<SubmitParams>;
};

function SignInForm({ onSubmit }: SignInFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>();

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <p>Insira suas credenciais para entrar na plataforma.</p>

            <form onSubmit={handleSubmit((data) => onSubmit({ data, destiny: '/' }))}>

                <div>
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome de usuario"
                        {...register("username",
                            {
                                required: 'Este campo é obrigatório',
                                pattern: {
                                    value: /^[a-zA-Z0-9_-]+$/i,
                                    message: 'Nome de usuário inválido. Use letras, números, underscores (_) e hífens (-).',
                                }
                            })}
                    />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="Digite sua senha" {...register("password", { required: true })} />
                    {errors.password && <span className="error">Este campo é obrigatório</span>}
                </div>

                <span>
                    <Link to={"/resetPassword"} className="noUnderline">
                        Esqueci a senha
                    </Link>
                </span>

                <Button text="Sign in" />
                <span>Não tem uma conta? <Link to="/signUp">Clique aqui</Link>.</span>
            </form>
        </FormContainer>
    )

}

function SignUpForm({ onSubmit }: SignInFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>();

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <p>Preencha os campos abaixo para criar a sua conta.</p>

            <form onSubmit={handleSubmit((data) => onSubmit({ data, destiny: '/signIn' }))}>
                <div>
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome de usuario"
                        {...register("username",
                            {
                                required: 'Este campo é obrigatório',
                                pattern: {
                                    value: /^[a-zA-Z0-9_-]+$/i,
                                    message: 'Nome de usuário inválido. Use letras, números, underscores (_) e hífens (-).',
                                }
                            })}
                    />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder="Digite seu email"
                        {...register('email', {
                            required: 'Este campo é obrigatório',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Endereço de e-mail inválido',
                            },
                        })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password", { required: true })}
                    />
                    {errors.username && <span className="error">Este campo é obrigatório</span>}
                </div>

                <div>
                    <label htmlFor="">Digite a senha novamente</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha novamente"
                        {...register("confirmPassword", { required: true })}
                    />
                    {errors.confirmPassword && <span className="error">Este campo é obrigatório</span>}
                </div>

                <Button text="Criar conta" />
                <span>Já tem uma conta? <Link to="/signIn">Entrar</Link>.</span>
            </form>
        </FormContainer>
    )
}

function ResetPasswordForm({ onSubmit }: SignInFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>();

    return (
        <FormContainer>
            <h1>Reset password</h1>
            <p>Informe seu email para resetar a senha.</p>

            <form onSubmit={handleSubmit((data) => onSubmit({ data, destiny: '/signIn' }))}>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder="Digite seu email"
                        {...register('email', {
                            required: 'Este campo é obrigatório',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Endereço de e-mail inválido',
                            },
                        })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <Button text="Confirmar" />
            </form>
        </FormContainer>
    )
}