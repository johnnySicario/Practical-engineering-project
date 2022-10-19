import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getLogOut, getUserLoading } from '../../redux/actions/getAuthActions';
import logo from '../../logo.jpg';
const Header = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserLoading())
    },[dispatch])

    const logOut = () => {
        dispatch(getLogOut())
    }

    return (
        <Nav className="navbar navbar-expand-lg bg-light" style={{ marginBottom: "4rem" }}>
            <div className="container-fluid">
            <img src={logo} alt="logo" width="5%" height="20%" onClick={() => navigate('/')} style={{cursor : "pointer"}} />
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
                        <NavDropdown title="Resources" id="nav-dropdown">
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
                        {token === null ? <>
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
                            <Nav.Item style={{margin: '0rem 1rem'}}>
                                <span>Hello {auth?.username},</span>
                                <Nav.Link eventKey="1" onClick={logOut}>
                                    Log Out
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
