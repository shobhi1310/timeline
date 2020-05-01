import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Populator from './Populator';
import EventAdder from './EventAdder';

export class MainView extends Component {
    state={
        eventPresent: false,
        events:[]
    };

    handleDateChange=(date)=>{
        this.props.dateChange(date);
    }

    componentWillMount=()=>{}

    render() {
        const {dates, nextStep, formatDate} = this.props;
        var today = new Date();
        today = formatDate(today);
        console.log(dates.date+' '+today)
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
                    <Populator/>
                    <Populator/>
                    {/* <p>Sorry!! no events</p> */}
                </div>
                {
                    (dates.stringDate === today) ? (<EventAdder nextStep={nextStep} />) : ('')
                }
            </div>
        )
    }
}

export default MainView
