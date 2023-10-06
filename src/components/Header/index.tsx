import { HeaderContainer, SearchInput, ActionButton, HeaderNavigation } from "./styles";

import logoControlImage from '../../assets/control.png';
import { FiUser, FiShoppingCart, FiSearch } from 'react-icons/fi'
import { Link, useNavigate } from "react-router-dom";

import { useSearch } from '../../hooks/useSearch';

import Button from "../Button";

export default function Header() {
    const { handleChange, currentInputValue, setCurrentInputValue } = useSearch();

    const navigate = useNavigate();

    function handleSearch() {
        if (currentInputValue !== '') {
            handleChange(currentInputValue);
            navigate(`/search/${currentInputValue}`);
            console.log(currentInputValue)
        }
    }

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
                <div className="input">
                    <SearchInput
                        placeholder="Buscar..."
                        value={currentInputValue}
                        onChange={(event) => setCurrentInputValue(event.target.value)}
                    />
                    <Button
                        border="corner"
                        background="none"
                        icon={<FiSearch size={20} />}
                        handleFunction={handleSearch}
                    />
                </div>

                <Link to={"/signIn"}>
                    <ActionButton>
                        <FiUser size={24} />
                        <span>Login/Cadastro</span>
                    </ActionButton>
                </Link>

                <Link to={"/userCart"}>
                    <ActionButton>
                        <FiShoppingCart size={24} />
                        <span>Carrinho</span>
                    </ActionButton>
                </Link>
            </div>
        </HeaderContainer>
    )
}