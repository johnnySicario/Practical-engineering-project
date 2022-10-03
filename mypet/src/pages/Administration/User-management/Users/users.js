import React, { Component } from 'react';
import User from './user/user'
import './users.css';

class Users extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='Users'>
                { this.props.users.map((element) => {                    
                        return (
                        <div key={element.id * 20}>
                        <User key={element.id} id={element.id} name={element.name} email={element.email} address={element.address}
                              updateUser={this.props.updateUser}
                              deleteAllUserData={this.props.deleteAllUserData}
                              showUserInfo={this.props.showUserInfo}
                              currentId={this.props.currentId}
                              todos={this.props.todos.filter((todo) => todo.userId == element.id)}/>
                        <br key={element.id * 19}/>
                        </div>)
                    })
                } 
            </div>
        );
    }
}


export default Users;