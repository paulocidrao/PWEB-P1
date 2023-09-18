import { Header } from "../components/Header"
import xboxSImage from '../assets/Xbox-s.jpg'
import { Comprar } from "../components/utils/Buttons/Comprar/ComprarButton"

export const ProductDetails = () => {
    return (
        <>
            <Header />
            <div className="p-10">
                <p>
                    Home / Produto
                </p>

                <div className="containter 2xl flex gap-20">
                    <img className="w-96 rounded-lg mt-5" src={xboxSImage} alt="Xbox Series S" />

                    <div className="flex flex-col justify-between max-h-full">
                        <div>
                            <h2 className="text-5xl text-white font-bold">Xbox Series S</h2>
                            <p className="text-base text-white mt-4">Product description here.</p>

                            <h3 className="text-3xl text-white font-bold mt-4">R$2.200,00</h3>
                        </div>

                        <Comprar />
                    </div>
                </div>
            </div>
        </>
    )
}