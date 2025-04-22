import React from 'react';
import logo from './assets/cocretainc.jpg';

const Cabecera = () => {

    return (
        <header className='cabecera'>
            <h1>Cocreta INC</h1>
            <img className='logo' src={logo} alt='Cocreta INC Logo' />
        </header>
    );
    
};

export default Cabecera;