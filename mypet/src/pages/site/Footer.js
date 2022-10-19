import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate()


  
  return (
    <div style={{marginTop : "4rem"}}>
    <div className="p-0 bg-success bg-opacity-5 border-info rounded-end rounded-start boundary">
      MyPet, because we care
    </div>

    <div className="container">
      <footer className="py-10">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>About Mypet</h5>
            <ul className="nav flex-column">
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/HomePage')} className="nav-link p-0 text-muted">Home</a></li>
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/terms')} className="nav-link p-0 text-muted">Terms of service</a></li>
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/FAQs')} className="nav-link p-0 text-muted">FAQs</a></li>
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/Contact')} className="nav-link p-0 text-muted">Contact us</a></li>
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/About')} className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Pet adoption</h5>
            <ul className="nav flex-column">
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/Publication')} className="nav-link p-0 text-muted">Pet adoption</a></li>
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/Service')} className="nav-link p-0 text-muted">Services</a></li>
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a onClick={() => navigate('/PetBreed')} className="nav-link p-0 text-muted">Pet breeds</a></li>
              <li style={{cursor : "pointer"}} className="nav-item mb-2"><a target="blank" href="https://spca.co.il/home/" rel="noopener noreferrer">SPCA Israel</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"></a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
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