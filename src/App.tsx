import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import GlobalStyles from './styles/global'
import Header from "./components/Header"
import SignUp from "./pages/SignUp"
import ProductDetails from "./pages/ProductDetails"

// Funcao para nao renderizar o header nestas rotas
function HeaderWithCondition() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";

  return !isLoginPage && !isSignUpPage ? <Header /> : null;
}

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>

        <HeaderWithCondition />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path={`/productDetails/:productId`} element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
