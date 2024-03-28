import React from 'react'
import NavBar from '../../components/Ecommerce/NavBar'
import Banner from '../../components/Ecommerce/AllProducts/Banner'
import MainSection from '../../components/Ecommerce/AllProducts/MainSection'
import Footer from '../../components/Ecommerce/Footer'
import CopyRight from '../../components/Ecommerce/CopyRight'

const AllProducts = () => {
  return (
      <>
          <NavBar />
          <Banner />
          <MainSection />
          <Footer />
          <CopyRight/>
      </>
  )
}

export default AllProducts