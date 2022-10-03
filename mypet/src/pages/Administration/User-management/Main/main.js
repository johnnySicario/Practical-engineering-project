import React, { Component } from 'react';
import './main.css';
import Users from '../Users/users.js';
import Todos from '../Todos/todos.js';
import Posts from '../Posts/posts';
import AddUserForm from '../AddUserForm/AddUserForm.js'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [{}],
            todos: [{}],
            posts: [{}],
            filtered: [{}],
            sideShow: 'none', 
            currentId: -1,
            userName: '',
            userEmail: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                users: json,
                filtered: json
            });
        })
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
            todos: json
            });
        })
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                posts: json
            });
        })
    }

    showUserInfo = (id) => {
        this.setState({sideShow: 'info', currentId: id})
    }

    addUser = (name, email) => {
        let rand = Math.floor(Math.random() * 1000);

        this.state.users.push({
            id: rand,
            name: name,
            email : email
        });
        this.setState({users: this.state.users, currentId: -1 })    
    }

    addPost = (userId, title, body) => {
        this.state.posts.push({
            id: this.state.posts.length + 1,
            userId: userId,
            title :title,
            body: body
        });
        this.setState({posts: this.state.posts })    
    }

    addToDo = (userId, title) => {
        this.state.todos.push({
            id: this.state.todos.length + 1,
            userId: userId,
            title :title,
            completed: false
        });
        this.setState({todos: this.state.todos })    
    }

    updateTodo = (id) => {
        this.state.todos.forEach((todo) => {
            if (todo.id == id) {
                todo.completed = true
            }});
        this.setState({todos: this.state.todos })    
    }

    updateUser = (id, userData) => {
        this.state.filtered.forEach((user) => {
            if (user.id == id){
                user.email =  userData.email
                user.name = userData.name
                user.address.street = userData.street
                user.address.city = userData.city
                user.address.zipcode = userData.zipcode
            }
        });
        this.setState({filtered: this.state.filtered })
    }

    deleteAllUserData = (id) => {
        var currUser = this.state.filtered.findIndex((user) => user.id == id)
        this.state.filtered.splice(currUser, 1)

        var arrTodos = this.state.todos.map((todo, index) => {
            if (todo.userId == id) return index
            else return -1})
        arrTodos = arrTodos.filter((index) => index != -1)  
        for (let i = arrTodos.length - 1; i >= 0; i--) {
            this.state.todos.splice(arrTodos[i], 1);
        }

        var arrPosts = this.state.posts.map((post, index) => {
            if (post.userId == id) return index
            else return -1})
        arrPosts = arrPosts.filter((index) => index != -1)  
        for (let i = arrPosts.length - 1; i >= 0; i--) {
            this.state.todos.splice(arrPosts[i], 1);
        }

        if(this.state.currentId == id) this.setState({sideShow: 'none'})
        this.setState({filtered: this.state.filtered ,
                        todos: this.state.todos, 
                        posts: this.state.posts })
    }
    searchUsers = (e) => {
        if (e.target.value == '') this.setState({filtered: this.state.users, currentId: -1, sideShow: 'none'})
        else this.setState({filtered: this.state.filtered.filter((user) => user.name.indexOf(e.target.value) != -1 || user.email.indexOf(e.target.value) != -1 )})
    }

    showAddUser = () => {
        this.setState({sideShow: 'addUser', currentId: 0})
    }
    addUserCancel = (e) => {
        this.setState({sideShow: 'none',
                    currentId: -1})
    }
    render() {
        return (
            <div>
                <div className='Main'>
                    Search : <input className='Search' type="text" placeholder='Search users' onChange={this.searchUsers} />
                    <input className='addUser' type="button" onClick={this.showAddUser} value="Add" />
                    <Users users={this.state.filtered} todos={this.state.todos} 
                        updateUser={this.updateUser}
                        deleteAllUserData={this.deleteAllUserData}
                        showUserInfo={this.showUserInfo}
                        currentId={this.state.currentId}
                        />
                </div>
                {this.state.sideShow == 'addUser' && (
                    <AddUserForm addUserCancel={this.addUserCancel} addUser={this.addUser} />
                )}
                {this.state.sideShow == 'info' && (
                    <>
                    <Todos todos={ this.state.todos }
                            currentId={this.state.currentId}
                            updateTodo={this.updateTodo}
                            addToDo={this.addToDo} />
                    <Posts posts={this.state.posts } 
                            currentId={this.state.currentId}
                            addPost={this.addPost} />
                    </>
                )}
            </div>
        );
    }
}

export default Main;