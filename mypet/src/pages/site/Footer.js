import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate()


  return (
    <div style={{marginTop : "4rem"}}>
    <div class="p-0 bg-success bg-opacity-5 border-info rounded-end rounded-start boundary">
      MyPet, because we care
    </div>

    <div class="container">
      <footer class="py-10">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>About Mypet</h5>
            <ul class="nav flex-column">
              <li style={{cursor : "pointer"}} class="nav-item mb-2"><a onClick={() => navigate('/HomePage')} class="nav-link p-0 text-muted">Home</a></li>
              <li style={{cursor : "pointer"}} class="nav-item mb-2"><a onClick={() => navigate('/terms')} class="nav-link p-0 text-muted">Terms of service</a></li>
              <li style={{cursor : "pointer"}} class="nav-item mb-2"><a onClick={() => navigate('/FAQs')} class="nav-link p-0 text-muted">FAQs</a></li>
              <li style={{cursor : "pointer"}} class="nav-item mb-2"><a onClick={() => navigate('/Contact')} class="nav-link p-0 text-muted">Contact us</a></li>
              <li style={{cursor : "pointer"}} class="nav-item mb-2"><a onClick={() => navigate('/About')} class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li style={{cursor : "pointer"}} class="nav-item mb-2"><a onClick={() => navigate('/Publication')} class="nav-link p-0 text-muted">Pet adoption</a></li>
              <li style={{cursor : "pointer"}} class="nav-item mb-2"><a onClick={() => navigate('/Service')} class="nav-link p-0 text-muted">Services</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"></a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"></a></li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default Footer;