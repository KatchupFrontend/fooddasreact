import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Deals from './components/Deals'
import About from './components/About'
import Customer from './pages/Customer'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import DetailPage from './components/customer/DetailPage'
import Checkout from './components/customer/Checkout'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Customer />} />
        <Route path={"/details/:id"} element={<DetailPage />} />
        <Route path={"/checkout"} element={<Checkout/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App