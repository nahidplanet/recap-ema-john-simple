import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-install/firebase.init';

const Shipping = () => {
    const [getName,setName] = useState('');
    // const [getEmail,setEmail] = useState('');
    const [getAdress,setAdress] = useState('');
    const [getPhone,setPhone] = useState('');
    const [user] = useAuthState(auth)
    // const [getError,setError] = useState('');

    const handleShipping = (e) => {
        e.preventDefault();
        // console.log(getName,getAdress,getPhone);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleAdress = (e) => {
        setAdress(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    return (
        <div className='mt-2'>

            <form onSubmit={handleShipping} className='mx-auto my-0 p-10 h-[500px] w-[500px] border-2 rounded-2xl '>
                <h1 className='text-4xl font-semibold text-center'>Login</h1>
                <div className="input-group w-full">
                    <label className='block text-xl font-semibold  mt-4' htmlFor="name">Full Name</label>
                    <input onBlur={handleName} required className='border px-4 py-2 rounded text-md w-full' type="text" name="name " placeholder='Full Name' />
                </div>
                <div className="input-group w-full">
                    <label className='block text-xl font-semibold mt-4' htmlFor="email">Email</label>
                    <input readOnly value={user && user?.email} required className='border px-4 py-2 rounded text-md w-full' type="email" name="email " placeholder='Email' />
                </div>
                <div className="input-group w-full">
                    <label className='block text-xl font-semibold mt-4' htmlFor="adress">Adress</label>
                    <input onBlur={handleAdress} required className='border px-4 py-2 rounded text-md w-full' type="text" name="adress " placeholder='Adress' />
                </div>
                <div className="input-group w-full">
                    <label className='block text-xl font-semibold mt-4' htmlFor="phone">Phone</label>
                    <input onBlur={handlePhone} required className='border px-4 py-2 rounded text-md w-full' type="number" name="phone " placeholder='Phone Number' />
                </div>
                
                <div className="input-group w-full">
                    <input className='border px-4 py-2 rounded text-xl w-full font-bold mt-10 bg-[#FFE0B3] hover:bg-[#e6bc7d] text-[#0E161A] cursor-pointer' type="submit" value={'Shipping Info'} />
                </div>


            </form>
        </div>
    );
};

export default Shipping;