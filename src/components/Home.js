import React, { Component } from 'react';

import MainView from './MainView';
import SignUp from './SignUp';
import Login from './Login';

export class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <MainView/>
            </div>
        )
    }
};

export default Home
