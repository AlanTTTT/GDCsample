import React from "react";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';


const Header = () => {
  const { t, i18n } = useTranslation();


  const changeLanguage = (event) => {

    i18n.changeLanguage(event.target.value);

  };


  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container className="menubar">
          <a href="#heroBanner">
            <Navbar.Brand href="/" class="companyName">GDC</Navbar.Brand>
          </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="menu-item">
            <Nav.Link href="/Showroom" class="menu-item"><CurrencyExchangeOutlinedIcon sx={{ mr: '5px', mb: '4px'}} />GDC Showroom</Nav.Link>
            <Nav.Link href="/About" class="menu-item"><MessageOutlinedIcon sx={{ mr: '5px', mb: '4px'}} />About Us</Nav.Link>
            <Nav.Link href="/Contact" class="menu-item"><MailOutlinedIcon sx={{ mr: '5px', mb: '4px'}} />Contact us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
  )
}

export default Header;