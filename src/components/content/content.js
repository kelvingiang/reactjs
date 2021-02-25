import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from '../product/product';
import Contact_us from '../contact/contact';
import About_us from '../about/about';
import Home from '../home/home';
import Right from '../sidebar/right';
import Left from '../sidebar/left';
import Error404 from '../error/404';
import Detail from '../product/detail';
import MemberMain from '../member/member-main';

class Content extends Component {

    render() {
        return (
            <div className='row' style={{ margin: '0px' }}>
                <div className='col-lg-3'>
                    <Left />
                </div>
                <div className='col-lg-6'>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/member" component={MemberMain} />
                        <Route path="/About" component={About_us} />
                        <Route path="/contact" component={Contact_us} />
                        <Route path="/product" component={Product} />
                        <Route path="/detail/:id/:name.html" component={Detail} />
                        <Route component={Error404} />
                    </Switch>
                </div>
                <div className='col-lg-3'>
                    <Right />
                </div>
            </div>
        );
    }
}

export default Content;