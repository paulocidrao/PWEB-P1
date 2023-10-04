import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import GlobalStyles from './styles/global'
import Header from "./components/Header"
import SignUp from "./pages/SignUp"
import ProductDetails from "./pages/ProductDetails"
import ResetPassword from "./pages/ResetPassword"

// Funcao para nao renderizar o header nestas rotas
function HeaderWithCondition() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/signIn";
  const isSignUpPage = location.pathname === "/signUp";
  const isResetPasswordPage = location.pathname === "/resetPassword";

  return !isLoginPage && !isSignUpPage && !isResetPasswordPage ? <Header /> : null;
}

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>

        <HeaderWithCondition />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path={`/productDetails/:productId`} element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
