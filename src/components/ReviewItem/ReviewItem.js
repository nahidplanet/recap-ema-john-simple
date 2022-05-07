import React from 'react';
// import { XCircleIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({item,deleteItem}) => {
    const {id,name,img,price,ratings,quantity} = item;
    return (
        <div className='mx-auto '>
            <div className='review-item flex items-center  w-[571px] p-2 m-2 rounded-md border-2'>
            <div className="image">
                <img className='w-24 rounded-md' src={img} alt="" />
            </div>
            <div className="item-details-continar items-center flex justify-between w-full">
                <div className="item-details ml-2">
                    <h1 className='font-semibold'>{name}</h1>
                    <p className='text-sm font-semibold text-orange-600'>price : <span>{price} TK</span></p>
                    <p className='text-xs font-semibold '>rattings : <small>{ratings}</small></p>
                    <p className='text-xs font-semibold'>quantity : <small>{quantity}</small></p>
                </div>
                <div onClick={()=> deleteItem(id)} className="delete-icon bg-red-60">
                   <button className='p-2 w-10 h-10 text-green-700 bg-red-600 hover:text-white rounded-full'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReviewItem;