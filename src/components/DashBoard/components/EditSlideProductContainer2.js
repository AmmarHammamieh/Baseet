import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AddToApprovedProducts, selectApprovedProducts } from '../../../GlobalData/aprovedProductsInCategorySlice';
import { addavailableProduct, selectAvailableProducts } from '../../../GlobalData/AvailableProductsSlice';
import { removeinsideSlideProduct, selectInsideSlide } from '../../../GlobalData/InsideSlideSlice';
import { removeProductInCategory, selectProductsInCategory } from '../../../GlobalData/ProductInCategorySlice';


function EditSlideProductContainer2({id,image , name,description,price,category,style}) {
  let Id = id;


  
    const AvailableProducts = useSelector(selectAvailableProducts);
    const InsideSlide = useSelector(selectInsideSlide);
    const dispatch = useDispatch();
  
  
    function Check(e, id) {
  
        for (let i = 0; i < InsideSlide.length; i++) {
          if (InsideSlide[i].id == id) {
            dispatch(addavailableProduct(InsideSlide[i]));
          }
        }
        dispatch(removeinsideSlideProduct({id}));
  
      
    }
  
    
    return (
   
      <div dir='rtl' id={id} className={` relative  flex flex-col ${style} m-5 bg-white py-5 px-10 rounded-xl h-[90%] my-2 w-1/3 `} onClick={(e)=>Check(e,id)}>
          <p class="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
          <img src={image} className="h-3/4"/>
          <h1 className="mt-3">{name}</h1>
          <AiFillStar className='my-2 mt-4'/>
          <p className='mb-2'>{description}</p>
      <CurrencyFormat thousandSeparator={true} value={price} displayType={'text'} prefix={'$'} />
            </div>

  )
}

export default EditSlideProductContainer2