import React, { useState } from 'react';
import './LogIn.css';
import { connect, useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuthAction } from '../../redux/actions/getAuthActions';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault();
        let obj = { email , password };
        dispatch(getAuthAction(obj))
    }

    return (
        <div className="firstDiv">
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value )} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={e => setPassword(e.target.value) } />
                </Form.Group>
                <p>Don't have a user? <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => navigate('/sign-up')}>Go to sign up</span></p>
                <Button disabled={email === "" || password === "" ? true : false} variant="primary" type="submit" onClick={login}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LogIn