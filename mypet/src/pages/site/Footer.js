import React from 'react';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate()



  return (
    <div style={{ marginTop: "4rem" }}>
      <div text-align="center" className="p-0 bg-success bg-opacity-5 border-info  boundary ">
        MyPet, because we care
      </div>

      <div className="container">
        <footer className="py-10">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>About Mypet</h5>
              <ul className="nav flex-column">
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/')} className="nav-link p-0 text-muted">Home</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/terms')} className="nav-link p-0 text-muted">Terms of service</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/FAQs')} className="nav-link p-0 text-muted">FAQs</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/Contact')} className="nav-link p-0 text-muted">Contact us</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/About')} className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Pet adoption</h5>
              <ul className="nav flex-column">
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/Publication')} className="nav-link p-0 text-muted">Pet adoption</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/Service')} className="nav-link p-0 text-muted">Services</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a onClick={() => navigate('/PetBreed')} className="nav-link p-0 text-muted">Pet breeds</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a target="blank" href="https://spca.co.il/home/" className="nav-link p-0 text-muted">SPCA Israel</a></li>
                <li style={{ cursor: "pointer" }} className="nav-item mb-2"><a target="blank" href="https://www.letlive.org.il/" className="nav-link p-0 text-muted">letlive Israel</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <p className="footer__title">Follow us</p>
                <ul className="social-list">
                  <li>
                 
                    <a  target="_blank" title="facebook" href="https://www.facebook.com/profile.php?id=100087144813664">
                      <svg className="icon icon-facebook" aria-hidden="true" width="5%" focusable="false" viewBox="0 0 8 14"><path fill="currentColor" d="M7.229.099v2.21l-1.311.003c-1.028 0-1.226.488-1.226 1.202v1.58H7.14l-.318 2.473h-2.13V14H2.138V7.567H0V5.095h2.138V3.27C2.138 1.154 3.428 0 5.32 0 6.222 0 7 .068 7.229.099z"></path>
                      </svg> 
                    </a>
                  </li>
                  <a  target="_blank" title="instagram" href="https://www.instagram.com/worldanimalhealth/" >
                    <svg className="icon icon-instagram" width="10%" aria-hidden="true" focusable="false" viewBox="0 0 512 512"><path fill="currentColor" d="M501.7 154.8c-1.2-26.2-5.4-44.1-11.4-59.7C484 79 475.6 65.2 462 51.6c-13.7-13.7-27.4-22.1-43.6-28.4-15.6-6.1-33.5-10.2-59.7-11.4s-34.6-1.5-101.4-1.5-75.2.3-101.4 1.5c-26.3 1.1-44.2 5.3-59.8 11.4-16.2 6.3-29.9 14.7-43.6 28.4C38.8 65.2 30.4 79 24.1 95.1c-6.1 15.6-10.2 33.5-11.4 59.7-1.2 26.2-1.5 34.6-1.5 101.4s.3 75.2 1.5 101.4 5.4 44.1 11.4 59.7c6.3 16.2 14.7 29.9 28.4 43.6s27.4 22.1 43.6 28.4c15.6 6.1 33.5 10.2 59.7 11.4 26.2 1.2 34.6 1.5 101.4 1.5s75.2-.3 101.4-1.5 44.1-5.4 59.7-11.4c16.2-6.3 29.9-14.7 43.6-28.4s22.1-27.4 28.4-43.6c6.1-15.6 10.2-33.5 11.4-59.7 1.2-26.2 1.5-34.6 1.5-101.4s-.3-75.2-1.5-101.4zm-44.2 200.9c-1.1 24-5.1 37-8.5 45.7-4.5 11.5-9.8 19.7-18.4 28.3-8.6 8.6-16.8 13.9-28.3 18.4-8.7 3.4-21.7 7.4-45.7 8.5-25.9 1.2-33.7 1.4-99.4 1.4s-73.5-.3-99.4-1.4c-24-1.1-37-5.1-45.7-8.5-11.5-4.5-19.7-9.8-28.3-18.4-8.6-8.6-13.9-16.8-18.4-28.3-3.4-8.7-7.4-21.7-8.5-45.7-1.2-25.9-1.4-33.7-1.4-99.4s.3-73.5 1.4-99.4c1.1-24 5.1-37 8.5-45.7 4.5-11.5 9.8-19.7 18.4-28.3 8.6-8.6 16.8-13.9 28.3-18.4 8.7-3.4 21.7-7.4 45.7-8.5 25.9-1.2 33.7-1.4 99.4-1.4s73.5.2 99.4 1.4c24 1.1 37 5.1 45.7 8.5 11.5 4.5 19.7 9.8 28.3 18.4 8.6 8.6 13.9 16.8 18.4 28.3 3.4 8.7 7.4 21.7 8.5 45.7 1.2 25.9 1.4 33.7 1.4 99.4s-.3 73.5-1.4 99.4z"></path>
                      <path fill="currentColor" d="M257.2 130c-69.8 0-126.3 56.5-126.3 126.3s56.6 126.3 126.3 126.3S383.5 326 383.5 256.3 327 130 257.2 130zm0 208.3c-45.3 0-82-36.7-82-82s36.7-82 82-82 82 36.7 82 82-36.7 82-82 82z"></path><circle cx="388.6" cy="125" r="29.5" fill="currentColor"></circle></svg>
                  </a>
                </ul>
                
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
      
    </div>
  )
}

export default Footer;