import * as React from "react"
import Footer from './Footer'
import NavBar from './NavBar'

import LayoutWrapper from './LayoutWrapper'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {/* nav bar */}
      <NavBar></NavBar>
      <main className="content">{children}</main>

      <Footer></Footer>
    </LayoutWrapper>
  )
}


export default Layout
