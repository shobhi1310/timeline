import React, { Component } from 'react'

export class CommentPopulator extends Component {
    render() {
        const {comment} = this.props
        let date = new Date();
        let time = date.toTimeString();
        return (
            <div className="comment">
                <div className="icon">
                    <img src="./assets/ceo.png"/>
                </div>
                <div className="dateTime">{time}</div>
                <div className="post">
                    <p>
                    {comment.post}
                    </p>
                </div>
            </div>
        )
    }
}

export default CommentPopulator
