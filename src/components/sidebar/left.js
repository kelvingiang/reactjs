import React, { Component } from 'react';
import LeftCustomers from './leftCustomers';

class Left extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#ccc'}} >
                <div style={{display:'flex', alignItems:'center'}}><h3>react js pror</h3></div>
                <div>
                  <LeftCustomers />
                </div>

            </div>
        );
    }
}

export default Left;