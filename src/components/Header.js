import React from 'react';
import {Link} from 'react-router-dom';

import LogOut from './LogOut';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let date = new Date();
        date = date.toUTCString();
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Icon</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#extraNavs" aria-controls="extraNavs" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="extraNavs">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/profile">Profile</Link>
                        <Link className="nav-item nav-link" to="/search-friend">Search Friends</Link>
                        <Link className="nav-item nav-link" to="/todo" >To Do</Link>
                    </div>
                </div>
                {
                (window.sessionStorage.getItem('u_id')) ? (<LogOut/>) : ('')
                }
            </nav>
        )
    }
}

export default Header;