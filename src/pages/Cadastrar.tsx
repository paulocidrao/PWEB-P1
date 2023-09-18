
export const Cadastro = () => {
  return (
    <>
      <section className=" h-screen  flex  items-center justify-center ">
        <form className="bg-white shadow-md rounded px-8 pt-6  pb-8 mb-4 flex flex-col w-1/3">
          <h2 className="text-3xl items-center mb-5">Realize o seu cadastro</h2>
          <label htmlFor="Nome" className="text-xl">
            Nome
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <label htmlFor="Email" className="text-xl">
            Email
          </label>
          <input
            type="text"
            placeholder="EX:seuemail@gmail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <label htmlFor="CPF" className="text-xl">
            CPF
          </label>
          <input
            type="text"
            placeholder="EX: 123.456.789-99"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <label htmlFor="Senha" className="text-xl">
            Senha
          </label>
          <input
            type="text"
            placeholder="Digite sua senha"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <label htmlFor="ConfirmarSenha" className="text-xl">
            Confirme a sua senha
          </label>
          <input
            type="text"
            placeholder="Confirme sua senha"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
           <button className="bg-blue-500 text-white font-bold p-2 rounded w-full hover:bg-blue-700" >Criar Conta</button>
            <span className="self-center mt-4">Já tem uma conta? <a href="" className="text-blue-700 font-bold">faça login aqui</a></span>
        </form>
      </section>
    </>
  );
};
