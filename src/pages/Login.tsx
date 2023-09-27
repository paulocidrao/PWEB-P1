import { useForm, SubmitHandler } from "react-hook-form";
interface ILoginInputs{
  Email:string,
  Senha:string,
}
export const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<ILoginInputs>();
  const EmailUser = JSON.parse(localStorage.getItem('email')||'');
  const SenhaUser = JSON.parse(localStorage.getItem('senha')||'');
  console.log(EmailUser);
  console.log(SenhaUser);
  const onSubmit: SubmitHandler<ILoginInputs> =() =>{
    console.log('logado!')
  };
  return (
    <>
      <section className=" h-screen  flex  items-center justify-center ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6  pb-8 mb-4 flex flex-col w-1/3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-3xl items-center mb-5">Realize o seu login</h2>
          <label htmlFor="Nome" className="text-xl">
            Email
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            {...register("Email", {
              required: true,
              validate: (value) => value === EmailUser,
            })}
          />

          <label htmlFor="senha" className="text-xl">
            Senha
          </label>

          <input
            type="password"
            placeholder="Digite a sua senha"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            {...register("Senha", {
              required: true,
              validate: (value) => value === SenhaUser,
            })}
          />
          {(errors.Email?.type === "validate" ||
            errors.Email?.type === "required" ||
            errors.Senha?.type === "validate" ||
            errors.Senha?.type === "required") && (
            <p className="text-red-600 font-bold">Verifique os seus dados</p>
          )}
          <button className="bg-blue-500 text-white font-bold p-2 rounded w-full hover:bg-blue-700">
            Login
          </button>
          <span className="self-center mt-4">
            Não tem conta?{" "}
            <a href="" className="text-blue-700 font-bold">
              crie a sua conta aqui
            </a>
          </span>
        </form>
      </section>
    </>
  );
};
