import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let date = new Date();
        date = date.toUTCString();
        return (
            <div className="header_section">
                <div className="snackbar">
                    <a href="#"><span class="material-icons">view_week</span></a>
                </div>
                <div className="title_content">{date}</div>
                <div className="search">
                    <a href="#"><i class="fa fa-fw fa-search"></i></a>
                </div>
            </div>
        )
    }
}

export default Header;