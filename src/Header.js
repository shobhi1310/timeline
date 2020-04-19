import React from 'react';
import SearchForm from './SearchForm'
import PropTypes from 'prop-types'

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchVisible : false
        }
    }
    static propTypes = {
        onSearch: PropTypes.func
    }
    submitForm(val){
        this.props.onSearch(val);
    }
    showSearch(){
        this.setState({
            searchVisible: !this.state.searchVisible
        });
    }
    render() {
        let searchInputClasses = ["searchInput"]
        if(this.state.searchVisible){
            searchInputClasses.push("active");
        }
        const wrapperStyle = {
            backgroundColor: 'rgba(251, 202, 43, 1)'
        }
        const titleStyle = {
            color: '#111111'
        }
        const menuColor = {
            backgroundColor: '#111111'
        }
        return (
            <div className="header">
                <div className="menuIcon">
                    <div className="dashTop" style={menuColor}></div>
                    <div className="dashBottom" style={menuColor}></div>
                    <div className="circle" style={menuColor}></div>
                </div>
                <span className="title">
                    {this.props.title}
                </span>
                <SearchForm searchVisible={this.state.searchVisible} onSubmit={this.props.onSubmit} />
                <div onClick={this.showSearch.bind(this)} className="fa fa-search searchIcon"></div>
            </div>
        )
    }
    }

export default Header;