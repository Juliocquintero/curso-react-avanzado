import React from 'react'
import { Nav } from "./styles"
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import NavLink from "../NavLink"

const Navbar = () => {
  const ICON_SIZE = '32px'
  return (
    <Nav>
      <NavLink to='/' ><MdHome size={ICON_SIZE} /></NavLink>
      <NavLink to='/favs'><MdFavoriteBorder size={ICON_SIZE} /></NavLink>
      <NavLink to='/user'><MdPersonOutline size={ICON_SIZE} /></NavLink>
    </Nav>
  )
}

export default Navbar