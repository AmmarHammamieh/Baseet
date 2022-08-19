import React from 'react'
import Logo from "../images/Logo.svg";
import SmallCover from "../images/SmallCover.svg";
import Book from "../images/Book.svg";
import Camera from "../images/Camera.svg";
import StoreIcon from "../images/StoreIcon.svg";
import PhoneImg from "../images/PhoneImg.svg";
import ContactImg from "../images/ContactImg.svg";
import EndCoverRight from "../images/EndCoverRight.svg";
import Drawer from "../images/Drawer.svg";

import { AiOutlineClose} from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import Cookies from 'universal-cookie';

function Info() {
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
        if (document.getElementById('email').value.match(mailformat))
        {
          return true;
        } else {
          document.getElementById('emailMessage').textContent = "لقد ادخلت بريد الكتروني غير مصرح";
          document.getElementById('emailMessage').classList.remove("hidden");
          return false;
        };
    }
    function NameContact(e) {
        if (e.target.value.length > 0) {
            if (!document.getElementById("NameMessage").classList.contains("hidden")) {
            document.getElementById("NameMessage").classList.add("hidden");
            }
        }
    }
    function EmailContact(e) {
        if (e.target.value.length > 0) {
            if (!document.getElementById("emailMessage").classList.contains("hidden")) {
              document.getElementById("emailMessage").classList.add("hidden");
              }
          }
    }
    function MessageContact(e) {
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
            emailjs.sendForm('service_k2tudan', 'template_z187rvq', document.getElementsByName('Emailform')[0], 'dIv8OKyIguG0H5VNa')
                .then((result) => {
                    console.log(result.text);
                    document.location.reload();
                }, (error) => {
                    console.log(error.text);
                });
            document.getElementsByName('Emailform')[0].reset();
    
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
    return (
        <div className=" w-full h-screen ">
            <div className='flex flex-col '>
                <img src={SmallCover} className="w-4/5 h-fit" />
                <div className='absolute flex flex-col w-full h-full min-h-screen '>
                
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
                         <img id="drawerbtn" src={Drawer} className='text-white text-4xl m-2 mt-0 cursor-pointer w-10 h-20' onClick={()=>drawer()} />
                        </div>
                        <div className='w-full flex justify-end'>
                            <img src={Logo} className="w-1/6 h-fit mt-8 mr-5 lg:mr-20" />
                        </div>
                    </div>
                    {/*  */}
                    
                    <div className='relative z-10 w-full h-fit flex '>
                    
                    <div className='hidden relative z-10 h-full w-full lg:flex '>
                            <div className="  w-fit mt-24 h-fit bg-[#F8F8F8] p-5 rounded-3xl shadow-xl m-auto flex-col ">
                                <form className='m-auto px-2 mt-2 '>
                                    <div className='flex items-center w-full bg-white rounded-lg border-4 border-[#035AA7]'>
                                    <AiOutlineSearch className="ml-2 text-[#EA676C] text-3xl"/>
                                    <input dir="rtl" lang="ar" placeholder='ابحث عما تريد...' className="p-2  w-full  focus:outline-none px-4 rounded-lg placeholder-[#EA676C] " type="text"/>
                                    </div>
                                </form>
                                <div className='px-3'>
                                    <p dir="rtl" lang="ar" className='mt-5 text-2xl font-semibold text-[#EA676C] font-Somar-SemiBold '>الأكثر قراءة</p>
                                    <div className='flex justify-end items-center mt-8 border-b-2 pb-5 border-[#2295D6]'>
                                        <div className='flex flex-col mr-5 '>
                                            <p dir="rtl" lang="ar" className='font-Somar-Regular text-xl text-[#11698E]'> الدليل المختصر لفتح سجل تجاري</p>
                                            <p dir="rtl" lang="ar" className='font-Somar-Regular text-xl text-[#11698E]'>الكتروني سوري في 180 ثانية</p>
                                        </div>
                                        <img src={Book} className="w-fit h-fit" />
                                    </div>
                                    <div className='flex justify-end items-center mt-5 border-b-2 pb-5 border-[#2295D6]'>
                                        <div className='flex flex-col mr-5 '>
                                            <p dir="rtl" lang="ar" className='font-Somar-Regular text-xl text-[#11698E]'> تصوير المنتجات باحترافية</p>
                                            <p dir="rtl" lang="ar" className='font-Somar-Regular text-xl text-[#11698E]'>و بأقل التكاليف</p>
                                        </div>
                                        <img src={Camera} className="w-fit h-fit" />
                                    </div>
                                    <div className='flex justify-end items-center mt-5  pb-5 '>
                                        <div className='flex flex-col mr-5 '>
                                            <p dir="rtl" lang="ar" className='font-Somar-Regular text-xl text-[#11698E]'>خمس متاجر الكترونية سورية نجحت</p>
                                            <p dir="rtl" lang="ar" className='font-Somar-Regular text-xl text-[#11698E]'>من خلال منصة بسيط الالكترونية </p>
                                        </div>
                                        <img src={StoreIcon} className="w-fit h-fit" />
                                    </div>
                                </div>

                                </div>
                    </div>
                        <div className='relative z-10 w-full h-full mt-20 mx-10 lg:mx-0  '>
                            <div className='text-right flex flex-col justify-center items-center lg:items-end w-full lg:w-3/4 lg:ml-20 '>
                              <h1 className='font-bold  text-2xl text-[#035AA7] font-Somar-Bold '>كيف تستثمر مميزات واتساب أعمال في التسويق لمتجرك؟</h1>
                                <p dir="rtl" lang="ar" className='mt-5  text-xl  font-Somar-Regular '>في بداية 2018 أطلق تطبيق واتساب، واتساب أعمال في أسواق تجريبية محدودة، لمساعدة أصحاب الأعمال في تحسين تجربة المستخدمين، ندعوك لقراءة هذه المقالة إذا كنت مهتمًا بمعرفة مميزات واتساب أعمال وكيف تستثمرها في عملك.</p>
                                <p dir="rtl" lang="ar" className='mt-10 text-xl font-Somar-Regular'>مع أواخر 2020 كان قد وصل عدد مستخدمي تطبيق المراسلة للهاتف المحمول واتساب أكثر من 2 مليار مستخدم حول العالم وهم في ازدياد، يتوفر التطبيق حاليًا في أكثر من 180 دولة حول العالم، ولتلبية احتياجات الجمهور المحلي، يتوفر التطبيق أيضًا بـ 60 لغة مختلفة..</p>
                                <p dir="rtl" lang="ar" className='mt-10 text-xl font-Somar-Regular'>كشف العدد الكبير لمستخدمي واتساب عن إمكانية استخدامه في التسويق والإعلانات مع إمكانية الوصول الضخمة لجمهور واسع في أي مكان في العالم لذلك أطلقت الشركة واتساب أعمال، وأعلنت عنه رسميًّا بعد نسخة تجريبية في عدد محدود من الدول، وفي غضون عام واحد فقط بعد إطلاق واتساب لمبادرته B2B واتساب أعمال (WhatsApp Business) سجل أكثر من 5 ملايين مستخدم للأعمال، بهدف مساعدة الشركات الصغيرة والمتوسطة في دعم عملائها من خلال تسهيل التفاعل معهم. يوفر واتساب أعمال ميزات للشركات مثل الردود السريعة،  وفلاتر الدردشة، وغيرها..  </p>
                                <p dir="rtl" lang="ar" className='mt-10 text-xl font-Somar-Regular'>في هذه المقالة سنكتشف معًا أهم مميزات واتساب أعمال، وكيف تستثمرها في التسويق لمتجرك بأكثر الطرق فعالية..</p>

                                <h1 dir="rtl" lang="ar" className='mt-10 text-2xl text-[#EA676C] font-bold font-Somar-Bold'>ما الفرق بين واتساب أعمال وواتساب أعمال API؟</h1>
                                <img src={PhoneImg} className="w-fit h-fit my-5  rounded-lg" />
                                <p dir="rtl" lang="ar" className='mt-5 text-xl font-Somar-Regular'>واتساب هو تطبيق مراسلة فورية مجاني، يتيح لك إرسال رسالة فورية بعدة أشكال إلى جهة اتصال واحدة أو أكثر: نص أو صورة (صورة أو فيديو) أو حتى رسالة صوتية، شرط أن يكون المستلمون أيضًا من مستخدمي التطبيق، أما واتساب أعمال هو إصدار مستقل عن تطبيق المراسلة الشهير واتساب، هناك ثلاثة استخدامات مختلفة لتطبيق واتساب وفقًا لاحتياجاتك، إذ إن هناك فرقًا في استخدامات تطبيق واتساب وواتساب أعمال وواتساب أعمال API، وهي:</p>
                                <p dir="rtl" lang="ar" className='mt-5 text-xl font-Somar-Regular'>تطبيق واتساب (WhatsApp): هو التطبيق المجاني للمراسلة الذي تستخدمه لمراسلة أصدقائك وأقاربك.</p>
                                <p dir="rtl" lang="ar" className='mt-5 text-xl font-Somar-Regular'>تطبيق واتساب أعمال (WhatsApp Business): تم تصميم هذا التطبيق المهني للشركات الصغيرة والمتوسطة، يسمح لك باستخدام الوظائف الأساسية للنظام، وهذا يعني، التواصل مع المستلمين الفرديين من خلال الرسائل المرسلة يدويًّا.</p>
                                <p dir="rtl" lang="ar" className='mt-5 text-xl mb-10 font-Somar-Regular'>تطبيق واتساب أعمال (WhatsApp Business API): هذه الأداة مصممة للشركات الكبيرة، تُتيح لك إرسال رسائل جماعية وأتمتتها. للوصول إلى هذه الميزة يجب عليك استخدام شريك واتساب معتمد، مثل Lithium أو MessageBird.</p>
                            </div>
                            </div>                          
     
                    </div>
                    <form className=' relative z-30 flex flex-col  ' name='Emailform'>
                   
                        <div className=' relative z-[-1] flex flex-col  items-center justify-center w-full h-fit '>
                        <img src={EndCoverRight} className="absolute bottom-0 z-0"/>
                            <div className='relative z-10 mx-12  flex flex-col h-fit w-full items-center px-5  '>
                                <div className='flex flex-col lg:flex-row m-auto items-center h-fit w-full '>
                                <img src={ContactImg} className="w-1/2 h-[80%]" />
                                <div dir="rtl" lang="ar" className='w-3/4 h-fit flex-col mr-20'>
                            <h1 className='w-full text-[#035AA7]  font-bold font-Somar-ExtraBold text-4xl'>تواصل معنا  </h1>
                            <p className='w-1/2 mt-2 font-Somar-Regular text-[#183C6C] text-2xl'>يمكنك مراسلتنا في أي وقت تريد من نموذج التواصل أدناه </p>
                             <p className='w-1/2 mt-2 font-Somar-Regular text-[#183C6C] text-2xl'>   أو الاتصال بنا على الرقم الموحد 940058260 </p>
                                <div className='flex flex-col h-full w-3/4 mt-10 text-[#035AA7]'>
                                            <input id='name' name='from_name' type="text" placeholder='الاسم' className='text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 outline-none' onChange={(e)=>NameContact(e)}/>
                                            <span id ="NameMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال اسمك</span>
                                            <input id='email' name='from_email' type="email" placeholder='البريد الالكتروني' className=' text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 mt-5 outline-none' onChange={(e)=>EmailContact(e)}/>
                                         <span id ="emailMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال البريد الالكتروني</span>
                                            <textarea id='message' name='message' rows="6" cols="50" placeholder='التفاصيل' className='text-right text-[#035AA7] border-4 border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5 mt-5 outline-none'  onChange={(e)=>MessageContact(e)}/>
                                            <span id ="ContentMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال نص الرسالة</span>
                                    </div>               
                           </div>
                                </div>
                                <button className='mt-5 w-1/12  border-4  border-[#EA676C] py-2    rounded-lg text-[#EA676C] pr-20 pl-10 font-semibold font-Somar-Bold text-2xl' onClick={(e) => Send(e)}>ارسل</button>
                                  {/* Footer */}
                            <div className='mt-10 grid grid-cols-2 border-2 p-2 m-auto  gap-5 w-3/4  md:ml-48 mb-2 lg:flex lg:justify-evenly'>
                            <div className='lg:order-first row-start-2 flex flex-col  items-center col-span-2'>
                                  <div className=' flex flex-col mb-2 items-center justify-center '>
                                  <div className='flex'>
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
                                  <p className=' font-semibold text-[#035AA7] font-Somar-SemiBold text-xl mt-2'>جميع الحقوق محفوظة</p>
                    </div>
                                            </div>
                          <div dir='rtl' className='flex flex-col justify-center'>
                          <h1 className=' text-[#035AA7] font-Somar-Black font-bold text-2xl'>من المدونة</h1>
                              <p className='mt-2 font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'>تصوير المنتجات باحترافية وبأقل التكاليف</p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'>استراتيجيات التسعير الاحترافية </p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  text-[#4F4D4D]'>التجارة الالكترونية</p>
                          </div>
                          <div dir='rtl'  className='flex flex-col '>
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
              <Link to="/">الرئيسية </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 '>
            <Link to="">الأسعار </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to='/Blog'>المدونة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/Info ">تجربة المنصة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
            <Link to="/CreateStoreBody">أنشئ متجرك</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            {cookies.get('token') ?
                   <a href='/' onClick={() => Signout()} >تسجيل الخروج</a>
                        :
                   <Link to="/SignIn" >تسجيل الدخول</Link>
             }
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

export default Info