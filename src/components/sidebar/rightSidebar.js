/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class RightSidebar extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { 'content': 'content' }
    }

    f_changState = (ss) => {
        if (ss === 'content') {
            this.setState({ content: 'content' });
        } else {
            this.setState({ content: 'detai' });
        }
    }

    f_conten = () => {
        return <div style={{ color: 'green' }}> Việc sử dụng CSS trong React thực sự đơn giản và giống như đối với các JS framwork khác. Nhưng trước tiên, chúng ta cần tìm hiểu về cách mà các thẻ HTML được tạo ra từ JSX </div>;
    }

    f_detail = () => {
        return <div style={{ color: 'yellow' }}> Tuy nhiên, đây không hẵn là 1 cách thông thường mà 1 dev React sử dụng. Mặc dù nó đơn giản, nhưng việc tối ưu hóa tài nguyên và clear hơn trong việc code, chúng ta hãy tìm hiểu cách tiếp cận mới dưới đây. Đầu tiên, trả lại nguyên trạng Letter Component trước khi chúng ta thêm CSS vào</div>;
    }

    f_show = () => {
        if (this.state.content === 'content') {
            return this.f_conten();
        } else {
            return this.f_detail();
        }
    }

    render() {
        return (
            <div className='row' style={{ backgroundColor: '#ccc' }}>
                <div className='col-lg-12' >
                    <h4> thay doi noi dung thong qua state  </h4>
                </div>
                <div className='col-lg-6' >
                    <a onClick={this.f_changState.bind(this, 'content')} className='btn btn-danger'>content</a>
                </div>
                <div className='col-lg-6'>
                    <a onClick={this.f_changState.bind(this, 'detail')}className='btn  btn-primary'> detail</a>
                </div>
                <div className='col-lg-12'>
                   <h4> {this.state.content}</h4>
                    {this.f_show()}
                </div>
            </div>
        );
    }
}

export default RightSidebar;