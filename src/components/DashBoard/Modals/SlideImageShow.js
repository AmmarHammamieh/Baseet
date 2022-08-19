import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosTrash } from 'react-icons/io';
import { selectCategories } from '../../../GlobalData/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import EditCategory from './EditCategory';
import DeleteCategory from './DeleteCategory';
import ProductShowTest from '../components/ProductShowTest';
import { addImageInside, emptyImageInside, selectImageInside } from '../../../GlobalData/ImagesInSlideSlice';




function Items({AImage, currentItems,setItemOffset}) {


 
  const dispatch = useDispatch();

  const ImageInsideSlide = useSelector(selectImageInside);



  function RemoveFromSlide(e) {
 
    const arrCopy = [...ImageInsideSlide]; 
    let id = e.target.id;
    for (let i = 0; i < arrCopy.length; i++){
      console.log(arrCopy[i], "oooa");
      if (arrCopy[i] == id) {
    
        arrCopy.splice(i, 1);
        
      }
      
    }

    for (let i = 0; i < AImage.length; i++){

      if (AImage[i].Url == id) {
    
        AImage.splice(i, 1);
        
      }
    }
    
    dispatch(emptyImageInside());
    for (let i = 0; i < arrCopy.length; i++){
    dispatch(addImageInside(arrCopy[i]));
    }
    setItemOffset(0);
  }
  return (
    <div className="w-full  mb-5 flex justify-evenly">
      
  
    {currentItems && currentItems.map((item) => (

        <div style={{ backgroundImage: `url(${item})` }} id={item} className="h-[20rem] mt-5 w-[20rem] m-auto bg-no-repeat bg-contain" onClick={(e)=>RemoveFromSlide(e)}/>
    ))}

      </div>
  );
}


// Add a <div id="container"> to your HTML to see the componend rendered.

function SlideImageShow({AImage, itemsPerPage, Data,style }) {


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
  {console.log(Data)}
    return (
      <div id="container" className={`${style} h-[90%] relative w-full flex flex-col justify-center items-center border-4 border-gray-400 p-5` }>
        <Items AImage={AImage} currentItems={currentItems} style={style} setItemOffset={setItemOffset} />
       
  
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
export default SlideImageShow


