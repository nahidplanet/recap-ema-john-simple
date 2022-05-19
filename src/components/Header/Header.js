import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div className='header-section'>
            <div className="navbar">
                <div className="logo">
                    <CustomLink to='/'><img src={logo} alt=""  /></CustomLink>
                </div>
                <nav className="nav ">
                        <CustomLink to='/home' >Home</CustomLink>
                        <CustomLink to='/shop' >Shop</CustomLink>
                        <CustomLink to='/order' >order</CustomLink>
                        <CustomLink to='/inventory'> inventory</CustomLink>
                        <CustomLink to='/log-in' >login</CustomLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;