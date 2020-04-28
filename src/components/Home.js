import React, { Component } from 'react';

import MainView from './MainView';
import SignUp from './SignUp';
import Profile from './Profile';
import Login from './Login';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            step : 1,
            username: '',
            password: '',
            name: '',
            occupation: '',
            start_time: '',
            end_time:'',
            gravatar:''
        }
    }

    nextStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange=input=>e=>{
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const {step} = this.state;
        const {name, usernamse, password, occupation, start_time, end_time, gravatar} = this.state;
        const values = {name, usernamse, password, occupation, start_time, end_time, gravatar};

        switch (step) {
            case 1:
                return(
                    <Login
                    nextStep={this.nextStep}
                    />
                )
            case 2:
                return (
                    <SignUp
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return(
                    <Profile
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 4:
                return(
                    <MainView/>
                )
        }
    }
};

export default Home
