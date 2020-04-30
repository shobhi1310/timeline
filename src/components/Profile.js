import React, { Component } from 'react'
import axios from 'axios';

export class Profile extends Component {
    state={
        editState:false
    };  

    toggle=(e)=>{
        e.preventDefault();
        const {editState} = this.state;
        this.setState({
            editState: !editState
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {values} = this.props;
        if(window.sessionStorage.getItem('u_id')){
            const u_id = window.sessionStorage.getItem('u_id')
            const url = 'http://localhost:5000/users/update/' + u_id; 
            
            axios.post(url,values)
            .then((res)=>{
                window.location = '/';
            })
        }else{
            const url = 'http://localhost:5000/users/create';
            axios.post(url,values)
            .then((res)=>{
                window.sessionStorage.setItem('u_id',res.data._id);
                window.location = '/';
            })
        }
    }

    render() {
        const {editState} = this.state;
        const {values, handleChange} = this.props;
        const occupations = ['student','working offcial','free lancer','hobbyst','other...'];
        return (
            <div className="container" style={{position: "absolute", left: "27%",marginTop: "6%"}}>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="media form-group row">
                            <img src="./logo192.png" class="mr-3 col-sm-2" alt="..."/>
                            <div class="media-body">
                                <h5 class="mt-0">Choose your Gravatar</h5>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="name" onChange={handleChange('name')} readOnly={!editState} value={values.name} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Occupation</label>
                            <div class="col-sm-5">
                                <select class="form-control" id="occupation" onChange={handleChange('occupation')} disabled={!editState} value={values.occupation} >
                                    {
                                        occupations.map((occupation)=>{
                                            return(
                                                <option>{occupation}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Work Schedule</label>
                            <div class="col-sm-1">
                                <input type="text" class="form-control" id="start_time" onChange={handleChange('start_time')} readOnly={!editState} value={values.start_time} />
                            </div>
                            <div>-</div>
                            <div class="col-sm-1">
                                <input type="text" class="form-control" id="end_time" onChange={handleChange('end_time')} readOnly={!editState} value={values.end_time} />
                            </div>
                            <div><em>(24 hours format)</em></div>
                        </div>
                        <div class="form-group row" style={{marginTop:"50px"}}>
                            <div class="col-sm-2"></div>
                            {
                                (editState===false)? (
                                    <div class="col-sm-2">
                                        <input class="btn btn-danger" type="submit" value="Edit" onClick={this.toggle} />
                                    </div>
                                ) : (
                                    <div class="col-sm-2">
                                        <input id="profile-save" class="btn btn-primary" type="submit" value="Save"/>
                                    </div>
                                )
                            }
                        </div>       
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile
