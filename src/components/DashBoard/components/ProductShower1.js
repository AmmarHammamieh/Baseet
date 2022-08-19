import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AddToApproved, removeFromApproved } from '../../../GlobalData/aprovedProductsSlice';
import { addToBasket, removeFromBasket, selectItems } from '../../../GlobalData/basketSlice';

function ProductShower1({Product,index,id,image , name,description,price,category}) {
  let Id = id;

  const dispatch = useDispatch();
  const ProductSelect = useSelector(selectItems);

  function Check(e, id) {
    if (Product.length > 0) {
      for (let i = 0; i < Product.length; i++) {
        if (Product[i].id === id) {
          dispatch(AddToApproved(Product[i]));
        }
      }
      dispatch(removeFromBasket({ id }))
      console.log(ProductSelect);
    }

    }
    return (
   
      <div dir='rtl' id={id} className='relative flex-[0_0_30%] flex flex-col m-5 bg-white py-5 px-10 rounded-xl h-[90%] my-2 w-1/3 ' onClick={(e)=>Check(e,id)}>
          <p class="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
          <img src={image} className="h-28 mt-2"/>
          <h1 className="mt-3">{name}</h1>
          <AiFillStar className='my-2 mt-4'/>
          <p className='mb-2'>{description}</p>
      <CurrencyFormat thousandSeparator={true} value={price} displayType={'text'} prefix={'$'} />
            </div>

  )
}

export default ProductShower1