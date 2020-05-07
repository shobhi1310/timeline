import React, { Component } from 'react'
import axios from 'axios'

import MainView from './MainView';
import FriendProfile from './FriendProfile';

export class Friend extends Component {
    constructor(props){
        super(props);
        this.state = {
            admin: '',
            username: '',
            name: '',
            occupation: '',
            start_time: '',
            end_time:'',
            gravatar:'',
            date: new Date(),
            stringDate:'',
            exists: false,
            events : [],
            diff : []
        }
    }

    componentWillMount=()=>{
        const {step, logged_in, date, stringDate} = this.state;

        if(window.sessionStorage.getItem('friend_id')){
            const id = window.sessionStorage.getItem('friend_id');
            const url = 'http://localhost:5000/users/details/'+id;
            var checkdate = this.formatDate(date);
            const eventListUrl = 'http://localhost:5000/events/'+id+'/'+checkdate;
            let toStep = 4;
            var fetchedEvents = [];
            var diff = [];
            axios.get(eventListUrl)
            .then((res)=>{
                window.sessionStorage.setItem('event_id',res.data[0]._id)
                fetchedEvents = res.data;
                diff = this.diffSetter(res.data)
            })
            axios.get(url)
            .then(res=>{
                const {name, username, occupation, start_time, end_time, gravatar} = res.data;

                if(this.props.step){
                    toStep = this.props.step;
                }
                this.setState({
                    admin : false,
                    name: name,
                    username: username,
                    occupation: occupation,
                    start_time: start_time,
                    end_time: end_time,
                    gravatar: gravatar,
                    stringDate: this.formatDate(this.state.date),
                    events: fetchedEvents,
                    diff : diff
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

    handleDateChange=(date)=>{
        const id = window.sessionStorage.getItem('friend_id');
        const eventListUrl = 'http://localhost:5000/events/'+id+'/'+this.formatDate(date);
        axios.get(eventListUrl)
        .then((res)=>{
            if(res.data[0])
                window.sessionStorage.setItem('event_id',res.data[0]._id)
            this.setState({
                date : date,
                stringDate: this.formatDate(date),
                events : res.data,
                diff : this.diffSetter(res.data)
            });
        })
    }

    diffSetter=(events)=>{
        var diff = [];
        if(events.length!==0){
            (events[0].events).map((event)=>{
                diff.push(event.milliTime);
            })
        }
        for(var i=1;i<diff.length;i++){
            diff[i] = diff[i] - diff[i-1];
        }
        for(var i=1;i<diff.length;i++){
            diff[i] = this.scalingUnit(diff[i]);
        }
        diff[0] = "0px";
        return diff;
    }

    scalingUnit=(milliTImeDiff)=>{
        var secondsTimeDiff = milliTImeDiff / 1000;
        if(secondsTimeDiff >= 7200){
            return "70px";
        }else if(secondsTimeDiff >=3600 && secondsTimeDiff < 7200){
            return "65px";
        }else if(secondsTimeDiff >=3000 && secondsTimeDiff < 3600){
            return "60px";
        }else if(secondsTimeDiff >=1800 && secondsTimeDiff < 3000){
            return "40px";
        }else{
            return "20px";
        }
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
        const {name, username, password, occupation, start_time, end_time, gravatar, date, stringDate, events, diff, admin} = this.state;
        const values = {name, username, password, occupation, start_time, end_time, gravatar, events, admin};
        const dates = { date, stringDate};
        return (
            <div>
                <MainView
                admin = {admin}
                dates={dates}
                events={events}
                diff={diff}
                nextStep={this.nextStep}
                dateChange={this.handleDateChange}
                formatDate={this.formatDate}
                />
                <FriendProfile
                values={values}
                />
            </div>
        )
    }
}

export default Friend
