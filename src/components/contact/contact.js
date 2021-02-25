import React, { Component } from 'react';
import { Prompt, Redirect } from 'react-router-dom';
import './contact.css';

/*
Prompt trong react-router-dom 
se kiem tra cac input trong form neu co du lieu se hoi truoc khi chuyen qua trang khac

Redirest in react-router-dom
dung cho truong hop chuyen trang nhu se chuyen trang khi submit

lay noi dung cua input dat ten cac input trung voi ten cac state de tien cho viec lay gia tri tung input 
*/

const costlist = [
    'php',
    'aps',
    'css',
    'html',
    'java'
]

class Contact_us extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            isbooking: false,
            isredirest: false,
            txtUser: '',
            txtAddress: '',
            txtPhone: '',
            txtEmail: '',
            txtFax: '',
            sltCity: 3,
            rdoGenden: 1,
            chkCost: new Set(),
            file: ''
        } 
    }


    checkboxList = () => {
        const item = costlist.map((value, key) => {
            return <label key={key} ><input type='checkbox' name='chkSubjust' checked={this.state.chkCost.has(value)} onChange={() => this.checkSubject(value)} value={value} /> {value}</label>
        });
        return item;
    }

    componentDidMount() {
        this.checkedcheckbox = new Set();
    }

    checkSubject = (monhoc) => {
        if (this.checkedcheckbox.has(monhoc)) {
            this.checkedcheckbox.delete(monhoc);
        } else {
            this.checkedcheckbox.add(monhoc)
        }

        this.setState({
            chkCost: this.checkedcheckbox,
        })
    }


    submitForm = (e) => {
        e.preventDefault()
        e.target.reset()

        this.setState({
            isredirest: false, // true chuyen trang, false khong chuyen trang 
            isbooking: false,
        });

        var mhoc = '';
        for (const mh of this.state.chkCost) {
            mhoc += mh + ",";
        }
      
        const {txtUser, txtAddress, txtEmail, txtPhone, txtFax, sltCity, rdoGenden, file} = this.state

        var content = '';
        content += 'Name:' + txtUser;
        content += ', Address:' + txtAddress;
        content += ', Emai:' + txtEmail;
        content += ', phone:' + txtPhone;
        content += ', fax:' + txtFax;
        content += ', city:' + sltCity;
        content += ', genden:' + rdoGenden;
        content += ', cost:' + mhoc;
        content += ', file: ' + file;

        console.log(content);

    }

    isInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            isbooking: target.value.length > 0,
            [name]: value
        });
    }

    isFileChange = (event) => {
        this.setState({
            file: event.target.files[0].name
        });
    }

    render() {
        if (this.state.isredirest) {
            return (
                <Redirect to='/' />
            )
        }

        return (

            <div className='row'>
                <Prompt when={this.state.isbooking} message={location => ('ban muon thoat khoi trang nay khong ')} />

                <div className='col-12'>
                    <h2> Contact_Us</h2>
                </div>
                <div className='col-12'>
                    <form onSubmit={(e) => this.submitForm(e)} >
                        <div className='row contact-row'>
                            <div className='col-3 title-text'>User name</div>
                            <div className='col-9'>
                                <input type='text' placeholder='user name' name='txtUser' onChange={(event) => this.isInputChange(event)} value={this.state.txtUser} />
                            </div>

                            <div className='col-3 title-text'>Address</div>
                            <div className='col-9'>
                                <input type='text' placeholder='address' name='txtAddress' onChange={(event) => this.isInputChange(event)} value={this.state.txtAddress} />
                            </div>

                            <div className='col-3 title-text'>Phone</div>
                            <div className='col-9'>
                                <input type='text' placeholder='phone' name='txtPhone' onChange={(event) => this.isInputChange(event)} value={this.state.txtPhone} />
                            </div>

                            <div className='col-3 title-text'>Email</div>
                            <div className='col-9'>
                                <input type='text' placeholder='emai' name='txtEmail' onChange={(event) => this.isInputChange(event)} value={this.state.txtEmail} />
                            </div>

                            <div className='col-3 title-text'>Fax</div>
                            <div className='col-9'>
                                <input type='text' placeholder='fax' name='txtFax' onChange={(event) => this.isInputChange(event)} value={this.state.txtFax} />
                            </div>

                            <div className='col-3 title-text'>City</div>
                            <div className='col-9'>
                                <select name='sltCity' value={this.state.sltCity} onChange={(event) => this.isInputChange(event)}>
                                    <option value=''>select city</option>
                                    <option value='1'>HCMC</option>
                                    <option value='2'>HA NOi</option>
                                    <option value='3'>NHA TRANG</option>
                                    <option value='4'>CAN THO</option>
                                </select>
                            </div>

                            <div className='col-3 title-text'>Genden</div>
                            <div className='col-9'>
                                <label><input type='radio' name='rdoGenden' value='1' onChange={(event) => this.isInputChange(event)} checked={parseInt(this.state.rdoGenden) === 1} /> male </label>
                                <label><input type='radio' name='rdoGenden' value='2' onChange={(event) => this.isInputChange(event)} checked={parseInt(this.state.rdoGenden) === 2} /> female </label>
                                <label><input type='radio' name='rdoGenden' value='3' onChange={(event) => this.isInputChange(event)} checked={parseInt(this.state.rdoGenden) === 3} /> other </label>

                            </div>

                            <div className='col-3 title-text'>code</div>
                            <div className='col-9'>
                                {this.checkboxList()}
                            </div>

                            <div className='col-3 title-text'>Avata</div>
                            <div className='col-9'>
                                <input type='file' id='file' name='file-avata' onChange={(event) => this.isFileChange(event)} />
                            </div>

                            <div className='col-12' style={{ marginTop: '10px', textAlign: "center" }}>
                                <input type='submit' value=' submit form' style={{ width: '50%', height: '70px' }} />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Contact_us;