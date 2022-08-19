import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { AiFillStar } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosTrash } from 'react-icons/io';

function ProductContainer({setOpenEditProduct,setOpenDeleteProduct,SetEditId,SetDeleteId,id,image , name,description,price,category}) {
  function Edit(e) {

    SetEditId(id);
    setOpenEditProduct(true);

  }

  function Delete(e) {

    SetDeleteId(id);
    setOpenDeleteProduct(true);

  }
  return (
      <div dir='rtl' className='relative flex flex-col m-5 bg-white py-5 px-10 rounded-xl  w-1/3'>
          <p class="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
          <img src={image} className="h-3/4 mt-4"/>
          <h1 className="mt-3">{name}</h1>
          <AiFillStar className='my-2 mt-4'/>
          <p className='mb-2'>{description}</p>
      <CurrencyFormat thousandSeparator={true} value={price} displayType={'text'} prefix={'$'} />
      <div className=' flex justify-between mt-10'>
      <FaRegEdit id={id} className='text-2xl text-[#035AA7] cursor-pointer' onClick={(e)=>Edit(e)}/>
        <IoIosTrash id={id} className='text-2xl text-[#EA676C] cursor-pointer' onClick={(e)=>Delete(e)}/>
      </div>
    </div>
  )
}

export default ProductContainer