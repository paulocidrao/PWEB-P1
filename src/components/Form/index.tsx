import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormContainer, FormPageContainer } from "./styles";
import Button from "../Button";
import { api } from "../../lib/axios";
import { useState } from "react";

type InputProps = {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

type SubmitParams = {
  data: InputProps;
  destiny: string;
};

export default function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState<InputProps>({
    username: "",
    email: "",
    password: "",
  });

  function handleRedirectUser(destiny: string) {
    navigate(destiny);
  }

  const onSubmit: SubmitHandler<SubmitParams> = async ({ data, destiny }) => {
    try {
      await api.post("/user", users, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      setUsers({
        username: "",
        email: "",
        password: "",
      });
      handleRedirectUser(destiny);
    } catch {
      <p>Erro ao se cadastrar</p>;
    }

    console.log(data);
  };

  return (
    <FormPageContainer>
      {location.pathname === "/signIn" && <SignInForm onSubmit={onSubmit} />}
      {location.pathname === "/signUp" && <SignUpForm onSubmit={onSubmit} />}
      {location.pathname === "/resetPassword" && (
        <ResetPasswordForm onSubmit={onSubmit} />
      )}
    </FormPageContainer>
  );
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
      <h1>Login</h1>
      <p>Insira suas credenciais para entrar na plataforma.</p>

      <form onSubmit={handleSubmit((data) => onSubmit({ data, destiny: "/" }))}>
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome de usuario"
            {...register("username", {
              required: "Este campo é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9_-]+$/i,
                message:
                  "Nome de usuário inválido. Use letras, números, underscores (_) e hífens (-).",
              },
            })}
          />
          {errors.username?.type === "required" && (
            <span className="error">{errors.username.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <span className="error">Este campo é obrigatório</span>
          )}
        </div>

        <span>
          <Link to={"/resetPassword"} className="noUnderline">
            Esqueci a senha
          </Link>
        </span>

        <Button text="Sign in" border="corner" />
        <span>
          Não tem uma conta? <Link to="/signUp">Clique aqui</Link>.
        </span>
      </form>
    </FormContainer>
  );
}

function SignUpForm({ onSubmit }: SignInFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InputProps>();

  const ConfirmPasswords = watch("password");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value.toLowerCase().trim(),
    });
  };
  return (
    <FormContainer>
      <h1>Cadastrar-se</h1>
      <p>Preencha os campos abaixo para criar a sua conta.</p>

      <form
        onSubmit={handleSubmit((data) =>
          onSubmit({ data, destiny: "/signIn" })
        )}
      >
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome de usuario"
            {...register("username", {
              required: "Este campo é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9_-]+$/i,
                message:
                  "Nome de usuário inválido. Use letras, números, underscores (_) e hífens (-).",
              },
            })}
            onChange={handleChange}
            value={users.nome}
            name="nome"
          />
          {errors.username?.type === "required" && (
            <span className="error">{errors.username.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Este campo é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Endereço de e-mail inválido",
              },
            })}
            onChange={handleChange}
            value={users.email}
            name="email"
          />
          {errors.email?.type === "required" && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password", { required: true })}
          />
          {errors.username?.type === "required" && (
            <span className="error">Este campo é obrigatório</span>
          )}
        </div>

        <div>
          <label htmlFor="">Digite a senha novamente</label>
          <input
            type="password"
            placeholder="Digite sua senha novamente"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === ConfirmPasswords,
            })}
            onChange={handleChange}
            value={users.password}
            name="senha"
          />
          {errors.confirmPassword?.type === "required" && (
            <span className="error">Este campo é obrigatório</span>
          )}
          {errors.confirmPassword?.type === "validate" && (
            <span className="error">As senhas devem ser iguais</span>
          )}
        </div>

        <Button text="Criar conta" border="corner" />
        <span>
          Já tem uma conta? <Link to="/signIn">Entrar</Link>.
        </span>
      </form>
    </FormContainer>
  );
}

function ResetPasswordForm({ onSubmit }: SignInFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();

  return (
    <FormContainer>
      <h1>Resetar senha</h1>
      <p>Informe seu email para resetar a senha.</p>

      <form
        onSubmit={handleSubmit((data) =>
          onSubmit({ data, destiny: "/signIn" })
        )}
      >
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Este campo é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Endereço de e-mail inválido",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <Button text="Confirmar" border="corner" />
      </form>
    </FormContainer>
  );
}
