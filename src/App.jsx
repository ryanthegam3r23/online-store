import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import About from './pages/about'

function App() {
  return (
    <>
      <Navbar/>
      <Catalog/>
      <About/>
      <Footer/>
    </>
  )
}

export default App;
