/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProductSlide, emptyProductSlide } from '../../../GlobalData/SlideProductSlice';
import ImagesInSlideSlice, { addImageInside, emptyImageInside, selectImageInside } from '../../../GlobalData/ImagesInSlideSlice';
import { Carousel } from 'react-responsive-carousel';
import e from 'cors';
import { emptyImagesSlide } from '../../../GlobalData/ImageSlideShowSlice';
import SlideImageShow from './SlideImageShow';
import Cookies from 'universal-cookie';
import { addImageSlide, emptyImageSlide, selectImageSlide } from '../../../GlobalData/ImageSlideSlice';

export default function EditImageSlide({open,setOpen,EditId}) {
 /// nothing fixed
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [UserData, SetUserData] = useState();

    const ImageInsideSlide = useSelector(selectImageInside);
    let arrCopy = []; 
    useEffect(() => {
      User();
    })
    
   async function User() {
     let Token = {
       token:cookies.get('token'),
     }
     await axios.post(`http://127.0.0.1:8000/api/User`, Token)
   .then(res => { 
     SetUserData(res.data.name);
     console.log(res.data,"hi");
   });
     }
  
  const cancelButtonRef = useRef(null)

    // Here we have to put Data
    const [SlideOne, SetSlideOne] = useState();
    const [Image, SetImage] = useState([]);
    const [AImage, SetAImage] = useState([]);
    const [Loading, SetLoading] = useState(false);
  const [AllImage, SetAllImage] = useState([]);
    const selectslideImage = useSelector(selectImageSlide);
  
    useEffect(() => {
        getImages()
        if(ImageInsideSlide){ 
          SetLoading(true);
        }
    }, [EditId])
  
  useEffect(() => {

},[ImageInsideSlide])


  async function getImages() {

      let Data = {
        "Id":EditId,
      };

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/ImageSlides/getSlide`, Data)
          .then(res => {
            console.log(res.data.slide.images, "aqe");
            SetSlideOne(res.data.slide);
              //// Images Inside the slide 
              dispatch(emptyImageInside());
              for (let i = 0; i < res.data.slide.images.length; i++){
                dispatch(addImageInside('http://127.0.0.1:8000'+res.data.slide.images[i]));
                AllImage[AllImage.length] = 'http://127.0.0.1:8000' + res.data.slide.images[i];
                let ext = res.data.slide.images[i].substring(res.data.slide.images[i].indexOf('.') + 1);
                console.log(ext);
                AImage[AImage.length] = {
                  Url: 'http://127.0.0.1:8000'+res.data.slide.images[i],
                  Binary: 'http://127.0.0.1:8000' + res.data.slide.images[i],
                  ext: ext,
                };
            }

        });
        
    

}



   function close() {
    
   
          setOpen(false);
   
}
  async function Edit() {
    console.log(ImageInsideSlide);
    console.log(AImage);
    let BinaryImage = [];

    for (let i = 0; i < AImage.length; i++){
       BinaryImage[i] = AImage[i].Binary;
      
    }
  
   
    console.log(AImage, "AImage");
    let select = document.getElementById('type');
    let value = select.options[select.selectedIndex].value;


    let Data = {
      "Id": "",
      "User":"",
        "type":"",
      "title": "",
      "images":"",
    }
      if (!document.getElementById('title').value == "") {
          if (!document.getElementById('type').value == "") {
              Data = {
                "Id": EditId,
                "User":UserData,
                  "type":value,
                  "title": document.getElementById('title').value,
                  "images": AImage,
              };
          }
    } else {
       Data = {
         "Id": EditId,
         "User":UserData,
           "type":value,
           "title":document.getElementById('title').placeholder,
         "images": AImage,
         "token":cookies.get('token'),
      };
    }

    {/* Here */}

      await axios.post(`http://127.0.0.1:8000/api/DashBoard/ImageSlides/edit`, Data)
        .then(res => {
          dispatch(emptyImageSlide());
          dispatch(addImageSlide(res.data));
           
          console.log(selectslideImage);
                setOpen(false);
          
              
        });
    }
    

    function filebrowser(e) {
        e.preventDefault();
        document.getElementById('fileInput').click();
    }
    function getImage(e) {
      let type = e.target.files[0].type;
      let files = e.target.files[0];
      let ext = type.substring(type.indexOf('/') + 1);
      console.log();
        if (type.substring(0, type.indexOf('/')) === 'image') {
          Image[Image.length] = window.URL.createObjectURL(new Blob(e.target.files));
          dispatch(addImageInside(Image[Image.length - 1]));
          getBase64FromUrl(Image[Image.length - 1],ext);
          console.log(Image);
        }

  
         

      if (AImage.length > 0) {
        console.log(AImage  ,"zczcz");
        for (let i = 0; i < AImage.length; i++) {
     

          AllImage[AllImage.length] = AImage[i];
        }
      } 
      console.log(AImage,"sad");

    }


    
    
    const getBase64FromUrl = async (url,ext) => {
  
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
          AImage[AImage.length] = {
            Url: url,
            Binary: result,
            ext:ext,
          };
        });
  };




  return (
    <div onLoadStart={()=>getImages()}>

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
                            <input  required id="title" type="text" placeholder={SlideOne?.title} className={` text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  `} name="title" />
                        </div>
                        <div className='flex flex-col  w-3/4 items-center justify-center'>
                      <label for="type" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >نوع الشريحة</label>
                      <select id='type' className=' w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 font-Somar-Regular  text-xl outline-none' >
                      <option value={SlideOne?.type} selected disabled hidden>{SlideOne?.type}</option>
                        
                        <option value="الرئيسية">الرئيسية</option>
                        <option value="الفرعية" >الفرعية</option>
                        
                           </select>
                        </div>        
            <div className='flex justify-center mt-10'>
             <div className='w-3/4 flex justify-center'>                                   
               <div className=' mt-5 h-[23rem] w-[40rem] mr-10 '>
                        <input id="fileInput"  type="file" className='hidden'  accept="image/*" onChange={(e)=>getImage(e)}/>
                          
                          <p dir='rtl' className='w-full text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '>اختر الصور المراد عرضها</p>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUuOtK7W_UNjvXDx3Z9tCD14xTfWPFs3Wbw&usqp=CAU' className='w-full cursor-pointer rounded-xl' onClick={(e)=>filebrowser(e) }/>
                      </div>
                  <div>
                                                  
                                              </div>
                                              
             <div className='w-full '>
              
         
                            <SlideImageShow AImage={AImage} Data={ImageInsideSlide} itemsPerPage={1}/>
                          
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
