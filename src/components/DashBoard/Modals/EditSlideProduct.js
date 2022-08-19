/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, emptyCategory, selectCategories } from '../../../GlobalData/CategorySlice';
import EditSlideProductContainer1 from '../components/EditSlideProductContainer1';
import EditSlideProductContainer2 from '../components/EditSlideProductContainer2';
import { addavailableProduct, emptyavailableProduct, selectAvailableProducts } from '../../../GlobalData/AvailableProductsSlice';
import { addinsideSlideProduct, selectInsideSlide } from '../../../GlobalData/InsideSlideSlice';
import { addProductSlide, emptyProductSlide } from '../../../GlobalData/SlideProductSlice';

export default function EditSlideProduct({open,setOpen,EditId}) {

  const dispatch = useDispatch();
    const category = useSelector(selectCategories);
    const AvailableProducts = useSelector(selectAvailableProducts);
    const InsideSlide = useSelector(selectInsideSlide);

  const cancelButtonRef = useRef(null)

    const [CurrentCategory, setCurrentCategory] = useState();
    // Here we have to put Data
    const [SlideOne, SetSlideOne] = useState();
    const [categoryProducts, SetCategoryProducts] = useState();
    const [allProducts,SetAllProducts] = useState(null);
    const [IsItCategory, SetIsItCategory] = useState(false);
useEffect(() => {
    getProducts();
},[EditId])


    
  async function getProducts() {

      let Data = {
        "Id":EditId,
      };

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/ProductSlides/getSlide`, Data)
          .then(res => {
              console.log(res.data.slide, "aqe");
              if (res.data.categoryProducts) {
                  SetCategoryProducts(res.data.categoryProducts);
                  dispatch(emptyavailableProduct());

                  for (let i = 0; i <res.data.categoryProducts.length; i++) {
                      dispatch(addavailableProduct(res.data.categoryProducts[i]));
                  }
              } else {
                  SetAllProducts(res.data.allProducts);
                  dispatch(emptyavailableProduct());
                  dispatch(addavailableProduct(res.data.allProducts));
                  
              }
              SetSlideOne(res.data.slide);
              for (let i = 0; i < res.data.slide.products.length; i++){
               dispatch(addinsideSlideProduct(res.data.slide.products[i]));
                  
              }
              SetIsItCategory(res.data.slidecategory);
              console.log(res.data.slidecategory);
             
        });
        
    

}




   function close() {
    
   
          setOpen(false);
   
}
  async function Edit() {
    let Data = {
      "Id":"",
      "title": "",
      "products":"",
    }
    if (!document.getElementById('title').value=="") {
       Data = {
        "Id":EditId,
        "title": document.getElementById('title').value,
        "products":AvailableProducts,
      };
    } else {
       Data = {
        "Id":EditId,
        "title":document.getElementById('title').placeholder,
        "products":InsideSlide,
      };
  }
    

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/ProductSlide/Edit`, Data)
        .then(res => {
          dispatch(emptyProductSlide());
          dispatch(addProductSlide(res.data));
           
          console.log(res.data);
                setOpen(false);
              
        });
}
  return (
    <div onLoadStart={()=>getProducts()}>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={()=>close()} >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-7xl sm:w-full ">
                <div className='w-full flex flex-col justify-center items-center'> 
                        <div className='flex flex-col  w-3/4 items-center justify-center'>
                                          <label for="title" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >عنوان القسم المراد عرضه</label>
                            <input  required id="title" type="text" placeholder={SlideOne?.title} disabled={`${IsItCategory ? true:""}`}className={` text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  `} name="title" />
                        </div>
                                  
            <div className='flex justify-center '>
             <div className='w-1/3 flex flex-col'>     
               <p className='text-right mr-2 mt-5'>المنتجات الموجودة في الشريحة </p>                                
                <div className=' mx-2 h-[20rem] my-2 flex items-center overflow-x-scroll border-2' >
     
             
              
              {InsideSlide?.map(({ id, image, name, description, price, category_id }, index) => (
                                
                                <EditSlideProductContainer2  style={"flex-[0_0_40%]"} id={id} image={`http://127.0.0.1:8000${image}`} name={name} description={description} price={price} category={category_id} className="block" />
                                         
                             )
                             )
                             }
                             
            
                                      </div>  
                                      
                                          </div>
            <div className='w-1/3 flex flex-col'>     
               <p className='text-right mr-2 mt-5'>المنتجات المتاحة اضافتها </p>         
                <div className=' mx-2  h-[20rem] my-2 flex items-center overflow-x-scroll border-2' >
                       
                {categoryProducts?AvailableProducts?.map(({id,image , name,description,price,category_id},index) => (
                             
                             <EditSlideProductContainer1   style={"flex-[0_0_40%]"} id={id} image={`http://127.0.0.1:8000${image}`} name={name} description={description} price={price} category={category_id} className="block" />
                           
                                 )
                                      )
                                      :
                                      AvailableProducts?.map(({id,image , name,description,price,category_id},index) => (
                                             (console.log(allProducts)),
                                        <EditSlideProductContainer1  style={"flex-[0_0_40%]"}  id={id} image={`http://127.0.0.1:8000${image}`} name={name} description={description} price={price} category={category_id} className="block" />
                                      
                                            )
                                                 )  
                                          
                 }


                    </div>  
                 </div>      
                 </div>                         
                 </div>                         
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => Edit()}
                  >
                    تغيير
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => close()}
                    ref={cancelButtonRef}
                  >
                    إلغاء
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      </Transition.Root>
      </div>
  )
}
