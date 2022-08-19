import React from 'react'
import { Bar,Line,Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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
import ProfileCover from "../../images/ProfileCover.svg";
import Celender from "../../images/Celender.svg";
import AnimationImg from "../../images/AnimationImgProfile.svg";
import Raising from "../../images/Raising.svg";
import Exit from "../../images/Exit.svg";


import { IoIosNotifications } from 'react-icons/io';
import { BiMessage } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineDotsHorizontal} from 'react-icons/hi';




function ControlPanelBody() {
   
    const ChartData = {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridg'],
        datasets: [
            {
                label: 'Earnings',
                data: [
                    512351,
                    923134,
                    135325,
                    234152,
                    432532,
                ],
                backgroundColor: [
                    '#035AA7',
                    '#035AA7',
                    '#035AA7',
                    '#035AA7'
                ]
            }
        ]
            
        
    };

  return (
      <div className='w-full h-full'>
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

              <div className='flex  flex-grow items-center w-full bg-[#FAF9FB] rounded-full  shadow-md'>
                                    <AiOutlineSearch className="ml-2 rounded-l-full"/>
                                    <input dir="rtl" lang="ar" placeholder='..ابحث عما تريد' className="p-2  w-full  focus:outline-none px-4 bg-[#FAF9FB] rounded-full " type="text"/>
                  </div>
              <div className='w-5/12 flex flex-4 justify-center'>
                            <img src={Logo} className="w-2/6 h-fit " />
                  </div>
          </div>
          
    <div className='flex bg-[#F5F7F9]'>
                  
          <div className='w-3/4 h-full '>
          <div className='flex justify-start '>
                <img src={ProfileCover} className="w-4/5 h-fit" />
                <div className='absolute flex flex-col w-3/4 mt-8 h-full '>
                              <div className='flex justify-evenly '>  
                                      <img src={Celender} className="w-32 h-52 mr-[20%] " />
                                      <div dir="rtl" lang="ar" className='flex items-center'>
                                      <img src={AnimationImg} className="w-34 h-52" />
                                      <div className='flex flex-col items-center p-5'>
                                        <h1 className='text-3xl font-bold font-Somar-Bold text-[#183C6C]' >مرحباً يا شوكة</h1>
                                          <p className='font-Somar-Bold font-bold text-[#183C6C]'>نتمنى لك يوماً جيد</p>
                                      </div>
                                     </div>
                              </div>
                              <div className='grid grid-cols-4 gap-5 p-5'>
                                  <div className='shadow-md rounded-xl'>
                                      <div className='w-full h-fit bg-[#035AA7] rounded-tr-xl rounded-tl-xl text-center'>
                                          <p className=' font-bold py-1 text-white font-Somar-SemiBold text-3xl'>العملاء</p>
                                      </div>

                                      <div className='grid grid-cols-2 bg-[#FDFDFD] rounded-b-xl border-2'>
                                          <div>
                                              <p className='p-5 font-Somar-Medium font-bold'>23,567</p>
                                          </div>
                                          <div className='flex justify-center items-center p-3'>
                                              <img src={Raising} className="w-3 h-10 ml-5 mr-1" />
                                              <p className='font-Somar-Regular font-semibold'>0.25%</p>
                                          </div>
                                      </div>
                                  </div>
                                    {/* */}
                                    <div className='shadow-md rounded-xl'>
                                      <div className='w-full h-fit bg-[#035AA7] rounded-tr-xl rounded-tl-xl text-center'>
                                          <p className=' font-bold py-1 text-white font-Somar-SemiBold text-3xl'>الطلبات </p>
                                      </div>

                                      <div className='grid grid-cols-2 bg-[#FDFDFD] rounded-b-xl border-2'>
                                          <div className='w-1/2'>
                                              <p className='p-5 font-Somar-Medium font-bold'>27,413</p>
                                          </div>
                                          <div className='flex justify-center items-center p-3'>
                                              <img src={Raising} className="w-3 h-10 ml-5 mr-1" />
                                              <p className='font-Somar-Regular font-semibold' >0.25%</p>
                                          </div>
                                      </div>
                                  </div>
                                  {/* */}
                                  <div className='shadow-md rounded-xl'>
                                      <div className='w-full h-fit bg-[#035AA7] rounded-tr-xl rounded-tl-xl text-center'>
                                          <p className=' font-bold py-1 text-white font-Somar-SemiBold text-3xl '>الزيارات </p>
                                      </div>

                                      <div className='grid grid-cols-2 bg-[#FDFDFD] rounded-b-xl border-2'>
                                          <div>
                                              <p className='p-5 font-Somar-Medium font-bold'>56,124</p>
                                          </div>
                                          <div className='flex justify-center items-center p-3'>
                                              <img src={Raising} className="w-3 h-10 ml-5 mr-1" />
                                              <p className='font-Somar-Regular font-semibold'>0.25%</p>
                                          </div>
                                      </div>
                                  </div>
                                  {/* */}
                                  <div className=' shadow-md rounded-xl'>
                                      <div className='w-full h-fit bg-[#035AA7] rounded-tr-xl rounded-tl-xl text-center'>
                                          <p className=' font-bold py-1 text-white font-Somar-SemiBold text-3xl '>المبيعات </p>
                                      </div>

                                      <div className='grid grid-cols-2 bg-[#FDFDFD] rounded-b-xl border-2'>
                                          <div>
                                              <p className='p-5 font-Somar-Medium font-bold'>$252,747</p>
                                          </div>
                                          <div className='flex justify-center items-center p-3'>
                                              <img src={Raising} className="w-3 h-10 ml-5 mr-1" />
                                              <p className='font-Somar-Regular font-semibold'>0.25%</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className='flex'>
                                  <div dir="rtl" lang="ar" className='w-[36%] flex flex-col ml-5 border-2 rounded-xl bg-white shadow-md'>
                                      <div dir="rtl" lang="ar" className='w-full p-2'>
                                          <h1 className='text-3xl font-bold text-[#035AA7] border-b-2 pb-3 font-Somar-Black'>التنبيهات</h1>
                                      </div>
                                      <div dir="rtl" lang="ar" className='grid grid-cols-4 w-full items-center'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col col-span-2'> 
                                              <h1 className='font-Somar-Regular text-xl text-[#240448]' ><span className='text-[#035AA7] font-bold text-xl font-Somar-bold'>رسل</span> أضاف حقيبة يد</h1>
                                              <p className='text-sm font-Somar-Regular text-[#240448]'>منذ 3 ساعات</p>
                                          </div>
                                          <HiOutlineDotsHorizontal className='mr-[40%]'/>
                                      </div>
                                      {/* */}
                                      <div dir="rtl" lang="ar" className='grid grid-cols-4 w-full items-center'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col col-span-2'> 
                                              <h1 className='font-Somar-Regular text-xl text-[#240448]'  ><span className='text-[#035AA7] font-bold text-xl font-Somar-bold'>رسل</span> أضاف حقيبة يد</h1>
                                              <p className='text-sm font-Somar-Regular text-[#240448]'>منذ 3 ساعات</p>
                                          </div>
                                          <HiOutlineDotsHorizontal className='mr-[40%]'/>
                                      </div>
                                      {/* */}
                                      <div dir="rtl" lang="ar" className='grid grid-cols-4 w-full items-center'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col col-span-2'> 
                                              <h1  className='font-Somar-Regular text-xl text-[#240448]' ><span className='text-[#035AA7] font-bold text-xl font-Somar-bold'>رسل</span> أضاف حقيبة يد</h1>
                                              <p className='text-sm font-Somar-Regular text-[#240448]'>منذ 3 ساعات</p>
                                          </div>
                                          <HiOutlineDotsHorizontal className='mr-[40%]'/>
                                      </div>
                                      {/* */}
                                      <div dir="rtl" lang="ar" className='grid grid-cols-4 w-full items-center'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col col-span-2'> 
                                              <h1 className='font-Somar-Regular text-xl text-[#240448]' ><span className='text-[#035AA7] font-bold text-xl font-Somar-bold'>رسل</span> أضاف حقيبة يد</h1>
                                              <p className='text-sm font-Somar-Regular text-[#240448]'>منذ 3 ساعات</p>
                                          </div>
                                          <HiOutlineDotsHorizontal className='mr-[40%]'/>
                                      </div>
                                  </div>

                                  {/* EChart */}
                                  <div className='w-7/12 h-full px-5 border-2 ml-5 rounded-xl bg-white shadow-md'>
                                  <div dir="rtl" lang="ar" className='w-full p-2'>
                                          <h1 className='text-3xl font-bold text-[#035AA7]  pb-3 font-Somar-Black'>احصائيات</h1>
                                      </div>
                                  <div className='w-full flex flex-col  h-[82%] '>
                                   
                                      <Line
                                          data={ChartData}
                                          width={50}
                                          height={100}
                                          options={{ 
                                              maintainAspectRatio: false
                                          }}
                                      />
                                    
                                      </div>
                                      </div>
                              </div>

                              <div dir="rtl" lang="ar" className='mx-6 mt-5 p-5 border-2 rounded-xl bg-white  shadow-md'>
                                  <h1 className='text-3xl w-[96%] mb-5 border-b-2 pb-2 font-Somar-Black font-bold text-[#035AA7]'>أحدث الطلبات</h1>
                                  <div className='grid grid-cols-6 text-center items-center w-full'>
                                      
                                      <div dir="rtl" lang="ar" className='flex w-full items-center col-span-2'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col items-center '> 
                                              <h1 className='font-Somar-Regular text-2xl text-[#240448]'><span className='text-[#035AA7]  font-bold text-2xl font-Somar-bold'>ألاء</span> أضاف حقيبة يد</h1>
                                              <p className=' font-Somar-Regular text-[#240448]'>62584635#</p>
                                          </div> 
                                      </div>

                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>دمشق</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>بانتظار المراجعة</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>15.000 ل س</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>منذ 3 ساعات</p>
                                      
                                      <div dir="rtl" lang="ar" className='flex w-full items-center col-span-2'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col items-center'> 
                                              <h1 className='font-Somar-Regular text-2xl text-[#240448]'><span className='text-[#035AA7] font-bold text-2xl font-Somar-bold'>ألاء</span> أضاف حقيبة يد</h1>
                                              <p className=' font-Somar-Regular text-[#240448]'>62584635#</p>
                                          </div> 
                                      </div>

                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>دمشق</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>بانتظار المراجعة</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>15.000 ل س</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>منذ 3 ساعات</p>
                                      
                                      <div dir="rtl" lang="ar" className='flex w-full items-center col-span-2'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col items-center'> 
                                              <h1 className='font-Somar-Regular text-2xl text-[#240448]'><span className='text-[#035AA7] font-bold text-2xl font-Somar-bold'>ألاء</span> أضاف حقيبة يد</h1>
                                              <p className=' font-Somar-Regular text-[#240448]'>62584635#</p>
                                          </div> 
                                      </div>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>دمشق</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>بانتظار المراجعة</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>15.000 ل س</p>
                                      <p className='font-Somar-Regular text-xl text-[#240448] mt-5'>منذ 3 ساعات</p> 

                                  </div>
                              </div>
                </div>
          </div>
          </div>
          <div className='w-1/4 bg-white'>
                      <div className='flex flex-col justify-center items-center border-2'>
                          <div className='h-1/4 w-full flex justify-center'>
                              <img src={profileImg} className="w-40 h-fit" />
                           </div>
                          <div className='flex flex-col items-center mt-[-25px] mb-5 '>
                          <h1 className='text-sm'>Charlotte Jones </h1>
                              <p className='text-xs'>Admin</p>
                          </div>
                        
                          <div className='h-full w-full border-2'>
                              <div className='flex items-center justify-end mr-5 mt-5'>
                                 <h1 className='font-Somar-Regular text-xl'>عرض المتجر</h1>
                                 <img src={Show} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Black text-2xl font-bold text-[#EA676C]'>لوحة التحكم </h1>
                                 <img src={Home} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>المبيعات</h1>
                                 <img src={shopping} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>المنتجات</h1>
                                 <img src={shirt} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>العملاء</h1>
                                 <img src={Clients} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>عرض المتجر</h1>
                                 <img src={Show} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>التقارير</h1>
                                 <img src={Reports} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>الاحصائيات</h1>
                                 <img src={Arrows} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>تسويق</h1>
                                 <img src={advertising} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>الأسئلة والتقييمات</h1>
                                 <img src={question} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-xl'>الشحن</h1>
                                 <img src={delivery} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-2 mt-32'>
                                 <h1 className='font-Somar-Regular text-xl'>تسجيل الخروج</h1>
                                 <img src={Exit} className="ml-5" />  
                              </div>
                          </div>
                  </div>
          </div>
        </div>
        </div>      
    </div>
  )
}

export default ControlPanelBody