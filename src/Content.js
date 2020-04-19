import React from 'react'
import ActivityItem from './ActivityItem'

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activities:[]
        };
    }
    componentWillMount(data){
        this.setState({activities:data});
    }
    render() {
        const {activities} = this.props;
        return(
        <div className="content">
            <div className="line"></div>
            {/* Timeline item */}
            {activities.map((activity) =>{
                <ActivityItem activity={activity} />
            })}
            {/* ... */}
        </div>
        )
    }
}

export default Content;