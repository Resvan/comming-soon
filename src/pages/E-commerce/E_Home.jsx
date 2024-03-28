import React from 'react'
import NavBar from '../../components/Ecommerce/NavBar'
import Banner from '../../components/Ecommerce/Banner'
import Categories from '../../components/Ecommerce/Categories'
import Products from '../../components/Ecommerce/Products'
import About from '../../components/Ecommerce/About'
import Appointment from '../../components/Ecommerce/Appointment'
import Gallery from '../../components/Ecommerce/Gallery'
import Footer from '../../components/Ecommerce/Footer'
import CopyRight from '../../components/Ecommerce/CopyRight'

const E_Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Categories />
      <Products />
      <About />
      <Products />
      <Appointment />
      <Gallery />
      <Footer />
      <CopyRight/>
    </>
  )
}

export default E_Home