import React, { Component } from 'react'

export class SearchPopulator extends Component {

    redirect=()=>{
        const {friend} = this.props
        window.sessionStorage.setItem('friend_id',friend._id);
        window.location = '/friend'
    }

    render() {
        const {friend} = this.props
        return (
            <div className="friend-holder" onClick={this.redirect} >
                <div className="friend-icon">
                    {
                        (friend.gravatar!=='')
                        ?(<img src={Buffer(friend.gravatar).toString('utf8')} alt="icon" style={{width:"40px",borderRadius:"20px"}}/>)
                        :(<img src='./assets/ceo.png' alt="icon" style={{width:"40px",borderRadius:"20px"}}/>)
                    }
                </div>
                <div className="friend-name">{friend.name}</div>
            </div>
        )
    }
}

export default SearchPopulator
