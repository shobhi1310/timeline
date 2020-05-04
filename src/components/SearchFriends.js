import React, { Component } from 'react'
import axios from 'axios'

import SearchPopulatr from './SearchPopulator'

export class SearchFriends extends Component {
    state={
        name : '',
        friend_list : []
    }

    handleChange=input=>e=>{
        this.setState({
            [input] : e.target.value
        })
    }

    onSubmit=(e)=>{
        const {name} = this.state
        e.preventDefault();
        const searchUrl = 'http://localhost:5000/users/search/'+name;
        axios.get(searchUrl)
        .then((res)=>{
            this.setState({
                friend_list : res.data
            })
        })
    }

    render() {
        const {name, friend_list} = this.state
        return (
            <div class="container" style={{marginTop:"2%"}}>
                <h3 className="display-4">Search your friends</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group mb-3 row">
                        <input class="form-control" type="search"  placeholder="Search.." name="search" aria-describedby="button-addon2" value={name} onChange={this.handleChange('name')} />
                        <div class="input-group-append">
                            <span class="input-group-text form-control" id="basic-addon2">
                                <button className="btn" type="submit"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </div>
                    <div class="col-sm-4"></div>
                </form>
                <div className="friend-container">
                    {
                        (friend_list).map((friend)=>{
                            return(
                                <SearchPopulatr friend={friend} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SearchFriends
