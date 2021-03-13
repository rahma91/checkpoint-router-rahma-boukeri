import React from 'react'
import { Navbar,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'

const NavBar = () => {
    return (
        <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">React-router</Navbar.Brand>
    <Nav className="mr-auto">
        <Link to="/" className="Nav-link">Home</Link>
        <Link to="/movies" className="Nav-link">Movies</Link>
        <Link to="/about" className="Nav-link">About</Link>
  

    </Nav>
  </Navbar>
        </div>
    )
}

export default NavBar
