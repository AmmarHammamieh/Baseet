import React, {useState} from 'react'
import Cover from "../images/Cover.svg";
import Logo from "../images/Logo.svg";
import RememberImage from "../images/RememberImg.svg";
import DontWorry from "../images/DontWorry.svg";
import RememberMe from "../images/RememberMe.svg";
import Drawer from "../images/Drawer.svg";
import SignInCover from "../images/SignInCover.svg";
import SignBottomCover from "../images/SignBottomCover.svg";
import ResetPasswordSign from "../images/ResetPasswordSign.svg";


import { Link } from 'react-router-dom';
import { AiOutlineClose} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import Cookies from 'universal-cookie';
function ResetPassword() {

  let email = {
    "email":"",
  }
  const cookies = new Cookies();
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
  

  function passwordInsert(e) {
 
      if (e.target.value.length > 0) {
        if (!document.getElementById("passwordMessage").classList.contains("hidden")) {
          document.getElementById("passwordMessage").classList.add("hidden");
          }
      }
  }
  async function Send(e) {

    e.preventDefault();
    if (document.getElementById('password').value == "") {
      document.getElementById("passwordMessage").classList.remove("hidden");
      document.getElementById('passwordMessage').textContent = "الرجاء ادخال كلمة المرور";
    }
     
    if (document.getElementById("passwordMessage").classList.contains("hidden")) {
      let token = getUrlVar();
     
      let key = { "token": token, "password": document.getElementById("password").value };
      document.getElementById("send").textContent = "...انتظار";
      document.getElementById("send").classList.add("text-white", "bg-blue-400", "border-blue-200", "cursor-default");
      document.getElementById("send").setAttribute("disabled", "");
      document.getElementById("password").setAttribute("disabled", "");
      await axios.post(`http://127.0.0.1:8000/api/Reset`, key)
        .then(res => {
          
          document.getElementById("send").textContent = "تم";
          document.getElementById("passwordMessage").classList.add("text-green-500");
          document.getElementById("passwordMessage").classList.add("text-center");
          document.getElementById("passwordMessage").classList.remove("hidden", "text-right");
          document.getElementById('passwordMessage').textContent = res.data.message;
          cookies.remove('token__to__Reset', { path: '/'  });

        })
 
    }
      
  }


  function getUrlVar() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let value = params.token;
      return value;
  }
  return (
    <div className='relative w-full h-full justify-start lg:fixed'>
          <img src={SignBottomCover} className="absolute bottom-0 right-0 w-3/4 h-fit" />
      
            <div className='bg-hero lg:bg-none bg-center relative flex justify-start'>
                <img src={SignInCover} className="hidden lg:block absolute w-4/5 h-fit" />
                <div className=' relative flex flex-col w-full h-full  '>
                    <div id="header" className='flex justify-evenly '>
                        <div className='hidden w-full mt-2 justify-center lg:flex text-[#035AA7] font-semibold'>
                        <Link to="/SignIn" className='m-3 font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                        <Link to="/Info" className='m-3 font-Somar-Bold text-2xl'>تجربة المنصة</Link>
                        <Link to="/Blog" className='m-3 font-Somar-Bold text-2xl'>المدونة</Link>
                        <Link to="/Packages" className='m-3 font-Somar-Bold text-2xl'>الأسعار</Link>
                        <div className=' rounded-lg h-fit w-fit flex justify-center items-center '>
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
                            <img src={Logo} className="w-1/6 h-fit mt-4 mr-5 lg:mr-32" />
                        </div>
                  </div>
              
          {/*  */}
          <div className='w-full flex flex-col lg:flex-row z-0 mt-10'>
            <div className='h-full w-full flex-col lg:flex justify-center items-center  lg:justify-start lg:items-stretch'>
            <img src={ResetPasswordSign} className="lg:hidden mb-5 w-1/2 h-3/4  mx-auto" />
              <img src={RememberMe} className="w-3/4 mb-20 h-3/4 lg:mt-[-1rem] mx-auto" />
              
                   </div>
                      <div className='w-full h-full lg:mt-2 flex  px-6 pb-10'>
              <div className='text-center flex flex-col justify-center w-full items-center ml-5 '>
                
                         <form name='Emailform' className='flex flex-col h-full w-full lg:w-[65%] mt-5 text-[#035AA7]' onSubmit={() => Send()}>
                                   <h1 className='w-full text-[#035AA7] text-5xl text-center font-bold font-Somar-Black'> تغيير كلمة المرور </h1>
                  
                                     <input name="password" id="password" type="password" placeholder='كلمة المرور'  className=' text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 mt-5 font-Somar-Regular placeholder-[#183C6C] text-xl outline-none'onChange={(e) => passwordInsert(e)} />
                                      <span id ="passwordMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال كلمة المرور</span>
                                  
                                  
                                  
                                  <div className='flex flex-col items-center justify-center mt-4 pr-2 pl-2 font-semibold'>
                                  <button id='send' type='submit' onClick={(e)=>Send(e)} className='border-4 border-[#035AA7] bg-[#035AA7] rounded-lg  py-1.5  font-bold text-2xl w-fit px-2 text-white font-Somar-Black'>تغيير كلمة المرور</button>
                                    <a className='mt-5 font-Somar-Bold text-xl'>ليس لديك حساب متجر</a>
                                  </div>
                                  <div className='w-full flex flex-col mt-4 '>
                                     <Link to="/SignIn" className=' w-full border-4 border-[#EA676C] pr-2 py-1.5 rounded-lg text-[#EA676C] font-bold font-Somar-Black text-2xl' >تسجيل الدخول</Link>
                                    <Link to="/CreateStoreBody" className='w-full border-4 border-[#EA676C] pr-2 py-1.5 rounded-lg text-white bg-[#EA676C] font-bold mt-3 font-Somar-Black text-2xl'>إنشاء متجر جديد</Link>
                                 </div>
                                </form>
                            </div>
                        </div>
                     
                      </div>
          </div>
      </div>

          {/* drawer */}
          <div  id="drawerBody" className=' hidden  '>
        <div id="drawer" className=' w-full bg-[#035AA7] h-full md:w-1/2'>
          <div className='p-4'>
            <AiOutlineClose className='text-xl text-white cursor-pointer ' onClick={() => closeDrawer()}/>
          </div>
          <div className='flex flex-col justify-center w-full ml-20  h-4/5 text-white '>
            {/* border-b-2 border-[#847244] */}
            <div className='mb-4 cursor-pointer flex justify-center  text-xl  p-2 md:w-1/2 w-3/4'>
              <Link to="/" className='font-Somar-Bold text-2xl'>الرئيسية </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 '>
            <Link to="/Packages"  className='font-Somar-Bold text-2xl'>الأسعار </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to='/Blog' className='font-Somar-Bold text-2xl'>المدونة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/Info" className='font-Somar-Bold text-2xl'>تجربة المنصة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
            <Link to="/CreateStoreBody" className='font-Somar-Bold text-2xl'>أنشئ متجرك </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/SignIn" className='font-Somar-Bold text-2xl'>تسجيل الدخول </Link>
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

export default ResetPassword;