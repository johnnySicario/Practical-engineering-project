import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            completed: false
        }
    }

    componentDidMount() {
        this.setState({
            id : this.props.id,
            title: this.props.title,
            completed: this.props.completed
        })
    }

    setMark = (e) => {
        this.setState({completed: e.target.value})
        this.props.updateTodo(this.state.id)
    }

    render() {
        return (
            <div className='Todo'>
                <strong>Title:</strong> <label name='title' > {this.state.title || ''} </label> <br />
                <strong>Completed:</strong> <label name='completed' > {this.state.completed ? 'True' : 'False' }  </label> <br />
                {
                    !this.state.completed &&
                    <input className='Mark' type="button" onClick={this.setMark} defaultValue="Mark completed" />
                }
                <br />
            </div>
        );
    }
}

export default Todo;