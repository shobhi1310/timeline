import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';

import Populator from './Populator';
import EventAdder from './EventAdder';

export class MainView extends Component {
    state={
        date: new Date()
    };

    componentWillMount=()=>{
    };

    handleDateChange=(date)=>{
        this.setState({
            date : date
        });
    }

    render() {
        const {date} = this.state;
        return (
            <div>
                <div className="picker">
                    <div className="area">
                        <DatePicker
                        selected={date}
                        onChange={this.handleDateChange}
                        />
                    </div>
                    <div className="calendar-icon">
                        <span class="material-icons">event</span>
                    </div>
                </div>
                <div id="timeline">
                    <Populator/>
                    <Populator/>
                </div>
                <Link to="/add-event" >
                    <EventAdder/>
                </Link>
            </div>
        )
    }
}

export default MainView
