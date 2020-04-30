import React, { Component } from 'react';
import axios from 'axios';

import MainView from './MainView';
import SignUp from './SignUp';
import Profile from './Profile';
import Login from './Login';
import EventFiller from './EventFiller';

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
            logged_in: false,
            date: new Date(),
            stringDate:'',
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
                    gravatar: gravatar,
                    stringDate: this.formatDate(this.state.date)
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

    handleDateChange=(date)=>{
        this.setState({
            date : date,
            stringDate: this.formatDate(date)
        });
    }

    formatDate=(date)=>{
        var dd = date.getDate(); 
        var mm = date.getMonth() + 1; 
  
        var yyyy = date.getFullYear(); 
        if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        var today = dd + '-' + mm + '-' + yyyy;
        return today;
    }

    render() {
        const {step} = this.state;
        const {name, username, password, occupation, start_time, end_time, gravatar, date, stringDate} = this.state;
        const values = {name, username, password, occupation, start_time, end_time, gravatar};
        const dates = { date, stringDate};

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
                    <MainView
                    dates={dates}
                    nextStep={this.nextStep}
                    dateChange={this.handleDateChange}
                    />
                )
            case 5:
                return(
                    <EventFiller
                    dates={dates}
                    prevStep={this.prevStep}
                    />
                )
        }
    }
};

export default Home
