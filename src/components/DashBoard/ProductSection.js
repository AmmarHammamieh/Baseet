import React,{ReactDOM, useEffect, useLayoutEffect, useState } from 'react'


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

import { IoIosNotifications } from 'react-icons/io';
import { BiMessage } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectItems } from '../../GlobalData/basketSlice';
import { selectApproved } from '../../GlobalData/aprovedProductsSlice';
import ProductShower1 from './components/ProductShower1';
import ProductShower2 from './components/ProductShower2';
import ProductsSlideTest from './Modals/ProductsSlideTest';
import ShowProductInCategory1 from './components/ShowProductInCategory1';
import { addProductInCategory, emptyProductInCategory, selectProductsInCategory } from '../../GlobalData/ProductInCategorySlice';
import { AddToApprovedProducts, emptyFromApprovedProducts, selectApprovedProducts } from '../../GlobalData/aprovedProductsInCategorySlice';
import ShowProductInCategory2 from './components/ShowProductInCategory2';
import ProductsInCategorySlideTest from './Modals/ProductsInCategorySlideTest';
import { RiSlideshowLine } from 'react-icons/ri';     
import { Link } from 'react-router-dom';    

function ProductSection() {

   const [theresCategory, setTheresCategory] = useState();
   const [view, Setview] = useState();
   const [howMuch, setHowMuch] = useState();
   
   const dispatch = useDispatch();
   const ProductSelect = useSelector(selectItems);
   const ApprovedSelect = useSelector(selectApproved);
   const ProductInCategorySelect = useSelector(selectProductsInCategory);
   const ApprovedInCategorySelect = useSelector(selectApprovedProducts);

   const [OpenProductsSlideTest, setOpenProductsSlideTest] = useState(false);
   const [OpenProductsInCategorySlideTest, setOpenProductsInCategorySlideTest] = useState(false);
  
   const [titleV, settitleV] = useState();
  const [titleCategoryProduct, settitleCategoryProduct] = useState();
   
  const [UserData, SetUserData] = useState();
   const [Product, setProduct] = useState([]);
   const [category, setCategory] = useState();
   const [Slides, setSlides] = useState();
   const [count, SetCount] = useState();

   const [ProductCategory, setProductCategory] = useState();

   let full = false;

  const cookies = new Cookies();
  
   
   async function getProductSlides() {
   await axios.get(`http://127.0.0.1:8000/api/DashBoard/ProductSlides/view`)
       .then(res => {
           setSlides(res.data);
          SetCount(3 - res.data.length);
     });
     
}

   useEffect(() => {
      getProductSlides();
     User();
     ProductList();
      getCategory();
   },[])
   useEffect(() => {
      if (ApprovedSelect.length > 0) {
         document.getElementById('testbtn').classList.add("text-[#EA676C]", "border-[#EA676C]","cursor-pointer");
         document.getElementById('testbtn').classList.remove("text-gray-300", "border-gray-300","cursor-default");
       } else {
         document.getElementById('testbtn').classList.remove("text-[#EA676C]", "border-[#EA676C]","cursor-pointer");
         document.getElementById('testbtn').classList.add("text-gray-300", "border-gray-300","cursor-default");
      }
  
    },[ApprovedSelect])
  
   
    useEffect(() => {
      if (ApprovedInCategorySelect.length > 0) {
         document.getElementById('testCategoryProductbtn').classList.add("text-[#EA676C]", "border-[#EA676C]","cursor-pointer");
         document.getElementById('testCategoryProductbtn').classList.remove("text-gray-300", "border-gray-300","cursor-default");
       } else {
         document.getElementById('testCategoryProductbtn').classList.remove("text-[#EA676C]", "border-[#EA676C]","cursor-pointer");
         document.getElementById('testCategoryProductbtn').classList.add("text-gray-300", "border-gray-300","cursor-default");
      }
  
    },[ApprovedInCategorySelect])
   async function ProductList() {
      var user = {
         token: cookies.get('token'),
     };
      await axios.post(`http://127.0.0.1:8000/api/DashBoard/Product`,user)
         .then(res => {
           
            if (full== false) {
          
               for (let i = 0; i < res.data.length; i++) {
                  dispatch(addToBasket(res.data[i]));
               }
    
               setProduct(res.data);
               full = true;
            }
            })
 

 }
  async function User() {
    let Token = {
      token:cookies.get('token'),
    }
    await axios.post(`http://127.0.0.1:8000/api/User`, Token)
  .then(res => { 
    SetUserData(res.data.name);

  });
    }

 function Testbtn(){
 if (ApprovedSelect.length > 0) {
      setOpenProductsSlideTest(true);
    }
 }
 
 
async function Savebtn(){
   if (ApprovedSelect.length > 0) {
      settitleV(document.getElementById('title').value);
   }
   console.log(ApprovedSelect, "appro");
   
    let Data = {
       "title": titleV,
       "Products": ApprovedSelect,
    };
    await axios.post(`http://127.0.0.1:8000/api/DashBoard/ProductSlide/add`, Data)
       .then(res => {
         document.getElementById('SuccessProductMessage').classList.remove("hidden");
         setTimeout(() => {
         window.location.reload();
           
         }, 500);
         
           console.log(res.data, "adf");
        });
   }

   function TestCategoryProductsbtn(){
      if (ApprovedInCategorySelect.length > 0) {
         setOpenProductsInCategorySlideTest(true);
         }
      }
   
   
   async function SaveCategoryProductsbtn() {
      let select = document.getElementById('category');
      let value = select.options[select.selectedIndex].value;
  


        
         console.log(ApprovedInCategorySelect, "appro");
         
          let Data = {
             "title": value,
             "Products": ApprovedInCategorySelect,
          };
          await axios.post(`http://127.0.0.1:8000/api/DashBoard/ProductSlide/add`, Data)
             .then(res => {
               document.getElementById('SuccessCategoryMessage').classList.remove("hidden");
               setTimeout(() => {
               window.location.reload();
                 
               }, 500);
                 console.log(res.data, "adf");
              });
         }
   function changeShow(){
      let select = document.getElementById('type');
      let value = select.options[select.selectedIndex].value;
      Setview(value);
   }


   async function getCategory() {



      await axios.get(`http://127.0.0.1:8000/api/DashBoard/Category`)
        .then(res => {
           setCategory(res.data.Data);
      
        });
        
   }
   async function changeCategory() {
      let select = document.getElementById('category');
      let value = select.options[select.selectedIndex].value;
      settitleCategoryProduct(value);
      if (!value == "") {
         setTheresCategory(true);
      }
      let Data = {
         "name": value,
      };
      await axios.post(`http://127.0.0.1:8000/api/DashBoard/Category/getproducts`,Data)
         .then(res => {
            console.log(res.data);
            dispatch(emptyProductInCategory());
            for (let i = 0; i < res.data.length; i++) {
               dispatch(addProductInCategory(res.data[i]));
            }
            setProductCategory(res.data);
      });
   }
   function changeSize() {
      let select = document.getElementById('size');
      let value = select.options[select.selectedIndex].value;
      setHowMuch(value);

      if (value == "all") {
         dispatch(emptyFromApprovedProducts());
         for (let i = 0; i < ProductCategory.length; i++) {
            dispatch(AddToApprovedProducts(ProductCategory[i]));
            if (i == 14) {
               break;
            }
         }
         dispatch(emptyProductInCategory());
      } else if (value == "limited") {
         dispatch(emptyFromApprovedProducts());
         dispatch(emptyProductInCategory());
         for (let i = 0; i < ProductCategory.length; i++) {
            dispatch(addProductInCategory(ProductCategory[i]));
         }
      }
   }

  

   function textChange() {

      settitleV(document.getElementById('title').value);

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
     <div className='w-full h-full'  >
        <ProductsInCategorySlideTest open={OpenProductsInCategorySlideTest} setOpen={setOpenProductsInCategorySlideTest} ApprovedProduct={ApprovedInCategorySelect} title={titleCategoryProduct} />
        <ProductsSlideTest open={OpenProductsSlideTest} setOpen={setOpenProductsSlideTest} ApprovedProduct={ApprovedSelect} title={titleV} />
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
           <div className='w-3/4 h-full flex-col '>{console.log(count<4?"flex":"hidden","here")}
              <p className={`${count<4?"hidden":"flex"} text-center mt-10 text-red-600`}>الرجاء حذف بعض شرائح المنتجات لادخال شريحة</p>
              <div className={`${count<4?"flex":"hidden"} w-full h-full  flex-col items-center justify-center`}>
                 <p className='mt-4'>يمكنك ادخال ( {count} ) شرائح</p>
                     <div className='flex flex-col  w-3/4'>
                    <label dir='rtl' for="type" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >ما الذي تريد أن تعرضه :</label>
                    <select id='type' dir='rtl' className='w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 font-Somar-Regular  text-xl outline-none'onChange={()=>changeShow()}>
                            <option  value="" selected disabled hidden>إختر ما تريد عرضه...</option>
                                 <option  value="category">مجموعة</option>
                                 <option  value="products">منتجات</option>
                        </select>
                 </div>
                 {/* category */} 
                 <div className={`${view=="category"?"flex":"hidden"}   flex-col mt-5 justify-center items-center w-3/4`}>
                 <label dir='rtl' for="type" className=' w-full  text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >إختر المجموعة التي تريد عرض منتجاتها</label>
                    
                    <select id='category' dir='rtl' className='w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 font-Somar-Regular  text-xl outline-none'onChange={()=>changeCategory()}>
                            <option  value="" selected disabled hidden>إختر المجموعة...</option>
                            {category?.map(({id,name}) => (
                             
                             <option key={id} value={name}>{name}</option>
                        )
                         )}
                    </select>
             
                    <div className={`${theresCategory==true?"flex":"hidden"} w-full  flex-col`}>
                    <label dir='rtl' for="type" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >كم من منتج تريد ان يعرض </label>
                    
                    <select id='size' dir='rtl' className='w-full text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 font-Somar-Regular  text-xl outline-none'onChange={()=>changeSize()}>
                            <option  value="" selected disabled hidden>...</option>
                            <option  value="all">عرض كل المنتجات التي في الفئة </option>
                            <option  value="limited">عرض منتجات محددة من الفئة</option>

                    </select>
                   
                    <label dir='rtl'  className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >المنتجات</label>
                     <p className=' w-full  text-lg ml-[-0.5rem] text-right font-Somar-Medium text-red-500'>اضغط على المنتج ليتم اضافته</p>
                    <div className='w-full  h-[20rem] flex  overflow-x-scroll border-2' >
                     
                    {ProductInCategorySelect?.map(({id,image , name,description,price,category_id}) => (
                             
                       <ShowProductInCategory1 product={ProductInCategorySelect} id={id} image={`http://127.0.0.1:8000${image}`} name={name} description={description} price={price} category={category_id} style={"flex-[0_0_30%]"} />
                        )
                         )}
                    </div>

                    <label dir='rtl'  className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  > المنتجات التي تم قبول عرضها</label>
                    <p className=' w-full  text-lg ml-[-0.5rem] text-right font-Somar-Medium text-red-500'>اضغط على المنتج ليتم ازالته</p>

                    <div className='w-full  h-[20rem] flex  overflow-x-scroll border-2' >
                       {console.log(ApprovedInCategorySelect,"as")}
                       {ApprovedInCategorySelect?.map(({id,image , name,description,price,category_id}) => (
                             
                             <ShowProductInCategory2 ApprovedProduct={ApprovedInCategorySelect} id={id} image={`http://127.0.0.1:8000${image}`} name={name} description={description} price={price} category={category_id} style={"flex-[0_0_30%]"} />
                              )
                               )}
                    </div>
                    <span id ="SuccessCategoryMessage" className='text-sm mt-5 text-green-400 font-semibold hidden'>تم التعديل بنجاح</span>
                    
                    <div className='w-full mt-2 mb-2 flex justify-between'>
              <button id='testCategoryProductbtn' className='border-4 border-gray-300 bg-white rounded-lg py-[3px] font-bold text-2xl w-1/5 sm:w-1/5 text-gray-300 mt-5 font-Somar-Bold cursor-default' onClick={()=>TestCategoryProductsbtn()}>تجريب</button> 
                    
                     <button className=' px-12 mt-5 rounded-lg bg-[#035AA7] text-white font-semibold cursor-pointer font-Somar-Bold text-xl' onClick={()=>SaveCategoryProductsbtn()}>حفظ </button>
                       </div>
                       </div>
                 </div>
                 {/* Products */}
                 <div className={`${view=="products"?"flex":"hidden"}  flex-col w-full justify-center items-center`}>
                      <div className='flex flex-col  w-3/4'>
                            <label for="title" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >عنوان القسم المراد عرضه</label>
                            <input required id="title" type="text" className='text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  ' name="title" onChange={()=>textChange()}/>
                      </div>
            <p dir='rtl' className='w-3/4 mt-5 mb-1 font-Somar-Black text-xl'>المنتجات التي تمتلكها</p>
            <div className='w-3/4  h-[20rem] flex  overflow-x-scroll border-2' >
     
                
                {ProductSelect?.map(({id,image , name,description,price,category_id},index) => (
                             
                    <ProductShower1  Product={ProductSelect}  index={index} id={id} image={`http://127.0.0.1:8000${image}`} name={name} description={description} price={price} category={category_id} className="block" />
                  
                        )
                         )}

            
                 </div>

            <p dir='rtl' className='w-3/4 mt-5 mb-1 font-Somar-Black text-xl'>المنتجات التي تريد عرضها </p>

                 <div className='w-3/4 mt-5 h-[20rem] flex  overflow-x-scroll border-2' >
     
     {console.log(ApprovedSelect)}
        {/* <div className='h-[20rem]'>sadf</div>
        <div className='h-[20rem]'>sadf</div>
        <div className='h-[20rem]'>sadf</div>
        <div className='h-[20rem]'>sadf</div> */}
        
        {ApprovedSelect?.map(({id,image , name,description,price,category_id},index) => (
                     
            <ProductShower2  Product={ProductSelect} ApprovedProduct={ApprovedSelect}  index={index} id={id} image={`http://127.0.0.1:8000${image}`} name={name} description={description} price={price} category={category_id} className="block" />
          
                )
                 )}

    
                 </div>
                 <span id ="SuccessProductMessage" className='text-sm mt-5 text-green-400 font-semibold hidden'>تم التعديل بنجاح</span>
                 
                 <div className='w-3/4 mt-10 flex justify-between'>
              <button id='testbtn' className='border-4 border-gray-300 bg-white rounded-lg py-[3px] font-bold text-2xl w-1/5 sm:w-1/5 text-gray-300 mt-5 font-Somar-Bold cursor-default' onClick={()=>Testbtn()}>تجريب</button> 
                    
                     <button className=' px-12 mt-5 rounded-lg bg-[#035AA7] text-white font-semibold cursor-pointer font-Somar-Bold text-xl' onClick={()=>Savebtn()}>حفظ </button>
                 </div>
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
                           <Link to="/DashBoard/Sections/Slides/View" className='my-1'>عرض الشرائح</Link>
                          <Link to="/DashBoard/Sections/Slides" className='my-1'>إضافة شرائح صور</Link>
                          <Link to="/DashBoard/Sections/Products">إضافة شرائح منتجات</Link>
                     </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الشحن</h1>
                                 <img src={delivery} className="ml-5" />  
                              </div>
                              <div className='cursor-pointer flex items-center justify-end mr-2 mt-32'  onClick={()=>SignOut()}>
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

export default ProductSection