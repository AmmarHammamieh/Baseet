import React from 'react'
import Logo from "../images/Logo.svg";
import SmallCover from "../images/SmallCover.svg";
import Packages from "../images/Packages.svg";
import Wrong from "../images/Wrong.svg";
import Check from "../images/Check.svg";
import EndCoverRight from "../images/EndCoverRight.svg";
import Drawer from "../images/Drawer.svg";
import BlogCoverBottom from "../images/BlogCoverBottom.svg";


import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineClose} from 'react-icons/ai';
import axios from 'axios';
import Cookies from 'universal-cookie';

function PackagesBody() {
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
    <div className=" w-full h-full ">

    <div className='flex flex-col justify-start h-full'>
        <img src={SmallCover} className="w-4/5 h-fit" />
        <div className='absolute flex flex-col w-full h-full '>
            <div id="header" className='flex justify-evenly '>
                <div className='hidden w-full mt-2 justify-center lg:flex text-[#035AA7] font-semibold'>
                {cookies.get('token') ?
                                    <a href='/' onClick={() => Signout()} className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                                        :
                                  <Link to="/SignIn" className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
                
                                }
                    <Link to="/CreateStoreBody" className='m-3 font-Somar-Bold text-2xl'>تجربة المنصة</Link>
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
          <div className='w-full h-full flex flex-col relative z-10'>
            
                    <div className='h-1/3 w-full flex justify-center'>
                      <img src={Packages} className="w-3/5 m-0 h-3/4 "/>
                      </div>
                     
                      <table className=' relative z-10 rounded-3xl  text-center mx-10  rounded-tr-3xl rounded-tl-3xl bg-[#F6F6F6]'>
                        <tr>
                              <th className='w-1/4 py-1 text-white rounded-tl-3xl bg-[#2295D6]'>
                                  <h1 className='text-3xl  font-Somar-Bold'>باقة برو</h1>
                                  <p className=' font-Somar-Regular text-md'>الباقة الاحترافية</p>
                              </th>
                              <th className='w-1/4 text-white bg-[#2295D6] border-l-[#62CCE6] border-l-2'>
                                  <h1 className='text-3xl font-Somar-Bold '>باقة بلس</h1>
                                  <p className=' font-Somar-Regular text-md'>الباقة المتقدمة</p>
                              </th>
                              <th className='w-1/4 flex-col leading-relaxed text-white bg-[#2295D6] border-l-[#62CCE6] border-l-2'>
                                  <h1 className='text-3xl font-Somar-Bold '>باقة بيسك</h1>
                                  <p className=' font-Somar-Regular text-md  '>الباقة الأساسية</p>
                              </th>
                            <th className='w-1/4 text-white bg-[#035AA7]  rounded-tr-3xl text-4xl font-Somar-Bold border-l-[#62CCE6] border-l-2 p-7 lg:p-0'>الباقات الشهرية</th>
                        </tr>
                        <tr dir='rtl'>
                            <td className=' py-2 text-xl lg:text-2xl text-[#183C6C] font-Somar-Light lg:font-Somar-SemiBold '>299 دولار شهرياً</td>
                            <td  className='py-2 text-xl lg:text-2xl text-[#183C6C] font-Somar-Light lg:font-Somar-SemiBold border-l-[#62CCE6] border-l-2'>99 دولار شهرياً</td>
                            <td className='py-2 text-xl lg:text-2xl text-[#183C6C] font-Somar-Light lg:font-Somar-Bold border-l-[#62CCE6] border-l-2'>مجاناً</td>
                            <td className='py-2 text-xl lg:text-2xl text-[#183C6C] font-Somar-Light lg:font-Somar-Bold border-l-[#62CCE6] border-l-2'>الاشتراك الشهري</td>
                        </tr>
                          <tr>
                              <th className='border-2 text-white bg-[#035AA7] text-3xl lg:text-4xl py-2 font-Somar-Bold' colSpan="4">التسويق</th>
                          </tr>
                          <tr  className='border-b-[#62CCE6] border-b-[0.1px] border-opacity-60'>
                            <td className='py-2 '><img src={Check} className="m-auto w-10 h-10"/> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Check} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Check} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2 '>كوبونات التحفيض</td>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px] border-opacity-60'>
                            <td className='py-2 '><img src={Check} className="m-auto w-10 h-10"/> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Check} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Wrong} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>الحملات التسويقية لعملاء المتجر</td>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px] border-opacity-60'>
                            <td className='py-2 '><img src={Check} className="m-auto w-10 h-10"/> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Check} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Wrong} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>السلّات المتروكة</td>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px] border-opacity-60'>
                            <td className='py-2 '><img src={Check} className="m-auto w-10 h-10"/> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Check} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Wrong} className="m-auto w-10 h-10 " /></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>العروض الخاصة</td>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px] border-opacity-60'>
                            <td className='py-2 '><img src={Check} className="m-auto w-10 h-10"/> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Wrong} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Wrong} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>الكوبون التسويقي</td>
                          </tr>
                          <tr>
                            <td className='py-2 '><img src={Check} className="m-auto w-10 h-10"/> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Wrong} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'><img src={Wrong} className="m-auto w-10 h-10"/></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>تحسين محركات البحث SEO</td>
                          </tr>
                    
                     
                                
                         
                  
                          <tr >
                              <th className='border-2 text-white bg-[#035AA7] text-3xl lg:text-4xl py-2 font-Somar-Bold' colSpan="4">المميزات الأساسية</th>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px]  border-opacity-60'>
                            <td className='py-2 w-1/4'></td>
                            <td className='py-2 w-1/4 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 w-1/4 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 w-1/4 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>حجز رابط خاص (دومين)</td>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px]  border-opacity-60'>
                            <td className='py-2 '></td>
                            <td className='py-2  border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2  border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>الكوبون التسويقي</td>
                          </tr>
                          <tr>
                            <td className='py-2 '> </td>
                            <td className='py-2  border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2  border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>تحسين محركات البحث SEO</td>
                          </tr>
                          <tr>
                              <th className='border-2 text-white bg-[#035AA7] text-3xl lg:text-4xl font-Somar-Bold py-2' colSpan="4">المميزات المتقدمة</th>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px]  border-opacity-60'>
                            <td className='py-2 '> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>التقارير المتقدمة</td>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px]  border-opacity-60'>
                            <td className='py-2 '> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>الصفحات التعريفية</td>
                          </tr>
                          <tr >
                            <td className='py-2 '> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                              <td className='py-2  flex flex-col justify-center border-l-[#62CCE6] border-l-2'>
                                  <h1 className="font-Somar-Light lg:font-Somar-Medium text-[#183C6C] text-xl ">تعديل تصميم المتجر</h1>
                                  <p className=' text-xs text-[#183C6C] font-Somar-Regular'>شراء قالب برسوم إضافية</p>
                              </td>
                          </tr>
                          
                          <tr>
                              <th className='border-2 text-white bg-[#035AA7] text-3xl lg:text-4xl py-2 font-Somar-Bold' colSpan="4">خيارات الشحن والتوصيل</th>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px]  border-opacity-60'>
                            <td className='py-2 '> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>الدفع عند الاستلام</td>
                          </tr>
                          <tr >
                            <td className='py-2 '> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>التحويل البنكي</td>
                          </tr>
                          <tr>
                              <th className='border-2 text-white bg-[#035AA7] text-3xl lg:text-4xl py-2 font-Somar-Bold' colSpan="4">طرق الدفع</th>
                          </tr>
                          <tr className='border-b-[#62CCE6] border-b-[0.1px]  border-opacity-60'>
                            <td className='py-2 '> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2'>الدفع عند الاستلام</td>
                          </tr>
                          <tr>
                            <td className='py-2 '> </td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 border-l-[#62CCE6] border-l-2'></td>
                            <td className='py-2 font-Somar-Light lg:font-Somar-Medium  text-[#183C6C] text-xl border-l-[#62CCE6] border-l-2 '>التحويل البنكي</td>
                          </tr>
                          </table>
                     
                      <div className='mt-20 py-5 flex justify-center'>
                          <Link to="/CreateStoreBody" className='font-Somar-Bold border-4 border-[#EA676C] text-[#EA676C] rounded-lg  pr-5 pl-5 py-2 text-center  font-bold text-2xl md:w-[20%]  lg:w-[15%] '>اشترك مجاناً</Link>
                      </div>
            {/* Footer */}
            <div className='relative w-full flex justify-center items-center  z-[-1]'>
              <img src={EndCoverRight} className="absolute bottom-0 z-0"/>
                      <div  className='relative z-10 mt-5 grid grid-cols-2 p-2 mx-auto  gap-5 w-full  md:mr-10 mb-2 lg:flex lg:justify-evenly lg:mx-auto '>
                          
                          <div dir='rtl' className='flex flex-col w-3/4 lg:w-fit '>
                              <h1  className='  text-[#035AA7] font-Somar-Black font-bold text-2xl'>من المدونة</h1>
                              <p className='mt-2 font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'>تصوير المنتجات باحترافية وبأقل التكاليف</p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'>استراتيجيات التسعير الاحترافية </p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  text-[#4F4D4D]'>التجارة الالكترونية</p>
                          </div>
                          <div dir='rtl' className='flex flex-col w-3/4 lg:w-fit'>
                              <h1 className=' text-[#035AA7] font-Somar-Black font-bold text-2xl'>عن بسيط</h1>
                              <p className='mt-2  font-Somar-Regular lg:font-Somar-Medium mb-1  text-[#4F4D4D]'>اتفاقية الاستخدام</p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium  mb-1  text-[#4F4D4D]'> سياسة الخصوصية </p>
                              <p className=' font-Somar-Regular lg:font-Somar-Medium text-[#4F4D4D]'>انضم لفريق بسيط</p>
                                      </div>
                                      <div className='flex flex-col lg:order-first  items-center col-span-2'>
                                  <div className='flex flex-col mb-2 items-center justify-center '>
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
                                  <p className=' font-Somar-SemiBold text-xl text-[#035AA7] mt-2'>جميع الحقوق محفوظة</p>
                    </div>
                    
                    </div>
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
              <Link to="/">الرئيسية </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 '>
            <Link to="">الأسعار </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to='/Blog'>المدونة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/CreateStoreBody ">تجربة المنصة</Link>
            </div>

            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            {cookies.get('token') ?
                   <a href='/' onClick={() => Signout()} className='font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                        :
                   <Link to="/SignIn" className='font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
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

export default PackagesBody