import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState} from "react";
import { Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const SECTIONS = {
  HOME: 'home',
  SKILLS: 'skills',
  PROJECTS: 'projects'
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState(SECTIONS.HOME);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (section) => {
    setActiveLink(section);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.values(SECTIONS).map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={activeLink === section ? 'active navbar-link' : 'navbar-link'}
                onClick={() => updateActiveLink(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button onClick={() => console.log('Holii')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};