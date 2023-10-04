import { HeaderContainer, SearchInput, ActionButton, HeaderNavigation } from "./styles";

import logoControlImage from '../../assets/control.png';
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderContainer>
            <Link to="/" className="logoDiv">
                <img src={logoControlImage} alt="Logo" />
                <h2>Games X</h2>
            </Link>

            <HeaderNavigation>
                <Link to="">
                    Categorias
                </Link>
                <Link to="">
                    Novidades
                </Link>
                <Link to="">
                    Suporte
                </Link>
            </HeaderNavigation>

            <div className="headerActions">
                <SearchInput placeholder="Buscar..." />

                <Link to={"/signIn"}>
                    <ActionButton>
                        <FiUser size={24} />
                        <span>Login/Cadastro</span>
                    </ActionButton>
                </Link>

                <Link to={"/cart"}>
                    <ActionButton>
                        <FiShoppingCart size={24} />
                        <span>Carrinho</span>
                    </ActionButton>
                </Link>
            </div>
        </HeaderContainer>
    )
}