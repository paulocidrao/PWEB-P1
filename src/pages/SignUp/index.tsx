import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { api } from "../../lib/axios";
import { useState } from "react";
import { FormContainer } from "../../components/Form/styles";
import { CriarConta, ErrorAPi } from "./styles";

interface Iuser {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function SignUp() {
  const [apiError, setApiError] = useState<string>("");
  const [user, setUser] = useState<Iuser>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const onSubmit: SubmitHandler<Iuser> = async () => {
    try {
      await api.post("/user", user, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      setUser({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });
      history.go(-2);
    } catch (error) {
      setApiError("Não foi possivel realizar o seu cadastro!");
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
      [e.target.name]: e.target.value.toLowerCase().trim(),
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
          <CriarConta>Criar Conta</CriarConta>
          <span>
            Já tem uma conta? <Link to="/signIn">Entrar</Link>.
          </span>
          {apiError && <ErrorAPi>{apiError}</ErrorAPi>}
        </form>
      </FormContainer>
    </>
  );
}
