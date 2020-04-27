import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"10px"}}>
                <h2 className="style-4">Log in</h2>
                <p>And enjoy</p>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">username</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="username"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="password"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
