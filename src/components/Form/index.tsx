import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormContainer, FormPageContainer } from "./styles";
import Button from "../Button";
import { api } from "../../lib/axios";
import { ChangeEvent, useState } from "react";

type InputProps = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

type SubmitParams = {
  data: InputProps;
  destiny: string;
};

export default function Form() {
  const location = useLocation();

  return (
    <FormPageContainer>
      {location.pathname === "/signIn" && <SignInForm />}
      {location.pathname === "/signUp" && <SignUpForm />}
      {location.pathname === "/resetPassword" && (
        <ResetPasswordForm />
      )}
    </FormPageContainer>
  );
}

type SignInFormProps = {
  onSubmit: SubmitHandler<SubmitParams>;
};

interface ILogin {
  email: string;
  password: string;
}


function SignInForm() {
  const [userLogin, setUserLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const onSubmit: SubmitHandler<ILogin> = async () => {
    try {
      const response = await api.post("/login", userLogin, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      setUserLogin({
        email: "",
        password: "",
      });
      localStorage.setItem("token", response.data.token);
      history.go(-1);
    } catch (error) {
      console.log(error)
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value.toLowerCase().trim(),
    });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <p>Insira suas credenciais para entrar na plataforma.</p>

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
            value={userLogin.email}
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
            onChange={handleChange}
            value={userLogin.password}
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

        <Button text="Login" border="corner" />
        <span>
          Não tem uma conta? <Link to="/signUp">Clique aqui</Link>.
        </span>
      </form>
    </FormContainer>
  );
}

interface Iuser {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function SignUpForm() {
  const [apiError, setApiError] = useState<string>("");
  const [user, setUser] = useState<Iuser>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const onSubmit: SubmitHandler<Iuser> = async () => {
    try {
      console.log('criar usuario:', user)
      await api.post("/user", {
        username: user.username,
        email: user.email,
        password: user.password,
        passwordConfirmation: user.passwordConfirmation,
      });
    } catch (error) {
      console.log(error)
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Iuser>();
  const ConfirmPassword = watch("password");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <FormContainer>
        <h1>Cadastrar-se</h1>
        <p>Preencha os campos abaixo para criar a sua conta.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              value={user.username}
              name="username"
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
              value={user.email}
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
              onChange={handleChange}
              value={user.password}
              name="password"
            />
            {errors.username?.type === "required" && (
              <span className="error">Este campo é obrigatório</span>
            )}
          </div>

          <div>
            <label htmlFor="confirmpassword">Digite a senha novamente</label>
            <input
              type="password"
              placeholder="Digite sua senha novamente"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => value === ConfirmPassword,
              })}
              onChange={handleChange}
              value={user.passwordConfirmation}
              name="passwordConfirmation"
            />
            {errors.passwordConfirmation?.type === "required" && (
              <span className="error">Este campo é obrigatório</span>
            )}
            {errors.passwordConfirmation?.type === "validate" && (
              <span className="error">As senhas devem ser iguais</span>
            )}
          </div>
          <Button text="Criar conta" border="corner" />
          <span>
            Já tem uma conta? <Link to="/signIn">Entrar</Link>.
          </span>

        </form>
      </FormContainer>
    </>
  );
}

interface ResetPasswordFormProps {
  email: string;
}

function ResetPasswordForm() {
  const [email, setEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormProps>();

  const handleResetPasswordUser = async () => {
    try {
      console.log("email enviado: ", email)
      await api.post('user/sendResetEmail', {
        email: email,
      });


    } catch (error) {
      console.error('Erro ao redefinir a senha', error);
    }
  }

  return (
    <FormContainer>
      <h1>Resetar senha</h1>
      <p>Informe seu email para resetar a senha.</p>

      <form onSubmit={handleSubmit(handleResetPasswordUser)}>
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <Button text="Confirmar" border="corner" />
      </form>
    </FormContainer >
  );
}
