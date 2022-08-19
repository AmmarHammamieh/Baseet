import React,{ReactDOM, useEffect, useState } from 'react'


import Logo from "../../images/Logo.svg";
import profileImg from "../../images/profileImg.svg";
import Show from "../../images/Show.svg";
import Home from "../../images/Home.svg";
import Arrows from "../../images/Arrows.svg";
import advertising from "../../images/advertising.svg";
import Clients from "../../images/Clients.svg";
import delivery from "../../images/delivery.svg";
import question from "../../images/question.svg";
import Reports from "../../images/Reports.svg";
import shopping from "../../images/shopping.svg";
import shirt from "../../images/t-shirt.svg";
import Exit from "../../images/Exit.svg";
import ArcheveTop from "../../images/ArcheveTopCover.svg";
import Archeve from "../../images/Archeve.svg";

import { IoIosNotifications } from 'react-icons/io';
import { BiMessage } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { render } from '@testing-library/react';
import SlideTest from './Modals/SlideTest';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { RiSlideshowLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


function SlideSection() {
    const [Image, SetImage] = useState([]);
    const [AImage, SetAImage] = useState([]);
    const [OpenSlideTest, setOpenSlideTest] = useState(false);
    const [titleV, settitleV] = useState();
    const [UserData, SetUserData] = useState();
    const cookies = new Cookies();
    const [ImageSlides, setImageSlides] = useState([]);
    const [Main, setMain] = useState(0);
    const [Secondry, setSecondry] = useState(0);
    const [exte, setExte] = useState("");
  let index = 0;


  async function getImageSlides() {
    await axios.get(`http://127.0.0.1:8000/api/DashBoard/ImageSlides/getImageSlides`)
      .then(res => {
        setImageSlides(res.data);
        console.log(res.data, "Ima");
        let first = 0;
        let sec = 0;
        for (let i = 0; i < res.data.length; i++){
          if (res.data[i].type == "رئيسية") {
            first += 1;
           
          }
          if (res.data[i].type == "فرعية") {
            sec += 1;

          }
        }

        setMain(first);
        setSecondry(sec);

      });
  }
    
   useEffect(() => {
     User();
     getImageSlides();
   },[])
   
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
 
  
  
  function Testbtn() {
    if (Image.length > 0) {
      settitleV(document.getElementById('title').value);
      setOpenSlideTest(true);
    }
    } 
    function filebrowser(e) {
        e.preventDefault();
        document.getElementById('fileInput').click();
    }
    function getImage(e) {
        let type = e.target.files[0].type;
        let files = e.target.files[0];
        let ext = type.substring(type.indexOf('/') + 1);
        if (type.substring(0, type.indexOf('/')) === 'image') {
            Image[Image.length] = window.URL.createObjectURL(new Blob(e.target.files));
      }
      
        let container = document.getElementById('ImageContainer');
        let Url= Image[Image.length-1]
        let image= document.createElement('div');
       image.style.width = "10rem";
      image.style.height = "10rem";
      image.id = Image.length-1;
        image.classList.add("bg-contain", "bg-no-repeat","mx-2","Image");
      image.style.backgroundImage = `url(${Url})`;
      image.addEventListener('click', function handleClick(event) {
        const element = document.getElementById(event.target.id);
        Image.splice(event.target.id, 1);
        element.remove();
      });
       container.appendChild(image);
     


      if (Image.length > 0) {
        if (!document.getElementById('ImageMessage').classList.contains('hidden')) {
          document.getElementById('ImageMessage').classList.add('hidden');
        }
         document.getElementById('testbtn').classList.add("text-[#EA676C]", "border-[#EA676C]","cursor-pointer");
         document.getElementById('testbtn').classList.remove("text-gray-300", "border-gray-300","cursor-default");
       } else {
         document.getElementById('testbtn').classList.remove("text-[#EA676C]", "border-[#EA676C]","cursor-pointer");
         document.getElementById('testbtn').classList.add("text-gray-300", "border-gray-300","cursor-default");

  
      }
      getBase64FromUrl(Image[Image.length - 1],ext);

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
            "url": result,
            "ext":ext,
          };
        
        });
  };
  

    function categoryChange(e) {
    let select = document.getElementById('category');
    let value = select.options[select.selectedIndex].value;

    if (!value==""){
      if(!document.getElementById('CategoryMessage').classList.contains('hidden')){
            document.getElementById('CategoryMessage').classList.add('hidden');
      }
    }
  }

  async function Save() {
   
    let select = document.getElementById('category');
   let value = select.options[select.selectedIndex].value;
   let categ = "";
    if (value==""){
      if(document.getElementById('CategoryMessage').classList.contains('hidden')){
        document.getElementById('CategoryMessage').classList.remove('hidden');
  }
    }
    if(!(Image.length>0)){
      
        document.getElementById('ImageMessage').classList.remove('hidden');
    }

    if (document.getElementById('CategoryMessage').classList.contains('hidden') &&
      document.getElementById('ImageMessage').classList.contains('hidden'))
    {
      if (value == "main") {
        categ = "رئيسية";
      } else if (value == "secondary") {
        categ = "فرعية";
      }
      let Slide = {
        "title":document.getElementById('title').value,
        "type": categ,
        "images": AImage,
        "user": UserData,
        "token":cookies.get('token'),
      }
      await axios.post(`http://127.0.0.1:8000/api/DashBoard/ImageSlides/add`,Slide)
        .then(res => {

          document.getElementById('SuccessMessage').classList.remove("hidden");
          setTimeout(() => {
          window.location.reload();
            
          }, 500);
        console.log(res.data);
            
      });
        }
  }
  function ShowSlideMenu() {
    if (document.getElementById('slidesMenu').classList.contains("hidden")) {
       document.getElementById('slidesMenu').classList.remove("hidden");
       document.getElementById('slidesMenu').classList.add("flex");

    } else if (!(document.getElementById('slidesMenu').classList.contains("hidden"))) {
       document.getElementById('slidesMenu').classList.add("hidden");
       document.getElementById('slidesMenu').classList.remove("flex");

  }
  }
  
  async  function SignOut() {
    var user = {
       token: cookies.get('token'),
   };
   cookies.remove('token', { path: '/' });
   console.log(user);
   await axios.post(`http://127.0.0.1:8000/api/logout`, user)
     .then(res => {
         
          window.location.replace("/");            
       });
 }
  return (
    <div className='w-full h-full'>
      <SlideTest open={OpenSlideTest} setOpen={setOpenSlideTest} Images={Image} title={titleV} />
          <div className='flex flex-col w-full h-full'>
                <div className=' w-full items-center justify-evenly flex text-[#035AA7] font-semibold px-1 flex-grow  border-2'>
                  <img src={profileImg} className='w-20 h-20 ' />
                  <div className='flex items-center flex-grow justify-evenly px-10'>
                        <div className='mr-2 p-1 bg-[#FAF9FB] border-2 h-fit flex justify-center items-center rounded-lg'>
                            <IoIosNotifications className='text-2xl' />
                        </div>
                        <div className=' p-1 bg-[#FAF9FB] border-2 h-fit flex justify-center items-center rounded-lg'>
                        <BiMessage className='text-2xl'/>
                      </div>
                  </div>

              <div className='flex  flex-grow items-center w-full bg-[#FAF9FB] rounded-full shadow-md  '>
                                    <AiOutlineSearch className="ml-2 rounded-l-full"/>
                                    <input dir="rtl" lang="ar" placeholder='..ابحث عما تريد' className="p-2  w-full  focus:outline-none px-4 bg-[#FAF9FB] rounded-full " type="text"/>
                  </div>
              <div className='w-5/12 flex flex-4 justify-center'>
                            <img src={Logo} className="w-2/6 h-fit " />
                  </div>
              </div>
          </div>
    <div className='flex bg-[#F5F7F9]'>  
    <div className='w-3/4 h-full flex-col '>
                  <div className='w-full h-full flex flex-col items-center justify-center'>
                      <div className='flex flex-col  w-3/4'>
                            <label for="title" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >عنوان القسم المراد عرضه</label>
                            <input required id="title" type="text" className='text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  ' name="title"/>
                      </div>
                      <div className=' mt-5 h-full w-3/4'>
                        <input id="fileInput"  type="file" className='hidden'  accept="image/*" onChange={(e)=>getImage(e)}/>
                          
                          <p dir='rtl' className='w-full text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '>اختر الصور المراد عرضها</p>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUuOtK7W_UNjvXDx3Z9tCD14xTfWPFs3Wbw&usqp=CAU' className='w-full cursor-pointer rounded-xl' onClick={(e)=>filebrowser(e) }/>
                      </div>
                      <div id="ImageContainer" className='w-3/4 border-2 pt-5 mt-5 flex justify-evenly'>
                          
                     </div>
                     <div className="w-3/4 text-right">
                       <span id ="ImageMessage" className='text-sm text-red-600 font-semibold hidden'>الرجاء ادخال الصور المراد عرضها</span>
                       </div>
                 <div className='w-3/4 mt-5'>
                        <select id='category'  className='w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 font-Somar-Regular  text-xl outline-none' onChange={(e)=>categoryChange(e)}>
                            <option value="" selected disabled hidden>إختر نوع الشريحة...</option>
                <option value="main" disabled={Main == 1 ? true : ""}>شريحة رئيسية ({Main == 1 ? 0 : 1})</option>
                                 <option  value="secondary"disabled={Secondry==3?true:""}>شريحة فرعية ({Secondry==3?0:3-Secondry})</option>
                        </select>
                        <div className="w-full text-right">
                       <span id ="CategoryMessage" className='text-sm text-red-600 font-semibold hidden'>الرجاء ادخال الشريحة المناسبة</span>
                       </div>
                 </div>  
            <span id ="SuccessMessage" className='text-sm mt-5 text-green-400 font-semibold hidden'>تم التعديل بنجاح</span>
                      
            <div className='w-3/4 mt-10 flex justify-between mb-5'>
              <button id='testbtn' className='border-4 border-gray-300 bg-white rounded-lg py-[3px] font-bold text-2xl w-1/5 sm:w-1/5 text-gray-300 mt-5 font-Somar-Bold cursor-default' onClick={() => Testbtn()}>تجريب</button> 
                    
                     <button className=' px-12 mt-5 rounded-lg bg-[#035AA7] text-white font-semibold cursor-pointer font-Somar-Bold text-xl'onClick={()=>Save()}>حفظ </button>
            </div>
            
                    </div>
        </div>
 
        {/* side */}

        <div className='w-1/4 h-full bg-white'>
                      <div className='flex flex-col justify-center items-center border-2'>
                          <div className='h-1/4 w-full flex justify-center'>
                              <img src={profileImg} className="w-40 h-fit" />
                           </div>
            <div className='flex flex-col items-center mt-[-25px] mb-5 '>
                          <h1 className='text-sm'>{UserData} </h1>
                              <p className='text-xs'>Admin</p>
                          </div>
                        
                          <div className='h-full w-full border-2'>
                              <Link to="/DashBoard/Store" className='cursor-pointer flex items-center justify-end mr-5 mt-5'>
                                 <h1 className='font-Somar-Regular text-2xl'>معلومات المتجر</h1>
                                 <img src={Show} className="ml-5" />  
                              </Link>
                              <Link to="/DashBoard/Products" className='cursor-pointer flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>المنتجات</h1>
                                 <img src={shirt} className="ml-5" />  
                              </Link>
                              <Link to="/DashBoard/sales" className='cursor-pointer flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>المبيعات</h1>
                                 <img src={shopping} className="ml-5" />  
                              </Link>
                             
                              <Link to="/DashBoard/Clients" className='cursor-pointer flex items-center justify-end mr-5 mt-10'>
                                 <h1  className=' font-Somar-Regular text-2xl'>العملاء</h1>
                                 <img src={Clients} className="ml-5" />  
                    </Link>
                    
                    <div className='flex items-center justify-end mr-5 mt-10 cursor-pointer' onClick={()=>ShowSlideMenu()}>
                       <h1 className='font-Somar-Regular text-2xl'>شرائح</h1>
                                 <RiSlideshowLine className="ml-5 text-5xl text-[#035AA7]" />  
                    </div>
                    <div id="slidesMenu" className=' flex-col text-right mr-20 mt-2 hidden'>
                           <a href="/DashBoard/Sections/Slides/View" className='my-1'>عرض الشرائح</a>
                          <a href="/DashBoard/Sections/Slides" className='my-1'>إضافة شرائح صور</a>
                          <a href="/DashBoard/Sections/Products">إضافة شرائح منتجات</a>
                     </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الشحن</h1>
                                 <img src={delivery} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-2 mt-64' onClick={()=>SignOut()}>
                                 <h1 className='font-Somar-Regular text-2xl cursor-pointer'>تسجيل الخروج</h1>
                                 <img src={Exit} className="ml-5" />  
                              </div>
                          </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default SlideSection