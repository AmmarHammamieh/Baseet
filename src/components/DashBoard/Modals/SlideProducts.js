import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductContainer from '../components/ProductContainer';
import DeleteProduct from './DeleteProduct';
import EditProduct from './EditProduct';

let image = []



function Items({ currentItems,setOpenDeleteProduct,SetDeleteId,setOpenEditProduct,SetEditId }) {
  return (
    <div className='w-full flex justify-evenly'>

      {currentItems && currentItems.map((item) => (

        <ProductContainer class="w-1/3" setOpenEditProduct={setOpenEditProduct} setOpenDeleteProduct={setOpenDeleteProduct} SetDeleteId={SetDeleteId} SetEditId={SetEditId} id={item.id} image={`http://127.0.0.1:8000${item.image}`} name={item.name} price={item.price} description={item.description} category={item.category_id}  />
    ))}

      </div>
  );
}



// Add a <div id="container"> to your HTML to see the componend rendered.

function SlideProducts({ Data ,itemsPerPage}) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [OpenEditProduct, setOpenEditProduct] = useState(false);
  const [EditId, SetEditId] = useState();
  const [OpenDeleteProduct, setOpenDeleteProduct] = useState(false);
  const [DeleteId, SetDeleteId] = useState();

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {

    ListP();
  }, [Data]);

  useEffect(() => {
      // Fetch items from another resources.
    ListP();

     
  }, [itemOffset, itemsPerPage]);


  async function ListP() {
    
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
        <div id="container" className='flex flex-col justify-center items-center'>
        <Items currentItems={currentItems} setOpenEditProduct={setOpenEditProduct}  SetEditId={SetEditId} setOpenDeleteProduct={setOpenDeleteProduct} SetDeleteId={SetDeleteId} />
        <EditProduct open={OpenEditProduct}  setOpen={setOpenEditProduct}  EditId={EditId} />
        <DeleteProduct open={OpenDeleteProduct}  setOpen={setOpenDeleteProduct} DeleteId={DeleteId} />
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
export default SlideProducts


