import { UserIcon } from "../../components/utils/Icons/UserIcons/User"

export const Header = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <header className="flex justify-around align-center  bg-blue-400  p-3 ">
            <h1 className="text-white font-bold  text-3xl text-center">Games X</h1>
            <form action="sbmit" onSubmit={handleSubmit} className="flex aling-center">
                <input type="text" className="text-md font-bold mb-2 rounded-xl p-3" placeholder="Busque aqui" />
                {/* <button className="p-3"><SearchIcon/></button> */}
            </form>
            <button className="p-3"> <UserIcon /> </button>
        </header>
    )
}