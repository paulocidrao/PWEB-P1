import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Cadastro } from "./pages/Cadastrar"
import { ProductDetails } from './pages/ProductDetails'

function App() {
  return (
    <main className="bg-gray-600 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/productDetails' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
