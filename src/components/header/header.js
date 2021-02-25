import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#666', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <label style={{fontSize:'2em', color:'white'}}> Header </label>
            </div>
        );
    }
}

export default Header;