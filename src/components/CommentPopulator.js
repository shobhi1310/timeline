import React, { Component } from 'react'

export class CommentPopulator extends Component {
    render() {
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
                    eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis
                    </p>
                </div>
            </div>
        )
    }
}

export default CommentPopulator
