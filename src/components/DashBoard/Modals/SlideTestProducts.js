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
import ProductShowTest from '../components/ProductShowTest';




function Items({ currentItems,setOpenEditCategory,setOpenDeleteCategory,SetDeleteId,SetEditId ,style}) {


 
 


  function Edit(e,id) {

    SetEditId(id);
    setOpenEditCategory(true);

  }

  function Delete(e,id) {

    SetDeleteId(id);
    setOpenDeleteCategory(true);

  }
  return (
    <div className="w-full  mb-5 flex justify-evenly">
      
    
    {currentItems && currentItems.map((item) => (

    <ProductShowTest class="w-1/4" style={style} id={item.id} image={`http://127.0.0.1:8000${item.image}`} name={item.name} price={item.price} description={item.description} category={item.category_id}  />


    ))}

      </div>
  );
}


// Add a <div id="container"> to your HTML to see the componend rendered.

function SlideTestProducts({ itemsPerPage, Data,style }) {
  const [OpenEditCategory, setOpenEditCategory] = useState(false);
  const [OpenDeleteCategory, setOpenDeleteCategory] = useState(false);

  const [EditId, SetEditId] = useState();
  const [DeleteId, SetDeleteId] = useState();

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
      <div id="container" className={`${style} h-[90%] relative w-full flex flex-col justify-center items-center border-4 border-gray-400 p-5` }>
        <Items currentItems={currentItems} style={style} setOpenEditCategory={setOpenEditCategory} setOpenDeleteCategory={setOpenDeleteCategory} SetEditId={SetEditId} SetDeleteId={SetDeleteId} />
        
        <EditCategory open={OpenEditCategory} setOpen={setOpenEditCategory} EditId={EditId} />
        <DeleteCategory open={OpenDeleteCategory} setOpen={setOpenDeleteCategory} DeleteId={DeleteId} />
  
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
        containerClassName="flex justify-evenly border-4 mb-2 border-gray-400 w-[95%] absolute bottom-0  border-2 rounded-xl items-center"
        activeClassName="bg-[#035AA7] text-white "
        renderOnZeroPageCount={null}
      />
      
     
        </div>
    )
}
export default SlideTestProducts


