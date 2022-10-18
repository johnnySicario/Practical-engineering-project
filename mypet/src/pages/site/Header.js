import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    const navigate = useNavigate()

    return (
        <Nav class="navbar navbar-expand-lg bg-light"  style={{marginBottom : "4rem"}}>
        <div class="container-fluid">
            <p style={{marginTop : "0.5rem" , marginRight: '0.5rem' , fontSize : '1.2rem'}} onClick={() => navigate('/')}>MyPet</p>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Nav.Item>
        <Nav.Link eventKey="1" onClick={() => navigate('/my-profile')}>
        My profile
        </Nav.Link>
      </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="1" onClick={() => navigate('/contact')}>
        Contact
        </Nav.Link>
      </Nav.Item>
                    <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item onClick={() => navigate('/service')}>Services</NavDropdown.Item>
        <NavDropdown.Item  onClick={() => navigate('/Publication')}>Pet adoption</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/PetBreed')}>Pets breed</NavDropdown.Item>
      </NavDropdown>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <ul class="navbar-nav ">
                    <Nav.Item>
                    <Nav.Link eventKey="1" onClick={() => navigate('/sign-up')}>
                    Sign up
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="1" onClick={() => navigate('/login')}>
                    Log In
                    </Nav.Link>
                    </Nav.Item>
                </ul>
            </div>
        </div>
        
    </Nav>
    )
}



export default Header;
