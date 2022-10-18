import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import useToken from '../../utils/useToken';
import utils from '../../utils/authenticationUtils';

const Header = () => {
    const navigate = useNavigate()
    const { token, setToken } = useToken();

    const logOut = async () => {
        utils.logOutUser()
        navigate('/login')
    }

    return (
        <Nav className="navbar navbar-expand-lg bg-light" style={{ marginBottom: "4rem" }}>
            <div className="container-fluid">
                <p style={{ marginTop: "0.5rem", marginRight: '0.5rem', fontSize: '1.2rem' }} onClick={() => navigate('/home')}>MyPet</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                            <NavDropdown.Item onClick={() => navigate('/Publication')}>Pet adoption</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/PetBreed')}>Pets breed</NavDropdown.Item>
                        </NavDropdown>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul className="navbar-nav ">
                        {token ? <>
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
                        </> : <>
                            <Nav.Item>
                                <Nav.Link eventKey="1" onClick={logOut}>
                                    log out
                                </Nav.Link>
                            </Nav.Item>
                        </>}
                    </ul>
                </div>
            </div>

        </Nav>
    )
}



export default Header;
