import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getLogOut } from '../../redux/actions/getAuthActions';
import logo from '../../logo.jpg';
import { getUsersAction } from './../../redux/actions/getUsersActions';


const Header = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    const auth = useSelector(state => state.auth.auth)
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    // Find the user by the ID that is currently connected to the site.
    let myProfile = users.filter(user => user._id === auth.id)?.[0]

    // Calling a function using dispatch, which calls all users from redux.
    useEffect(() => {
        dispatch(getUsersAction())
    },[dispatch])

    // A function that logs out the user, which calls the function using Redux with Dispatch
    const logOut = () => {
        dispatch(getLogOut())
    }

    return (
        <Nav className="navbar navbar-expand-lg p-2 mb-2 bg-success" style={{ marginBottom: "4rem" }} >
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
                        {
                            auth?.admin ? <Nav.Item>
                            <Nav.Link eventKey="1" onClick={() => navigate('/users')}>
                                Users Management
                                </Nav.Link>
                            </Nav.Item> : null
                        }
                        {
                            auth?.admin ? <Nav.Item>
                            <Nav.Link eventKey="1" onClick={() => navigate('/usercontact')}>
                                Users Contact
                                </Nav.Link>
                            </Nav.Item> : null
                        }

                    </ul>
                    
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
                                <span>Hello {auth?.username},
                                <img style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '114%', border: 'white 1px solid'}} src={myProfile?.photo} alt={myProfile?.username}/>
                                </span>
                            </Nav.Item>
                            <Nav.Item style={{margin: '0rem 1rem'}}>
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
