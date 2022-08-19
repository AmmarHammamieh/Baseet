import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import FScroll from "../images/Scrollimage1.svg";
import SScroll from "../images/SScroll.svg";
import TScroll from "../images/TScroll.svg";

import Logo from "../images/Logo.svg";
import SaidAboutBassetCover from "../images/SaidAboutBassetCover.svg";
import AndroidSaidAboutBassetCover from "../images/AndroidSaidAboutBassetCover.svg";
import AndroidHomeContactCover from "../images/AndroidHomeContactCover.svg";
import AndroidHomeFooterCover from "../images/AndroidHomeFooterCover.svg";


import ContactUs from "../images/ContactUs.svg";

import StoresCover from "../images/StoresCover.svg";


import RightRightRope from "../images/RightRightRope.svg";
import LeftLeftRope from "../images/LeftLeftRope.svg";
import LeftRightRope from "../images/LeftRightRope.svg";


import AndroidCoverPackage from "../images/AndroidCoverPackag.svg";
import FirstSildePackage from "../images/FirstSildePackage.svg";
import SecondSlidePackage from "../images/SecondSlidePackage.svg";
import ThirdSildePackage from "../images/ThirdSildePackage.svg";
import HeaderPackage from "../images/HeaderPackage.svg";



import Cover from "../images/Cover.svg";
import WhySimple from "../images/WhySimple.svg";
import ScreenIcon from "../images/ScreenIcon.svg";
import ListIcon from "../images/ListIcon.svg";
import CardIcon from "../images/CardIcon.svg";
import ToolAdvertising from "../images/ToolAdvertising.svg";
import ShopIcon from "../images/ShopIcon.svg";
import CursorIcon from "../images/CursorIcon.svg";
import CoverTest from "../images/CoverTest.svg";
import LargeCover from "../images/LargeCover.svg";
import BigScreen from "../images/BigScreen.svg";
import Ehjzle from "../images/Ehjzle.svg";
import EasyBuy from "../images/EasyBuy.svg";
import LeftArrow from "../images/LeftArrow.svg";
import RightArrow from "../images/RightArrow.svg";
import FirstSlideScreen from "../images/FirstSlideScreen.svg";
import SecondSlideScreen from "../images/SecondSlideScreen.svg";
import PackagesDrop from "../images/PackagesDrop.svg";

import SaidAboutBaseet from "../images/SaidAboutBaseet.svg";
import BlueRightArrow from "../images/BlueRightArrow.svg";
import BlueLeftArrow from "../images/BlueLeftArrow.svg";
import ContactImg from "../images/ContactImg.svg";
import HomeStoresCover from "../images/HomeStoresCover.svg";
import HomeContactCover from "../images/HomeContactCover.svg";






import WhySimpleCover from "../images/WhySimpleCover.svg";
import Drawer from "../images/Drawer.svg";

import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from '../GlobalData/UserSlice';

function HomeBody() {


    const [Index, SetIndex] = useState(0);
    const [IndexSlide, SetIndexSlide] = useState(0);
    const user = useSelector(selectUser);
    const [Loading, SetLoading] = useState(false);
    const [LoadingWhatSaid, SetLoadingWhatSaid] = useState(false);

    let token;
    const cookies = new Cookies();

    const Stores = {
        "Image": [EasyBuy, Ehjzle],
        "BackGround": [FirstSlideScreen, SecondSlideScreen],
        "Paragraph": ["كلمة حق نقولها من خلال تجربتنا في متجرنا باستخدام منصة بسيط. المتجر بيئة جيدة لعرض المنتجات بكل يسر وسهولة. يوفر المتجر خدمات شحن متعددة مع تتبع الطلب فيوفر على البائع عناء ومشقة الشحن. يرتب الطلبات ابتداء من (طلب جديد) حتى (الطلب تم استلامه) شكراً للقائمين عليه ",
            "شركة بسيط للتجارة الالكترونية لما أدركته من تحول في تجارة التجزئة عالميا، وبما استثمرته من بناء نظام متكامل يشمل التطبيق والدفع الالكتروني والخدمات اللوجستية. وما وفرته من متاجر لمئات الشباب والبنات ولملايين الريالات من دخل. وفرت لعملائها العمل الذي يحبونه"],
    };



    const listenScrollEvent = () => {
        if (window.scrollY > 200 && window.scrollY < 700) {
            if (document.getElementById('WhySimple').classList.contains("animate-translateOpacityDiv")) {
                document.getElementById('WhySimple').classList.remove("animate-translateOpacityDiv");

            }
            document.getElementById('WhySimple').classList.add("animate-translateOpacityDiv");

        } else if (window.scrollY < 1800 && window.scrollY > 1500) {
            if (document.getElementById('WhySimple').classList.contains("animate-translateOpacityDiv")) {
                document.getElementById('WhySimple').classList.remove("animate-translateOpacityDiv");
                document.getElementById('WhySimple').classList.add("animate-translateOpacityDiv");
            } else {
                document.getElementById('WhySimple').classList.add("animate-translateOpacityDiv");
            }

        }
        else {
            console.log(window.scrollY, document.getElementById('WhySimple').classList.contains("animate-translateOpacityDiv"));
            document.getElementById('WhySimple').classList.remove("animate-translateOpacityDiv");
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

    }, [window.scrollY])

    const listenSizeEvent = () => {
        if (window.innerWidth > 1315) {

            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-35rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-23rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-28rem]");
            document.getElementById("HomeStoresCover").classList.add("bottom-[-35rem]");

            document.getElementById("SaidAboutBassetCover").classList.add("bottom-[-38rem]");


        }
        if (window.innerWidth <= 1315) {
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-38rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-35rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-18rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-23rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-25rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-28rem]");

            document.getElementById("SaidAboutBassetCover").classList.add("bottom-[-35rem]");
         


        }
        if (window.innerWidth < 1241) {
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-38rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-35rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-35rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-18rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-23rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-25rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-28rem]");

            document.getElementById("package1H").classList.remove("text-6xl");
            document.getElementById("package2H").classList.remove("text-6xl");
            document.getElementById("package3H").classList.remove("text-6xl");
            document.getElementById("package1P").classList.remove("text-4xl");
            document.getElementById("package2P").classList.remove("text-4xl");
            document.getElementById("package3P").classList.remove("text-4xl");
            document.getElementById("package1Div").classList.remove("text-lg");
            document.getElementById("package2Div").classList.remove("text-lg");
            document.getElementById("package3Div").classList.remove("text-lg");

            document.getElementById("package1Div").classList.add("text-md");
            document.getElementById("package2Div").classList.add("text-md");
            document.getElementById("package3Div").classList.add("text-md");
            document.getElementById("package1P").classList.add("text-3xl");
            document.getElementById("package2P").classList.add("text-3xl");
            document.getElementById("package3P").classList.add("text-3xl");
            document.getElementById("package1H").classList.add("text-4xl");
            document.getElementById("package2H").classList.add("text-4xl");
            document.getElementById("package3H").classList.add("text-4xl");
            document.getElementById("HomeStoresCover").classList.add("bottom-[-30rem]");
            document.getElementById("SaidAboutBassetCover").classList.add("bottom-[-30rem]");
            
        }
        if (window.innerWidth < 1175) {
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-38rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-35rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-30rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-35rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-30rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-18rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-23rem]");

            document.getElementById("HomeStoresCover").classList.add("bottom-[-25rem]");
            document.getElementById("SaidAboutBassetCover").classList.add("bottom-[-28rem]");


        }
        if (window.innerWidth < 1100) { 
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-38rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-35rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-30rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-35rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-30rem]");
            document.getElementById("HomeStoresCover").classList.remove("bottom-[-25rem]");
            document.getElementById("SaidAboutBassetCover").classList.remove("bottom-[-28rem]");



            document.getElementById("HomeStoresCover").classList.add("bottom-[-18rem]");
            document.getElementById("SaidAboutBassetCover").classList.add("bottom-[-23rem]");
        
        }

     }

    useEffect(() => {
        window.addEventListener("scroll", listenSizeEvent);

    }, [window.innerWidth])
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


    function NextSlide() {
        SetLoading(false);

        document.getElementById("ScreenImg").classList.remove("animate-Showup");
        document.getElementById("TitleImg").classList.remove("animate-Showup");
        document.getElementById("Title").classList.remove("animate-Showup");

        setTimeout(() => {
            document.getElementById("ScreenImg").classList.add("animate-Showup");
            document.getElementById("TitleImg").classList.add("animate-Showup");
            document.getElementById("Title").classList.add("animate-Showup");
    
            
            if (Index == 1) {
                SetIndex(0);
            
            } else {
                SetIndex(1); 
           }
           
        }, 100);

    }
    function BackSlide() {
        SetLoading(false);
        document.getElementById("ScreenImg").classList.remove("animate-Showup");
        document.getElementById("TitleImg").classList.remove("animate-Showup");
        document.getElementById("Title").classList.remove("animate-Showup");

        setTimeout(() => {
            document.getElementById("ScreenImg").classList.add("animate-Showup");
            document.getElementById("TitleImg").classList.add("animate-Showup");
            document.getElementById("Title").classList.add("animate-Showup");
            if (Index == 0) {
                SetIndex(1);
            } else {
                SetIndex(0); 
           }
         
        }, 100);

    }
    function NextSlideRefrence() {
        SetLoadingWhatSaid(false);
        document.getElementById("CompanyImg").classList.remove("animate-Showup");
        document.getElementById("CompanyTitle").classList.remove("animate-Showup");

        setTimeout(() => {
        document.getElementById("CompanyImg").classList.add("animate-Showup");
        document.getElementById("CompanyTitle").classList.add("animate-Showup");
        
            if (IndexSlide == 1) {
            SetIndexSlide(0);
        } else {
            SetIndexSlide(1); 
       }
    
    }, 100);
        
        document.getElementById('three').classList.add("bg-[#FDB958]");
        document.getElementById('three').classList.add("text-white");
        document.getElementById('three').classList.remove("text-[#FDB958]");

        if (document.getElementById('one').classList.contains("bg-[#FDB958]")) {
            document.getElementById('one').classList.remove("bg-[#FDB958]");
            document.getElementById('one').classList.remove("text-white");

            document.getElementById('one').classList.add("text-[#FDB958]");

        } else if (document.getElementById('two').classList.contains("bg-[#FDB958]")) {
            document.getElementById('two').classList.remove("bg-[#FDB958]");
            document.getElementById('two').classList.remove("text-white");

            document.getElementById('two').classList.add("text-[#FDB958]");
        }
    }
    function BackSlideRefrence() {
        SetLoadingWhatSaid(false);

        document.getElementById("CompanyImg").classList.remove("animate-Showup");
        document.getElementById("CompanyTitle").classList.remove("animate-Showup");

        setTimeout(() => {
        document.getElementById("CompanyImg").classList.add("animate-Showup");
        document.getElementById("CompanyTitle").classList.add("animate-Showup");
            if (IndexSlide == 0) {
                SetIndexSlide(1);
            } else {
                SetIndexSlide(0); 
           }
    }, 100);

        document.getElementById('two').classList.add("bg-[#FDB958]");
        document.getElementById('two').classList.add("text-white");

        document.getElementById('two').classList.remove("text-[#FDB958]");

        if (document.getElementById('one').classList.contains("bg-[#FDB958]")) {
            document.getElementById('one').classList.remove("bg-[#FDB958]");
            document.getElementById('one').classList.remove("text-white");

            document.getElementById('one').classList.add("text-[#FDB958]");

        } else if (document.getElementById('three').classList.contains("bg-[#FDB958]")) {
            document.getElementById('three').classList.remove("bg-[#FDB958]");
            document.getElementById('three').classList.remove("text-white");

            document.getElementById('three').classList.add("text-[#FDB958]");

        }
    }



    function ANextSlideRefrence() {

        setTimeout(() => {
            if (IndexSlide == 1) {
                SetIndexSlide(0);
            } else {
                SetIndexSlide(1); 
           }
 
    }, 100);
        
        document.getElementById('Athree').classList.add("bg-[#FDB958]");
        document.getElementById('Athree').classList.add("text-white");
        document.getElementById('Athree').classList.remove("text-[#FDB958]");

        if (document.getElementById('Aone').classList.contains("bg-[#FDB958]")) {
            document.getElementById('Aone').classList.remove("bg-[#FDB958]");
            document.getElementById('Aone').classList.remove("text-white");

            document.getElementById('Aone').classList.add("text-[#FDB958]");

        } else if (document.getElementById('Atwo').classList.contains("bg-[#FDB958]")) {
            document.getElementById('Atwo').classList.remove("bg-[#FDB958]");
            document.getElementById('Atwo').classList.remove("text-white");

            document.getElementById('Atwo').classList.add("text-[#FDB958]");
        }
    }
    function ABackSlideRefrence() {


        setTimeout(() => {
           
        if (IndexSlide == 1) {
                SetIndexSlide(0);
            } else {
                SetIndexSlide(1); 
           }

    }, 100);

        document.getElementById('Atwo').classList.add("bg-[#FDB958]");
        document.getElementById('Atwo').classList.add("text-white");

        document.getElementById('Atwo').classList.remove("text-[#FDB958]");

        if (document.getElementById('Aone').classList.contains("bg-[#FDB958]")) {
            document.getElementById('Aone').classList.remove("bg-[#FDB958]");
            document.getElementById('Aone').classList.remove("text-white");

            document.getElementById('Aone').classList.add("text-[#FDB958]");

        } else if (document.getElementById('Athree').classList.contains("bg-[#FDB958]")) {
            document.getElementById('Athree').classList.remove("bg-[#FDB958]");
            document.getElementById('Athree').classList.remove("text-white");

            document.getElementById('Athree').classList.add("text-[#FDB958]");

        }
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

    function formValdition() {

        if (document.getElementById('email').value === "") {
            document.getElementById('emailMessage').textContent = "الرجاء ادخال البريد الالكتروني";
            document.getElementById("emailMessage").classList.remove("hidden");
        } else {
            validateEmail()

        }
        if (document.getElementById('name').value === "") {
            document.getElementById("NameMessage").classList.remove("hidden");
        }
        if (document.getElementById('message').value === "") {
            document.getElementById("ContentMessage").classList.remove("hidden");
        }
    }
    function validateEmail() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (document.getElementById('email').value.match(mailformat)) {
            return true;
        } else {
            document.getElementById('emailMessage').textContent = "لقد ادخلت بريد الكتروني غير مصرح";
            document.getElementById('emailMessage').classList.remove("hidden");
            return false;
        };
    }
    function DesktopNameContact(e) {
        if (e.target.value.length > 0) {
            if (!document.getElementById("NameMessage").classList.contains("hidden")) {
                document.getElementById("NameMessage").classList.add("hidden");
            }
        }
    }
    function DesktopEmailContact(e) {
        if (e.target.value.length > 0) {
            if (!document.getElementById("emailMessage").classList.contains("hidden")) {
                document.getElementById("emailMessage").classList.add("hidden");
            }
        }
    }
    function DesktopMessageContact(e) {
        if (e.target.value.length > 0) {
            if (!document.getElementById("ContentMessage").classList.contains("hidden")) {
                document.getElementById("ContentMessage").classList.add("hidden");
            }
        }
    }

    function Send(e) {
        e.preventDefault();

        formValdition();

        if (document.getElementById("NameMessage").classList.contains("hidden") &&
            document.getElementById("emailMessage").classList.contains("hidden") &&
            document.getElementById("ContentMessage").classList.contains("hidden")) {
            emailjs.sendForm('service_k2tudan', 'template_z187rvq', document.getElementsByName('EmailformDesktop')[0], 'dIv8OKyIguG0H5VNa')
                .then((result) => {
                    console.log(result.text);
                    document.location.reload();
                }, (error) => {
                    console.log(error.text);
                });
            document.getElementsByName('EmailformDesktop')[0].reset();

        }
    }


    function validateEmailA() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (document.getElementById('emailA').value.match(mailformat)) {
            return true;
        } else {
            document.getElementById('AemailMessage').textContent = "لقد ادخلت بريد الكتروني غير مصرح";
            document.getElementById('AemailMessage').classList.remove("hidden");
            return false;
        };
    }

    function formValditionA() {

        if (document.getElementById('emailA').value === "") {
            document.getElementById('AemailMessage').textContent = "الرجاء ادخال البريد الالكتروني";
            document.getElementById("AemailMessage").classList.remove("hidden");
        } else {
            validateEmailA()

        }
        if (document.getElementById('nameA').value === "") {
            document.getElementById("ANameMessage").classList.remove("hidden");
        }
        if (document.getElementById('messageA').value === "") {
            document.getElementById("AContentMessage").classList.remove("hidden");
        }
    }
    function SendForAndroid(e) {
        e.preventDefault();

        formValditionA();

        if (document.getElementById("ANameMessage").classList.contains("hidden") &&
            document.getElementById("AemailMessage").classList.contains("hidden") &&
            document.getElementById("AContentMessage").classList.contains("hidden")) {
            emailjs.sendForm('service_k2tudan', 'template_z187rvq', document.getElementsByName('EmailformAndroid')[0], 'dIv8OKyIguG0H5VNa')
                .then((result) => {
                    console.log(result.text);
                    document.location.reload();

                }, (error) => {
                    console.log(error.text);
                });
            document.getElementsByName('EmailformAndroid')[0].reset();
        }
    }
    useEffect(() => {
        if (window.innerWidth == 540 && window.innerHeight == 720) {
            document.getElementById("AndroidSaidAboutBassetCover").classList.remove('top-[-5rem]');
            document.getElementById("AndroidSaidAboutBassetCover").classList.add('top-[-12rem]');

       }
    }, [])
 function OnImageLoad() {
     SetLoading(true);
    }
    
    function OnWhatSaidImageLoad() {
        SetLoadingWhatSaid(true);
    }
    return (
        <div className='w-full h-full'>
            {/* Desktop */}
            <div className=" w-full h-full hidden lg:block">
                <div className='flex justify-start'>
                    <div style={{ backgroundImage: `url(${Cover})` }} className=' flex flex-col w-full h-full bg-contain bg-no-repeat'>
                        <div className='flex justify-evenly ' >
                            <div className='w-full mt-2 justify-center flex text-[#035AA7] font-semibold' >
                          
                                {cookies.get('token') ?
                                    (token = true)
                                    :
                                    (token = false)
                                }
                                {token ?
                                    <a href='/' onClick={() => Signout()} className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                                    :
                                    <Link to="/SignIn" className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                                }
                                <Link to="/Info" className='m-3 font-Somar-Bold text-2xl'>تجربة المنصة</Link>
                                <Link to="/Blog" className='m-3 font-Somar-Bold text-2xl'>المدونة</Link>
                                <Link to="/Packages" className='m-3 font-Somar-Bold text-2xl'>الأسعار</Link>
                                <div className=' rounded-lg h-fit w-fit flex justify-center items-center '>
                                    <Link to="/" className=' relative px-2 py-1 m-2 group overflow-hidden z-0 cursor-pointer font-Somar-Bold text-xl'>
                                        <span class="absolute z-1 bottom-0 left-0  w-0 h-0 mb-0 transition-all duration-200 ease-out  transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-b-2 group-hover:border-l-2 border-red-600 opacity-90 "></span>
                                        <span class="absolute z-1 top-0 left-0  w-0 h-0 mb-0 transition-all duration-700 ease-out  transform  translate-y-0 group-hover:w-full group-hover:h-full group-hover:border-t-2   border-red-600 opacity-90 "></span>
                                        <span class="absolute z-1 top-0 right-0  w-0 h-0 mb-0 transition-all duration-700 ease-out  transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-r-2  border-red-600 opacity-90 "></span>
                                        <span className='relative group-hover:text-[#EA676C] text-2xl'>الرئيسية</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='w-full flex justify-end'>
                                <img src={Logo} className="w-1/6 h-fit mt-8 mr-32" />
                            </div>
                        </div>
                        {/*  */}
                        <div className='w-full h-full flex '>
                            <Carousel infiniteLoop="true" showStatus={false} autoPlay="true" showIndicators={false} showArrows={false} showThumbs={false} interval={5000} className='mt-10 w-full h-full'>
                                <div className='h-full w-full flex '>
                                    <img src={FScroll} className="w-full mb-20 h-3/4 " />
                                </div>
                                <div className='h-full w-full flex '>
                                    <img src={SScroll} className="w-full mb-20 h-3/4 " />
                                </div>
                                <div className='h-full w-full flex '>
                                    <img src={TScroll} className="w-full mb-20 h-3/4 " />
                                </div>
                            </Carousel>
                            <div className='w-full h-full mt-32  mr-2'>
                                <div className='text-right flex flex-col justify-center items-end w-4/5 ml-5'>
                                    <h1 className='w-full text-[#035AA7] text-7xl  font-Somar-ExtraBold '> أنشئ متجرك الخاص <span className='text-[#EA676C] font-Somar-Black'>مجاناً </span> و ابدأ البيع الأن</h1>

                                    <p className='w-3/5 font-semibold mt-2 text-[#035AA7] font-Somar-SemiBold text-xl'> امتلك متجر  احترافي بسهولة وسرعة وانطلق في عالم البيع الالكتروني</p>

                                    <div className='flex justify-end h-[5rem] items-center'>
                                        <Link to="/Info" className='relative mr-5 group overflow-hidden rounded-lg h-fit w-fit flex  z-0  justify-center items-center  border-2 border-[#035AA7] hover:border-none'>
                                        <span class="absolute z-10 bottom-0 left-0  w-0 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-b-4 group-hover:border-l-4 border-red-600 opacity-90 "></span>
                                                <span class="absolute z-10 top-0 left-0  w-0 h-0 mb-0 transition-all duration-600 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-t-4   border-red-600 opacity-90 "></span>
                                                <span class="absolute z-10 top-0 right-0  w-0 h-0 mb-0 transition-all duration-600 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-r-4  border-red-600 opacity-90 "></span>
                                            <a className='px-6 py-2'>
                                                    <span className='relative group-hover:text-[#EA676C] font-Somar-Bold text-xl text-[#035AA7]'>تجربة المنصة</span>
                                            </a>
                                        </Link>
                                        <div className='flex justify-center items-center '>
                                            <Link to="/CreateStoreBody" className=' px-12 py-2 rounded-lg bg-[#035AA7] text-white font-semibold cursor-pointer font-Somar-Bold text-xl'>أنشئ متجرك مجاناً </Link>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                {/* */}

                <div id="WhySimple"  className="bg-no-repeat bg-right bg-cover py-32 ">
                    <img src={WhySimple} className="m-auto w-1/4" />
                    <div dir='rtl' lang='ar' className='grid grid-cols-3 gap-16  mt-16 mx-10'>
                        <div className='flex flex-col'>
                            <img src={ScreenIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center lg:mb-2'>
                                <h1 className='text-center text-3xl text-[#183C6C] py-1 font-Somar-Bold'>امتلك متجر بهويتك و بأقل التكاليف</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed'>مع بسيط تستطيع خلال دقائق إنشاء متجرك الخاص بأقل التكاليف والحصول على استضافة مجانية وتحديثات مستمرة ومتجددة وبدون أي عمولة على المبيعات   </p>
                            </div>
                        </div>

                        <div className='flex flex-col mb-6'>
                            <img src={ListIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-3xl text-[#183C6C] py-1 font-Somar-Bold'>سهولة إدراج المنتجات وإدارة المخزون</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed'>ستتمكن من إدارة منتجاتك مهما كان نوع هذه المنتجات سواءاً منتجات جاهزة أو حسب الطلب أو منتجات رقمية وغيرها بكل سهولة   </p>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <img src={CardIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-3xl text-[#183C6C] py-1 font-Somar-Bold'>دعم جميع وسائل الدفع</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed'>في سلة نوفر لك جميع  وسائل الدفع بدءأ نت التحويل البنكي والدفع عند الاستلام والدفع  بالبطاقات الائتمانية (فيزا وماستر كارد) والدفع بواسطة آبل باي وكذلك باي  بال</p>
                            </div>
                        </div>

                        <div className='flex flex-col '>
                            <img src={ToolAdvertising} className="m-auto w-1/4 mt-2" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-3xl text-[#183C6C] py-1 font-Somar-Bold'>أدوات تسويقية لزيادة مبيعاتك</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed'>حرصنا من تمكين التجار من التسويق بشكل قوي و بأدوات سهلة وبسيطة , حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء   (فيزا وماستر كارد) والدفع بواسطة آبل باي وكذلك باي  بال</p>
                            </div>
                        </div>

                        <div className='flex flex-col lg:mb-5'>
                            <img src={ShopIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-3xl text-[#183C6C] py-1 font-Somar-Bold'>تقارير مفاصة لقياس أداء المتجر</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed'>من خلال التقارير ستتمكن من الحصول على جميع المعلومات  التي تحتاج إليها لمعرفة أداء المتجر واتخاذ أفضل القرارات</p>
                            </div>
                        </div>


                        <div className='flex flex-col'>
                            <img src={CursorIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-3xl text-[#183C6C] py-1 font-Somar-Bold'>تصاميم احترافية</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed'>تصميم المتجر ومظهره هو مايكوّن أول انطباع لدى العميل عن مدى احترافية القائمين على المتجر ,لذلك وفرنا لكم تشكيلة من التصاميم عالية الاحترافية </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* */}
                <div className='flex flex-col justify-start  py-32'>
                    <div className=' flex flex-col w-full h-full'>

                        {/*  */}
                        <div className='relative w-full h-full flex '>
                            <img id="HomeStoresCover" src={HomeStoresCover}  className="bottom-[-35rem] absolute bg-cover bg-no-repeat z-0"/>
                            <div  className='relative z-10  h-full w-full flex justify-center items-center'>
                                <img src={BigScreen} className="w-3/4 mb-16 h-3/4 " />
                                <div className='absolute flex justify-center'>
                                    <img id="ScreenImg" src={Stores.BackGround[Index]} className={`${!Loading && "hidden"} animate-Showup w-8/12 lg:w-[62%] mb-24 h-3/4 `} />
                                    {!Loading &&
                                                <svg role="status" class="w-8 h-8 mr-2 mb-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                                </svg>
                                                }
                                </div>
                            </div>
                            <div className='relative z-10 w-full h-full flex justify-center mr-5  pb-10'>
                                <div className='text-center flex flex-col justify-center items-end w-4/5 ml-5'>
                                    <h1 className='w-full text-[#035AA7] text-6xl font-bold  font-serif '>متاجر على منصة بسيط</h1>

                                    <div className='flex flex-col text-center items-center m-10'>
                                        
                                        <img id="TitleImg" src={Stores.Image[Index]} className={`${!Loading && "hidden"} w-3/12 mb-5 animate-Showup` }onLoad={() => OnImageLoad()} />
                                        {!Loading &&
                                                <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                                </svg>
                                                }
                                        <div className='w-full  text-[#035AA7] flex '>
                                            <img src={LeftArrow} className="mr-5 cursor-pointer" onClick={() => BackSlide()} />
                                            <p id="Title" className='text-[#183C6C] font-Somar-Regular text-xl' >{Stores.Paragraph[Index]}</p>
                                            <img src={RightArrow} className="ml-5 cursor-pointer" onClick={() => NextSlide()} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-full '>
                        <div className=" py-36 relative z-20">
                            <h1 className='text-6xl text-center text-[#035AA7]'>بــاقات بـــسيط</h1>
                            <img src={PackagesDrop} className="w-full h-fit relative z-20 mt-[-10rem]"/>
                            <div className=' grid grid-cols-6 w-full h-fit mt-[-4px]  '>
                                <div className='col-start-2'>
                                <div className=' grid grid-cols-1 w-full h-fit mt-[-4px] col-start-2  group'>
                           
                                <div dir='rtl' className=' group-hover:animate-RotateR group-hover:ml-5 group overflow-hidden ml-2 col-start-2 bg-[#006699] space-y-3 bg-center relative z-0    h-fit w-full flex flex-col justify-center items-center   text-white font-semibold mt-[-45px] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl p-2'>
                                    <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-700 ease-out transform translate-y-0 bg-[#EA676C] group-hover:h-full opacity-90 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"></span>
                                    <div className='relative flex flex-col  justify-center items-center'>
                                        <h1 id="package1H" className='text-6xl font-bold mt-6 font-Somar-ExtraBold'>باقة بيسك</h1>
                                        <p id="package1P" className='font-Somar-SemiBold mt-2 text-4xl'>مجاناً</p>
                                        <div id="package1Div"  className=' flex flex-col items-center space-y-1 pb-10 pt-5 text-lg'>
                                            <p className=' text-center font-Somar-SemiBold'>عدد لا محدود من المنتجات </p>
                                            <p className=' text-center font-Somar-SemiBold'>عدد لا محدود من الطلبات  </p>
                                            <p className=' text-center font-Somar-SemiBold'>عدد لا محدود من العملاء</p>
                                            <p className=' text-center font-Somar-SemiBold'>عدد لا محدود من كوبونات التخفيض</p>
                                            <p className=' text-center font-Somar-SemiBold'>استقبال أسئلة وتقيمات</p>
                                        </div>
                                    </div>
                                        </div>
                                        <div className='flex justify-center w-full col-start-2 row-start-1'>
                                        <div className='grid grid-cols-6 w-full  h-fit'>
                                    <div  className='group-hover:animate-RotateRope  flex relative z-10 col-start-2   h-fit w-full  justify-start items-start   p-2'>
                                      <img src={LeftLeftRope}  className="mt-[-1.9rem] w-[1.2rem]"/>
                                    </div>
                                    <div  className='group-hover:animate-Short  flex relative z-10 col-start-5 ml-[1.5rem]   h-fit w-full  justify-end items-end   p-2'>
                                      <img src={LeftRightRope}  className=" mt-[-0.8rem] w-[1rem]"/>
                                            </div>
                                            </div>
                                            </div>
                                    </div>
                                    </div>
                                <div className='flex justify-center  w-full col-start-3 col-end-5'>
                                <div className=' grid grid-cols-1 w-1/2    h-fit mt-[-4px]   group'>
                                
                                <div className='group-hover:animate-RotateL   w-full flex justify-center items-center mx-auto'>

                                    <div dir='rtl' className='w-full ml-3 col-start-2 group overflow-hidden bg-[#006699] space-y-3 bg-center relative z-0  row-start-1   h-fit  flex flex-col justify-center items-center   text-white font-semibold mt-[-40px] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl p-2'>
                                        <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-700 ease-out transform translate-y-0 bg-[#EA676C] group-hover:h-full opacity-90 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"></span>
                                        <div className='relative flex flex-col justify-center items-center'>
                                            <h1 id="package2H" className='text-6xl font-bold mt-6 font-Somar-ExtraBold '>باقة بلس</h1>
                                            <p id="package2P" className='font-bold  mt-2 font-Somar-SemiBold text-4xl'>99 دولار شهرياً</p>
                                            <div id="package2Div" className=' flex flex-col items-center space-y-1 pb-10 pt-5 text-lg'>
                                                <p className='text-center font-Somar-SemiBold'>جميع مميزات باقة بيسك </p>
                                                <p className='text-center font-Somar-SemiBold'>أدوات تسويقية  </p>
                                                <p className='text-center font-Somar-SemiBold'>دعم جميع أنواع النتجات</p>
                                                <p className='text-center font-Somar-SemiBold'>تقارير متقدمة</p>
                                                <p className='text-center font-Somar-SemiBold'>التحكم بتصميم المتجر</p>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <div className='flex justify-center w-full  col-start-1 row-start-1 '>
                                        <div className='grid grid-cols-6 w-full  h-fit'>
                                        <div  className='group-hover:animate-Short  flex relative z-10 col-start-2   h-fit w-full  justify-start items-start   p-2'>
                                      <img src={LeftLeftRope}  className="mt-[-0.8rem] w-[1rem]"/>
                                    </div>
                                    <div  className='group-hover:animate-RotateRopeBack  flex relative z-10 col-start-5 ml-[0.8rem]   h-fit w-full  justify-end items-end   p-2'>
                                      <img src={LeftRightRope}  className=" mt-[-0.8rem] w-[1rem]"/>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className=' grid grid-cols-1 w-full col-start-5   h-fit mt-[-4px] ml-[-1rem]  group'>
                                
                                <div dir='rtl' className='hover:animate-Rotate group  overflow-hidden  bg-[#006699] space-y-3 bg-center relative z-0  bg-no-repeat  h-fit w-full flex flex-col justify-center items-center   text-white font-semibold mt-[-38px] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl p-2'>
                                    <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-700 ease-out transform translate-y-0 bg-[#EA676C] group-hover:h-full opacity-90 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"></span>
                                    <div className='relative flex flex-col justify-center items-center'>
                                        <h1 id="package3H" className='text-6xl font-bold mt-6 font-Somar-ExtraBold '> باقة برو</h1>
                                        <p id="package3P" className='font-bold  mt-2 font-Somar-SemiBold text-4xl'>299 دولار شهرياً</p>
                                        <div id="package3Div" className=' flex flex-col items-center space-y-1 pb-10 pt-5 text-lg'>
                                            <p className=' text-center font-Somar-SemiBold'>جميع مميزات باقة برو </p>
                                            <p className=' text-center font-Somar-SemiBold'>إضافة فريق عمل  </p>
                                            <p className=' text-center font-Somar-SemiBold'>تعيين صلاحيات محددة للمستخدمين</p>
                                            <p className=' text-center font-Somar-SemiBold'>الربط مع الخدمات الاعلانية</p>
                                            <p className=' text-center font-Somar-SemiBold'>دعم ضريبة القيمة المضافة</p>
                                        </div>
                                    </div>
                                    </div>
                               
                                    <div className='flex justify-center w-full col-start-1 row-start-1'>
                                        <div className='grid grid-cols-6 w-full  h-fit'>
                                    <div  className='group-hover:animate-RotateRope  flex relative z-10 col-start-2 ml-[-2px]  h-fit w-full  justify-start items-start   p-2'>
                                      <img src={LeftLeftRope}  className="mt-[-1.3rem]  w-[1rem]"/>
                                    </div>
                                    <div  className='group-hover:animate-Short  flex relative z-10 col-start-5 ml-[1rem]   h-fit w-full  justify-end items-end   p-2'>
                                      <img src={LeftRightRope}  className="  mt-[-2.3rem] w-[1.2rem]"/>
                                            </div>
                                            </div>
                                            </div>
                                 </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start  mt-8'>
                            <div className=' flex flex-col w-full h-full'>

                                {/*  */}
                                <div className='relative w-full h-full flex flex-col z-10 '>
                                        <img id="SaidAboutBassetCover" src={SaidAboutBassetCover}  className="bottom-[-38rem] absolute bg-cover bg-no-repeat z-0"/>
                                    
                                    <div className='relative z-10 w-full h-full flex flex-col justify-center items-center mr-5  pb-10'>
                                        <div className='text-center flex flex-col justify-center items-center w-4/5 ml-5'>
                                            <img src={SaidAboutBaseet} className='w-1/3' />
                                            
                                        {/* Work */}
                                            <div className='w-1/2 h-[17rem] flex flex-col text-center items-center mb-5 mt-10 bg-[#FFFFFF] p-5 rounded-3xl shadow-md'>
                                                <img id="CompanyImg" src={Stores.Image[IndexSlide]} className={`${!LoadingWhatSaid && "hidden"} animate-Showup w-5/12  mb-5 `} onLoad={()=>OnWhatSaidImageLoad()}/>
                                                {!LoadingWhatSaid &&
                                                <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                                </svg>
                                                }
                                                <div className='w-3/4 text-[#035AA7] flex '>
                                                    <p className='text-[#183C6C] font-Somar-Regular text-xl ' id='CompanyTitle'>{Stores.Paragraph[IndexSlide]}</p>
                                                </div>
                                            </div>




                                        </div>
                                        <div className='flex  mt-4'>
                                            <div className='flex justify-center w-full h-full pb-10 space-x-3 items-center'>
                                                <img src={BlueLeftArrow} className=" cursor-pointer" onClick={() => BackSlideRefrence()} />
                                                <a id="one" className='px-1.5 py-0 border-[#FDB958] border-2 rounded-full text-[#FDB958] cursor-pointer'>1</a>
                                                <a id="two" className='px-1.5 py-0 rounded-full border-2 border-[#FDB958] bg-[#FDB958] text-white cursor-pointer'>2</a>
                                                <a id="three" className='px-1.5 py-0 border-[#FDB958] border-2 rounded-full text-[#FDB958] cursor-pointer'>3</a>
                                                <img src={BlueRightArrow} className="ml-5 cursor-pointer" onClick={() => NextSlideRefrence()} />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>

                </div>

                {/*  */}

                <form className='relative flex flex-col ' name='EmailformDesktop' onSubmit={(e) => Send(e)}>
                <img id='HomeContactCover' src={HomeContactCover}  className="bottom-0 absolute bg-cover bg-no-repeat z-0"/>
                    
                    <div className='relative flex flex-col items-center justify-center w-fit h-fit '>
                        <div className='px-12  flex flex-col h-fit w-full items-center '>
                            <div className='flex h-fit w-full relative z-30'>
                                <img src={ContactImg} className="w-1/2 p-10 h-[80%]" />
                                <div dir="rtl" lang="ar" className='w-1/2 h-fit flex-col mr-20 mt-20'>
                                    <h1 className='w-full text-[#035AA7] text-5xl font-Somar-ExtraBold'>تواصل معنا  </h1>
                                    <p className='w-1/2 mt-2 font-Somar-Regular text-xl text-[#183C6C] '>يمكنك مراسلتنا في أي وقت تريد من نموذج التواصل أدناه
                                        أو الاتصال بنا على الرقم الموحد 940058260 </p>
                                    <div className='flex flex-col h-full w-3/4 mt-10 text-[#035AA7]'>
                                        <input id="name" name="from_name" type="text" placeholder='الاسم' className='text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 outline-none' onChange={(e) => DesktopNameContact(e)} />
                                        <span id="NameMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال اسمك</span>

                                        <input id="email" name='from_email' type="email" placeholder='البريد الالكتروني' className=' text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 mt-5 outline-none' onChange={(e) => DesktopEmailContact(e)} />
                                        <span id="emailMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال البريد الالكتروني</span>

                                        <textarea id="message" name='message' rows="6" cols="50" placeholder='التفاصيل' className='text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 mt-5 outline-none' onChange={(e) => DesktopMessageContact(e)} />
                                        <span id="ContentMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال نص الرسالة</span>

                                    </div>
                                </div>
                            </div>
                            <button className='mt-5 w-1/12  border-4  border-[#EA676C] py-2    rounded-lg text-[#EA676C] pr-20 pl-10 font-semibold font-Somar-Bold text-2xl' onClick={(e) => Send(e)}>ارسل</button>
                            {/* Footer */}
                            <div className=' mt-32 flex justify-evenly  p-2 w-3/4 m-auto ml-40 mb-2'>
                                <div className='flex flex-col  items-center'>
                                    <div className='flex mb-2 '>
                                        <a href='https://www.instagram.com/modar.salama/' target="_blank" className=' cursor-pointer mr-2 border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>
                                            <AiOutlineInstagram className='m-1 text-lg text-white' />
                                        </a>
                                        <a href='https://www.facebook.com/modar.salama' target="_blank" className='  cursor-pointer mr-2 text-center border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>
                                            <FaFacebookSquare className='m-1 text-xl text-white' />
                                        </a>
                                        <a href='https://twitter.com/modarsalama' target="_blank" className='  cursor-pointer mr-2 border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>
                                            <AiOutlineTwitter className='m-1 text-xl text-white' />
                                        </a>
                                        <a href='https://www.youtube.com/channel/UCq5b6BlR9OuB5B-ul4aTTKw' target="_blank" className='  cursor-pointer mr-2 border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>

                                            <AiFillYoutube className='m-1 text-xl text-white' />
                                        </a>
                                    </div>
                                    <p className=' font-semibold text-[#035AA7] font-Somar-SemiBold text-xl'>جميع الحقوق محفوظة</p>
                                </div>
                                <div dir='rtl' className='flex flex-col'>
                                <h1 className=' text-[#035AA7] font-Somar-Black font-bold text-2xl'>من المدونة</h1>
                              <p className='mt-2 font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'>تصوير المنتجات باحترافية وبأقل التكاليف</p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'>استراتيجيات التسعير الاحترافية </p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  text-[#4F4D4D]'>التجارة الالكترونية</p>
                                </div>
                                <div dir='rtl' className='flex flex-col'>
                                <h1 className=' text-[#035AA7] font-Somar-Black font-bold text-2xl'>عن بسيط</h1>
                              <p className='mt-2  font-Somar-Regular lg:font-Somar-Medium mb-1  text-[#4F4D4D]'>اتفاقية الاستخدام</p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'> سياسة الخصوصية </p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium text-[#4F4D4D]'>انضم لفريق بسيط</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            {/* Android */}
            <div className=" w-full h-full lg:hidden">
                <div className='flex justify-start'>

                    <div style={{ backgroundImage: `url(${Cover})` }} className=' flex flex-col w-full h-full bg-contain bg-no-repeat '>
                        <div id="header" className='flex justify-evenly '>
                            <div className='hidden w-full mt-2 justify-center lg:flex text-[#035AA7] font-semibold'>
                                <p className='m-3'>تسجيل الدخول</p>
                                <p className='m-3'>تجربة المنصة</p>
                                <p className='m-3'>المدونة</p>
                                <p className='m-3'>الأسعار</p>
                                <p className='m-3'>الرئيسية</p>
                            </div>
                            <div className='flex h-100 w-1/3 p-2 lg:hidden'>
                                <img id="drawerbtn" src={Drawer} className='text-white text-4xl m-2 mt-0 cursor-pointer w-10 h-20' onClick={() => drawer()} />
                            </div>
                            <div className='w-full flex justify-end'>
                                <img src={Logo} className="w-1/6 h-fit mt-8 mr-5 lg:mr-32" />
                            </div>
                        </div>
                        {/*  */}
                        <div className='w-full h-full flex flex-col lg:flex-row'>
                            <div className='h-full w-full flex justify-center'>
                                <img src={FScroll} className="w-3/4 mb-20 h-3/4 lg:w-full " />
                            </div>
                            <div className='w-full h-full lg:mt-32  '>
                                <div className='text-right flex flex-col justify-center items-center lg:items-end w-full m-auto'>
                                    <h1 className=' text-[#035AA7] text-6xl font-bold  leading-snug mr-5  font-Somar-Black'> أنشئ متجرك الخاص <span className='lg:text-[#EA676C]'>مجاناً </span> و ابدأ البيع الأن</h1>
                                    <div className='flex flex-col w-full justify-center mx-auto items-center  mb-16 text-center'>
                                        <p className='w-3/4 md:w-1/2 lg:w-full  text-[#035AA7] text-2xl font-Somar-Regular '> امتلك متجر  احترافي بسهولة وسرعة</p>
                                        <p className='w-3/4 md:w-1/2 lg:w-full  mt-2 text-[#035AA7] text-2xl font-Somar-Regular'>  وانطلق في عالم البيع الالكتروني</p>
                                    </div>
                                    <div className='flex justify-center '>
                                        <a className='px-3 py-1 mr-10 lg:px-6 lg:py-2.5 rounded-lg bg-white font-semibold border-2 cursor-pointer text-[#EA676C] border-[#EA676C] pt-2  font-Somar-Bold'>تجربة المنصة </a>
                                        <a className='px-6 py-2  lg:px-12 lg:py-3 rounded-lg bg-[#035AA7] text-white font-semibold cursor-pointer font-Somar-Bold'>أنشئ متجرك مجاناً </a>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                {/* */}

                <div style={{ backgroundImage: `url(${WhySimpleCover})` }} className='mt-20 w-full  bg-no-repeat bg-right bg-cover mb-10'>
                    <img src={WhySimple} className="m-auto w-2/4 lg:w-1/4" />
                    <div dir='rtl' lang='ar' className='grid grid-cols-2 lg:grid-cols-3 gap-16 px-2  mt-16 mx-auto '>
                        <div className='flex flex-col  h-1/6'>
                            <img src={ScreenIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-2xl text-[#183C6C] py-1 font-Somar-ExtraBold font-bold'>امتلك متجر بهويتك و بأقل التكاليف</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed font-Somar-Light'>مع بسيط تستطيع خلال دقائق إنشاء متجرك الخاص بأقل التكاليف والحصول على استضافة مجانية وتحديثات مستمرة ومتجددة وبدون أي عمولة على المبيعات   </p>
                            </div>
                        </div>

                        <div className='flex flex-col  h-1/6'>
                            <img src={ListIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-2xl text-[#183C6C] py-1 font-Somar-ExtraBold font-bold'>سهولة إدراج المنتجات وإدارة المخزون</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed font-Somar-Light'>ستتمكن من إدارة منتجاتك مهما كان نوع هذه المنتجات سواءاً منتجات جاهزة أو حسب الطلب أو منتجات رقمية وغيرها بكل سهولة   </p>
                            </div>
                        </div>

                        <div className='flex flex-col h-1/6 row-start-3 col-start-2 lg:row-start-2 '>
                            <img src={CardIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-2xl text-[#183C6C] py-1 font-Somar-ExtraBold font-bold'>دعم جميع وسائل الدفع</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed font-Somar-Light'>في سلة نوفر لك جميع  وسائل الدفع بدءأ نت التحويل البنكي والدفع عند الاستلام والدفع  بالبطاقات الائتمانية (فيزا وماستر كارد) والدفع بواسطة آبل باي وكذلك باي  بال</p>
                            </div>
                        </div>

                        <div className='flex flex-col h-1/6 row-start-1 col-start-2'>
                            <img src={ToolAdvertising} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-2xl text-[#183C6C] py-1 font-Somar-ExtraBold font-bold'>أدوات تسويقية لزيادة مبيعاتك</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed font-Somar-Light'>حرصنا من تمكين التجار من التسويق بشكل قوي و بأدوات سهلة وبسيطة , حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء   (فيزا وماستر كارد) والدفع بواسطة آبل باي وكذلك باي  بال</p>
                            </div>
                        </div>

                        <div className='flex flex-col h-1/6'>
                            <img src={ShopIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-2xl text-[#183C6C] py-1 font-Somar-ExtraBold font-bold'>تقارير مفاصة لقياس أداء المتجر</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed font-Somar-Light'>من خلال التقارير ستتمكن من الحصول على جميع المعلومات  التي تحتاج إليها لمعرفة أداء المتجر واتخاذ أفضل القرارات</p>
                            </div>
                        </div>


                        <div className='flex flex-col h-1/6'>
                            <img src={CursorIcon} className="m-auto w-1/4" />
                            <div className='flex flex-col items-center '>
                                <h1 className='text-center text-2xl text-[#183C6C] py-1 font-Somar-ExtraBold font-bold'>تصاميم احترافية</h1>
                                <p className='text-center text-sm w-9/12 leading-relaxed font-Somar-Light'>تصميم المتجر ومظهره هو مايكوّن أول انطباع لدى العميل عن مدى احترافية القائمين على المتجر ,لذلك وفرنا لكم تشكيلة من التصاميم عالية الاحترافية </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* */}
                <div className='flex flex-col justify-start mt-20'>
                    <div style={{ backgroundImage: `url(${StoresCover})` }} className=' flex flex-col w-full min-h-[100vh] bg-cover bg-no-repeat bg-center  bg-fill'>

                        {/*  */}
                        <div className='w-fit h-full flex justify-center mr-5  pb-10'>
                            <div className='text-center flex flex-col justify-center items-end w-4/5 ml-5'>
                                <h1 className='w-full text-[#035AA7]  text-5xl font-bold  font-serif  '>متاجر على منصة بسيط</h1>

                                <div className='flex flex-col text-center items-center mb-1'>
                                    <img id="TitleImg" src={Stores.Image[Index]} className="w-4/12 mb-5 mt-10  ml-28 " />
                                    <div className='w-full ml-28 justify-center md: items-center  text-[#035AA7] flex '>
                                        <p id="Title" className='w-3/4  md:w-5/12 text-xl font-Somar-Regular '>{Stores.Paragraph[Index]}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='w-full h-full grid grid-cols-1'>
                            <div className='h-full w-full flex flex-col justify-center items-center'>
                                <div className='flex flex-col justify-center pb-28 w-3/4'>
                                    <img src={BigScreen} className="w-8/12 md:w-6/12 md:ml-56 h-full ml-28 " />
                                    <div className='flex justify-center ml-10 p-5 w-full h-full mt-10 pb-10 space-x-3 items-center'>
                                        <img src={LeftArrow} className=" cursor-pointer " onClick={() => BackSlide()} />
                                        <a className=' text-[#FDB958] cursor-pointer'>1</a>
                                        <a className='px-3 py-1 rounded-full bg-[#FDB958] text-white cursor-pointer'>2</a>
                                        <a className=' text-[#FDB958] cursor-pointer '>3</a>
                                        <img src={RightArrow} className="ml-5 cursor-pointer " onClick={() => NextSlide()} />
                                    </div>
                                    <div className='absolute flex justify-center items-center w-1/2 h-1/4'>
                                        <img id="ScreenImg" src={Stores.BackGround[Index]} className=" w-[83%] md:w-[61%]  ml-[28rem] mb-[22rem] md:ml-[34.7rem]  mr-56 mt-[12rem] md:mt-[11.6rem] "  />
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                {/* */}
                <div style={{ backgroundImage: `url(${AndroidCoverPackage})` }} className='h-fit w-full  bg-center bg-no-repeat'>
                    <h1 className='text-6xl text-center text-[#035AA7] font-Somar-ExtraBold'>بــاقات بـــسيط</h1>

                    <div className=' flex flex-col w-full h-full '>
                        <img src={HeaderPackage} className=' flex w-full h-full bg-no-repeat ' />
                        <div className=' w-full h-full flex justify-center flex-col items-center'>
                            <div style={{ backgroundImage: `url(${FirstSildePackage})` }} dir='rtl' className='space-y-3 bg-center  bg-no-repeat  h-[38rem] w-full flex flex-col justify-center items-center   text-white font-semibold mt-[-13px] '>
                                <h1 className='text-6xl font-bold mt-32 font-Somar-ExtraBold'>باقة بيسك</h1>
                                <p className='font-bold text-4xl mt-2 font-Somar-SemiBold'>مجاناً</p>
                                <div className='leading-10 flex flex-col items-center space-y-1 pt-3'>
                                    <p className='text-lg font-Somar-SemiBold'>عدد لا محدود من المنتجات </p>
                                    <p className='text-lg font-Somar-SemiBold'>عدد لا محدود من الطلبات  </p>
                                    <p className='text-lg font-Somar-SemiBold'>عدد لا محدود من العملاء</p>
                                    <p className='text-lg font-Somar-SemiBold'>عدد لا محدود من كوبونات التخفيض</p>
                                    <p className='text-lg font-Somar-SemiBold'>استقبال أسئلة وتقيمات</p>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${SecondSlidePackage})` }} dir='rtl' className='space-y-3 bg-center  bg-no-repeat  h-[45rem] w-full flex flex-col justify-center items-center   text-white font-semibold mt-[-35px] '>
                                <h1 className='text-6xl font-bold  font-Somar-ExtraBold'>باقة بلس</h1>
                                <p className='font-bold text-4xl mt-2 font-Somar-SemiBold'>99 دولار شهرياً</p>
                                <div className='leading-10 flex flex-col items-center space-y-1 pt-3'>
                                    <p className='text-lg font-Somar-SemiBold'>جميع مميزات باقة بيسك</p>
                                    <p className='text-lg font-Somar-SemiBold'>أدوات تسويقية </p>
                                    <p className='text-lg font-Somar-SemiBold'>دعم جميع أنواع النتجات</p>
                                    <p className='text-lg font-Somar-SemiBold'>تقارير متقدمة</p>
                                    <p className='text-lg font-Somar-SemiBold'>التحكم بتصميم المتجر</p>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${ThirdSildePackage})` }} dir='rtl' className='bg-center  bg-no-repeat  h-[29rem] w-full flex flex-col justify-center items-center space-y-1  text-white font-semibold mt-[-13px] '>
                                <h1 className='text-6xl font-bold mb-2 font-Somar-ExtraBold'>باقة برو</h1>
                                <p className='font-bold text-4xl mt-2 font-Somar-SemiBold'>299 دولار شهرياً</p>
                                <div className='leading-10 flex flex-col items-center space-y-1 pt-3'>
                                    <p className='text-lg font-Somar-SemiBold'>جميع مميزات باقة برو</p>
                                    <p className='text-lg font-Somar-SemiBold'>إضافة فريق عمل </p>
                                    <p className='text-lg font-Somar-SemiBold'>تعيين صلاحيات محددة للمستخدمين</p>
                                    <p className='text-lg font-Somar-SemiBold'>الربط مع الخدمات الاعلانية</p>
                                    <p className='text-lg font-Somar-SemiBold'>دعم ضريبة القيمة المضافة</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* */}
                <div  className='relative w-full flex flex-col justify-start   mt-16 bg-no-repeat bg-none  m-auto md:mt-[5rem]'>
                    <img id='AndroidSaidAboutBassetCover' src={AndroidSaidAboutBassetCover} className="absolute bg-no-repeat bg-center bg-none m-auto top-[-5rem] md:top-[-64%] md:mt-10 "/>
                    
                    <div className='relative flex flex-col w-full h-full'>

                        {/*  */}
                        <div id='SaidAboutBaseet' className='w-full h-full flex flex-col  md:mt-[0.7rem]'>
                            <div className='w-full h-full flex justify-center mr-5  pb-10 '>
                                <div className='text-center flex flex-col justify-center items-center w-4/5 ml-5  '>
                                    <img src={SaidAboutBaseet} className='w-1/2 h-1/2 md:mb-5' />

                                    <div className='w-[95%] h-[11rem] md:w-[90%] md:h-[18rem] flex flex-col text-center mt-[3rem] md:mt-0 items-center  justify-center mb-5  bg-white p-2 rounded-3xl shadow-lg'>
                                        <img id='ACompanyImg' src={Stores.Image[IndexSlide]} className="w-5/12 mt-4  mb-5" />
                                        <div className='w-full h-[15rem] text-[#035AA7] flex '>
                                            <p id='ACompanyTitle' className='text-xs md:text-lg h-full px-5 pb-5 '>{Stores.Paragraph[IndexSlide]}</p>
                                        </div>
                                    </div>

                                    <div className='flex  mt[1.5rem] '>
                                        <div className='flex justify-center w-full h-full pb-10 space-x-3 items-center'>
                                            <img src={BlueLeftArrow} className=" cursor-pointer" onClick={() => ABackSlideRefrence()} />
                                            <a id="Aone" className='px-1.5 py-0 border-[#FDB958] border-2 rounded-full text-[#FDB958] cursor-pointer'>1</a>
                                            <a id="Atwo" className='px-1.5 py-0 rounded-full border-2 border-[#FDB958] bg-[#FDB958] text-white cursor-pointer'>2</a>
                                            <a id="Athree" className='px-1.5 py-0 border-[#FDB958] border-2 rounded-full text-[#FDB958] cursor-pointer'>3</a>
                                            <img src={BlueRightArrow} className="ml-5 cursor-pointer" onClick={() => ANextSlideRefrence()} />
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* */}
                <form className='flex flex-col justify-center items-center m-auto mt-20 md:mt-20' name="EmailformAndroid">
                    <div className='flex flex-col items-center justify-center w-fit h-fit '>
                        <div className='flex flex-col h-fit w-full items-center '>
                            <div className='relative flex flex-col justify-center items-center h-fit w-full z-10 '>
                            <img src={AndroidHomeContactCover} className="absolute z-0" />

                                <img src={ContactUs} className="relative w-1/3 h-[80%] mb-5" />

                                <img src={ContactImg} className="relative w-1/2 h-[80%]" />
                                <div dir="rtl" lang="ar" className='relative w-1/2 h-fit flex-col '>
                                    <p className='text-center w-full mt-2 text-[#035AA7]'>يمكنك مراسلتنا في أي وقت تريد من نموذج التواصل أدناه
                                        أو الاتصال بنا على الرقم الموحد 940058260 </p>
                                    <div className='flex flex-col h-full w-full mt-10 text-[#035AA7]'>
                                        <input id='nameA' name="from_name" type="text" placeholder='الاسم' className='text-right text-[#035AA7] border-2 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 ' />
                                        <span id="ANameMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال اسمك</span>

                                        <input id='emailA' name='from_email' type="email" placeholder='البريد الالكتروني' className=' text-right text-[#035AA7] border-2 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 mt-5' />
                                        <span id="AemailMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال البريد الالكتروني</span>

                                        <textarea id='messageA' name='message' rows="6" cols="50" placeholder='التفاصيل' className='text-right text-[#035AA7] border-2 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 mt-5' />
                                        <span id="AContentMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال نص الرسالة</span>

                                    </div>
                                </div>
                            </div>
                            <button onClick={(e) => SendForAndroid(e)} className='mt-5 w-1/6 border-2 border-[#EA676C] pr-2 py-1.5 rounded-lg text-[#EA676C]  font-semibold'>ارسال</button>
                            {/* Footer */}
                            <div className='relative  mt-20 grid grid-cols-2  p-2 m-auto  gap-5 w-3/4  mb-2 z-10 md:mt-28'>
                               <img src={AndroidHomeFooterCover} className="absolute w-[full] z-0 bottom-0 bg-cover md:w-[30rem] md:left-[5rem]"/>
                                <div dir='rtl' className='relative z-10 flex flex-col justify-center leading-relaxed pl-[1rem]'>
                                    <h1 className='font-bold text-[#035AA7] font-Somar-Black text-xl '>من المدونة</h1>
                                    <p className=' font-Somar-Regular text-[#183C6C]'>تصوير المنتجات باحترافية</p>
                                    <p className=' font-Somar-Regular text-[#183C6C]'>استراتيجيات التسعير الاحترافية </p>
                                    <p className=' font-Somar-Regular text-[#183C6C]'>التجارة الالكترونية</p>
                                </div>
                                <div dir='rtl' className='relative z-10 flex flex-col leading-relaxed'>
                                    <h1 className=' text-[#035AA7] font-bold font-Somar-Black text-xl'>عن بسيط</h1>
                                    <p className='mt-1 font-Somar-Regular text-[#183C6C]'>اتفاقية الاستخدام</p>
                                    <p className='font-Somar-Regular text-[#183C6C]'> سياسة الخصوصية </p>
                                    <p className='font-Somar-Regular text-[#183C6C]'>انضم لفريق بسيط</p>
                                </div>
                                <div className='relative z-10 flex flex-col  items-center col-span-2'>
                                    <div className='flex flex-col mb-2 items-center justify-center '>
                                        <div className='flex py-1'>
                                            <a href='https://www.instagram.com/modar.salama/' target="_blank" className=' cursor-pointer mr-2 border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>
                                                <AiOutlineInstagram className='m-1 text-lg text-white' />
                                            </a>
                                            <a href='https://www.facebook.com/modar.salama' target="_blank" className='  cursor-pointer mr-2 text-center border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>
                                                <FaFacebookSquare className='m-1 text-xl text-white' />
                                            </a>
                                            <a href='https://twitter.com/modarsalama' target="_blank" className='  cursor-pointer mr-2 border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>
                                                <AiOutlineTwitter className='m-1 text-xl text-white' />
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCq5b6BlR9OuB5B-ul4aTTKw' target="_blank" className='  cursor-pointer mr-2 border-2 border-[#035AA7] rounded-full bg-[#035AA7]'>

                                                <AiFillYoutube className='m-1 text-xl text-white' />
                                            </a>
                                        </div>
                                        <p className='  text-[#035AA7] mt-3 font-Somar-Regular text-xl'>جميع الحقوق محفوظة لشركة بسيط القابضة</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
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
                                <Link to="" className='font-Somar-Bold text-2xl'>الأسعار </Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
                                <Link to='/Blog' className='font-Somar-Bold text-2xl'>المدونة</Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
                                <Link to=" " className='font-Somar-Bold text-2xl'>تجربة المنصة</Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
                            <Link to="/CreateStoreBody" className='font-Somar-Bold text-2xl'>أنشئ متجرك</Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
                            {token ?
                                    <a href='/' onClick={() => Signout()} >تسجيل الخروج</a>
                                    :
                                    <Link to="/SignIn" className='font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                                }
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block h-full w-full bg-black opacity-40' />
                </div>
            </div>
        </div>
    )
}

export default HomeBody