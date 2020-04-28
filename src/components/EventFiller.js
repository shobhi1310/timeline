import React, { Component } from 'react'

export default class EventFiller extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        window.location = '/';
    }
    render() {
        return (
            <div className="container" style={{marginTop:"2%",position:"absolute",left:"20%"}}>
                <h2>Add your event</h2>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" id="title"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-5">
                            <textarea type="text" class="form-control" id="description"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Tag Photos</label>
                        <div class="col-sm-5">
                            <input type="file" id="photos"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-10">
                            <input class="btn btn-success" type="submit" value="Add Event" onClick={this.handleSubmit} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
