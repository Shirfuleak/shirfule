import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <div>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default Layout