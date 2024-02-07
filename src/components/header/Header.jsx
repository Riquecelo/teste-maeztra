import React from 'react';
import './Header.css'
import MiniBar from './miniBar/MiniBar';
import HeaderMain from './headerMain/HeaderMain';
import HeaderMenu from './headerMenu/HeaderMenu';


function Header(){
    return(
        <>
            <MiniBar/>
            <HeaderMain/>
            <HeaderMenu/>
        </>
    )
}

export default Header;