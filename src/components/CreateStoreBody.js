import React, { useEffect, useState } from 'react'
import Logo from "../images/Logo.svg";
import SmallCover from "../images/SmallCover.svg";
import CreateStoreImg from "../images/CreateStoreImg.svg";
import Text from "../images/Text.png";
import SuccessCover from "../images/SuccessCover.svg";
import Wire from "../images/Wire.svg";
import SuccessImg from "../images/SuccessImg.svg";
import Drawer from "../images/Drawer.svg";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import CreateStoreBottomCover from "../images/CreateStoreBottomCover.svg";
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css';
import PhoneInput, { formatPhoneNumber, getCountryCallingCode ,isPossiblePhoneNumber,isValidPhoneNumber } from 'react-phone-number-input';


function CreateStoreBody() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();


  let Content = {
    "name": "",
    "email": "",
    'password': "",
    "entity_type": "",
    "phone": "",
    "coupon":"",
  };
  const [value, setValue] = useState("");
  var allowPhoneNumber = "";
  var codeCountry;
  var phoneNumber;

  function PhoneBox() {
    document.getElementsByClassName('PhoneInputInput')[0].classList.add("focus:outline-none");
  }

  function StoreName(e){
    if (e.target.value.length > 0) {
      if (!document.getElementById("NameMessage").classList.contains("hidden")) {
        document.getElementById("NameMessage").classList.add("hidden");
        }
    }
    
  }

  function StoreEmail(e){
    if (e.target.value.length > 0) {
      if (!document.getElementById("emailMessage").classList.contains("hidden")) {
        document.getElementById("emailMessage").classList.add("hidden");
        }
    }
  }

  function StorePhone(e) {

    setValue(document.getElementById('phone').value);
    if (!document.getElementById('phone').value == "") {
      if (!document.getElementById("phoneMessage").classList.contains("hidden")) {
        document.getElementById("phoneMessage").classList.add("hidden");
      }
    }


  }

  function StorePassword(e) {
    if (e.target.value.length > 0) {
      if (!document.getElementById("passwordMessage").classList.contains("hidden")) {
        document.getElementById("passwordMessage").classList.add("hidden");
      }
    }
  }
  function StoreType(e){
    if (e.target.value.length > 0) {
      if (!document.getElementById("typeMessage").classList.contains("hidden")) {
        document.getElementById("typeMessage").classList.add("hidden");
        }
    }

  }

  function formValdition() {
    Content = {
      "name": document.getElementById("name").value, "entity_type": document.getElementById("Type").value, "email": document.getElementById("email").value
      , "password": document.getElementById("password").value, 'phone': allowPhoneNumber, 'coupon': document.getElementById("coupon").value
    };
    if (Content.email === "") {
      document.getElementById('emailMessage').textContent = "الرجاء ادخال البريد الالكتروني";
      document.getElementById("emailMessage").classList.remove("hidden");
    } else {
      validateEmail()

    }
    if (Content.password === "") {
      document.getElementById("passwordMessage").classList.remove("hidden");
      document.getElementById('passwordMessage').textContent = "الرجاء ادخال كلمة المرور";
  
    } else if (Content.password.length < 9) {
      if (document.getElementById("passwordMessage").classList.contains("hidden")) {
        document.getElementById("passwordMessage").classList.remove("hidden");
        document.getElementById('passwordMessage').textContent = "يجب ان تكون كلمة مرور بين 8-15 محرف";
  
      }
    }
  
    if (Content.entity_type === "") {
      document.getElementById("typeMessage").classList.remove("hidden");
    }
  
    if (Content.name === "") {
      document.getElementById("NameMessage").classList.remove("hidden");
    }
  }
  function PhoneValdition() {
    
       allowPhoneNumber = "";
       codeCountry = "+" + getCountryCallingCode(document.getElementsByClassName('PhoneInputCountrySelect')[0].value);
       phoneNumber = document.getElementById('phone').value;

      if (!phoneNumber == "") {
        if (phoneNumber.includes("+")) {
          phoneNumber = formatPhoneNumber(phoneNumber);
        }
        if (isPossiblePhoneNumber(codeCountry + phoneNumber) && isValidPhoneNumber(codeCountry + phoneNumber)) {
     
          allowPhoneNumber = codeCountry + phoneNumber;
        } else {
          if (document.getElementById("phoneMessage").classList.contains("hidden")) {
            document.getElementById("phoneMessage").classList.remove("hidden");
          }
          document.getElementById('phoneMessage').textContent = "رقم الهاتف غير صحيح او غير صالح";
        }
        console.log(phoneNumber);
        console.log(codeCountry + phoneNumber);
        console.log(isPossiblePhoneNumber(codeCountry + phoneNumber));
        console.log(isValidPhoneNumber(codeCountry + phoneNumber));
      } else {
         if (document.getElementById("phoneMessage").classList.contains("hidden")) {
            document.getElementById("phoneMessage").classList.remove("hidden");
          }
          document.getElementById('phoneMessage').textContent = "الرجاء ادخال رقم الهاتف";
      }


    
  }
  
  
    function validateEmail() {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (document.getElementById('email').value.match(mailformat))
      {
        return true;
      } else {
        document.getElementById('emailMessage').textContent = "لقد ادخلت بريد الكتروني غير صحيح";
        document.getElementById('emailMessage').classList.remove("hidden");
        return false;
      };
  }

  async function succeed(e) {
    e.preventDefault();
    try {
      PhoneValdition();
    } catch {
     
      
      if (document.getElementById("phoneMessage").classList.contains("hidden")) {
        document.getElementById("phoneMessage").classList.remove("hidden");
      }
      document.getElementById('phoneMessage').textContent = "الرجاء ادخال رقم الهاتف و البلد";
      PhoneValdition();
      formValdition();
    }
    formValdition();



  
    

    if (document.getElementById("NameMessage").classList.contains("hidden") &&
      document.getElementById("emailMessage").classList.contains("hidden") &&
      document.getElementById("phoneMessage").classList.contains("hidden") &&
      document.getElementById("passwordMessage").classList.contains("hidden") &&
      document.getElementById("typeMessage").classList.contains("hidden")) {
      ////////
      
      document.getElementById("container2").classList.add("z-[-1]");
      document.getElementById("BasedivHeader").classList.add("relative", "z-[-1]");

      
      
      
          document.getElementById("body").classList.add("fixed");

          document.getElementById("success").classList.remove("hidden");
           document.getElementById("img1").classList.add("z-[-1]");
          document.getElementById("DropImg").classList.add("animate-TranslateImg");

          document.getElementById("successCover").classList.add("animate-SpinImg");
       
    
      console.log(Content);

         await  axios.post(`http://127.0.0.1:8000/api/rigester`,Content)
          .then(res => {
            console.log(res);
          })
        
    }
   }
 
    const listenScrollEvent = () => {
       if(window.scrollY > 10)
             {
           document.getElementById("img1").classList.add("animate-pulseFixed");
           document.getElementById("img2").classList.add("animate-pulseFixedimg");
           
           document.getElementById("img1").classList.add("ml-14", "w-2/4", "h-3/4", "fixed", "bottom-4" );
           document.getElementById("img2").classList.add("w-1/6", "fixed" , "bottom-[17.5rem]" ,"ml-24");
           
            }else{console.log("bb")}
           
      }
    
      useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
      })
    
    
      function drawer() {
        document.getElementById('header').classList.add = "hidden lg:block";
        if (document.getElementById('drawerBody').classList.contains("animate-WaveAnimateBack")) {
        document.getElementById('drawerBody').classList.remove("animate-WaveAnimateBack");
        }else{
            document.getElementById('drawerBody').classList.remove("hidden");
        }
        document.getElementById('drawerBody').classList.add("flex","fixed","h-screen","w-full","bg-transparent","top-0","left-0","lg:hidden","z-10");
        document.getElementById("drawerBody").classList.add("animate-WaveAnimate");
        if (document.getElementById('drawerbtn').classList.contains("animate-WordOpacity")) {
            document.getElementById('drawerbtn').classList.remove("animate-WordOpacity")
        }
        document.getElementById('drawerbtn').classList.add("animate-ImgOpacity");
    
    
      }
      function closeDrawer() {
        document.getElementById('header').style = "display:flex";
          document.getElementById('drawerBody').classList.add("animate-WaveAnimateBack");
          if (document.getElementById('drawerBody').classList.contains("animate-WaveAnimate")) {
            document.getElementById('drawerBody').classList.remove("animate-WaveAnimate");
          }
          if (document.getElementById('drawerbtn').classList.contains("animate-ImgOpacity")) {
            document.getElementById('drawerbtn').classList.remove("animate-ImgOpacity")
        }
            document.getElementById('drawerbtn').classList.add("animate-WordOpacity");
    
  }
  
 
  
    return (
        <div id="body" className=" w-full h-full ">
            
            <div className=" w-full h-full ">
                <div className='relative flex justify-start z-10'>
            <img src={SmallCover} className="absolute w-4/5 h-fit z-0" />

                    <div className='relative z-10 flex flex-col w-full h-full  '>
                        {/* Success Sign */}
                        <div id="success" className=' w-full h-full  fixed z-2 hidden'>
                        <div className='w-full h-full bg-black opacity-60 fixed '/>

                        <div id="DropImg" className='h-full w-full flex flex-col items-center opacity-100 absolute translate-y-[-700px]'>
                                <img src={Wire} className="w-1/4 h-1/4 " />
                                <div id="successCover" className='w-full h-full flex flex-col items-center'>
                                    <img  src={SuccessCover} className=" w-64 h-2/12  opacity-100 mr-1 mt-[-5px]" />
                                    <div className='absolute w-full h-full grid grid-cols-4'>
                                        <div className='grid grid-cols-1 col-start-2 col-end-4 '>
                                            <div className='flex flex-col items-center  '>
                                                <img src={Logo} className="absolute w-28 h-28 " />
                                                <img src={SuccessImg} className="absolute w-28 h-28 mt-24 " />
                                                <div className='mt-56 text-center w-fit  relative z-20'>
                                                <h1 className=' text-lg font-bold'>تم إنشاء متجرك بنجاح </h1>
                                                <p className='text-sm'>سعداء لإنضمام لمنصة بسيط </p>
                                                <p className='text-sm mb-5'>يمكنك الآن تسجيل الدخول إلى متجرك </p>
                                                   <Link to="/SignIn" className='w-7/12 h-1/12 py-1 px-2 cursor-pointer border-2 mt-5 text-[#EA676C] border-[#EA676C] rounded-lg font-semibold  '>تسجيل الدخول</Link> 
                                                </div>
                                            </div>
                                        </div>
                                   
                                    </div>
                                    
                               </div>
                            </div>
                        </div>
            <div  id="header" className=' flex justify-evenly '>
                <div className='hidden w-full mt-2 justify-center  lg:flex text-[#035AA7] font-semibold'>
                    <Link to="/SignIn" className='m-3 font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                    <Link to="" className='m-3 font-Somar-Bold text-2xl'>تجربة المنصة</Link>
                    <Link to="/Blog" className='m-3 font-Somar-Bold text-2xl'>المدونة</Link>
                    <Link to="/Packages" className='m-3 font-Somar-Bold text-2xl'>الأسعار</Link>
                    <div id="BasedivHeader" className=' rounded-lg h-fit w-fit flex justify-center items-center '>
                                <Link to="/" className=' relative px-2 py-1 m-2 group overflow-hidden z-0 cursor-pointer'>
                                <span class="absolute z-1 bottom-0 left-0  w-0 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-b-2 group-hover:border-l-2 border-red-600 opacity-90 "></span>
                                 <span class="absolute z-1 top-0 left-0  w-0 h-0 mb-0 transition-all duration-700 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-t-2   border-red-600 opacity-90 "></span>
                                 <span class="absolute z-1 top-0 right-0  w-0 h-0 mb-0 transition-all duration-700 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-r-2  border-red-600 opacity-90 "></span>            
                                <span className='relative group-hover:text-[#EA676C] font-Somar-Bold text-2xl'>الرئيسية</span>  
                                    </Link>
                                    </div>
                </div>
                <div className='flex h-100 w-1/3 p-2 lg:hidden'>
                    <img id="drawerbtn" src={Drawer} className='text-white text-4xl m-2 mt-0 cursor-pointer w-10 h-20' onClick={()=>drawer()} />
                </div>
                <div className='w-full flex justify-end'>
                    <img src={Logo} className="w-1/6 h-fit mt-8 mr-5 lg:mr-20" />
                </div>
              </div>
                        {/* */}
   
              <div className=' w-full h-full flex '>

                      <div  id="imgdiv1" className='hidden h-full w-full lg:flex justify-center   '>
                          <img id="img1" src={CreateStoreImg} className="ml-20 w-[60%]  h-3/4   " />
                          <div id="imgdiv2" className=' w-1/6 mt-20  h-1/4  fixed  '>
                            <img id="img2" src={Text} className="ml-14 mb-[-1rem]  z-1  " />
                          </div>
                    </div>
                   
                <div id="container2" className='relative w-full h-full mt-10 flex '>
     
                  <div className='relative text-center flex flex-col justify-center w-full items-center ml-5 '>
                  <img src={CreateStoreBottomCover} className="absolute bottom-0 right-0 w-[30%]" />
                                    <h1 id="sgin" className='w-full text-[#035AA7] text-4xl text-center  mt-10 font-Somar-Black font-bold'>يا أهلاً بك في عالم التجارة الالكترونية </h1>
                                    <p className=' text-4xl text-center font-Somar-Black text-[#EA676C] mt-2 font-bold'>أنشئ متجرك </p>
                              <form className='flex flex-col h-full w-3/4 mt-10 text-[#183C6C]'>
                                  <div className='flex flex-col '>
                                      <label for="StoreName" className='text-lg mr-2 text-right mb-2 font-Somar-Medium '  >اسم المتجر</label>
                                      <input required id="name" type="text" className='text-right text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 ' name="name" onChange={(e)=>StoreName(e)}/>
                                      <span id ="NameMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال اسم لمتجرك</span>
                        
                                  </div>
                                  <div className='flex flex-col mt-5'>
                                      <label for="Type" className='text-lg mr-2  text-right mb-2  font-Somar-Medium'  >نوع الكيان</label>
                                      <input id="Type" required type="text"  className=' text-right text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 ' name="Type" onChange={(e)=>StoreType(e)}/>
                                      <label id="typeMessage" for="Type" className='text-right text-sm text-red-600 font-semibold hidden'>حدد نوع الكيان الخاص بك</label>
                                  </div>
                                  <div className='flex flex-col mt-5'>
                        <label for="Telehpone" className='text-lg mr-2  text-right mb-2 font-Somar-Medium'  >رقم الجوال</label>
                        <PhoneInput
                          id="phone"
                          className=' text-left text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-5 pr-2 py-1.5 '
                          placeholder="Enter phone number"
                          value={value}
                          onChange={(e)=>StorePhone(e)}
                          onFocus={()=>PhoneBox() } />
                        <span id="phoneMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال رقم الهاتف</span>
                      
  

                                  </div>
                                  <div className='flex flex-col mt-5'>
                                      <label for="Email" className='text-lg mr-2  text-right mb-2 font-Somar-Medium'  >البريد الالكتروني</label>
                                      <input required id="email" type="email" className=' text-right text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 ' name="email" onChange={(e)=>StoreEmail(e)}/>
                                      <span id ="emailMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال البريد الالكتروني</span>
                        
                                  </div>
                                  <div className='flex flex-col mt-5'>
                                      <label for="Password" className='text-lg mr-2  text-right mb-2 font-Somar-Medium'  >كلمة المرور</label>
                                      <input required id="password" type="password" className=' text-right text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 ' name="password" onChange={(e)=>StorePassword(e)}/>
                                      <span id ="passwordMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال كلمة المرور</span>
                        
                                  </div>
                                  <div className='flex flex-col mt-5'>
                                      <label for="Copoun" className='text-lg mr-2  text-right mb-2 text-[#035AA7] font-Somar-Medium'  >لديك كوبون دعوة</label>
                                     <input id="coupon" type="text"   className=' text-right text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 ' name="coupon"/>
                                  </div>
                                 
                          <button  className='border-4 border-[#EA676C] bg-white rounded-lg  py-1.5  font-bold text-2xl w-2/3 sm:w-1/3 text-[#EA676C] m-auto mt-5 font-Somar-Bold' onClick={(e)=>succeed(e)} >إنشاء المتجر</button>
                          <div className='w-2/3 m-auto  flex flex-col mt-8  text-right font-Somar-Bold text-xl'>
                                    <p dir="rtl" lang="ar" className='leading-relaxed text-center font-Somar-Bold'>بالتسجيل فأنا أوافق على <Link to="/PrivacyOfUse" target="_blank" className='text-[#EA676C] text-lg cursor-pointer font-Somar-Bold'>اتفاقية الاستخدام</Link> و <Link to="/PrivacyPolicy" target="_blank" className='text-[#EA676C] text-lg cursor-pointer font-Somar-Bold'>سياسة الخصوصية</Link>  </p>
                                     <p className='text-center leading-relaxed mb-10'>و <span className='text-[#EA676C] text-lg cursor-pointer font-Somar-Bold'>سياسة البيع على منصة بسيط</span></p>  
                            </div>
                    </form>
                  
               
                            </div>
                        </div>
               
                  </div>
              </div>
          </div>
            </div>
            
              {/* Drawer */}
              <div  id="drawerBody" className=' hidden  '>
        <div id="drawer" className=' w-full bg-[#035AA7] h-full md:w-1/2'>
          <div className='p-4'>
            <AiOutlineClose className='text-xl text-white cursor-pointer ' onClick={() => closeDrawer()}/>
          </div>
          <div className='flex flex-col justify-center w-full ml-20  h-4/5 text-white '>
            {/* border-b-2 border-[#847244] */}
            <div className='mb-4 cursor-pointer flex justify-center  text-xl  p-2 md:w-1/2 w-3/4'>
              <Link to="/">الرئيسية </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 '>
            <Link to="">الأسعار </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to='/Blog'>المدونة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to=" ">تجربة المنصة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
            <Link to="/Contact">أنشئ متجرك </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/">تسجيل الدخول </Link>
            </div>
            <div>
            
            </div>
          </div>
        </div>
        <div className='hidden sm:block h-full w-full bg-black opacity-40'/>
    </div>
</div>
        
     

  )
}

export default CreateStoreBody