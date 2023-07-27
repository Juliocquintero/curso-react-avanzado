import { GlobalStyle } from './components/styles/GlogalStyles';
import { Logo } from "./components/Logo";
import Navbar from "./components/Navbar";

import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      {children}
      <Navbar />
    </>
  )
}

export default Layout
