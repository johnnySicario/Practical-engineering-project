import React, { Component } from 'react';
import './AddTodoForm.css';

class AddTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        }
    }

    setTitle = (e) => {
        this.setState({title: e.target.value})
    }

    render() {
        return (
            <div className='AddTodoFormBody'>
                <strong>Title:</strong> <input type="text" placholder="To Do ..." value={this.state.title} onChange={this.setTitle}/> <br/><br/>
                <div className='buttonsRight'>
                    <input  id="cancel" name="cancel" type="button" onClick={this.props.addCancel} value="Cancel" /> &nbsp;&nbsp;
                    <input  type="button" onClick={() => this.props.addToDo(this.state.title)} value="Add To Do" />
                </div>
            </div>
        );
    }
}

export default AddTodoForm;