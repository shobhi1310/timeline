import React, { Component } from 'react';
import axios from 'axios';

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
            occupation: 'student',
            start_time: '',
            end_time:'',
            gravatar:'',
            logged_in: false
        }
    }

    componentWillMount=()=>{
        const {step, logged_in} = this.state;

        if(window.sessionStorage.getItem('u_id')){
            const id = window.sessionStorage.getItem('u_id');
            const url = 'http://localhost:5000/users/details/'+id;
            let toStep = 4;
            axios.get(url)
            .then(res=>{
                const {name, username, password, occupation, start_time, end_time, gravatar} = res.data;
                
                if(this.props.step){
                    toStep = this.props.step;
                }
                this.setState({
                    logged_in : true,
                    step: toStep,
                    name: name,
                    username: username,
                    password: password,
                    occupation: occupation,
                    start_time: start_time,
                    end_time: end_time,
                    gravatar: gravatar
                });
            })
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
        const {name, username, password, occupation, start_time, end_time, gravatar} = this.state;
        const values = {name, username, password, occupation, start_time, end_time, gravatar};

        switch (step) {
            case 1:
                return(
                    <Login
                    nextStep={this.nextStep}
                    values={values}
                    handleChange={this.handleChange}
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
