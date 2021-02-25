import React, { Component } from 'react';
import Store from './store';

class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#666', color:'#fff'}}>
                <Store address="123 ly chien thang" phone='02658774' email='gmail123@gmail.com'>
                    CUA HANG CHUYEN MAY MAC
                </Store>
                <Store address="58 tran hung dao" phone='892689978' email='yahoo@yahoo.com'>
                    CUA HANG CHUYEN DIEN MAY
                </Store>
                <Store address="203 bui minh truc" phone='33987544' email='giadung@gmail.com'>
                    CUA HANG CHUYEN GIA DUNG
                </Store>
                <Store address="89 nguyen trai" phone='896554545' email='thucpham@gmail.com'>
                    CUA HANG CHUYEN THUC PHAM
                </Store>
            </div>
        );
    }
}

export default Footer;