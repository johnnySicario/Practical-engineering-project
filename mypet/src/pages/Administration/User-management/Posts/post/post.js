import React, { Component } from 'react';
import './post.css';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            body: this.props.body
        }
    }

    render() {
        return (
            <div className='Post'>
                <strong>Title :</strong> <label name='title' > {this.state.title || ''} </label> <br />
                <strong>Body :</strong> <label name='completed' > {this.state.body || ''}  </label> <br />
                <br />
            </div>
        );
    }
}

export default Post;