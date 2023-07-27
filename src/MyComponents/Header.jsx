import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = (props) => {
  const { title } = props;

  const headerStyle = {
    backgroundColor: "silver",
    color: "#333",
    padding: "15px",
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const navLinkStyle = {
    fontSize: "18px",
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
    marginLeft: "2em", // Adjusted value
    marginRight: "2em", // Adjusted value
  };

  const logoStyle = {
    fontSize: "25px",
    marginLeft: "1.5em",
    marginRight: "14.25em", // Adjusted value
  };

  const onNavLinkHover = (e) => {
    e.target.style.color = "purple";
  };

  const onNavLinkLeave = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <Navbar expand="lg" style={headerStyle}>
      <Container>
        <Navbar.Brand to="/" style={logoStyle}>
        <img width="31" height="31" src="https://img.icons8.com/fluency/48/sticky-notes.png" alt="sticky-notes"/>{title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              style={navLinkStyle}
              to="/"
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              Home
            </Link>
            <Link
              style={navLinkStyle}
              to="/about"
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.defaultProps = {
  title: "Sticky Notes", // Updated title
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;