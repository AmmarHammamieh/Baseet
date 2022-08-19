import React from 'react'


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
import ArcheveTop from "../../images/ArcheveTopCover.svg";
import Archeve from "../../images/Archeve.svg";

import { IoIosNotifications } from 'react-icons/io';
import { BiMessage } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

function OrdersBody() {
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
    <div className='w-3/4 h-full flex-col '>
          <div  className='flex justify-start'>
                <img src={ArcheveTop} className="w-4/5 h-fit" />
                      <div dir="rtl" lang="ar" className='absolute flex flex-col w-3/4 mt-8 h-full px-5'>
                          <div className='flex '>
                               <img src={Archeve} className="w-52 h-fit mr-5 mt-1" />
                          </div>
                          <p className='absolute text-white mr-11 mt-3 font-Somar-Black text-2xl font-bold'>أحدث الطلبات</p>
                          
                          <div dir="rtl" lang="ar" className='mx-5 shadow-md  p-5 border-2 rounded-xl rounded-tr-none'>
                                  <div className='grid grid-cols-6 text-center items-center w-full'>
                                      
                                      <div dir="rtl" lang="ar" className='flex w-full items-center col-span-2'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col items-center '> 
                                              <h1 className='font-Somar-Regular  text-2xl text-[#240448]' ><span className='text-[#035AA7] font-bold text-2xl font-Somar-Bold'>ألاء</span> أضاف حقيبة يد</h1>
                                              <p className=' font-Somar-Regular text-[#240448]'>62584635#</p>
                                          </div> 
                                      </div>

                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>دمشق</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>بانتظار المراجعة</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>15.000 ل س</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>منذ 3 ساعات</p>
                                      
                                      <div dir="rtl" lang="ar" className='flex w-full items-center col-span-2'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col items-center'> 
                                              <h1 className='font-Somar-Regular text-2xl text-[#240448]'><span className='text-[#035AA7] font-bold text-2xl font-Somar-Bold'>ألاء</span> أضاف حقيبة يد</h1>
                                              <p className=' font-Somar-Regular text-[#240448]'>62584635#</p>
                                          </div> 
                                      </div>

                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>دمشق</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>بانتظار المراجعة</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>15.000 ل س</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>منذ 3 ساعات</p>
                                      
                                      <div dir="rtl" lang="ar" className='flex w-full items-center col-span-2'>
                                      <img src={profileImg} className="w-20 h-20"/>
                                          <div  className='flex flex-col items-center'> 
                                              <h1 className='font-Somar-Regular text-2xl text-[#240448]'><span className='text-[#035AA7] font-bold text-2xl font-Somar-Bold'>ألاء</span> أضاف حقيبة يد</h1>
                                              <p className=' font-Somar-Regular text-[#240448]' >62584635#</p>
                                          </div> 
                                      </div>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>دمشق</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>بانتظار المراجعة</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>15.000 ل س</p>
                                      <p className='font-Somar-Regular text-xl mt-6 text-[#240448]'>منذ 3 ساعات</p> 
                                     
                                  <p className='col-span-6 text-left ml-1 text-[#035AA7] text-sm  cursor-pointer font-bold font-Somar-Regular'>
                                  عرض المزيد
                                  </p>
                                  </div>
                          </div>
                          
                          <div className='flex mt-10'>
                              <img src={Archeve} className="w-52 h-fit mr-5 mt-1" />
                             <p className='absolute text-3xl text-white mr-16 mt-2 font-Somar-Black'>الفواتير</p>
                              
                          </div>
                          
                          <div dir="rtl" lang="ar" className='text-center mx-5 shadow-md  p-5 border-2 rounded-xl rounded-tr-none'>
                              <table className='w-full '>
                                <tr className='border-b-2'>
                                <th className=' pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                رقم التعريف
                                </th>
                                <th className='pb-5 w-2/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                رقم التعريف الخاص بالطلب
                                </th>
                                <th className='pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                المبلغ الاجمالي
                                </th>
                                <th className='pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                تاريخ الفاتورة
                                </th>
                                <th className='pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                إجراءات
                                </th>
                                      
                                </tr>
                                <tr>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>255668</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>22/1/2022</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>جاري التوصيل</td>            
                                  </tr>
                                  <tr>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>255668</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>22/1/2022</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>جاري التوصيل</td>            
                                  </tr>
                                  <tr>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>255668</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>22/1/2022</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>جاري التوصيل</td>            
                                  </tr>
                                  <tr>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>255668</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>455</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>22/1/2022</td>
                                    <td className='py-5 font-Somar-Regular text-2xl text-[#09091D]'>جاري التوصيل</td>            
                                  </tr>
                                 <th colSpan="5" className='pt-1 text-[#035AA7] text-sm text-left cursor-pointer font-Somar-Regular '>عرض المزيد</th>

                            </table>
                          </div>

                          <div className='flex mt-10'>
                              <img src={Archeve} className="w-52 h-fit mr-5 mt-1" />
                             <p className='absolute text-3xl text-white mr-16 mt-2  font-Somar-Black'>الفواتير</p>
                              
                          </div>
                          
                          <div dir="rtl" lang="ar" className='text-center mx-5 shadow-md p-5 border-2 rounded-xl rounded-tr-none'>
                              <table className='w-full '>
                                <tr className='border-b-2'>
                                <th className=' pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                رقم التعريف
                                </th>
                                <th className='pb-5 w-2/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                رقم التعريف الخاص بالطلب
                                </th>
                                <th className='pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                المبلغ الاجمالي
                                </th>
                                <th className='pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                تاريخ الفاتورة
                                </th>
                                <th className='pb-5 w-1/6 text-2xl font-Somar-SemiBold text-[#09091D]'>
                                إجراءات
                                </th>
                                      
                                </tr>

                            </table>
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
                          <h1 className='text-sm'>Charlotte Jones </h1>
                              <p className='text-xs'>Admin</p>
                          </div>
                        
                          <div className='h-full w-full border-2'>
                              <div className='flex items-center justify-end mr-5 mt-5'>
                                 <h1 className='font-Somar-Regular text-2xl'>عرض المتجر</h1>
                                 <img src={Show} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-3xl font-bold text-[#EA676C]'>لوحة التحكم </h1>
                                 <img src={Home} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>المبيعات</h1>
                                 <img src={shopping} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>المنتجات</h1>
                                 <img src={shirt} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>العملاء</h1>
                                 <img src={Clients} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>عرض المتجر</h1>
                                 <img src={Show} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>التقارير</h1>
                                 <img src={Reports} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الاحصائيات</h1>
                                 <img src={Arrows} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>تسويق</h1>
                                 <img src={advertising} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الأسئلة والتقييمات</h1>
                                 <img src={question} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الشحن</h1>
                                 <img src={delivery} className="ml-5" />  
                              </div>
                              <div className='flex items-center justify-end mr-2 mt-32'>
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

export default OrdersBody