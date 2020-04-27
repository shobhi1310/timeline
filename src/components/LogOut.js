import React, { Component } from 'react'

export class LogOut extends Component {
    render() {
        return (
            <div style={{width:"fit-content",height:"fit-content"}}>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="log-out">Log Out</button>
            </div>
        )
    }
}

export default LogOut
