import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';

import Populator from './Populator';
import EventAdder from './EventAdder';
import Signup from './SignUp';

export class MainView extends Component {
    render() {
        return (
            <div>
                <div className="picker">
                    <div className="area">
                        <DatePicker/>
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
