/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import axios from 'axios';
import { addCategory, selectCategories } from '../../../GlobalData/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../GlobalData/ProductSlice';
import Cookies from 'universal-cookie';

export default function DeleteProduct({DeleteId,open,setOpen}) {
    const dispatch = useDispatch();
    const category = useSelector(selectCategories);  
    const cancelButtonRef = useRef(null)
    const [CurrentPorduct, setCurrentPorduct] = useState();
    const cookies = new Cookies();
  const [UserData, SetUserData] = useState();

  
async function Delete() {
    let Data = {
      "DeleteId": DeleteId,
      "user":UserData,
      };

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/Product/delete/remove`, Data)
        .then(res => {
            setTimeout(() => {
                dispatch(addProduct(res.data.Data));
                }, 300);
                setOpen(false);
        

        });
}
  useEffect(() => {
    User();
    getProduct();
},[DeleteId])
    
async function User() {
  let Token = {
    token:cookies.get('token'),
  }
  await axios.post(`http://127.0.0.1:8000/api/User`, Token)
.then(res => { 
  SetUserData(res.data.name);
});
  }
  
async function getProduct() {
 
      let Data = {
        "DeleteId": DeleteId,
      };

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/Product/delete/index`, Data)
        .then(res => {
              setCurrentPorduct(res.data.name);
        });
        
}  
  
 function close() {

    setOpen(false);

}
    return (
        <div onLoadStart={()=>getProduct()}>
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
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Deactivate account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        ({CurrentPorduct}) هل أنت متأكد من رغبتك في حذف هذا المنتج؟
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => Delete()}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={()=>close()} 
                    ref={cancelButtonRef}
                  >
                    Cancel
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
