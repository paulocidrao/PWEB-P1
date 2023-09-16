
// import { SearchIcon } from "../components/utils/Icons/SearchIcons/Search";
import { UserIcon } from "../components/utils/Icons/UserIcons/User"
import PS5 from '../assets/PS5.jpg';
import XboxS from '../assets/Xbox-s.jpg'
import XboxX from '../assets/Xbox-x.jpg'
import Nintendo from '../assets/Switch.jpg'
import { Comprar } from "../components/utils/Buttons/Comprar/Comprar";
export const Home = () =>{
    const handleSubmit =(e:any)=>{
        e.preventDefault();
    }
    return(
       <>
         <header className="flex justify-around align-center  bg-blue-400  p-3 ">
            <h1 className="text-white font-bold  text-3xl text-center">Games X</h1>
            <form action="sbmit" onSubmit={handleSubmit} className="flex aling-center">
            <input type="text"  className="text-md font-bold mb-2 rounded-xl p-3" placeholder="Busque aqui"/>
            {/* <button className="p-3"><SearchIcon/></button> */}
            </form>
            <button className="p-3"> <UserIcon/> </button>
        </header>
        <nav className="flex justify-around p-2 bg-white">
            <p className="cursor-pointer hover:text-blue-500 font-bold text-xl">Playstation</p>
            <p  className="cursor-pointer hover:text-green-500 font-bold text-xl">Xbox</p>
            <p  className="cursor-pointer hover:text-red-500 font-bold text-xl">Nintendo</p>
        </nav>
        <div className="flex gap-4 aling-center justify-center mt-8">
        <section className="bg-white flex flex-col items-center p-4 rounded-md shadow-md max-w-sm">
            <img src={XboxX} alt="Imagem do Xbox-series-X" className="w-32" />
            <span className="mt-2 text-lg mb-2">R$4.400,00</span>
            <Comprar />
        </section>
        <section className="bg-white flex flex-col items-center p-4 rounded-md shadow-md max-w-sm">
            <img src={XboxS} alt="Imagem do Xbox-series-S" className="w-32" />
            <span className="mt-2 text-lg mb-2">R$2.200,00</span>
            <Comprar />
        </section>
        </div>
        <div className="flex gap-4 aling-center justify-center mt-8">
        <section className="bg-white flex flex-col items-center p-4 rounded-md shadow-md max-w-sm">
            <img src={PS5} alt="Imagem do PS5" className="w-32" />
            <span className="mt-2 text-lg mb-2">R$4.400,00</span>
            <Comprar />
        </section>
        <section className="bg-white flex flex-col items-center p-4 rounded-md shadow-md max-w-sm">
            <img src={Nintendo} alt="Imagem do nintendo switch" className="w-32" />
            <span className="mt-2 text-lg mb-2">R$1.200,00</span>
            <Comprar />
        </section>
        </div>
       </>
    )     
}