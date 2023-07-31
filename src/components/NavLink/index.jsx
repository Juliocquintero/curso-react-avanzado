import React from 'react'
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from "./styles"

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const pathname = location?.pathname

  return (
    <Link to={to} active={pathname === to ? 'true' : null}>
      {children}
    </Link>
  )
}

NavLink.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node,
};

export default NavLink
