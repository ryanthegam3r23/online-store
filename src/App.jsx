import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Payment from './pages/Payment.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'

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
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;
