import React, { useState } from 'react';
import './LogIn.css';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import utils from './../../utils/authenticationUtils'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function LogIn({ setTokenCheck }) {
    const [user, setUser] = useState([{}]);
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        let obj = { ...user };

        let resp = await utils.loginUser(obj);
        setTokenCheck(resp.data.token);

        navigate('/home')
    }

    return (
        <div className="firstDiv">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={e => setUser({ ...user, email: e.target.value })} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={e => setUser({ ...user, password: e.target.value })} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={login}>
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