import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props){
        super(props);
    }

    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }

    prev=()=>{
        this.props.prevStep();
    }

    validate=(e)=>{}

    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="container" style={{position: "absolute", left: "27%",marginTop: "6%"}}>
                <h2 className="display-4">Sign Up</h2>
                <p><small>For all the exciting features</small></p>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" id="username" onChange={handleChange('username')}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-5">
                            <input type="password" class="form-control" id="password" onChange={handleChange('password')} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Confirm Password</label>
                        <div class="col-sm-5">
                            <input type="password" class="form-control is-invalid" id="confirm-password" />
                            <div class="invalid-feedback" id="validator">
                            Password Mismatch.
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-5">
                            <button type="submit" class="btn btn-primary" onClick={this.continue} >Sign Up</button>
                        </div>
                    </div>
                    <em>Already have an account <a href="#" onClick={this.prev} >Login</a></em>
                </form>  
            </div>
        )
    }
}
