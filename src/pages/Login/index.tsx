import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { api } from "../../lib/axios";
import { useState } from "react";
import { ErrorAPi, FormPageContainer, Logar } from "./styles";

interface ILogin {
  username: string;
  password: string;
}

export default function Login() {
  const [apiError, setApiError] = useState<string>("");
  const [userLogin, setUserLogin] = useState<ILogin>({
    username: "",
    password: "",
  });

  const onSubmit: SubmitHandler<ILogin> = async () => {
    try {
      await api.post("/login", userLogin, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      setUserLogin({
        username: "",
        password: "",
      });
      history.go(-1);
    } catch (error) {
      setApiError("Seus dados estão invalidos");
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>();

  return (
    <>
      <FormPageContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <p>Insira suas credenciais para entrar na plataforma.</p>

          <div>
            <label htmlFor="username">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              {...register("username", {
                required: "Este campo é obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9_-]+$/i,
                  message:
                    "Nome de usuário inválido. Use letras, números, underscores (_) e hífens (-).",
                },
              })}
            />
            {errors.username?.message && (
              <span className="error">{errors.username.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password", {
                required: "Este campo é obrigatório",
              })}
            />
            {errors.password?.message && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <span>
            <Link to={"/resetPassword"} className="noUnderline">
              Esqueci a senha
            </Link>
          </span>

          <Logar type="submit">Logar</Logar>
          {apiError && <ErrorAPi>{apiError}</ErrorAPi>}
          <span>
            Não tem uma conta? <Link to="/signUp">Clique aqui</Link>.
          </span>
        </form>
      </FormPageContainer>
    </>
  );
}
