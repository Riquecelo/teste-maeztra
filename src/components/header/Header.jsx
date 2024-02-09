import React from 'react';
import './Header.css'
import MiniBar from './miniBar/MiniBar';
import HeaderMain from './headerMain/HeaderMain';
import HeaderMenu from './headerMenu/HeaderMenu';
import MenuMobi from './menuMobi/MenuMobi';


function Header(){
    return(
        <>
            <MiniBar/>
            <HeaderMain/>
            <HeaderMenu/>
            <MenuMobi/>
        </>
    )
}

export default Header;