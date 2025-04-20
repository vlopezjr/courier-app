import React from 'react'
import HeaderSection from './header/HeaderSection'
import FooterSection from './footer/FooterSection'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <HeaderSection />
        <Outlet />
        <FooterSection />
    </div>
  )
}

export default MainLayout
