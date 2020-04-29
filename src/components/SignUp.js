import React, { Component } from 'react'
import axios from 'axios';

export default class SignUp extends Component {
    state={
        confirmPassword:''
    };

    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }

    prev=()=>{
        this.props.prevStep();
    }

    validate=(e)=>{
        const {values} = this.props;
        const {confirmPassword} = this.state;
        this.setState({
            confirmPassword:e.target.value
        })
        if(values.password!==confirmPassword){
            document.getElementById('confirm-password').className = 'form-control is-invalid';
        }else{
            document.getElementById('confirm-password').className = 'form-control';
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {confirmPassword} = this.state;
        const {values, handleChange} = this.props;
        return (
            <div className="container" style={{position: "absolute", left: "27%",marginTop: "6%"}}>
                <h2 className="display-4">Sign Up</h2>
                <p><small>For all the exciting features</small></p>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" id="username" onChange={handleChange('username')} value={values.username} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-5">
                            <input type="password" class="form-control" id="password" onChange={handleChange('password')} value={values.password} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Confirm Password</label>
                        <div class="col-sm-5">
                            <input type="password" class="form-control" id="confirm-password" onChange={this.validate} value={confirmPassword}/>
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
