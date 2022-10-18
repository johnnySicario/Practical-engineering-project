import React, { useState } from 'react';
import './LogIn.css';
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import utils from './../../utils/authenticationUtils'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuthAction } from '../../redux/actions/getAuthActions';

const LogIn = () => {
    const dispatch = useDispatch()
    const authLoading = useSelector(state => state.auth.authLoading)
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

                <Button variant="primary" type="submit" onClick={login}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(LogIn)