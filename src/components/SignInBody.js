import React, {useEffect, useState} from 'react'
import SignIn from "../images/SignIn.svg";
import Cover from "../images/Cover.svg";
import Logo from "../images/Logo.svg";
import Key from "../images/Key.svg";
import TwoStars from "../images/TwoStars.svg";
import FourStars from "../images/FourStars.svg";
import Drawer from "../images/Drawer.svg";
import SignBottomCover from "../images/SignBottomCover.svg";
import SignInCover from "../images/SignInCover.svg";
import FullSignInImage from "../images/FullSignInImage.svg";
import SignInSign from "../images/SignInSign.svg";


import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../GlobalData/UserSlice";
import Cookies from 'universal-cookie';




function SignInBody() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  const cookies = new Cookies();

  
    const [StarsImage, setStarsImage] = useState(" ");
    let Content = {
      "email": "",
      'password': "",
  };



  
  function formValdition() {
    Content = { "email": document.getElementById("email").value, "password": document.getElementById("password").value };
    if (Content.email === "") {
      document.getElementById('emailMessage').textContent = "الرجاء ادخال البريد الالكتروني";
      document.getElementById("emailMessage").classList.remove("hidden");
    } else {
    

    }
    if(Content.password==="")
    {
      document.getElementById("passwordMessage").classList.remove("hidden", "text-center");
      document.getElementById("passwordMessage").classList.add("text-right");
      
      document.getElementById('passwordMessage').textContent = "الرجاء ادخال كلمة المرور";

    }

  }
  async function SignInbtn(e) {
    e.preventDefault();
    formValdition();
    if (document.getElementById("passwordMessage").classList.contains("hidden") && document.getElementById("emailMessage").classList.contains("hidden")) {

  await   axios.post(`http://127.0.0.1:8000/api/login`, Content)
      .then(res => {
       
        if (res.data.status === "201") {
          let data = {
            "token": res.data.token,
            "user": res.data.user,
          };
          cookies.set('token', res.data.token, { path: '/' });
 
          console.log(data);
          dispatch(login(data));
          console.log(user);
          window.location.replace("/");
          
        } else {
          document.getElementById("passwordMessage").classList.remove("hidden","text-right");
          document.getElementById("passwordMessage").classList.add("text-center");

          document.getElementById("passwordMessage").textContent = res.data.message;
          
        }
      })
    }
  }
  

  
  function ChangeToTowStars(e) {
    if (e.target.value.length > 0) {
      if (!document.getElementById("emailMessage").classList.contains("hidden")) {
        document.getElementById("emailMessage").classList.add("hidden");
        }
    }

    switch (StarsImage) {
      case TwoStars: if (document.getElementById('password').value.length) {
        document.getElementById('stars').classList.remove("animate-waving-hand");
        document.getElementById('stars').classList.remove("hidden");
        document.getElementById('key').classList.remove("animate-Keyname", "animate-Keypass", "rotate-45", "rotate-90","animate-KeyFull", "rotate-180");
        document.getElementById('key').classList.add("animate-Keyname", "rotate-45");
        document.getElementById('stars').classList.add("animate-waving-hand");
        setStarsImage(FourStars);
      }
        break;
      case FourStars: if (!document.getElementById('password').value.length) {
        document.getElementById('stars').classList.remove("animate-waving-hand");
        document.getElementById('stars').classList.remove("hidden");
        document.getElementById('key').classList.remove("animate-Keyname", "animate-Keypass", "rotate-45", "rotate-90","animate-KeyFull", "rotate-180");
        document.getElementById('key').classList.add("animate-Keyname", "rotate-45");
        document.getElementById('stars').classList.add("animate-waving-hand");
        setStarsImage(TwoStars);
      }
        break;
      default: if(document.getElementById('stars').classList.contains("hidden")){
                 document.getElementById('key').classList.remove("animate-Keyname", "animate-Keypass", "rotate-45", "rotate-90","animate-KeyFull", "rotate-180");
                 document.getElementById('stars').classList.remove("animate-waving-hand");
                 document.getElementById('stars').classList.remove("hidden");
        setTimeout(() => {
          document.getElementById('stars').classList.add("animate-waving-hand");
               document.getElementById('key').classList.add("animate-Keyname", "rotate-45");
        }, 100);
               
               setStarsImage(TwoStars);
      }
   
        break;
    }
   
    if (e.target.value.length === 0) {
      if (StarsImage === FourStars) {
        document.getElementById('stars').classList.remove("animate-waving-hand");
        document.getElementById('stars').classList.remove("hidden");
        document.getElementById('key').classList.remove("animate-Keyname", "animate-Keypass", "rotate-45", "rotate-90","animate-KeyFull", "rotate-180");
        document.getElementById('key').classList.add("animate-Keyname", "rotate-45");
        document.getElementById('stars').classList.add("animate-waving-hand");
        setStarsImage(TwoStars);
      } else
      {
        console.log(StarsImage);
        document.getElementById('stars').classList.remove("animate-waving-hand");
        document.getElementById('key').classList.remove("animate-Keyname", "animate-Keypass", "rotate-45", "rotate-90","animate-KeyFull", "rotate-180");
        document.getElementById('key').classList.add("animate-KeyFull", "rotate-180");

        document.getElementById('stars').classList.add("hidden");
        setStarsImage(" ");
        }

    }
    

    }
  function ChangeToFourStars(e) {
    if (e.target.value.length > 0) {
      if (!document.getElementById("passwordMessage").classList.contains("hidden")) {
        document.getElementById("passwordMessage").classList.add("hidden");
      }
    }  

  
        if (StarsImage === TwoStars && document.getElementById('email').value.length) {
        document.getElementById('stars').classList.remove("animate-waving-hand");
        document.getElementById('stars').classList.remove("hidden");
        document.getElementById('key').classList.remove("animate-Keypass","animate-Keyname","rotate-90","rotate-45","animate-KeyFull", "rotate-180");
        document.getElementById('key').classList.add("animate-Keypass","rotate-90");
        document.getElementById('stars').classList.add("animate-waving-hand");
        setStarsImage(FourStars);
    }else
    if (document.getElementById('stars').classList.contains("hidden")) {
        document.getElementById('stars').classList.add("animate-waving-hand");
        document.getElementById('stars').classList.remove("hidden");
        document.getElementById('key').classList.add("animate-Keypass","rotate-90");
        setStarsImage(TwoStars);
    }
    if (e.target.value.length === 0) {
      if (StarsImage === FourStars) {
        document.getElementById('stars').classList.remove("animate-waving-hand");
        document.getElementById('stars').classList.remove("hidden");
        document.getElementById('key').classList.remove("animate-Keyname", "animate-Keypass", "rotate-45", "rotate-90","animate-KeyFull", "rotate-180");
        document.getElementById('key').classList.add("animate-Keyname", "rotate-45");
        document.getElementById('stars').classList.add("animate-waving-hand");
        setStarsImage(TwoStars);

      } else
      {
        console.log(StarsImage);
        document.getElementById('stars').classList.remove("animate-waving-hand");
        document.getElementById('key').classList.remove("animate-Keyname", "animate-Keypass", "rotate-45", "rotate-90");
        document.getElementById('key').classList.add("animate-KeyFull", "rotate-180");
        document.getElementById('stars').classList.add("hidden");
        setStarsImage(" ");
        
        }

    }
    }

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
    <div className='relative w-full h-full justify-start lg:fixed'>
          <img src={SignBottomCover} className="absolute bottom-0 right-0 w-3/4 h-fit" />
      
            <div className='bg-hero lg:bg-none bg-center relative flex justify-start'>
                <img src={SignInCover} className="hidden lg:block absolute w-4/5 h-fit" />
                <div className='relative flex flex-col w-full h-full  '>
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
                            <img src={Logo} className="w-1/6 h-fit mt-3 lg:mr-[7rem] mr-5" />
                        </div>
                  </div>
              
          {/*  */}
          <div className='relative w-full h-full flex flex-col justify-center items-center lg:justify-start lg:items-stretch lg:flex-row mt-8'>
          <div className='lg:hidden w-[90%] flex justify-center items-center '>
                  <img src={SignInSign} className=" mb-5 w-1/2 h-3/4" />
                </div>
            <div className='lg:hidden w-[90%]'>
                  <img src={FullSignInImage} className=" mb-5 w-full h-3/4" />
                </div>
                      <div className='hidden lg:block w-[60%] relative '>
                          <div id="stars" className='  hidden '>
                              <img src={StarsImage} className="flex top-9 lg:top-10 absolute  w-16 h-1/4 lg:right-1/2 right-[47%]  " /> 
                          </div>
                          <div className=' '>
                          <img src={Key} id="key" className="flex  top-[45%]  right-[46%] absolute  w-20 h-1/4  " /> 
                          </div>
                              <img src={SignIn} className="  mb-5 w-full h-3/4  " /> 
                      </div>
                      
            <div className=' lg:w-[60%] w-full flex  p-14 mt-[-1rem] justify-center items-start lg:p-0 '>
              
              <div className=' text-center flex flex-col justify-center h-fit w-full items-center '>
                
                <form className='flex flex-col h-full lg:w-[65%]  w-full mt-10 justify-center  text-[#035AA7]'>
                <h1 className='w-full text-[#035AA7] text-5xl text-center font-Somar-Black mb-10'> تسجيل الدخول </h1>
                  
                  <input name="email" id="email" type="text"  placeholder='البريد الالكتروني' onChange={(e) => ChangeToTowStars(e)} className='text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5  font-Somar-Regular placeholder-[#183C6C] text-xl outline-none' />
                  <span id ="emailMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال البريد الالكتروني</span>
                  <input name="password" id="password" type="password" placeholder='كلمة المرور' onChange={(e) => ChangeToFourStars(e)} className=' text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-4 py-1.5 mt-5 font-Somar-Regular placeholder-[#183C6C] text-xl outline-none' />
                  <span id ="passwordMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال كلمة المرور</span>
                            <div className='flex items-center justify-between mt-4 pr-2 pl-2'>
                                  <Link to="/ForgotPassword" className='font-Somar-Regular'>نسيت كلمة المرور؟</Link>
                                  <div className='flex justify-center items-center'>
                                     <label for="vehicle1" className='mr-2 text-sm font-Somar-Regular'> تذكرني</label>
                                     <input type="checkbox" id="remember me" name="remember me" value="remember" className='mb-1 text-sm' />
                                 </div>
                            </div>
                          <button className='border-4 border-[#035AA7] rounded-lg pr-2 py-1.5 mt-8 font-bold  font-Somar-Black text-2xl' onClick={(e)=> SignInbtn(e)}>تسجيل الدخول</button>

                          <div className='w-full flex mt-5'>
                              <Link to="/CreateStoreBody" className='w-3/4 border-2 border-[#EA676C] pr-2 py-1.5 rounded-l-lg text-white bg-[#EA676C] font-semibold font-Somar-Black text-2xl rounded-r-xl mr-[-0.5rem]' >إنشاء متجر جديد</Link>
                              <p className=' w-full border-4 border-[#EA676C] pr-2 py-1.5 rounded-r-lg text-[#EA676C] font-semibold font-Somar-Bold text-2xl cursor-default' >ليس لديك حساب متجر</p>
                            </div>
                                </form>
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
              <Link to="/"  className='font-Somar-Bold text-2xl'>الرئيسية </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 '>
            <Link to="/Packages"  className='font-Somar-Bold text-2xl'>الأسعار </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to='/Blog'  className='font-Somar-Bold text-2xl'>المدونة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/Info"  className='font-Somar-Bold text-2xl'>تجربة المنصة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
            <Link to="/Contact"  className='font-Somar-Bold text-2xl'>أنشئ متجرك </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/SignIn"  className='font-Somar-Bold text-2xl'>تسجيل الدخول </Link>
            </div>
            <div>
            
            </div>
          </div>
        </div>
        <div className='hidden sm:block h-full w-full bg-black opacity-40'/>
    </div>
                  </div>
          </div>
         </div>
    </div>
  )
}

export default SignInBody