import React, { Component } from 'react'

export class Profile extends Component {

    continue=()=>{
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;
        const occupations = ['student','working offcial','free lancer','hobbyst','other...'];
        return (
            <div className="container" style={{position: "absolute", left: "27%",marginTop: "6%"}}>
                <div>
                    <form>
                        <div class="media form-group row">
                            <img src="./logo192.png" class="mr-3 col-sm-2" alt="..."/>
                            <div class="media-body">
                                <h5 class="mt-0">Choose your Gravatar</h5>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="username" onChange={handleChange('name')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Occupation</label>
                            <div class="col-sm-5">
                                <select class="form-control" onChange={handleChange('occupation')} >
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
                                <input type="text" class="form-control" id="username" onChange={handleChange('start_time')} />
                            </div>
                            <div>-</div>
                            <div class="col-sm-1">
                                <input type="text" class="form-control" id="username" onChange={handleChange('end_time')} />
                            </div>
                            <div><em>(24 hours format)</em></div>
                        </div>
                        <div class="form-group row" style={{marginTop:"50px"}}>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-2">
                                <input id="profile-save" class="btn btn-primary" type="submit" value="Save" onClick={this.continue} />
                            </div>
                            <div class="col-sm-2">
                                <input class="btn btn-danger" type="submit" value="Edit"/>
                            </div>
                        </div>       
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile
