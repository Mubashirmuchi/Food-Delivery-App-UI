import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/header/header'
import Footer from '../components/common/footer/footer'
function Layout() {
  return (
    <div>

<Header />
{Outlet}
<Footer />

    </div>
  )
}

export default Layout;