import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className='mt-32'>
            
            <form className='mx-auto my-0 p-10 h-[500px] w-[500px] border-2 rounded-2xl '>
                <h1 className='text-4xl font-semibold text-center'>Sing Up</h1>

                <div className="input-group w-full">
                    <label className='block text-xl font-semibold  mt-4'  htmlFor="email">Email</label>
                    <input className='border px-4 py-2 rounded text-md w-full' type="email" name="email "  placeholder='Email' />
                </div>

                <div className="input-group w-full">
                    <label  className='block text-xl font-semibold mt-4' htmlFor="password">Password</label>
                    <input className='border px-4 py-2 rounded text-md w-full' type="password" name="password "  placeholder='Password' />
                </div>

                <div className="input-group w-full">
                    <label  className='block text-xl font-semibold mt-4' htmlFor="password">Confirm Password</label>
                    <input className='border px-4 py-2 rounded text-md w-full' type="password" name="password "  placeholder='Confirm Password' />
                </div>

                <div className="input-group w-full">
                    <input className='border px-4 py-2 rounded text-xl w-full font-bold mt-10 bg-[#FFE0B3] hover:bg-[#e6bc7d] text-[#0E161A] cursor-pointer' type="submit" value={'Login'} name="email "  placeholder='Email' />
                </div>

                <div>
                    <span>Already have an account?</span>
                    <Link to={'/log-in'} className='text-[#FF9900]'>Login</Link>
                </div>

                <div ><span className='divider'>or</span></div>

                <div className="singinwithgoogle">
                    <button className='border flex justify-center items-center w-full py-2 cursor-pointer mt-4'>
                        <img className='w-4 h-4 mr-2' src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />Continue with Google
                    </button>
                </div>


            </form>
        </div>
    );
};

export default SingUp;