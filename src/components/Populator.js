import React from 'react'
import PropTypes from 'prop-types'

import CommentModal from './CommentModal';

class Populator extends React.Component {

    state={
        disabled : false
    }

    componentWillMount=()=>{
        const {event} = this.props;
        if(event.comments.length===0){
            this.setState({
                disabled : true
            })
        }
    }

    render(){
        const {disabled} = this.state
        const {event, styler} = this.props;
        return (
            <div className="holder">
                <div className="content">
                    <div className="node">
                        <div className="line" style={{height:styler}}></div>
                        <div className="avatar">
                            {/* gravatar size now taken 24px */}
                            <img src="assets/ceo.png" alt="gravatar"/>
                        </div>
                    </div>
                    <div className="context" style={{top:styler}} >
                        <div className="title">{event.title}</div>
                        <div className="timestamp">{event.time}</div>
                    </div>
                    <div className="comments" style={{top:styler}} >
                        <button type="button" className="comment_bubble" data-toggle="modal" data-target="#commentModal" id="toggler" disabled={disabled}>
                            {/* <button className="btn"> */}
                            <span className="material-icons">mode_comment</span>
                            {/* </button> */}
                        </button>
                        <div className="count">{event.comments.length}</div>
                    </div>
                </div>
                <CommentModal/>
            </div>
        )
    }
}

export default Populator;