import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { api } from "../../lib/axios";
import { useState } from "react";
import { ErrorAPi, FormPageContainer, Logar } from "./styles";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const [apiError, setApiError] = useState<string>("");
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
      setApiError("Seus dados estão invalidos");
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
    <>
      <FormPageContainer>
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
