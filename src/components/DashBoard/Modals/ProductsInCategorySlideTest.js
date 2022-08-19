/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

import { Carousel } from 'react-responsive-carousel';
import SlideTestProducts from './SlideTestProducts';

export default function ProductsInCategorySlideTest({open,setOpen,title , ApprovedProduct}) {
 
  const cancelButtonRef = useRef(null)

    // Here we have to put Data
    

  



 function close() {
          setOpen(false); 
  }
  return (
    <div >

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
          <div className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative flex justify-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-5xl sm:w-full h-[30rem]">
              <div className="bg-[#F5F7F9] w-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                    {title? <div className="w-full text-right bg-gray-400 rounded-t-xl">
                       <p className='p-2'> {title}</p> 
                    </div> : console.log("nothing")}
                    
                    <SlideTestProducts itemsPerPage="4" Data={ApprovedProduct} />
          
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
