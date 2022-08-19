import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AddToApprovedProducts, removeFromApprovedProducts, selectApprovedProducts } from '../../../GlobalData/aprovedProductsInCategorySlice';
import { addProductInCategory, removeProductInCategory, selectProductsInCategory } from '../../../GlobalData/ProductInCategorySlice';


function ShowProductInCategory2({ApprovedProduct,id,image , name,description,price,category,style}) {
  let Id = id;

  const dispatch = useDispatch();
  const ProductInCategorySelect = useSelector(selectProductsInCategory);
  const ApprovedInCategorySelect = useSelector(selectApprovedProducts);

  

  function Check(e, id) {
    if (ApprovedProduct.length > 0) {
        for (let i = 0; i < ApprovedProduct.length; i++) {
          if (ApprovedProduct[i].id === id) {
            dispatch(addProductInCategory(ApprovedProduct[i]));
          }
        }
        dispatch(removeFromApprovedProducts({ id }))
      console.log(ApprovedInCategorySelect,"q1");
    }
  }
    
    return (
   
      <div dir='rtl' id={id} className={` relative  flex flex-col ${style} m-5 bg-white py-5 px-10 rounded-xl h-[90%] my-2 w-1/3 `} onClick={(e)=>Check(e,id)}>
          <p class="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
          <img src={image} className="h-28 mt-2"/>
          <h1 className="mt-3">{name}</h1>
          <AiFillStar className='my-2 mt-4'/>
          <p className='mb-2'>{description}</p>
      <CurrencyFormat thousandSeparator={true} value={price} displayType={'text'} prefix={'$'} />
            </div>

  )
}

export default ShowProductInCategory2