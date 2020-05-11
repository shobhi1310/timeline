import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';
import * as jquery from 'jquery'

import Populator from './Populator';
import EventAdder from './EventAdder';
import CommentModal from './CommentModal';
import DescrModal from './DescrModal';

export class MainView extends Component {
    state={
        diff : [],
        comments: [],
        event_id : '',
        descr : '',
        photos : [],
        title: ''
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

    showComments=(e)=>{
        const {events} = this.props;
        const searchID = e.target.id;
        for(var i=0;i<events[0].events.length;i++){
            if(searchID === events[0].events[i]._id){
                this.setState({
                    comments : events[0].events[i].comments,
                    event_id : events[0].events[i]._id
                })
            }
        }
        document.getElementById('comment-box').style.visibility = 'visible';
    }

    closeComments=()=>{
        document.getElementById('comment-box').style.visibility = 'hidden';
        this.setState({
            comments : [],
            event_id : ''
        })
    }

    showEventDetail=(e)=>{
        console.log(e.target.id);
        const {events} = this.props;
        const searchID = e.target.id;
        for(var i=0;i<events[0].events.length;i++){
            if(searchID === events[0].events[i]._id){
                this.setState({
                    descr : events[0].events[i].description,
                    photos : events[0].events[i].tagged_photos,
                    title : events[0].events[i].title
                })
            }
        }
    }

    render() {
        const {comments, event_id, photos, descr, title} = this.state;
        const {dates, nextStep, formatDate, events, diff, admin} = this.props;
        const eventParcel = {descr, photos, title}
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
                                    <Populator
                                    admin={admin}
                                    event={each.event} 
                                    styler={each.diff} 
                                    showComments={this.showComments}
                                    showEventDetail={this.showEventDetail}
                                    />
                                )
                            })
                        )
                        : (
                            <div id="no-event" className="container" >
                                <p>Sorry!! no events</p>
                            </div>
                        )
                    }
                </div>
                <CommentModal 
                comments={comments} 
                closeComments={this.closeComments} 
                admin={admin} 
                events={events}
                event_id={event_id}
                />
                {
                    (admin && dates.stringDate === today) ? (<EventAdder nextStep={nextStep} />) : ('')
                }
                <DescrModal
                eventParcel={eventParcel}
                />
            </div>
        )
    }
}

export default MainView
