import React from 'react';
import Form from 'react-bootstrap/Form';

function Contact(props) {

    return (

        <div>
  
           
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                <span className="input-group-text"></span>
                <input type="text" className="form-control" placeholder="Mail" aria-label="Mail" />
            </div>

            <div className="input-group">
                <span className="input-group-text">Message</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>

        </div>
    );
}

export default Contact;