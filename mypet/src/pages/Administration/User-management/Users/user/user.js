import React, { Component } from 'react';
import './user.css'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otherData: false,
            id : '',
            email: '',
            name: '',
            street: '',
            todos: '',
            currentId: ''
        }
    }

    updateUser = () => {
        this.setState({
            id : this.props.id,
            email: this.props.email,
            name: this.props.name,
            street: this.props.address?.street,
            city: this.props.address.city,
            zipcode: this.props.address.zipcode,
        })
    }

    OtherDataClick = (e) => {
        this.setState({otherData: false})
    }
    OtherDataHover = (e) => {
        this.setState({otherData: true})
    }
    componentDidMount() {
        this.setState({
            id : this.props.id,
            email: this.props.email,
            name: this.props.name,
            street: this.props.address?.street,
            city: this.props.address?.city,
            zipcode: this.props.address?.zipcode,
            todos: this.props.todos,
            currentId: this.props.currentId
        })
    }

    setName = (e) => {
        this.setState({name: e.target.value})
    }
    setEmail = (e) => {
        this.setState({email: e.target.value})
    }
    setStreet = (e) => {
        this.setState({street: e.target.value})
    }
    setCity = (e) => {
        this.setState({city: e.target.value})
    }
    setZipCode = (e) => {
        this.setState({zipcode: e.target.value})
    }
    render() {
        if (this.props.currentId == this.props.id) {
            document.getElementById("user" + this.props.id).style.backgroundColor = 'pink'
        }
        else {
            if (this.props.currentId != -1)
            document.getElementById("user" + this.props.id).style.backgroundColor = 'white'
        }
        return (
             <div className={this.props.todos.filter((todo) => !todo.completed).length == 0 ? 'User' : 'unUser' } id={"user" + this.props.id}>
                <strong> ID : <label onClick={() => this.props.showUserInfo(this.state.id)} > { this.state.id }  </label> </strong><br/>
                <strong> Name : </strong><input type="text" name='name'  value={this.state.name || ''} onChange={this.setName} /> <br />
                <strong> Email : </strong><input type="text" name='email' value={this.state.email || ''} onChange={this.setEmail} /> <br />
                <input type="button" onMouseOver={this.OtherDataHover} onClick={this.OtherDataClick} defaultValue="Other Data" />
                {this.state.otherData && (
                    <>
                    <div className='otherData'>
                        Street: <input type="text" name='street' value={this.state.street || ''} onChange={this.setStreet} /> <br />
                        City: <input type="text" name='city' value={this.state.city || ''} onChange={this.setCity} /> <br />
                        Zipcode: <input type="text" name='zipcode' value={this.state.zipcode || ''} onChange={this.setZipCode} /> <br />
                    </div>
                    </>
                )}
                <input className='Update' type="button" onClick={() => this.props.updateUser(this.state.id, {...this.state})} defaultValue="Update" />
                <input className='Delete' type="button" onClick={() => this.props.deleteAllUserData(this.state.id)} defaultValue="Delete" />
            </div> 
        );
    }
}

export default User;