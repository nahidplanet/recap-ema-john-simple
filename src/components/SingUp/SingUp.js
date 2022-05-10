import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword ,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase-install/firebase.init'
import { useSendEmailVerification } from 'react-firebase-hooks/auth';


const SingUp = () => {
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getConfirmPassword, setConfirmPassword] = useState('');
    const [getError, setError] = useState('');

    const [createUserWithEmailAndPassword, ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const navigate = useNavigate();
     
    const handleGoogleSingIn = () => {
        console.log("singInwith google");
        signInWithGoogle(getEmail, getPassword);
        setError(error);
        sendEmailVerification();
    }


    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleconfirmPassword = (e) => {
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword);
    }


    const handleSingUp = (e) => {
        e.preventDefault();
        if (getPassword !== getConfirmPassword) {
            setError('password not matching...');
            return;
        } else {
           
            createUserWithEmailAndPassword(getEmail,getPassword);
            handleGoogleSingIn();
            sendEmailVerification();
            e.target.reset()
        }
    }
   
    if (user) {
        navigate('/');
    }

    return (

        <div className='mt-32'>

            <form onSubmit={handleSingUp} className='mx-auto my-0 p-10 h-[600px] w-[500px] border-2 rounded-2xl '>
                <h1 className='text-4xl font-semibold text-center'>Sing Up</h1>

                <div className="input-group w-full">
                    <label className='block text-xl font-semibold  mt-4' htmlFor="email">Email</label>
                    <input required onBlur={handleEmail} className='border px-4 py-2 rounded text-md w-full' type="email" name="email" placeholder='Email' />
                </div>

                <div className="input-group w-full">
                    <label className='block text-xl font-semibold mt-4' htmlFor="password">Password</label>
                    <input required onBlur={handlePassword} className='border px-4 py-2 rounded text-md w-full' type="password" name="password" placeholder='Password' />
                </div>

                <div className="input-group w-full">
                    <label className='block text-xl font-semibold mt-4' htmlFor="confirm-password">Confirm Password</label>
                    <input required onBlur={handleconfirmPassword} className='border px-4 py-2 rounded text-md w-full' type="password" name="confirmPassword" id='confirm-password' placeholder='Confirm Password' />
                </div>
                <h6 className='text-red-600'>{getError}</h6>
                <div className="submit-button w-full">
                    <input className='border px-4 py-2 rounded text-xl w-full font-bold mt-10 bg-[#FFE0B3] hover:bg-[#e6bc7d] text-[#0E161A] cursor-pointer' type="submit" value={'SIng Up'} />
                </div>

                <div className='mt-2'>
                    <span>Already have an account? </span>
                    <Link to={'/log-in'} className='text-[#FF9900]'>Login</Link>
                </div>

                <div ><span className='divider'>or</span></div>
                <div onClick={handleGoogleSingIn } className="singinwithgoogle">
                <button className='border flex justify-center items-center w-full py-2 cursor-pointer mt-4'>
                    <img className='w-4 h-4 mr-2' src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />Continue with Google
                </button>
            </div>

            </form>
            
            <div>
                <h1 className='text-4xl font-bold text-center mt-5'>{loading && "loading..."}</h1>
            </div>
        </div>
    );
};

export default SingUp;