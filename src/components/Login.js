import React, { Component } from 'react'

export class Login extends Component {
    next=(e)=>{
        this.props.nextStep();
    }
    render() {
        return (
            <div className="container" style={{position: "absolute", left: "27%",marginTop: "6%"}}>
                <div >
                    <h2 className="display-4">Log in</h2>
                    <p><small>And enjoy</small></p>
                </div>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" id="username"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-5">
                            <input type="password" class="form-control" id="password"/>
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
