import React, { Component } from 'react'

export class Post extends Component {
    render() {
        return (
            <div class="tweet-body">
                <form enctype="multipart/form-data">
                    <textarea class="status" name="status" placeholder="Write your post here!" rows="4" cols="50"/>
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
