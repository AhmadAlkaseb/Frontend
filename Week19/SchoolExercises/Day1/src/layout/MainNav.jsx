import React from 'react'
import { NavLink } from 'react-router-dom'
const MainNav = () => {
  return (
    <>
    <ul>
      <li><NavLink to="/home">Home</NavLink> </li>
      <li><NavLink to="/about">about</NavLink> </li>
      <li><NavLink to="/contact">contact</NavLink> </li>
      <li><NavLink to="/posts">posts</NavLink> </li>
    </ul>
    </>
  )
}

export default MainNav
