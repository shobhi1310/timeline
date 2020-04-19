import React from 'react'
import PropTypes from 'prop-types'

class SearchForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        searchVisible: PropTypes.bool
    }
    static defaultProps = {
        onSubmit: () => {},
        searchVisible: false
    }
    updateSearchInput(e){
        const val = e.target.value;
        this.setState({
            searchText: val
        })
    }
    submitForm(e){
        e.preventDefault();

        const{searchText} = this.state;
        this.props.onSubmit(searchText);
    }
    render() {
        const { searchVisible } = this.state;
        let searchClasses = ['searchInput']
        if (searchVisible) {
            searchClasses.push('active')
        }
        return (
            <form className='header' onSubmit={this.submitForm.bind(this)}>
            <input
                type="search"
                className={searchClasses.join(' ')}
                onChange={this.updateSearchInput.bind(this)}
                placeholder="Search ..." />
            <div
                onClick={this.showSearch.bind(this)}
                className="fa fa-search searchIcon"></div>
            </form>
        );
    }
}

export default SearchForm;