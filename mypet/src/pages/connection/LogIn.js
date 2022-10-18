import React, { useState } from 'react';
import './LogIn.css';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import utils from './../../utils/authenticationUtils'

function LogIn({ setTokenCheck }) {
    const [user, setUser] = useState([{}]);

    const login = async (e) => {
        console.log("login")
        e.preventDefault();
        let obj = { ...user };
        
        let resp = await utils.loginUser(obj);
        setTokenCheck(resp.data.token);
    }

    return (
        <div className="firstDiv">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setUser({ ...user, email: e.target.value })} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setUser({ ...user, password: e.target.value })} />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" onClick={login}>Submit</button>
            </form>
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