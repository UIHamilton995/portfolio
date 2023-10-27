import React, { useEffect, useState } from 'react';
import { Link as ReactScrollLink } from 'react-scroll';

const NavBar = () => {
  const [navbarStyle, setNavbarStyle] = useState({});
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 2) {
        setScroll(true);

        setNavbarStyle({
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        });
      } else {
        setNavbarStyle({});
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        style={navbarStyle}
        className={`nav flex items-center justify-between fixed top-0 ${
          scroll ? 'backdrop-blur-md' : ''
        } bg-transparent w-full z-50 p-0 lg:p-0`}
      >
        <div className="tophead flex items-center">
          <h1>
            <ReactScrollLink
              className="name-logo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="home"
            >
              hamilton.
            </ReactScrollLink>
            <span className="blink h-8 w-0.5 animate-blink" />
          </h1>
          <div
            className={`menu-btn ${open ? 'opened-btn' : ''}`}
            onClick={toggleMenu}
            style={{
              backgroundImage: `url('${open ? '../assets/close.png' : '../assets/equal.png'}')`,
            }}
          />
        </div>
        <ul className={`menu ${open ? 'open' : ''} ${scroll ? 'lg:margin-right-20' : ''}`}>
          <li>
            <ReactScrollLink
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="home"
            >
              home
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="about"
            >
              about
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="projects"
            >
              projects
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="contact"
            >
              contact
            </ReactScrollLink>
          </li>
        </ul>
      </nav>
      <div className={`scroll-to-top ${scroll ? 'scroll-true' : ''}`}>
        <ReactScrollLink spy={true} smooth={true} offset={50} duration={1000} to="home">
          <i className="fas fa-arrow-up" />
        </ReactScrollLink>
      </div>
    </>
  );
};

export default NavBar;
