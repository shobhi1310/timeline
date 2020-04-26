import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Populator from './Populator';

export class Home extends Component {
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
            </div>
        )
    }
};

export default Home
