import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <li>
        <a className="p__opensans" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#menu">
          Menu
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#awards">
          Awards
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#contact">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="./">
          <img src={images.gericht} alt="app logo" />
        </a>
        ;
      </div>

      <ul className="app__navbar-links">
        <Menu />
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
