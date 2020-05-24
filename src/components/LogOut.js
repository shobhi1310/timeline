import React, { Component } from 'react'

export class LogOut extends Component {
    logOut=()=>{
        window.localStorage.removeItem('u_id');
        if(window.sessionStorage.getItem('friend_id')){
            window.sessionStorage.removeItem('friend_id')
        }
        window.location = '/';
    }

    render() {
        return (
            <div style={{width:"fit-content",height:"fit-content"}}>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="log-out" onClick={this.logOut}>Log Out</button>
            </div>
        )
    }
}

export default LogOut
