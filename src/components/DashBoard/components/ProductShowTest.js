import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AddToApproved, removeFromApproved, selectApproved } from '../../../GlobalData/aprovedProductsSlice';
import { addToBasket, removeFromBasket, selectItems } from '../../../GlobalData/basketSlice';

function ProductShowTest({ id, image, name, description, price, category, style}) {
  let Id = id;




    
    return (
   
      <div dir='rtl' id={id} className={`${style} relative  flex flex-col m-5 bg-white py-5 px-10 rounded-xl h-fit my-2 w-1/3 mb-10`}>
          <p class="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
          <img src={image} className="h-28 mt-2"/>
          <h1 className="mt-3">{name}</h1>
          <AiFillStar className='my-2 mt-4'/>
          <p className='mb-2'>{description}</p>
      <CurrencyFormat thousandSeparator={true} value={price} displayType={'text'} prefix={'$'} />
            </div>

  )
}

export default ProductShowTest