import React, { Component } from 'react'
import axios from 'axios';

export class Post extends Component {
    state={
        post : ''
    }

    handleChange=input=>e=>{
        this.setState({
            [input] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        const {post} = this.state
        const {event_id} = this.props
        const user_id = window.sessionStorage.getItem('u_id')
        const main_id = window.sessionStorage.getItem('event_id')
        // e.preventDefault();
        const commentUrl = 'http://localhost:5000/comments/'+event_id
        const comment = {
            post : post,
            main_id : main_id,
            user_id : user_id
        }
        axios.post(commentUrl, comment)
        .then((res)=>{
            console.log(res.data)
        })
    }

    render() {
        return (
            <div class="tweet-body">
                <form onSubmit={this.handleSubmit} >
                    <textarea class="status" name="post" placeholder="Write your post here!" rows="4" cols="50" value={this.state.post}  onChange={this.handleChange('post')} />
                    <div className="post-btn">
                        <button className="btn">
                            <span class="material-icons">send</span>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Post
