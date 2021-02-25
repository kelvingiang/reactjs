/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';


class Store extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='row' >
                <div className='col-2' style={{display:'flex', alignItems: 'right'}}>
                    <h6>{this.props.children}</h6>
                </div>
                <div className='col-2'>
                    <label>{this.props.address}</label>
                </div>
                <div className='col-2'>
                    <label>{this.props.phone}</label>
                </div>
                <div className='col-2'>
                    <label>{this.props.email}</label>
                </div>
                <div className='col-4'></div>
            </div>
        );
    }
}
export default Store;