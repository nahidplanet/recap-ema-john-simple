
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword ,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase-install/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


import './login.css'

const Login = () => {
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const emailHandler = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const passwordHandler = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    const singInGoogleHandle = () => {
        signInWithGoogle(getEmail, getPassword);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(getEmail, getPassword);
        singInGoogleHandle()
    }
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
        navigate(from, { replace: true })
    }
    return (
        <div className='mt-32'>

            <form onSubmit={handleLogin} className='mx-auto my-0 p-10 h-[500px] w-[500px] border-2 rounded-2xl '>
                <h1 className='text-4xl font-semibold text-center'>Login</h1>
                <div className="input-group w-full">
                    <label className='block text-xl font-semibold  mt-4' htmlFor="email">Email</label>
                    <input onBlur={emailHandler} required className='border px-4 py-2 rounded text-md w-full' type="email" name="email " placeholder='Email' />
                </div>
                <div className="input-group w-full">
                    <label className='block text-xl font-semibold mt-4' htmlFor="password">Password</label>
                    <input onBlur={passwordHandler} required className='border px-4 py-2 rounded text-md w-full' type="password" name="password " placeholder='Password' />
                </div>
                <h1 style={{ color: "red" }}>{error && error?.message}</h1>
                <h1 style={{ color: "green" }}>{loading && 'Loadding'}</h1>
                <h1>{ }</h1>
                <div className="input-group w-full">
                    <input className='border px-4 py-2 rounded text-xl w-full font-bold mt-10 bg-[#FFE0B3] hover:bg-[#e6bc7d] text-[#0E161A] cursor-pointer' type="submit" value={'Login'} />
                </div>
                <div className='mt-2'>
                    <span>New to Ema-john? </span>
                    <Link to={'/singup'} className='text-[#FF9900]'>Create New Account</Link>
                </div>
                <div ><span className='divider'>or</span></div>
                <div className="singinwithgoogle">
                    <button onClick={singInGoogleHandle} className='border flex justify-center items-center w-full py-2 cursor-pointer mt-4'>
                        <img className='w-4 h-4 mr-2' src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />Continue with Google
                    </button>
                </div>


            </form>
        </div>
    );
};

export default Login;