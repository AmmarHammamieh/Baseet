/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import axios from 'axios';
import { addCategory, selectCategories } from '../../../GlobalData/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../GlobalData/ProductSlice';
import Cookies from 'universal-cookie';
import { addProductSlide, emptyProductSlide, removeProductSlide, selectProductSlide } from '../../../GlobalData/SlideProductSlice';
import SlideTestProducts from './SlideTestProducts';

export default function ShowSlideProduct({ShowId,open,setOpen}) {

console.log(ShowId,"show")
    const cancelButtonRef = useRef(null);

    const [Slide, SetSlide] = useState();


useEffect(() => {
    getSlide();
}, [ShowId])

  
async function getSlide() {
    console.log(ShowId);
      let Data = {
        "Id": ShowId,
      };

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/ProductSlides/getSlide`, Data)
        .then(res => {
            SetSlide(res.data.slide.products);
            console.log(res.data.slide.images,"ima");
        });
        
}  
  
 function close() {

    setOpen(false);

}
    return (
        <div onLoadStart={()=>getSlide()}>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>close()}>
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

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl p-5 sm:w-full">
                    <SlideTestProducts Data={Slide} itemsPerPage={3} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
            </Transition.Root>
            </div>
  )
}
