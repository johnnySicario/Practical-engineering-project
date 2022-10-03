import React, { Component } from 'react';
import Todo from './todo/todo.js';
import AddTodoForm from '../AddTodoForm/AddTodoForm.js'
import './todos.css';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state ={
            currentId: this.props.currentId, 
            isToAdd: false,
            todos: this.props.todos
        }
    }

    addToDo = (title) => {
        this.props.addToDo(this.state.currentId, title)
        this.setState({
            isToAdd: false
        })
    }

    changeToAdd = (e) => {
        this.setState({
            isToAdd: true
        })
    }

    addCancel = (e) => {
        this.setState({isToAdd: false})
    }

    componentDidUpdate(){
        if (this.state.currentId != this.props.currentId)
        this.setState({
            currentId: this.props.currentId, 
            isToAdd: false
        })
    }

    render() {
        var currTodos = this.props.todos.filter((todo) => todo.userId == this.state.currentId)
        return (
            <div className='Todos'>
                {!this.state.isToAdd ? 'ToDos' : 'New ToDo'} - User  {this.state.currentId} 
                {!this.state.isToAdd && <input className='TodoAdd' type="button" onClick={this.changeToAdd} value="Add" />}
                {!this.state.isToAdd ? (<>
                { currTodos.map((element) => {                    
                        return (
                            <div key={element.id * 20}>
                            <Todo key={element.id} id={element.id} title={element.title} completed={element.completed} 
                                  updateTodo={this.props.updateTodo}/>
                            <br key={element.id * 19} />
                            </div>
                        )}
                )}</>) : (
                    <AddTodoForm addToDo={this.addToDo} addCancel={this.addCancel}/>
                    )
                }
            </div>
        );
    }
}

export default Todos;