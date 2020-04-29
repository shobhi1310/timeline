import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';

axios.defaults.headers.common = {
    "Content-Type": "application/json"
  }

export class Login extends Component {
    next=(e)=>{
        this.props.nextStep();
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {values} = this.props;
        const user = {
            username: values.username,
            password: values.password
        }
        axios.post('http://localhost:5000/users',user)
        .then((res)=>{
            if(res.data.length!==0){
                window.sessionStorage.setItem('u_id','something');
                window.location = '/';
            }else{
                document.getElementById('password').className += ' is-invalid';
            }
        })
    }

    render() {
        const {handleChange} = this.props;
        return (
            <div className="container" style={{position: "absolute", left: "27%",marginTop: "6%"}}>
                <div >
                    <h2 className="display-4">Log in</h2>
                    <p><small>And enjoy</small></p>
                </div>
                <form onSubmit={this.handleSubmit} >
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" id="username" onChange={handleChange('username')} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-5">
                            <input type="password" class="form-control" id="password" onChange={handleChange('password')} />
                            <div class="invalid-feedback" id="validator">
                            Credentials Incorrect.
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-5">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <em>Don't have an account <a href="#" onClick={this.next} >Sign Up</a></em>
                </form>
            </div>
        )
    }
}

export default Login
