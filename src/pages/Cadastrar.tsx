import { useForm, SubmitHandler } from "react-hook-form";
import validator from "validator"
interface IFormInputs {
  Nome: string,
  Email:string,
  CPF:string,
  Senha:string,
  ConfirmarSenha:string
}



const onSubmit: SubmitHandler<IFormInputs> =( data) =>{
  localStorage.setItem("email",JSON.stringify(data.Email));
  localStorage.setItem("senha",JSON.stringify(data.Senha));
};
export const Cadastro = () => {
  const { register, formState: { errors }, handleSubmit,watch } = useForm<IFormInputs>();
  const ConfirmarSenhas =watch('Senha')
  return (
    <>
      <section className=" h-screen  flex  items-center justify-center ">
        <form className="bg-white shadow-md rounded px-8 pt-6  pb-8 mb-4 flex flex-col w-1/3" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl items-center mb-5">Realize o seu cadastro</h2>
          <label htmlFor="Nome" className="text-xl">
            Nome
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            {...register('Nome', {required:true,pattern:/^[a-zA-ZÀ-ÿ\s]+$/})}
          />
          {errors.Nome?.type === "required" &&   <p className="text-red-600 font-bold ">O nome é obrigatorio</p>}
          {errors.Nome?.type === "pattern" &&   <p className="text-red-600 font-bold ">Insira um nome valido</p>}
          <label htmlFor="Email" className="text-xl">
            Email
          </label>
          <input
            type="email"
            placeholder="EX:seuemail@gmail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            {...register("Email",{required:true,validate:(value)=> validator.isEmail(value)})}
          />
          {errors.Email?.type === "required" &&   <p className="text-red-600 font-bold ">O email é obrigatorio</p>}
          {errors.Email?.type === "validate" &&   <p className="text-red-600 font-bold ">O email é invalido</p>}
          <label htmlFor="CPF" className="text-xl">
            CPF
          </label>
          <input
            type="text"
            placeholder="EX: 123.456.789-99"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            {...register("CPF", {required:true,maxLength:11,minLength:11})}
            />
            {errors.CPF?.type === "required" &&   <p className="text-red-600 font-bold ">O CPF é obrigatorio</p>}
            {errors.CPF?.type === "maxLength" &&   <p className="text-red-600 font-bold ">CPF invalido</p>}
            {errors.CPF?.type === "minLength" &&   <p className="text-red-600 font-bold ">CPF invalido</p>}
          <label htmlFor="Senha" className="text-xl">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            {...register("Senha",{required:true, minLength:8})}
          />
          {errors.Senha?.type === "required" &&   <p className="text-red-600 font-bold ">A senha é obrigatoria</p>}
          {errors.Senha?.type === "minLength" &&   <p className="text-red-600 font-bold ">Insira uma senha maior</p>}
          <label htmlFor="ConfirmarSenha" className="text-xl">
            Confirme a sua senha
          </label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            {...register("ConfirmarSenha",{required:true,validate:(value)=> value === ConfirmarSenhas})}
          />
          {errors.ConfirmarSenha?.type === "required" &&   <p className="text-red-600 font-bold ">Confirmar a senha é obrigatorio</p>}
          {errors.ConfirmarSenha?.type === "validate" &&   <p className="text-red-600 font-bold mb-2 ">As senhas precisam ser iguais</p>}
           <button className="bg-blue-500 text-white font-bold p-2 rounded w-full hover:bg-blue-700">Criar Conta</button>
            <span className="self-center mt-4">Já tem uma conta? <a href="" className="text-blue-700 font-bold">faça login aqui</a></span>
        </form>
      </section>
    </>
  );
};
