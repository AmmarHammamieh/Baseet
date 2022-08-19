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
import { Carousel } from 'react-responsive-carousel';

export default function ShowSlideImage({ShowId,open,setOpen}) {


    const cancelButtonRef = useRef(null);

    const [Slide, SetSlide] = useState();
    const [Images, SetImages] = useState([]);

    const [title, setTitle] = useState();
useEffect(() => {
    getSlide();
}, [ShowId])

  
async function getSlide() {
    console.log(ShowId);
      let Data = {
        "Id": ShowId,
      };

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/ImageSlides/getSlide`, Data)
        .then(res => {
            SetSlide(res.data.slide.images);
            console.log(res.data.slide.images, "ima");
            for (let i = 0; i < res.data.slide.images.length; i++) {
                Images[Images.length] = 'http://127.0.0.1:8000' + res.data.slide.images[i];
            }
            setTitle(res.data.slide.title);
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
              <div className="bg-[#F5F7F9] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                    {title? <div className="w-full text-right bg-gray-400 rounded-t-xl">
                       <p className='p-2'> {title}</p> 
                    </div>: console.log("nothing")}
                    
                <Carousel infiniteLoop="true" showStatus={false} autoPlay="true" showIndicators={true} showArrows={true} showThumbs={false} interval={5000} className=' border-4 border-gray-400 w-full h-full ' >
                {Images?.map((image) => (
                             
                            <div style={{ backgroundImage: `url(${image})` }} className="h-[20rem] mt-5 w-[20rem] m-auto bg-no-repeat bg-contain" />
                        )
                         )}     
                                        </Carousel>
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
