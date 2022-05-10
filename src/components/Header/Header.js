import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase-install/firebase.init';
import CustomLink from '../CustomLink/CustomLink';

import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
    }
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
                        {
                        user ? <button className='border text-white p-2 ' type='button' onClick={handleSingOut}>logOut</button>
                        :
                        <li><CustomLink to={'/log-in'} >login</CustomLink></li>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Header;