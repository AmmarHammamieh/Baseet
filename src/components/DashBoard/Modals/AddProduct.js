/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { BsCloudArrowUp } from 'react-icons/bs';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, emptyProduct, selectProducts } from '../../../GlobalData/ProductSlice';
import { selectCategories } from '../../../GlobalData/CategorySlice';
import Select from 'react-select'

export default function AddProduct({open,setOpen}) {

  const colourStyles = {
    control: styles => ({ ...styles, 'border-width': '4px','border-color': '#035AA7','border-radius':'0.5rem'}),
   
  
   
  };
  const dispatch = useDispatch();
  const product = useSelector(selectProducts);
  const category = useSelector(selectCategories);

  
  const cancelButtonRef = useRef(null)

  const [startDate, setStartDate] = useState(new Date());
  const [Image, SetImage] = useState();
  const [AImage, SetAImage] = useState();
  const [UserData, SetUserData] = useState();
  const [options, Setoptions] = useState([
    {value:"",lable:""},
  ]);
  const [exte, setExte] = useState("");


 
  

  // Here we have to put Data
  const [CategoryData, SetCategoryData] = useState();

  const cookies = new Cookies();

  async function Category() {
    await axios.get(`http://127.0.0.1:8000/api/DashBoard/Category`)
         .then(res => { 
           SetCategoryData(res.data.Data);
        
            for (let i = 0; i < res.data.Data?.length; i++) {
              options[i] = { value: res.data.Data[i].id, label: res.data.Data[i].name };
          }
          }) 
  }

  async function User() {
    let Token = {
      token:cookies.get('token'),
    }
    await axios.post(`http://127.0.0.1:8000/api/User`, Token)
  .then(res => { 
    SetUserData(res.data);
 
  });
  }
 
  useEffect(() => {
    Category();

    User();

      
  }, [])
  

  useEffect(() => {
    Category(); 

  }, [category])

  useEffect(() => {
    getBase64FromUrl(Image);
  }, [Image])
  
  function filebrowser(e) {
    e.preventDefault();
    document.getElementById('fileInput').click();
  }

 
  function getImage(e) {
    let type = e.target.files[0].type;
    let files = e.target.files[0];
    let ext = type.substring(type.indexOf('/') + 1);
    if (type.substring(0, type.indexOf('/')) === 'image') {
      SetImage(window.URL.createObjectURL(new Blob(e.target.files)));
      if (!document.getElementById('ImageMessage').classList.contains("hidden")) {
        document.getElementById('ImageMessage').classList.add("hidden");
      }
      

    } else {
      document.getElementById('ImageMessage').classList.remove("hidden");
      document.getElementById('ImageMessage').textContent = "???????????? ???????????????? ?????? ???????????? ???????? ??????";
      SetImage(null);
      
    }

    setExte(ext);
  }
  const getBase64FromUrl = async (url) => {
  
    const data = await fetch(url);
    const blob = await data.blob();
    return  new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsBinaryString(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data)
      };
    }).then(function (result) {
      SetAImage(result);
   
    });
  };
 async function ProductAddbtn() {

   
   try {
     if (document.getElementsByClassName(' css-qc6sy-singleValue')[0].textContent) {
       document.getElementById('CategoryMessage').classList.add('hidden');
     }
   } catch {
    document.getElementById('CategoryMessage').classList.remove('hidden');
     
   }
   if (!document.getElementById('price').value) {
    document.getElementById('PriceMessage').classList.remove('hidden');
  }
    if (!document.getElementById('name').value) {
      document.getElementById('NameMessage').classList.remove('hidden');
    }
    if (!document.getElementById('description').value) {
      document.getElementById('DescripMessage').classList.remove('hidden');
    }
    if (!document.getElementById('size').value) {
      document.getElementById('SizeMessage').classList.remove('hidden');
    }
    if (!Image) {
      document.getElementById('ImageMessage').classList.remove('hidden');
      document.getElementById('ImageMessage').textContent="???????????? ?????????? ???????? ????????????";
      
    }
    if (document.getElementById('ImageMessage').classList.contains('hidden') && document.getElementById('SizeMessage').classList.contains('hidden') &&
     document.getElementById('DescripMessage').classList.contains('hidden') && document.getElementById('NameMessage').classList.contains('hidden') && 
  document.getElementById('CategoryMessage').classList.contains('hidden') && document.getElementById('PriceMessage').classList.contains('hidden')) {
 
  
   


      let product = {
        "token":cookies.get('token'),
         "User" : UserData.name,
         "name": document.getElementById('name').value,
        "image": AImage,
        "ext":exte,
          "desciption": document.getElementById('description').value,
          "price": document.getElementById('price').value,
         "category": document.getElementsByClassName(' css-qc6sy-singleValue')[0].textContent,
         "size": document.getElementById('size').value,
         "expire_date": document.getElementById('date').value,
   };
   
       await axios.post(`http://127.0.0.1:8000/api/DashBoard/Product/add`, product)
         .then(res => { 
 
     
            setTimeout(() => {
              dispatch(addProduct(res.data));
            }, 300);

         });

         close();
    }
  }

 async  function close() {

   SetImage(null);
  setOpen(false);
  }
  function priceChange(e) {

    if (e.target.value.length > 0){
      if(!document.getElementById('PriceMessage').classList.contains('hidden')){
            document.getElementById('PriceMessage').classList.add('hidden');
      }
    }
  }
  function nameChange(e) {

    if (e.target.value.length > 0){
      if(!document.getElementById('NameMessage').classList.contains('hidden')){
            document.getElementById('NameMessage').classList.add('hidden');
      }
    }
  }
  function descripChange(e){
    if (e.target.value.length > 0){
      if(!document.getElementById('DescripMessage').classList.contains('hidden')){
            document.getElementById('DescripMessage').classList.add('hidden');
      }
    }
  }
  function sizeChange(e){
    if (e.target.value.length > 0){
      if(!document.getElementById('SizeMessage').classList.contains('hidden')){
            document.getElementById('SizeMessage').classList.add('hidden');
      }
    }
  }
  
  // function categoryChange(e) {
  //   let select = document.getElementById('category');
  //   let value = select.options[select.selectedIndex].value;

  //   if (!value==""){
  //     if(!document.getElementById('CategoryMessage').classList.contains('hidden')){
  //           document.getElementById('CategoryMessage').classList.add('hidden');
  //     }
  //   }
  // }
  return (
    <div>

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
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div dir='rtl' className="sm:flex flex-col sm:items-start">
                      <h1 className='w-full text-right text-3xl font-bold text-[#035AA7] border-b-2 pb-3 font-Somar-Black mb-2'>
                        ?????????? ????????
                      </h1>
                      <form dir='rtl' className='flex w-full text-right'>
                        <div className='w-full'>
                         <p className='text-lg mr-1 text-right mb-1 font-Somar-Medium '>?????? ????????????</p>
                          <input id="name" type="text" className="w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5  font-Somar-Regular placeholder-[#183C6C] text-xl outline-none" onChange={(e)=>nameChange(e)}/>
                         <span id ="NameMessage" className='text-right text-sm text-red-600 font-semibold hidden'>???????????? ?????????? ?????? ????????????</span>
                          
                        <p className='text-lg mr-1 text-right mb-1 font-Somar-Medium mt-2'>????????????</p>
                          <textarea id="description" className="w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 font-Somar-Regular  text-xl outline-none" onChange={(e)=>descripChange(e)}/>
                         <span id ="DescripMessage" className='text-right text-sm text-red-600 font-semibold hidden'>???????????? ?????????? ?????? ????????????????</span>
                          
                          <p className='text-lg mr-1 text-right mb-1 font-Somar-Medium mt-2 '>??????</p>
                          <Select id='category' options={options} styles={colourStyles} />
                          {/* <select id='category'  className='w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 font-Somar-Regular  text-xl outline-none' onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();' onChange={(e)=>categoryChange(e)}>
                            <option value="" selected disabled hidden>???????? ??????...</option>
                            {CategoryData?.map(({ id, name }) => (
                             
                                 <option key={id} value={name}>{name}</option>
                            )
                             )}
                            </select> */}
                      
                         <span id ="CategoryMessage" className='text-right text-sm text-red-600 font-semibold hidden'>???????????? ?????????? ?????????????????? ?????????? ?????????? ????????????</span>
                          {/* */}
                          <p className='text-lg mr-1 text-right mb-1 font-Somar-Medium '>?????? ????????????</p>
                          <input id="price" type="number" className="w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-2 pr-4 py-1.5  font-Somar-Regular placeholder-[#183C6C] text-xl outline-none" onChange={(e)=>priceChange(e)}/>
                          <span id="PriceMessage" className='text-right text-sm text-red-600 font-semibold hidden'>???????????? ?????????? ?????? ????????????</span>
                          
                          <div className='w-full h-full grid grid-cols-2 gap-2 '>
                            <div className='flex flex-col'>
                         <p className='text-lg mr-1 text-right mb-1 font-Somar-Medium mt-2'>?????????? ???????????? ????????????????</p>
                         <ReactDatePicker id="date"   dateFormat="yyyy/MM/dd"  className='w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-2 pr-2 py-1.5 font-Somar-Regular placeholder-[#183C6C]  outline-none text-xl' selected={startDate} onChange={(date) => setStartDate(date)} />

                            </div>
                            <div className='flex flex-col'>
                        <p className='text-lg mr-2=1 text-right mb-1 font-Somar-Medium mt-2'>???????????? ??????????????</p>
                              <input id="size" type="number" className="w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-2 pr-2 py-1.5 font-Somar-Regular placeholder-[#183C6C]  outline-none text-xl" onChange={(e) => sizeChange(e)}/>
                              <span id ="SizeMessage" className='text-right text-sm text-red-600 font-semibold hidden'>???????????? ?????????? ???????????? ?????????????? ????????????</span>

                              </div>
                        </div>
                        </div>
                        <div className='w-full pr-5 '>
                        <input id="fileInput"  type="file" className='hidden'  accept="image/*" onChange={(e)=>getImage(e)}/>
                          <div className="bg-[#F5F7F9] rounded-3xl w-full h-[60%]  ">
                            <div style={{ backgroundImage: `url(${Image})` }} className='bg-center bg-no-repeat bg-contain shadow-md rounded-3xl flex justify-center text-[#F5F7F9] items-center h-full'>
              
                              <BsCloudArrowUp className={`${Image ? "hidden":"block"} text-6xl bg-[#035AA7] shadow-md rounded-full p-2 cursor-pointer`} onClick={(e)=>filebrowser(e) } />
                            </div>
                          </div>
                         <span id ="ImageMessage" className='text-right text-sm text-red-600 font-semibold hidden'>???????????? ?????????? ???????? ????????????</span>

                          <button  className='border-4 border-[#EA676C] bg-white rounded-lg  py-1.5  font-bold text-2xl w-full  text-[#EA676C]  mt-5 font-Somar-Bold' onClick={(e)=>filebrowser(e) }>?????? ????????</button>

                        </div>
                      </form>
                    
                    </div>
                  </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center outline-none rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => ProductAddbtn()}
                  >
                    ??????????
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center outline-none rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => close()}
                    ref={cancelButtonRef}
                  >
                    ??????????
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
