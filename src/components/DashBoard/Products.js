import React, { useEffect } from 'react'


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
import AddProduct from './Modals/AddProduct';
import { useState } from 'react';
import AddCategory from './Modals/AddCategory';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, selectCategories } from '../../GlobalData/CategorySlice';
import axios from 'axios';
import SlideTables from './Modals/SlideTables';
import ProductContainer from './components/ProductContainer';
import { Carousel } from 'react-responsive-carousel';
import SlideProducts from './Modals/SlideProducts';
import { addProduct, selectProducts } from '../../GlobalData/ProductSlice';
import { RiSlideshowLine } from 'react-icons/ri';     
import { Link } from 'react-router-dom';    
import Cookies from 'universal-cookie';
import SearchBarProduct from './components/SearchBarProduct';
import SearchBarCategory from './components/SearchBarCategory';


function Products() {
   const [CategoryTest, setCategoryTest] = useState(false);
   const [ProductTest, setProductTest] = useState(false);
   const cookies = new Cookies();

   const [OpenAddProduct, setOpenAddProduct] = useState(false);
   const [OpenAddCategory, setOpenAddCategory] = useState(false);

   const category = useSelector(selectCategories);
   const product = useSelector(selectProducts);

   const [Data, SetData] = useState([]);
   const [DataForSearch, SetDataForSearch] = useState([]);

   const [CategorySearch, SetCategorySearch] = useState([]);

   const dispatch = useDispatch();
  const [UserData, SetUserData] = useState();
      
   const [DataProduct, SetDataProduct] = useState([]);

   const [ProductForSearch, SetProductForSearch] = useState([]);

   async function User() {
      let Token = {
        token:cookies.get('token'),
      }
      await axios.post(`http://127.0.0.1:8000/api/User`, Token)
    .then(res => { 
      SetUserData(res.data.name);
    });
   }
   useEffect(() => {
      User();
    },[])

   function AddProductbtn(){
      setOpenAddProduct(true);

   }
   function AddCategorybtn(){
      setOpenAddCategory(true);
   }

   useEffect(() => {
      SetDataProduct(product);

      setProductTest(true);

   }, [product])
 
   useEffect(() => {
      SetData(category);
      setCategoryTest(true);

   }, [category])



   
   async function CategoryList() {
      await axios.get(`http://127.0.0.1:8000/api/DashBoard/Category`)
         .then(res => { 
            SetData(res.data.Data);
            SetDataForSearch(res.data.Data);
            dispatch(addCategory(res.data.Data));
          }) 
      ProductList();
   }
///////// Redux For Products Dont Forget
   async function ProductList() {
      await axios.get(`http://127.0.0.1:8000/api/DashBoard/Product`)
         .then(res => { 
            SetDataProduct(res.data);
            dispatch(addProduct(res.data));
            SetProductForSearch(res.data);
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
     await axios.post(`http://127.0.0.1:8000/api/logout`, user)
         .then(res => {
            window.location.replace("/");            
         });
   }
   
  

 
  
  return (
     <div className='w-full h-full' >
        <AddProduct open={OpenAddProduct} setOpen={setOpenAddProduct}  />
        <AddCategory open={OpenAddCategory} setOpen={setOpenAddCategory}/>
          <div className='flex flex-col w-full h-full'>
                <div className=' w-full items-center justify-evenly flex text-[#035AA7] font-semibold px-1 flex-grow  border-2'>
                  <img src={profileImg} className='w-20 h-20 ' onLoad={()=>CategoryList()}/>
                  <div className='flex items-center flex-grow justify-evenly px-10'>
                        <div className='mr-2 p-1 bg-[#FAF9FB] border-2 h-fit flex justify-center items-center rounded-lg'>
                            <IoIosNotifications className='text-2xl' />
                        </div>
                        <div className=' p-1 bg-[#FAF9FB] border-2 h-fit flex justify-center items-center rounded-lg'>
                        <BiMessage className='text-2xl'/>
                      </div>
                  </div>

              <div className='flex  flex-grow items-center w-full bg-[#FAF9FB] rounded-full border-0 shadow-md  '>
                                    <AiOutlineSearch className="ml-2 rounded-l-full"/>
                                    <input dir="rtl" lang="ar" placeholder='..ابحث عما تريد' className="p-2  w-full  focus:outline-none px-4 bg-[#FAF9FB] rounded-full border-0 " type="text"/>
                  </div>
              <div className='w-5/12 flex flex-4 justify-center'>
                            <img src={Logo} className="w-2/6 h-fit " />
                  </div>
              </div>
          </div>
        
    <div className='flex bg-[#F5F7F9] '>  
           <div className='w-3/4 h-full flex flex-col justify-center items-center ' >
           <div className='flex  items-center w-3/4 mt-10 bg-[#FAF9FB] rounded-full border-0 shadow-md  '>
                                    {/* <AiOutlineSearch className="ml-2 rounded-l-full"/>
                                    <input dir="rtl" lang="ar" placeholder='ابحث عن مجموعة..' className="p-2  w-full  focus:outline-none px-4 bg-[#FAF9FB] rounded-full border-0 " type="text" /> */}
                 <SearchBarCategory placeholder="...ابحث عن مجموعة"  />
                  </div>
              <div className='w-3/4 mt-10 bg-gray-100 p-5 rounded-xl shadow-md ' >
                 <h1 dir='rtl' class="container text-3xl font-bold text-[#035AA7] border-b-2 pb-3 font-Somar-Black mb-2 mr-1">إضافة فئة</h1>
                 {console.log(Data, "Data")}
                 {console.log(category[0], "category")}  
                 
                 {Data ? (

                    (CategoryTest && category? (<SlideTables itemsPerPage={4} Data={category[0]}  />):console.log(""))
                    
                    
                 )
                    :(
             
                    
                     console.log("")
                    )
                  }
               
                 <button className='w-full border-[#035AA7] border-4 text-[#035AA7] mt-5 rounded-xl py-2 font-Somar-Black text-2xl'onClick={()=>AddCategorybtn()}>إضافة مجموعة جديدة</button>
              </div>

              <div className='flex  items-center w-3/4 mt-20 bg-[#FAF9FB] rounded-full border-0 shadow-md  '>
                                    {/* <AiOutlineSearch className="ml-2 rounded-l-full"/>
                                    <input dir="rtl" lang="ar" placeholder='ابحث عن مجموعة..' className="p-2  w-full  focus:outline-none px-4 bg-[#FAF9FB] rounded-full border-0 " type="text" /> */}
                 <SearchBarProduct placeholder="...ابحث عن منتج"  />
                  </div>
              <div className='w-[90%] mx-auto bg-gray-100 p-5 rounded-xl shadow-md mt-5'>
                 <h1 dir='rtl' class="text-3xl font-bold text-[#035AA7] border-b-2 pb-3  mb-2 mr-1 font-Somar-Black">إضافة منتج</h1>
                 {DataProduct ? (
                    
                    (ProductTest && product? ( <SlideProducts itemsPerPage={3} Data={product[0]}   />):console.log(""))
                    
                    
                 )
                    :(
             
                    
                     console.log("")
                    )
                  }



               
                 <button className='w-full border-[#035AA7] border-4 text-[#035AA7] mt-5 rounded-xl py-2 font-Somar-Black text-2xl'  data-modal-toggle="authentication-modal" onClick={()=>AddProductbtn()}>إضافة المنتج</button>
                 <button className='w-full border-[#EA676C] border-4 text-[#EA676C] mt-5 rounded-xl py-2 font-Somar-Black text-2xl'>إحذف المنتجات المحددة</button>
                
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
                           <Link to="/DashBoard/Sections/Slides/View" className='my-1'>عرض الشرائح</Link>
                          <Link to="/DashBoard/Sections/Slides" className='my-1'>إضافة شرائح صور</Link>
                          <Link to="/DashBoard/Sections/Products">إضافة شرائح منتجات</Link>
                     </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الشحن</h1>
                                 <img src={delivery} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-2 mt-32 cursor-pointer'onClick={()=>SignOut()}>
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

export default Products