import React, { Component } from 'react';
import './AddUserForm.css';

class AddUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userEmail: ''
        }
    }

    render() {
        return (
            <div className='AddUserForm'>
                Add New User 
                <div className='AddUserFormBody'>
                    <strong> Name : </strong><input type="text" name='userName'  value={this.state.userName || ''} onChange={(e) => this.setState({userName: e.target.value})} /> <br />
                    <strong> Email : </strong><input type="text" name='userEmail' value={this.state.userEmail || ''} onChange={(e) => this.setState({userEmail: e.target.value})} /> <br /><br />
                    <div className='buttonsRight'>
                        <input  id="cancel" name="cancel" type="button" onClick={this.props.addUserCancel} value="Cancel" /> &nbsp;&nbsp;
                        <input  type="button" onClick={() => this.props.addUser(this.state.userName, this.state.userEmail)} value="Add User" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUserForm;