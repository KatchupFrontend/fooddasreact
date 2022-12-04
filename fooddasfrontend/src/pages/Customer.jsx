import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/customer/Banner'
import Tabs from '../components/customer/Tabs'
import Product from '../components/customer/Product'
const Customer = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Tabs/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default Customer