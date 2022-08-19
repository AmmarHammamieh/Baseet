/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, emptyCategory, selectCategories } from '../../../GlobalData/CategorySlice';

export default function AddCategory({open,setOpen}) {
 
  const dispatch = useDispatch();
  const category = useSelector(selectCategories);
  const cancelButtonRef = useRef(null)

    // Here we have to put Data
  let Data = {
    Category: "",
  };

  async function AddCategorybtn() {
      if (document.getElementById("Category").value.length === 0) {
        document.getElementById("CategoryMessage").classList.remove('hidden', "text-center");
        document.getElementById("CategoryMessage").classList.add('text-right');
        document.getElementById("CategoryMessage").textContent = "الرجاء ادخال اسم الفئة";

        
    }
    if (document.getElementById("CategoryMessage").classList.contains('hidden')) {
      Data.Category = document.getElementById("Category").value;

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/Category/add`, Data)
        .then(res => {
        
          if (res.data.status === "201") {

           
            
            setTimeout(() => {
            dispatch(addCategory(res.data.Data));
            }, 300);
            setOpen(false);
         
          } else
            if (res.data.status === "401") {
            document.getElementById("CategoryMessage").classList.remove('hidden', "text-right");
            document.getElementById("CategoryMessage").classList.add('text-center');
            document.getElementById("CategoryMessage").textContent = res.data.message;
           }
        });
        
    }
    console.log(category);
  }

  function TextChange(){
    if (document.getElementById("Category").value.length > 0) {
        if(!document.getElementById("CategoryMessage").classList.contains('hidden')){
        document.getElementById("CategoryMessage").classList.add('hidden');
        }
    }
  }

  async function close() {
 
    console.log(category,"Close");
          setOpen(false);
   
  }
  return (
    <div>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={()=>close()}>
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
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-2xl sm:w-full ">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div dir='rtl' className="sm:flex flex-col sm:items-start">
                      <h1 className='w-full text-right text-3xl font-bold text-[#035AA7] border-b-2 pb-3 font-Somar-Black mb-2'>
                        إضافة فئة
                      </h1>
                      <form dir='rtl' className='flex flex-col w-full text-right'>
                      <p className='text-lg mr-1 text-right mb-1 font-Somar-Medium '>اسم الفئة</p>
                         <input id='Category' type="text" className="w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5  font-Somar-Regular placeholder-[#183C6C] text-xl outline-none" onChange={(e)=>TextChange(e)}/>
                         <span id ="CategoryMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال اسم الفئة</span>
                                              
                      </form>
                    
                    </div>
                  </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => AddCategorybtn()}
                  >
                    إضافة
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
