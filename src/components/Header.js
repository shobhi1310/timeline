import React from 'react';

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
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Profile</a>
                        <a className="nav-item nav-link" href="#">Search Friends</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;