import React from 'react'
import PropTypes from 'prop-types'

import COmmentModal, { CommentModal } from './CommentModal';

class Populator extends React.Component {
    render(){
        const {event} = this.props;
        let date = new Date();
        let time = date.toTimeString()
        return (
            <div className="holder">
                <div className="content">
                    <div className="node">
                        <div className="line"></div>
                        <div className="avatar">
                            {/* gravatar size now taken 24px */}
                            <img src="assets/ceo.png" alt="gravatar"/>
                        </div>
                    </div>
                    <div className="context">
                        <div className="title">{event.title}</div>
                        <div className="timestamp">{event.time}</div>
                    </div>
                    <div className="comments">
                        <div type="button" className="comment_bubble" data-toggle="modal" data-target="#commentModal">
                            {/* <button className="btn"> */}
                            <span className="material-icons">mode_comment</span>
                            {/* </button> */}
                        </div>
                        <div className="count">{event.comments.length}</div>
                    </div>
                </div>
                <CommentModal/>
            </div>
        )
    }
}

export default Populator;