import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

import './Header.css';

const Header = () => {
    return (
        <div className='header-section-start'>
            <div className="navbar">
                <div className="logo">
                    <Link to={'/'} className='text-white'>Ema-John</Link>
                </div>
                <nav >
                    <ul>
                        <li><CustomLink to={'/' } > Home </CustomLink> </li>
                        <li><CustomLink to={'/shop'}>Shop</CustomLink></li>
                        <li><CustomLink to={'/order'}>Order</CustomLink></li>
                        <li><CustomLink to={'/inventory'}>Inventory</CustomLink></li>
                        <li><CustomLink to={'/log-in'}>Login</CustomLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;