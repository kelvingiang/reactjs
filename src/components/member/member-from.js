import React, { Component } from 'react';

class MemberFrom extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            txt_ID: '',
            txt_name: '',
            txt_age: '',
            txt_phone: '',
            txt_address: '',
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
                    <h3> Form Add Member </h3>
                    <hr></hr>
                </div>
               
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-4'>id</div>
                        <div className='col-6'>
                            <input type='text' placeholder='ID' name='txt-id' />
                        </div>
                        <div className='col-4'>Name</div>
                        <div className='col-6'>
                            <input type='text' placeholder='name' name='name' id='name' />
                        </div>
                        <div className='col-4'>Age</div>
                        <div className='col-6'>
                            <input type='text' placeholder='age' name='age' id='age' />
                        </div>
                        <div className='col-4'>Phone</div>
                        <div className='col-6'>
                            <input type='text' placeholder='phone' name='phone' id='phone' />
                        </div>
                        <div className='col-4'>Address</div>
                        <div className='col-6'>
                            <input type='text' placeholder='address' name='address' id='address' />
                        </div>
                        
                        <div className='col-12' style={{ marginTop: '10px' }}>
                            <button onClick={() => this.submit()} className='btn btn-secondary'>submit</button>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                
                </div>
            </div>
        );
    }
};

export default MemberFrom;