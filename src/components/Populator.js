import React from 'react'
import PropTypes from 'prop-types'

class Populator extends React.Component {
    render(){
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
                        <div className="title">id diam vel</div>
                        <div className="timestamp">{time}</div>
                    </div>
                    <div className="comments">
                        <div className="comment_bubble">
                            <span className="material-icons">mode_comment</span>
                        </div>
                        <div className="count">2</div>
                    </div>
                </div>
                {/* <div>hello</div> */}
                <div className="content">
                    <div className="node">
                        <div className="line"></div>
                        <div className="avatar">
                            {/* gravatar size now taken 24px */}
                            <img src="assets/ceo.png" alt="gravatar"/>
                        </div>
                    </div>
                    <div className="context">
                        <div className="title">id diam vel</div>
                        <div className="timestamp">{time}</div>
                    </div>
                    <div className="comments">
                        <div className="comment_bubble">
                            <span className="material-icons">mode_comment</span>
                        </div>
                        <div className="count">2</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Populator;