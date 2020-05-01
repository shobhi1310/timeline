import React, { Component } from 'react'
import axios from 'axios';

export default class EventFiller extends Component {
    state={
        title:'',
        description:'',
        photos:[]
    }
    componentWillMount=()=>{
        const {values,dates} = this.props;
        const id = window.sessionStorage.getItem('u_id');
        const createUrl = 'http://localhost:5000/events/create/'+id;
        if(values.events.length===0){
            axios.post(createUrl,{date : dates.stringDate})
            .then((res)=>{console.log(res.data)})
        }
        // console.log(values.events);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        window.location = '/';
    }
    previous=()=>{
        // this.props.prevStep();
        window.location = '/';
    }
    handleChange=input=>e=>{
        this.setState({
            [input]: e.target.value
        });
    }
    render() {
        return (
            <div className="container" style={{marginTop:"2%",position:"absolute",left:"20%"}}>
                <div style={{marginBottom:"2%"}}>
                    <button type="button" className="btn btn-warning" onClick={this.previous}>Back</button>
                </div>
                <h2>Add your event</h2>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" id="title" onChange={this.handleChange('title')} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-5">
                            <textarea type="text" class="form-control" id="description" onChange={this.handleChange('description')} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Tag Photos</label>
                        <div class="col-sm-5">
                            <input type="file" id="photos" />
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
