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
                    <img src="./assets/ceo.png" alt="icon" width="40px"/>   {/* we need to resize and set a proper image size */}  
                </div>
                <div className="friend-name">{friend.name}</div>
            </div>
        )
    }
}

export default SearchPopulator
