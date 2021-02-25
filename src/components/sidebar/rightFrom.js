/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
import React, { Component } from 'react';

class RightFrom extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            txtuser: '',
            txtpass: ''
        }
    }


    submit = () => {
        this.setState({
            txtuser: this.txtUser.value,
            txtpass: this.txtPass.value
        });
        // this.setState({ content: 'content' });
    }

    render() {
        return (
            <div className='row' style={{ backgroundColor: '#fcfcfc', padding: '10px', border: '1px solid #000', borderRadius: '3px', marginBottom: '10px' }}>
                <div className='col-12'>
                    <h3> Form of reactjs (ref)</h3>
                </div>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-4'>user</div>
                        <div className='col-6'>
                            <input ref={(val) => this.txtUser = val} type='text' placeholder='user name' name='txt-user' />
                        </div>
                        <div className='col-4'>password</div>
                        <div className='col-6'>
                            <input ref={(val) => this.txtPass = val} type='passwrod' placeholder='password' name='password' id='password' />
                        </div>
                        <div className='col-12' style={{ marginTop: '10px' }}>
                            <button onClick={() => this.submit()} className='btn btn-secondary'>submit</button>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    {this.state.txtuser}
                    {this.state.txtpass}
                </div>
            </div>
        );
    }
};

export default RightFrom;