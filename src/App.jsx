import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import Toast from './components/Toast.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path='/category/:categoryName' element={<ProductList />} />
        </Routes>
        <Cart/>
        <Toast/>
      </BrowserRouter>
    </>
  )
}

export default App
