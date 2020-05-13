import React, { Component } from 'react'

export class FriendProfile extends Component {
    timeDisplay=()=>{
        var {start_time, end_time} = this.props.values
        if(start_time>12){
            start_time -= 12
            start_time += ' p.m'
        }else{
            start_time += ' a.m'
        }

        if(end_time>12){
            end_time -= 12
            end_time += ' p.m'
        }else{
            end_time += ' a.m'
        }
        const str = start_time+' to '+end_time
        return str
    }
    render() {
        const {values} = this.props
        return (
            <div className="profile-box">
                <div className="friend-profile-icon">
                    <img src={Buffer(window.localStorage.getItem('friend_pic')).toString('utf8')} alt="gravatar" style={{height:"30px",borderRadius:"15px"}}/>
                </div>
                <div className="friend-id">{values.username}</div>
                <div className="friend-content">
                    <div className="friend-name">
                        <strong>name: </strong>
                        <div>{values.name}</div>
                    </div>
                    <div className="friend-occupation">
                        <strong >occupation: </strong>
                        <div>{values.occupation}</div>
                    </div>
                    <div className="friend-worktime">
                        <strong >work-time: </strong>
                        <div>{this.timeDisplay()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendProfile
