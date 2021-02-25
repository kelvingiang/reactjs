import React, { Component } from 'react';

class CustomerItem extends Component {
    render() {
        return (
            <div className='row' style={{ borderBottom: '1px solid #fff'}}>
                <div className='col-lg-8'>
                    <label style={{fontWeight:'bold'}}>{this.props.children}</label>
                </div>
                <div className='col-lg-4'>{this.props.date}</div>
            </div>
        );
    }
}

export default CustomerItem;