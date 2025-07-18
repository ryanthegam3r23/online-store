import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import About from './pages/about'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import GlobalProvider from './state/GlobalProvider'
import Payment from './pages/Payment'
import Login from './pages/Login'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/catalog' element={<Catalog/>} ></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;
