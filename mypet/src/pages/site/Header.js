import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <p style={{marginTop : "0.5rem" , marginRight: '0.5rem' , fontSize : '1.2rem'}} onClick={() => navigate('/')}>MyPet</p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li style={{margin: '0rem 0.2rem' , cursor: 'pointer'}} class="nav-item">
                        <p style={{marginTop : "0.5rem"}} onClick={() => navigate('/my-profile')}>My profile</p>
                    </li>

                    <li style={{margin: '0rem 0.2rem' , cursor: 'pointer'}} class="nav-item">
                        <p style={{marginTop : "0.5rem"}} onClick={() => navigate('/contact')}>Contact</p>
                    </li>
                    <li style={{margin: '0rem 0.2rem' , cursor: 'pointer'}} class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                        <p class="dropdown-item" style={{marginTop : "0.5rem"}} onClick={() => navigate('/service')}>Service</p>
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">pet adoption</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">blog</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">health & wellness</a></li>
                        </ul>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <ul class="navbar-nav ">
                <li style={{margin: '0rem 0.2rem' , cursor: 'pointer'}} class="nav-item">
                        <p style={{marginTop : "0.5rem"}} onClick={() => navigate('/sign-up')}>Sign up</p>
                    </li>
                <li style={{margin: '0rem 0.2rem' , cursor: 'pointer'}} class="nav-item">
                        <p style={{marginTop : "0.5rem"}} onClick={() => navigate('/login')}>LogIn</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
    )
}



export default Header;
