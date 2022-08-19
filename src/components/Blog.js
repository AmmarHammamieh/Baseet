import React, { useEffect, useState } from 'react'

import Logo from "../images/Logo.svg";
import Cover from "../images/Cover.svg";
import BlogAnimation from "../images/BlogAnimation.svg";
import Cloud from "../images/Cloud.svg";
import SmallCloud from "../images/SmallCloud.svg";
import Wheel from "../images/Wheel.svg";
import HOval from "../images/HOval.svg";
import VOval from "../images/VOval.svg";
import BlogContainer from "../images/BlogContainer.svg";
import Paper from "../images/Paper.svg";
import TitleBlog from "../images/TitleBlog.svg";
import AndroidPaper from "../images/AndroidPaper.svg";
import FullBlogAnimation from "../images/FullBlogAnimation.svg";
import BottomCoverBlog from "../images/BottomCoverBlog.svg";
import SecondCoverBlogBottom from "../images/SecondCoverBlogBottom.svg";


import Drawer from "../images/Drawer.svg";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Cookies from 'universal-cookie';
import axios from 'axios';

function Blog() {

    const [Image, SetImage] = useState(Paper);
    const cookies = new Cookies();

    const listenSizeEvent = () => {
        if (window.innerWidth < 1024) {
            SetImage(AndroidPaper);
        } else if (window.innerWidth >= 1024) {
            SetImage(Paper);
        }

        if (window.innerWidth <= 1217) { 
            document.getElementById("BigContainer").classList.remove("lg:mt-36");
            document.getElementById("SearchContainer").classList.remove("mt-56");


        
            document.getElementById("BigContainer").classList.add("lg:mt-20");
            document.getElementById("SearchContainer").classList.add("mt-48");
           

            
   
       }
        if (window.innerWidth > 1217) { 
            document.getElementById("BigContainer").classList.remove("lg:mt-20");
            document.getElementById("SearchContainer").classList.remove("mt-48");

            document.getElementById("BigContainer").classList.add("lg:mt-36");
            document.getElementById("SearchContainer").classList.add("mt-56");
    
        }


        if (window.innerWidth <= 1020 && window.innerWidth >850) { 
            document.getElementById("BigContainer").classList.remove("md:mt-36");
            document.getElementById("slide").classList.remove("md:mt-[6%]");


            document.getElementById("BigContainer").classList.add("md:mt-52");
            document.getElementById("slide").classList.add("md:mt-[25%]");

    
        }
        if (window.innerWidth <= 850) { 
            document.getElementById("BigContainer").classList.remove("md:mt-52");


            document.getElementById("BigContainer").classList.add("md:mt-36");
    
        }

        if (window.innerWidth <= 753 && window.innerWidth <708) { 
            document.getElementById("container3").classList.add("hidden");
        }

        if (window.innerWidth > 753) { 
            document.getElementById("container3").classList.remove("hidden");
    
        }

        if (window.innerWidth <= 640) { 
            document.getElementById("container1").classList.remove("w-[25rem]", "h-[17rem]");
            document.getElementById("container1H").classList.remove("w-10/12", "text-3xl");
            document.getElementById("container2").classList.remove("w-[25rem]", "h-[17rem]");
            document.getElementById("container2H").classList.remove("w-10/12", "text-3xl");

            document.getElementById("container1").classList.add("w-[18rem]","h-[15rem]");
            document.getElementById("container1H").classList.add("w-full", "text-xl");
            document.getElementById("container2").classList.add("w-[18rem]","h-[15rem]");
            document.getElementById("container2H").classList.add("w-full", "text-xl");

        
    
        }
        if (window.innerWidth > 640) { 

            document.getElementById("container1").classList.remove("w-[18rem]","h-[15rem]");
            document.getElementById("container1H").classList.remove("w-full", "text-xl");
            document.getElementById("container2").classList.remove("w-[18rem]","h-[15rem]");
            document.getElementById("container2H").classList.remove("w-full", "text-xl");


            document.getElementById("container1").classList.add("w-[25rem]","h-[17rem]");
            document.getElementById("container1H").classList.add("w-10/12", "text-3xl");
            document.getElementById("container2").classList.add("w-[25rem]","h-[17rem]");
            document.getElementById("container2H").classList.add("w-10/12", "text-3xl");


    
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

    function OnLoadImg() {
        document.getElementById('image').classList.add('animate-PopupImg');
        document.getElementById('wheel').classList.add('animate-Wheel');
        document.getElementById('Cloud').classList.add('animate-Cloud');
        document.getElementById('wheel').classList.add('animate-Wheel');
        document.getElementById('SmallCloud').classList.add('animate-SmallCloud');

        document.getElementById('firstHO').classList.add('animate-HOval');
        document.getElementById('firstVO').classList.add('animate-VOval');

        document.getElementById('secondHO').classList.add('animate-HOval');
        document.getElementById('secondVO').classList.add('animate-VOval');

        document.getElementById('wordmove').classList.add('animate-WordUp');
        document.getElementById('word').classList.add('animate-WordOpacity');

    }
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
    return (
        <div style={{ backgroundImage: `url(${SecondCoverBlogBottom})` }} className=" w-full h-full ">
            <div className='flex justify-start'>
                <img src={Cover} className="w-4/5 h-fit" />
                <div className='absolute flex flex-col w-full h-full '>
                    <div id="header" className='flex justify-evenly '>
                        <div className='hidden w-full mt-2 justify-center lg:flex text-[#035AA7] font-semibold'>
                            {cookies.get('token') ?
                                <a href='/' onClick={() => Signout()} className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                                :
                                <Link to="/SignIn" className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                            }
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
                            <img id="drawerbtn" src={Drawer} className='text-white text-4xl m-2 mt-0 cursor-pointer w-10 h-20' onClick={() => drawer()} />
                        </div>
                        <div className='w-full flex justify-end'>
                            <img src={Logo} className="w-1/6 h-fit mt-8 mr-5 lg:mr-32 " />
                        </div>
                    </div>
                    {/* Android */}
                    <div className='w-full h-full lg:hidden'>
                        <div className='h-full w-full flex justify-center '>


                            <img src={FullBlogAnimation} className="absolute w-3/4   h-fit z-1" />
                        </div>
                    </div>

                    {/* Desktop */}
                    <div onLoad={() => OnLoadImg()} id="image" className='hidden lg:block w-full h-full  scale-0 '>
                        <div className='h-full w-full flex justify-center'>

                            <p id="wordmove" className='absolute bottom-[-100px] left-[21.2%] text-right ml-[4rem] '>المدونة</p>

                            <div className='w-fit mx-auto flex flex-col juc mt-8'>
                                <div className='w-[50rem] h-[30%] flex justify-center '>
                                    <div className='grid grid-cols-8 w-full items-end'>
                                        <div className='col-start-3 flex justify-start items-start h-full w-full'>
                                            <img id='wheel' src={Wheel} className=" w-100   h-fit z-0 ml-[0.5rem] " />
                                        </div>
                                        <img id="SmallCloud" src={Cloud} className=" w-full top-[42%] col-start-6 ml-[-30px] mb-[-0.7rem]   col-end-9 h-[40%] z-0  pr-14 " />

                                    </div>
                                </div>
                                {/* */}
                                <div className='w-[50rem] h-[10%]  flex justify-center '>
                                    <div className='grid grid-cols-8 w-full items-center'>
                                        <img id="Cloud" src={SmallCloud} className={`col-start-2 ml-[-20px] w-full top-[42%]  mt-[2rem] h-fit z-0 `} />
                                        <div id='first' className='col-start-6 col-end-8 flex ml-10 justify-center items-end h-full w-full'>
                                            <div className='w-1/3  mb-4 mr-8'>
                                                <img id="firstVO" src={VOval} className="absolute w-fit col-start-6 h-0  ml-7 " />
                                                <img id="firstHO" src={HOval} className=" col-start-6 h-fit w-8  " />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* */}
                                <div className='w-full h-[5%] mt-6 flex justify-center '>
                                    <div className='grid grid-cols-8 w-full items-center'>
                                        <div className='col-start-6 col-end-8 flex  justify-end items-end h-full w-full'>
                                            <div id='second' className='w-1/3 mr-7'>
                                                <img id="secondVO" src={VOval} className="absolute w-fit col-start-7 h-0 ml-7 " />
                                                <img id="secondHO" src={HOval} className=" col-start-7 h-fit w-8  " />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <img src={BlogAnimation} className="absolute  w-[50rem] mx-auto  mt-10  h-3/4 z-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* */}
            <div className='flex flex-col '>
                <div className='mt-36 h-full w-full flex justify-center lg:mt-5 mb-10  '>
                    <img src={Image} className="absolute bg-no-repeat w-[99%] md:w-[90%]  lg:w-full "/>
                   
                    <div className='relative z-10 flex flex-col w-3/4 h-full m-auto  '>
                        <div id="SearchContainer"  dir='rtl' lang="ar" className='hidden lg:flex  w-full mt-56  '>
                            <form className='w-full'>
                                <div className='relative flex items-center w-2/5 bg-white rounded-lg border-[#035AA7] border-4'>
                                    
                                    <input dir="rtl" lang="ar" placeholder='ابحث عما تريد...' className="p-2  w-full  focus:outline-none px-4 rounded-lg placeholder-[#EA676C]" type="text" />
                                    <AiOutlineSearch className="ml-2 text-[#EA676C] text-3xl" />
                                </div>
                            </form>
                        </div>
                        <div id='BigContainer' className='relative flex flex-col justify-center items-center lg:grid  lg:grid-cols-2 lg:gap-x-20 w-fit h-full mx-auto lg:mt-36  mt-10 md:mt-32 '>
                        <div id="container1" dir='rtl' lang='ar' className='group relative z-10  w-[18rem] h-[15rem]  md:w-[25rem] md:h-[17rem] lg:mb-0 lg:w-[23rem] lg:h-[23rem] ml-[-1rem] mr-5 '>

                                <div id='container1div' dir="rtl" lang='ar' className='group-hover:animate-bgChangeColor relative mr-[-1rem] z-20 flex justify-center items-center lg:h-1/2 h-[55%] w-[85%]   md:h-2/3 md:w-full mt-10 lg:mt-0  bg-[#006699] rounded-t-3xl rounded-bl-3xl p-5'>
                                <span id='container1span' class="absolute z-30  w-[100%] md:h-[100%] md:w-full lg:h-full ml-[-2rem]  h-[100%] border-4   mt-[-1rem] lg:mt-[-1.1rem]  border-[#000000] opacity-90 rounded-t-3xl rounded-bl-3xl"></span>

                                    <h1 id='container1H' className='text-center text-[#ECEDEE]  pt-10 lg:pt-0   sm:text-3xl  text-xl lg:text-3xl  mt-[1rem] lg:mt-[4rem] w-[82%] mr-5 mb-20 font-Somar-Regular lg:mr-0'>طوّر إستراتيجيتك التسويقية في 8 خطوات</h1>
                                </div>

                                <div className='lg:py-5 '>
                                    <h1 className=' text-[#183C6C] md:text-xl w-3/4 lg:w-full font-semibold font-Somar-Black' >المزيج التسويقي: طوّر إستراتيجيتك التسويقية في 8 خطوات</h1>
                                    <p className='text-[#183C6C] hidden lg:block mt-1 font-Somar-Regular'>ظل المزيج التسويقي الذي يبلغ من العمر أكثر من 70 عامًا يتطور باستمرار، باستخدامه يُمكنك وضع إستراتيجية شاملة لتحقيق هدفك، دعنا نلقي نظرة معا  </p>
                                </div>
                            </div>

                            <div id="container2" dir='rtl' lang='ar' className='group mt-[-0.9rem] lg:mt-0  relative z-10 md:mb-10 w-[18rem] h-[15rem]  md:w-[25rem] md:h-[17rem] lg:mb-0 lg:w-[23rem] lg:h-[23rem] ml-[-1rem] mr-5 '>

                                <div id='container2div' dir="rtl" lang='ar' className='group hover:animate-bgChangeColor relative mr-[-1rem] z-20 flex justify-center items-center lg:h-1/2 h-[55%] w-[85%]   md:h-2/3 md:w-full mt-10 lg:mt-0  bg-[#006699] rounded-t-3xl rounded-bl-3xl p-5'>
                                <span class="absolute z-30 w-full h-full  lg:h-full border-4  mt-[-1rem] ml-[-2rem]   border-[#000000] opacity-90 rounded-t-3xl rounded-bl-3xl"></span>

                                    <h1 id='container2H' className='text-center text-[#ECEDEE]  pt-10 lg:pt-0   sm:text-3xl lg:text-3xl text-xl  mt-[1rem] lg:mt-[4rem] mr-5 mb-20 font-Somar-Regular lg:mr-0'>كيف تطبّق المزيج الترويجي الأكثر ملاءمة لمتجرك الإلكتروني؟</h1>
                                </div>

                                <div className='lg:py-5 '>
                                    <h1 className='text-[#183C6C] md:text-xl w-3/4 lg:w-full font-semibold font-Somar-Black' >كيف تطبّق المزيج الترويجي الأكثر ملاءمة لمتجرك الإلكتروني؟</h1>
                                    <p className='text-[#183C6C] hidden lg:block mt-1 font-Somar-Regular'>لا ينبغي عليك ترك أي شيء للصدفة عندما تبدأ الترويج لمتجرك الإلكتروني، إذا كنت تريد إقناع الآخرين بالشراء منك د الإستراتيجية </p>
                                </div>
                            </div>

                            <div id='container3' dir='rtl' lang='ar' className='group hidden md:block relative z-10  w-[25rem] h-[17rem] mb-5  lg:mb-0 lg:w-[23rem] lg:h-[23rem] md:mr-5'>

                                <div dir="rtl" lang='ar' className='group hover:animate-bgChangeColor mr-[-1rem] flex justify-center items-center h-2/3 lg:h-1/2 w-full bg-[#006699] rounded-t-3xl rounded-bl-3xl p-16'>
                                      <span class="absolute z-30 w-full h-2/3 lg:h-1/2 border-4 mt-[0.2rem] ml-[-2rem] md:mb-5  border-[#000000] opacity-90 rounded-t-3xl rounded-bl-3xl"></span>

                                    <h1 className='relative z-40 text-center text-[#ECEDEE]  w-10/12  mt-[4rem] lg:text-3xl  mb-20 font-Somar-Regular   text-3xl'>10 نصائح فعّالة تساعدك في تصميم شعارات احترافية</h1>
                                </div>
                                <div className='lg:py-5'>
                                    <h1 className='text-[#183C6C] md:text-xl  font-semibold font-Somar-Black ' >10 نصائح فعّالة تساعدك في تصميم شعارات احترافية</h1>
                                    <p className='text-[#183C6C] mt-1 hidden lg:block font-Somar-Regular'>غالبًا ما يكون الشعار هو الخطوة الأولى لعملية التواصل التي يقوم بها متجرك مع الجمهور، إذا كنت مهتمًا بمعرفة كل ما يتعلق بـ تصميم شعارات </p>
                                </div>
                            </div>

                            <div dir='rtl' lang='ar' className=' hidden relative z-10 w-3/4 h-fit  mb-5 lg:block lg:mb-0 lg:w-[23rem] lg:h-[23rem]'>

                                <div dir="rtl" lang='ar' className='group hover:animate-bgChangeColor  mr-[-1rem]  flex justify-center items-center h-1/2 w-full bg-[#006699] rounded-t-3xl rounded-bl-3xl p-10'>
                            <span class=" absolute z-30 w-full h-1/2 border-4 mt-[-1rem] ml-[-2rem]   border-[#000000] opacity-90 rounded-t-3xl rounded-bl-3xl"></span>

                                    <h1 className='relative z-40 text-center text-[#ECEDEE] text-2xl lg:text-3xl w-10/12  mb-5  font-Somar-Regular'>أطلق حملتك بنجاح: كيف تحسب تكلفة إعلان سناب شات بدقة؟</h1>
                                </div>

                                <div className='lg:py-5'>
                                    <h1 className='text-[#183C6C] md:text-xl  font-semibold font-Somar-Black' >أطلق حملتك بنجاح: كيف تحسب تكلفة إعلان سناب شات بدقة؟</h1>
                                    <p className='text-[#183C6C] mt-1 font-Somar-Regular'>إذا كنت مستخدمًا جديدًا لسناب شات في عملك، وليست لديك فكرة عن تكلفة إعلان سناب شات، فأنت في المكان الصحيح، نقدم في هذه المقالة تفاصيل عن كل ما </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div id='slide' className='relative flex justify-center w-full h-full  space-x-3 mt-[30%] md:mt-[6%] lg:mt-[20%] items-center z-[-1] pb-40'>
                    <img src={BottomCoverBlog} className="absolute bottom-0 z-0" />

                    
                    <p className='relative z-10  font-bold text-[#183C6C] cursor-pointer'>السابق</p>
                    <a className='relative z-10 text-[#FDB958] cursor-pointer'>1</a>
                    <a className='relative z-10 px-3 py-1 rounded-full bg-[#FDB958] text-white cursor-pointer'>2</a>
                    <a className='relative z-10 text-[#FDB958] cursor-pointer'>3</a>
                    <p className='relative z-10 font-bold text-[#183C6C] cursor-pointer'>التالي</p>
                </div>
            </div>
            
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
                            <Link to='/Blog'>المدونة</Link>
                        </div>
                        <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
                            <Link to="/Info" className='font-Somar-Bold text-2xl'>تجربة المنصة</Link>
                        </div>
                        <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
                            <Link to="/CreateStoreBody" className='font-Somar-Bold text-2xl'>أنشئ متجرك </Link>
                        </div>
                        <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
                            {cookies.get('token') ?
                                <a href='/' onClick={() => Signout()} className='font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                                :
                                <Link to="/SignIn"  className='font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                            }
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

export default Blog