import React, { Component } from 'react'

export default class EventAdder extends Component {
    next=()=>{
        this.props.nextStep();
    }
    render() {
        // const {nexStep} = this.props;
        return (
            <div className="event_adder" onClick={this.next} >
                <div className="add_button">
                    <span className="material-icons">add</span>
                </div>
            </div>
        )
    }
}
