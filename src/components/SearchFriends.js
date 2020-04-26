import React, { Component } from 'react'
import SearchPopulatr from './SearchPopulator'

export class SearchFriends extends Component {
    render() {
        return (
            <div class="container" style={{marginTop:"2%"}}>
                <h3 className="display-4">Search your friends</h3>
                <form>
                    <div className="input-group mb-3 row">
                        <input class="form-control" type="search"  placeholder="Search.." name="search" aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <span class="input-group-text form-control" id="basic-addon2">
                                <button className="btn" type="submit"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </div>
                    <div class="col-sm-4"></div>
                </form>
                <div className="friend-container">
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                    <SearchPopulatr/>
                </div>
            </div>
        )
    }
}

export default SearchFriends
