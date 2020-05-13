import React from 'react'
import PropTypes from 'prop-types'

import CommentModal from './CommentModal';

class Populator extends React.Component {

    state={
        disabled : false
    }

    componentWillMount=()=>{
        const {event, admin} = this.props;
        if(admin && event.comments.length===0){
            this.setState({
                disabled : true
            })
        }
    }

    render(){
        const {disabled} = this.state
        const {event, styler, showComments, showEventDetail, admin} = this.props;
        return (
            <div className="holder">
                <div className="content">
                    <div className="node">
                        <div className="line" style={{height:styler}}></div>
                        <div className="avatar">
                            {/* gravatar size now taken 24px */}
                            {
                                (admin) ? 
                                (<img src={Buffer(window.localStorage.getItem('profile_pic')).toString('utf8')} alt="gravatar" style={{height:"24px",borderRadius:"12px"}}/>)
                                :(<img src={Buffer(window.localStorage.getItem('friend_pic')).toString('utf8')} alt="gravatar" style={{height:"24px",borderRadius:"12px"}}/>)
                            }
                        </div>
                    </div>
                    <div className="context" style={{top:styler}} >
                        <div className="title"><a data-toggle="modal" href="#eventModal" id={event._id} onClick={showEventDetail} >{event.title}</a></div>
                        <div className="timestamp">{event.time}</div>
                    </div>
                    <div className="comments" style={{top:styler}} >
                        <button type="button" className="comment_bubble" data-toggle="modal" data-target="#commentModal" id="toggler" disabled={disabled} onClick={showComments} >
                            <span className="material-icons" id={event._id} >mode_comment</span>
                        </button>
                        <div className="count">{event.comments.length}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Populator;