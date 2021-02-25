import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';


class Nav extends Component {
    render() {
        return (
            <div>
                <ul id="menu">
                    <li><NavLink className='menu-item' activeClassName='menu-active' to='/'>homedd</NavLink></li>
                    <li><NavLink className='menu-item' activeClassName='menu-active' to='/about'> about us</NavLink></li>
                    <li><NavLink className='menu-item' activeClassName='menu-active' to='/contact'>contact us</NavLink></li>
                    <li><NavLink className='menu-item' activeClassName='menu-active' to='/product'>product</NavLink></li>
                    <li><NavLink className='menu-item' activeClassName='menu-active' to='/member'>member</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;