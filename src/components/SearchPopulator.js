import React, { Component } from 'react'

export class SearchPopulator extends Component {
    render() {
        const {friend} = this.props
        return (
            <div className="friend-holder">
                <div className="friend-icon">
                    <img src="./assets/ceo.png" alt="icon" width="40px"/>   {/* we need to resize and set a proper image size */}  
                </div>
                <div className="friend-name">{friend.name}</div>
            </div>
        )
    }
}

export default SearchPopulator
