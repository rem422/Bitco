import { useState, useEffect } from "react";
import "./navbar.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";


const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false)
const [navbar, setNavbar] = useState(false)

// navbar scrollchangeBackground function
  const changeBackground = () => {
    if (window.scrollY > 55) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

useEffect(() => {
    changeBackground();
    // adds the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={navbar ? "navbar sticky" : "navbar"}>
      <div className="wrapper">
        <div className="logo">Bit<span>co</span></div>
        <ul className={ toggleMenu ? "menu active" : "menu" }>
          <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
          <li><a href="#resources" onClick={() => setToggleMenu(false)}>Resources</a></li>
          <li><a href="#price" onClick={() => setToggleMenu(false)}>Pricing</a></li>
          <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          <div className="login" onClick={() => setToggleMenu(false)}>
        <button type='button'>Login</button>
          </div>
        </ul>
        <div className="menu_btn">
          {toggleMenu ? <GrFormClose size={30} onClick={() => setToggleMenu(false)} /> : <HiMenuAlt2 size={30} onClick={() => setToggleMenu(true)}/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar









































 // const [toggleMenu, setToggleMenu] = useState(false);
  // const [navbar, setNavbar] = useState(false);

  // navbar scrollchangeBackground function
  // const changeBackground = () => {
  //   if (window.scrollY >= 66) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // useEffect(() => {
  //   changeBackground();
  //   // adds the event when scroll change background
  //   window.addEventListener("scroll", changeBackground);
  // }, []);

    // <div className={navbar ? "navbar sticky" : "navbar"}>
    //   <div className="max-width">
    //     <div className="logo">
    //       <a href="#"> Bit<span>co</span></a>
    //       </div>
    //     <ul className="menu">
    //       <li><a href="#">About</a></li>
    //       <li><a href="#">Resources</a></li>
    //       <li><a href="#">Pricing</a></li>
    //       <li><a href="#">Sales</a></li>
    //       <button type='button' className='login-btn'>Log in</button>
    //     </ul>
    //     <div className="menu-btn">
    //     {toggleMenu ? <GrFormClose onClick={() => setToggleMenu(false)} /> : <HiMenuAlt2 onClick={() => setToggleMenu(true)} />}

    //     {toggleMenu && (
    //     <ul className="menu active">
    //       <li><a href="#" onClick={() => setToggleMenu(false)} >About</a></li>
    //       <li><a href="#" onClick={() => setToggleMenu(false)}>Resources</a></li>
    //       <li><a href="#" onClick={() => setToggleMenu(false)}>Pricing</a></li>
    //       <li><a href="#" onClick={() => setToggleMenu(false)}>Sales</a></li>
    //       <button type='button' className='login-btn'>Log in</button>
    //     </ul>
    //     )}
    //     </div>
    //   </div>
    // </div>
