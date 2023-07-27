import React from 'react'
import { Link } from "./styles"
import { useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const pathname = location?.pathname

  return (
    <Link to={to} active={pathname === to ? 'true' : null}>
      {children}
    </Link>
  )
}

export default NavLink