import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Populator from './Populator';
import EventAdder from './EventAdder';

export class MainView extends Component {
    state={
        diff : []
    }

    handleDateChange=(date)=>{
        this.props.dateChange(date);
    }

    componentWillMount=()=>{
        const {events} = this.props;
        var diff = [];
        if(events.length!==0){
            (events[0].events).map((event)=>{
                diff.push(event.milliTime);
            })
        }
    }

    combiner=(events,diff)=>{
        var combined = [];
        if(events.length!==0){
            var set = {};
            for(var i=0;i<events[0].events.length;i++){
                set = {
                    event : events[0].events[i],
                    diff : diff[i]
                }
                combined.push(set); 
            }
        }
        return combined;
    }

    render() {
        const {dates, nextStep, formatDate, events, diff} = this.props;
        var today = new Date();
        today = formatDate(today);
        var combined = this.combiner(events,diff)
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
                    {
                        (combined.length!==0)?
                        (
                            (combined).map((each)=>{
                                return(
                                    <Populator event={each.event} styler={each.diff} />
                                )
                            })
                        )
                        : ('')
                    }
                </div>
                <div id="no-event">
                    <p>Sorry!! no events</p>
                </div>
                {
                    (dates.stringDate === today) ? (<EventAdder nextStep={nextStep} />) : ('')
                }
            </div>
        )
    }
}

export default MainView
