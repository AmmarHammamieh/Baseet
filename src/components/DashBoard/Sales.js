import React, { useEffect, useState } from 'react'


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

import { RiSlideshowLine } from 'react-icons/ri';     
import { IoIosNotifications } from 'react-icons/io';
import { BiMessage } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import SalesTable from './Modals/SalesTable';
import axios from 'axios';
import { Link } from 'react-router-dom';    
import Cookies from 'universal-cookie';
import SearchBarSales from './components/SearchBarSales';

function Sales() {

   const [Sales, SetSales] = useState();
   const cookies = new Cookies();
   const [UserData, SetUserData] = useState();
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
     useEffect(() => {
        User();
     })
   
   useEffect(() => {
      getSales();
   }, [])
   
async   function getSales() {
   await axios.get(`http://127.0.0.1:8000/api/DashBoard/Sales`)
      .then(res => {
         
         SetSales(res.data);
      })
   
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
           <div className='flex m-auto items-center w-3/4 mt-10 bg-[#FAF9FB] rounded-full border-0 shadow-md  '>
                                    {/* <AiOutlineSearch className="ml-2 rounded-l-full"/>
                                    <input dir="rtl" lang="ar" placeholder='ابحث عن مجموعة..' className="p-2  w-full  focus:outline-none px-4 bg-[#FAF9FB] rounded-full border-0 " type="text" /> */}
              <SearchBarSales placeholder="...ابحث عن مبيعات منتج" setSales={SetSales} Sales={Sales} />
                  </div>
              <SalesTable itemsPerPage={10} Data={Sales} />
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
                           <Link to="/DashBoard/Sections/Slides/View" className='my-1'>عرض الشرائح</Link>
                          <Link to="/DashBoard/Sections/Slides" className='my-1'>إضافة شرائح صور</Link>
                          <Link to="/DashBoard/Sections/Products">إضافة شرائح منتجات</Link>
                     </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الشحن</h1>
                                 <img src={delivery} className="ml-5" />  
                              </div>
                              <div className='cursor-pointer flex items-center justify-end mr-2 mt-32' onClick={()=>SignOut()}>
                                 <h1 className='font-Somar-Regular text-2xl'>تسجيل الخروج</h1>
                                 <img src={Exit} className="ml-5" />  
                              </div>
                          </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default Sales