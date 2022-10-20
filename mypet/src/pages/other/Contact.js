import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from './../api';

function Contact(props) {
    const [flag, setFlag] = useState(true);
    const [mail, setMail] = useState({})

    const send = (e) => {
        e.preventDefault();
        axios.post(`${api}/contact`, mail)
        setMail({})
        setFlag(false);
    }


    return (

        <div>
            {flag ?
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={e => { setMail({ ...mail, name: e.target.value }) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => { setMail({ ...mail, mail: e.target.value }) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMassage">
                        <Form.Label>massage</Form.Label>
                        <Form.Control type="text" placeholder="Enter massage" onChange={e => { setMail({ ...mail, massage: e.target.value }) }} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={send}>
                        Submit
                    </Button>
                </Form>
                :
                <div> <h2>Thanks</h2> </div>}
        </div>
    );
}

export default Contact;