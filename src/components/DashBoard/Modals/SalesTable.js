import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosTrash } from 'react-icons/io';
import { selectCategories } from '../../../GlobalData/CategorySlice';
import { useSelector } from 'react-redux';
import EditCategory from './EditCategory';
import DeleteCategory from './DeleteCategory';




function Items({ currentItems}) {


 
 



  return (
    <div className="w-full mb-5">
       <table id='list' className=' w-3/4 mt-5 m-auto bg-white rounded-xl' >
        <tbody className=' '>
                  <tr className='text-center border-b-2 '>
                      <th className='p-3 '>الربح</th>
                      <th className='p-3 border-l-2' > الكمية المتبقية</th>
                      <th className='p-3 border-l-2'> الكمية المباعة </th>
                      <th className='p-3 border-l-2'>اسم المنتج</th>
                  </tr>
                  <tr className='text-center'>
 <td className='p-3'>0</td>
  <td className='p-3 border-l-2'>0</td>
  <td className='p-3 border-l-2'>0</td>
  <td className='p-3 border-l-2'>weweStrawberry</td>
            
</tr>
    {currentItems && currentItems.map((item) => (

<tr>
 <td>{item.earns}</td>
  <td>{item.storage}</td>
  <td>{item.amoundOfSales}</td>
  <td>{item.productName}</td>
            
</tr>

    ))}
      </tbody>
      </table>
      </div>
  );
}


// Add a <div id="container"> to your HTML to see the componend rendered.

function SalesTable({ itemsPerPage, Data }) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);



  useEffect(() => {

    ListC();
  },[Data]);
  useEffect(() => {
    // Fetch items from another resources.

    ListC();
  
    
  }, [itemOffset, itemsPerPage]);
  
//  async function onLoad() {
//     await axios.get(`http://127.0.0.1:8000/api/DashBoard/Category`)
//     .then(res => { 
//        SetData(res.data.Data);
//        dispatch(addCategory(res.data.Data));
//      }) 
//   }
  async function ListC() {
    const endOffset = itemOffset + itemsPerPage;    
     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
     setCurrentItems(Data.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(Data.length / itemsPerPage));

}
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % Data.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
    
};
    return (
      <div id="container" className='flex flex-col justify-center items-center w-3/4 m-auto' >
        <Items currentItems={currentItems}  />

  
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="border-4 py-1 px-3 rounded-full"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="  text-center"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex justify-evenly w-full border-2 rounded-xl items-center"
        activeClassName="bg-[#035AA7] text-white "
        renderOnZeroPageCount={null}
      />
      
     
        </div>
    )
}
export default SalesTable


