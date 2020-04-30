import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Populator from './Populator';
import EventAdder from './EventAdder';

export class MainView extends Component {
    state={
        eventPresent: false
    };

    handleDateChange=(date)=>{
        this.props.dateChange(date);
    }

    render() {
        const {dates} = this.props;
        const {nextStep} = this.props;
        return (
            <div>
                <div className="picker">
                    <div className="area">
                        <DatePicker
                        dateFormat="dd-MM-yyyy"
                        selected={dates.date}
                        onChange={this.handleDateChange}
                        maxDate={new Date()}
                        />
                    </div>
                    <div className="calendar-icon">
                        <span class="material-icons">event</span>
                    </div>
                </div>
                <div id="timeline">
                    {/* <Populator/> */}
                    {/* <Populator/> */}
                    <p>Sorry!! no events</p>
                </div>
                <EventAdder
                nextStep={nextStep}
                />
            </div>
        )
    }
}

export default MainView
