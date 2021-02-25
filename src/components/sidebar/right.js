import React, { Component } from 'react';
import RightSidebar from './rightSidebar';
import RightFrom from './rightFrom';


class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberFrom: false,
        }

    }



    render() {
        return (
            <div>

                <div style={{ marginBottom: '20px' }}> <RightSidebar /> </div>
                <div> <RightFrom /> </div>
            </div>
        );
    }
}

export default Right;