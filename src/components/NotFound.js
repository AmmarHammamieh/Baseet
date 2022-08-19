import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import Logo from "../images/Logo.svg";
import Drawer from "../images/Drawer.svg";
import SmallCover from "../images/SmallCover.svg";

import { AiOutlineClose } from 'react-icons/ai';

import WheelTopTop from "../images/WheelTopTop.svg";
import WheelTopDown from "../images/WheelTopDown.svg";
import WheelDownTop from "../images/WheelDownTop.svg";
import WheelDownDown from "../images/WheelDownDown.svg";
import NotFound404 from "../images/NotFound404.svg";
import Full404 from "../images/Full404.svg";
import NotFoundAndroidCover from "../images/NotFoundAndroidCover.svg";


import NotFoundBack from "../images/NotFoundBack.svg";

import axios from 'axios';
import Cookies from 'universal-cookie';

function NotFound() {

    const cookies = new Cookies();
    const [Cover, SetCover] = useState(SmallCover);

  async function Signout() {
        
    var user = {
        token: cookies.get('token'),
    };
    cookies.remove('token', { path: '/' });
    console.log(user);
    await axios.post(`http://127.0.0.1:8000/api/logout`, user)
        .then(res => {
            console.log(res);
           
        });
   
   
}
const listenSizeEvent = () => {
    if (window.innerWidth < 768) {
        SetCover(NotFoundAndroidCover);
    } else if (window.innerWidth >= 768) {
        SetCover(SmallCover);
    }
}

useEffect(() => {
    window.addEventListener('resize', listenSizeEvent)
  
},[window.innerWidth])

  
function drawer() {
  document.getElementById('header').classList.add = "hidden lg:block";
  if (document.getElementById('drawerBody').classList.contains("animate-WaveAnimateBack")) {
      document.getElementById('drawerBody').classList.remove("animate-WaveAnimateBack");
  } else {
      document.getElementById('drawerBody').classList.remove("hidden");
  }
  document.getElementById('drawerBody').classList.add("flex", "fixed", "h-screen", "w-full", "bg-transparent", "top-0", "left-0", "lg:hidden", "z-10");
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
    <div className=" w-full h-full ">
    <div className='flex justify-start'>
        <img src={Cover} className="w-4/5 h-fit" />
        <div  className='absolute flex flex-col w-full h-full '>
            <div id="header" className='flex justify-evenly '>
              <div className='hidden w-full mt-2 justify-center lg:flex text-[#035AA7] font-semibold'>
              {cookies.get('token') ?
                                    <a href='/' onClick={() => Signout()} className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                                    :
                                    <Link to="/SignIn" className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                                }
              <Link to="/CreateStoreBody" className='m-3  font-Somar-Bold text-2xl'>تجربة المنصة</Link>
              <Link to="/Blog" className='m-3  font-Somar-Bold text-2xl'>المدونة</Link>
              <Link to="/Packages" className='m-3  font-Somar-Bold text-2xl'>الأسعار</Link>
              <div className=' rounded-lg h-fit w-fit flex justify-center items-center '>
               <Link to="/" className=' relative px-2 py-1 m-2 group overflow-hidden z-0 cursor-pointer'>
               <span class="absolute z-1 bottom-0 left-0  w-0 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-b-2 group-hover:border-l-2 border-red-600 opacity-90 "></span>
                <span class="absolute z-1 top-0 left-0  w-0 h-0 mb-0 transition-all duration-700 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-t-2   border-red-600 opacity-90 "></span>
                <span class="absolute z-1 top-0 right-0  w-0 h-0 mb-0 transition-all duration-700 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-r-2  border-red-600 opacity-90 "></span>            
               <span className='relative group-hover:text-[#EA676C]  font-Somar-Bold text-2xl'>الرئيسية</span>  
                   </Link>
                   </div>
              </div>
                <div className='flex h-100 w-1/3 p-2 lg:hidden'>
                 <img id="drawerbtn" src={Drawer} className='text-white text-4xl m-2 mt-0 cursor-pointer w-10 h-20' onClick={() => drawer()}/>
                </div>
                <div className='w-full flex justify-end'>
                    <img src={Logo} className="w-1/6 h-fit mt-8 mr-5 lg:mr-32 " />
                </div>
                      </div>
              {/* Android */}
              <div className='w-full h-full lg:hidden'>
                          <div className='h-full w-full flex justify-center '>
                             
                          <img src={Full404} className="absolute w-3/4 mt-[-3rem]  mb-20 h-[25rem] " />
               
                              </div>
                          </div>
                       
              {/* Desktop */}
              <div className='w-3/4 h-full mx-auto  justify-center hidden lg:flex mt-[-2rem]'>
                                <div className='absolute w-fit  grid grid-cols-6'>
                                  <div className='  w-full h-full col-start-6'>
                                   <div className=' flex flex-col justify-start items-start mt-32 ml-3'>
                                    <div  className='flex justify-start items-start h-full w-full'>
                                    <img id='WheelTopTop' src={WheelDownDown} className=" mb-[-0.4rem]  w-[40%]  h-fit animate-RotateWheelsSLow " />
                                    </div>
                                    <img id="WheelTopDown" src={WheelDownTop}  className=" ml-4 w-[40%]  col-start-6  animate-RotateWheelsSLowBack " />
                                  </div>
                                   </div>
                                </div>
                                {/* */}
                                <div className='absolute w-fit  grid grid-cols-6'>
                                  <div className='  w-full h-full col-start-1'>
                                   <div className=' flex flex-col justify-end items-end mt-36 ml-5'>
                                    <div className='flex justify-end items-end h-full w-full'>
                                    <img id='WheelTopTop' src={WheelDownDown} className="  mb-[-0.4rem] w-[43%]  h-fit  animate-RotateWheels" />
                                    </div>
                                    <img id="WheelTopDown" src={WheelDownTop}  className="mr-4 w-[60%]  col-start-6   animate-RotateWheelsBack" />
                                  </div>
                                   </div>
                                </div>

                                  {/* */}
                                  <div className='absolute w-fit  grid grid-cols-6'>
                                  <div className='  w-full h-full col-start-3 col-end-5'>
                                   <div className=' flex flex-col justify-center items-center mt-36  pr-10 pl-8'>
                                    <div className='flex justify-center items-center h-full w-full'>
                                    <img id='WheelTopTop' src={NotFound404} className="  w-[20.5rem] mt-6   h-fit  animate-RotateBoard"/>
                                    </div>
                      
                                  </div>
                                   </div>
                                </div>


                                {/* */}

                                <img src={NotFoundBack} className="absolute w-[30rem]  mb-20 h-[30rem] z-[-1]" />
                            </div>
                  </div>    
              </div>
      {/* */}
       {/* Drawer */}
       <div id="drawerBody" className=' hidden  '>
                    <div id="drawer" className=' w-full bg-[#035AA7] h-full md:w-1/2'>
                        <div className='p-4'>
                            <AiOutlineClose className='text-xl text-white cursor-pointer ' onClick={() => closeDrawer()} />
                        </div>
                        <div className='flex flex-col justify-center w-full ml-20  h-4/5 text-white '>
                            {/* border-b-2 border-[#847244] */}
                            <div className='mb-4 cursor-pointer flex justify-center  text-xl  p-2 md:w-1/2 w-3/4'>
                                <Link to="/" className='font-Somar-Bold text-2xl'>الرئيسية </Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 '>
                                <Link to="/Packages" className='font-Somar-Bold text-2xl'>الأسعار </Link>
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
                                 <a href='/SignIn' onClick={() => Signout()} className='font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block h-full w-full bg-black opacity-40' />
                </div>
       </div>

   
    
  )
}

export default NotFound