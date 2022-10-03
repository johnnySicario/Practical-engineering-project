import React, { Component } from 'react';
import Post from './post/post.js';
import './posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            body: '',
            currentId: this.props.currentId, 
            isToAdd: false,
            posts: this.props.posts
        }
    }

    addPost = (e) => {
        this.props.addPost(this.state.currentId, this.state.title, this.state.body)
        this.setState({
            isToAdd: false
        })
    }

    changeToAdd = (e) => {
        this.setState({
            isToAdd: true
        })
    }

    setTitle = (e) => {
        this.setState({title: e.target.value})
    }
    setBody = (e) => {
        this.setState({body: e.target.value})
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
        var currPosts = this.state.posts.filter((post) => post.userId == this.state.currentId)
        return (
            <div className='Posts'>
                {!this.state.isToAdd ? 'Posts' : 'New Post'} - User  {this.state.currentId} 
                {!this.state.isToAdd && <input className='PostAdd' type="button" onClick={this.changeToAdd} value="Add" />}
                {!this.state.isToAdd ? (<>
                { currPosts.map((element) => {                    
                        return (
                            <div key={element.id * 20}>
                            <Post key={element.id} id={element.id} title={element.title} body={element.body} />
                            <br key={element.id * 19} />
                            </div>
                        )}
                )}</>) : (<>
                    <div className='addPostDiv'>
                        <strong>Title :</strong> <input type="text" value={this.state.title} onChange={this.setTitle}/> <br/>
                        <strong>Body :</strong> <input type="text" value={this.state.body} onChange={this.setBody}/> <br/><br/>
                        <div className='buttonsRight'>
                        <input  id="cancel" name="cancel" type="button" onClick={this.addCancel} value="Cancel" /> &nbsp;&nbsp;
                        <input  type="button" onClick={this.addPost} value="Add Post" />
                        </div>
                    </div>
                </>)
                }
            </div>
        );
    }
}

export default Posts;