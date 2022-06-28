import { useState, useEffect } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
import "./navbar.css"


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // navbar scrollchangeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

useEffect(() => {
  changeBackground()
  // adds the event when scroll change background
  window.addEventListener('scroll', changeBackground)
},[])

  return (
    <div className={navbar ? "navbar sticky" : "navbar"}>
      <div className="max-width">
        <div className="logo">
          <a href="#"> Bit<span>co</span></a>
          </div>
        <ul className="menu">
          <li><a href="#">About</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Sales</a></li>
          <button type='button' className='login-btn'>Log in</button>
        </ul>
        <div className="menu-btn">
        {toggleMenu ? <GrFormClose onClick={() => setToggleMenu(false)} /> : <HiMenuAlt2 onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
        <ul className="menu active">
          <li><a href="#" onClick={() => setToggleMenu(false)} >About</a></li>
          <li><a href="#" onClick={() => setToggleMenu(false)}>Resources</a></li>
          <li><a href="#" onClick={() => setToggleMenu(false)}>Pricing</a></li>
          <li><a href="#" onClick={() => setToggleMenu(false)}>Sales</a></li>
          <button type='button' className='login-btn'>Log in</button>
        </ul>
        )}
        </div>
      </div>
    </div>
  )
}

export default Navbar