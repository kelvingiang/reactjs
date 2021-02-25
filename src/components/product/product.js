/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './product.css';
import ProductData from './data.json';



class Product extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
           
        }

    }

    format_curency = (price) => {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    /*
    goi event hay function co 2 cach goi 1 la goi () =>, 2 la goi bind 
    vi du ben duoi
    */
    prodcut_detail = (detail) => {
        alert(detail);
    }

    ChangeToSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }


    show_product = () => {
        const listProduct = ProductData.map((item, index) =>
            <div key={index} className={'product-item'}>
                <div>
                    <h2 style={{ fontSize: '20px', color: 'blue' }}>{item.name}</h2>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '16px' }}>Gia : {this.format_curency(item.price)}</label>
                </div>
                <div>
                    <img style={{ width: '80%' }} className="product-img" src={item.img} alt="" />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <NavLink
                        to={"detail/" + item.id + "/" + this.ChangeToSlug(item.name) + '.html'}
                        className="btn btn-primary btn-large"
                    > chi tiet </NavLink>

                    <a onClick={() => this.prodcut_detail(this.props.gia)} className="btn btn-primary btn-large" style={{ color: '#fff', cursor: 'pointer' }}> gia  </a>
                </div>
            </div >
        );
        return listProduct;
    }

    render() {
        return (
            <div className={'product-content'}>
                {this.show_product()}
            </div>

        );
    }
}

export default Product;