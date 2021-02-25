import React from 'react';
import CustomerItem from '../customer/customerItem';

const LeftCustomers = () => {
    return (
        <div style={{ backgroundColor: '#999', margin: '20px 2px' }}>
            <div style={{display:'flex',  backgroundColor:'#fff', height:'70px', justifyContent:'center',alignItems:'center' }}>
                <h3 style={{color:'#666'}}> Customer </h3>
            </div>
            <div style={{padding:'3px'}}>
                <CustomerItem date="1974/12/01"> Tran Hung </CustomerItem>
                <CustomerItem date="1987/09/25"> ly nam </CustomerItem>
                <CustomerItem date="1985/08/16"> nguyen an </CustomerItem>
                <CustomerItem date="1977/10/30"> pham hung </CustomerItem>
            </div>
        </div>
    );
};

export default LeftCustomers;