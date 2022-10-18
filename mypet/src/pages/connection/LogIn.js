import React, { useState } from 'react';
import './LogIn.css';
import { connect, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import utils from './../../utils/authenticationUtils'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getLoginAction } from '../../redux/actions/getUsersActions';

function LogIn({ setTokenCheck }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const login = async (e) => {
        console.log("login")
        e.preventDefault();
        let obj = { email , password };

        // let resp = await utils.loginUser(obj);
        dispatch(getLoginAction(obj))
        // setTokenCheck(resp.data.token);
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
                    click!
                </Button>
            </Form>
        </div>
    );
}

LogIn.propTypes = {
    setTokenCheck: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(LogIn)