import React, { Component } from 'react';
import MemberData from '../data/member.json';
import './member.css';


class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }

    }

    changeBtn = () => {

        if (this.props.fromstatus === false) {
            return <button name='btn_addnew' onClick={this.props.fromtoogle}> Add New </button>;
        } else {
            return <button name='btn_cancel' onClick={this.props.fromtoogle}> Cancel </button>;
        }

    }

    changeBtnStatus = () => {
        this.setState({ chang: !this.state.chang });

    }


    MemberList = () => {

        const result = MemberData.map((val, key) =>

            <div key={key} index={key} className='member-row' >
                <div className='item-stt'> {key + 1} </div>
                <div className='item-name'> {val.name} </div>
                <div className='item-age'> {val.age} </div>
                <div className='item-phone'> {val.phone} </div>
                <div className='item-adress'> {val.address} </div>

            </div>

        );
        return result
    }

    render() {
        return (
            <div>
                <div>
                    {this.changeBtn()}
                </div>
                <hr></hr>

                <div id='member-list'>
                    <div className='member-title-row'>
                        <div className='item-stt'>stt</div>
                        <div className='item-name'>Name</div>
                        <div className='item-age'>Age</div>
                        <div className='item-phone'>Phone</div>
                        <div className='item-address'>Address</div>

                    </div>
                    {this.MemberList()}
                </div>
            </div>
        );
    }
}

export default MemberList;