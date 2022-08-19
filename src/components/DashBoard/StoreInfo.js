import React, { useEffect, useState } from 'react'


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
import { BsCloudArrowUp } from 'react-icons/bs';
import Cookies from 'universal-cookie';
import axios from 'axios';
import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';
import { getCountryCallingCode } from 'react-phone-number-input';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { RiSlideshowLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function StoreInfo() {

    const [Image, SetImage] = useState();
  const [AImage, SetAImage] = useState();
  const [UserData, SetUserData] = useState();
  const [value, setValue] = useState("");

  const [exte, setExte] = useState("");
  var allowPhoneNumber = "";
  var codeCountry;
  var phoneNumber;
  const cookies = new Cookies();
    
  useEffect(() => {
    getStoreInfo();
  }, [])

  useEffect(() => {
    getBase64FromUrl(Image);

  }, [Image])
  
async  function getStoreInfo() {
    let Token = {
      token:cookies.get('token'),
    }

    await axios.post(`http://127.0.0.1:8000/api/User`, Token)
    .then(res => { 
      console.log(res.data,"hiw");
      SetUserData(res.data);
      console.log(res.data.logo,"hiw");

      if (res.data.logo != null) {
      SetImage('http://127.0.0.1:8000' + res.data.logo);
        
      }
      setValue(res.data.phone);
    });
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

    function filebrowser(e) {
        e.preventDefault();
        document.getElementById('fileInput').click();
    }
    function getImage(e) {
        let type = e.target.files[0].type;
        let files = e.target.files[0];
        let ext = type.substring(type.indexOf('/') + 1);
        if (type.substring(0, type.indexOf('/')) === 'image') {
            SetImage(window.URL.createObjectURL(new Blob(e.target.files)));
      }
      setExte(ext);
      console.log(Image);

    }


    
    
    const getBase64FromUrl = async (url) => {
  
        const data = await fetch(url);
        const blob = await data.blob();
        return  new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsBinaryString(blob);
          reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data)
          };
        }).then(function (result) {
          console.log(result);
          SetAImage(result);
        
        });
  };


  function StorePhone(e) {
    if(document.getElementById('phone').value.length>0){
      if(!(document.getElementById('phoneMessage').classList.contains('hidden'))) {
        document.getElementById('phoneMessage').classList.add('hidden');
       }
     }
    setValue(document.getElementById('phone').value);
    if (document.getElementById('phone').value.length > 0) {
    
  }


  }
  
  function PhoneBox() {
    document.getElementsByClassName('PhoneInputInput')[0].classList.add("focus:outline-none");
  }

  async function ChangeInfo() {
    try {
      PhoneValdition();
    } catch {
     
      
      if (document.getElementById("phoneMessage").classList.contains("hidden")) {
        document.getElementById("phoneMessage").classList.remove("hidden");
      }
      document.getElementById('phoneMessage').textContent = "الرجاء ادخال رقم الهاتف و البلد";
    }
    console.log(AImage);
    let Data = {
      'token': cookies.get('token'),
      'user': UserData.name,
      'name':"",
      'type':"",
      'phone':allowPhoneNumber,
      'logo': AImage,
      "ext": exte,
    }

    if (!document.getElementById('name').value) {
      Data.name = document.getElementById('name').placeholder;
    } else {
      Data.name = document.getElementById('name').value;
    }
    if (!document.getElementById('type').value) {
      Data.type = document.getElementById('type').placeholder;
    } else {
      Data.type = document.getElementById('type').value;
    }
    

    await axios.post(`http://127.0.0.1:8000/api/User/update`,Data)
      .then(res => { 
        console.log(res.data);
        if (res.data.status == "200") {
          document.getElementById("success").classList.remove("hidden");
          document.getElementById("success").textContent = res.data.message;
        }
      })
    
    }



  async function ChangePassword() {
    if (document.getElementById("oldPassword").value == "") {
      if (document.getElementById('oldPasswordMessage').classList.contains('hidden')) { 
        document.getElementById('oldPasswordMessage').classList.remove('hidden');
        document.getElementById('oldPasswordMessage').textContent = "الرجاء إدخال كلمة المرور";

      }
    }
    

    if (document.getElementById("newPassword").value == "") {
      if (document.getElementById('newPasswordMessage').classList.contains('hidden')) { 
        document.getElementById('newPasswordMessage').classList.remove('hidden',"text-center","text-green-400");
        document.getElementById("newPasswordMessage").classList.add("text-right", "text-red-600");
        
        document.getElementById('newPasswordMessage').textContent = "الرجاء إدخال كلمة المرور";

      }
    }
    

    if (document.getElementById("newPassword").value.length < 8) {
      if (document.getElementById('newPasswordMessage').classList.contains('hidden')) { 
        document.getElementById('newPasswordMessage').classList.remove('hidden',"text-center","text-green-400");
        document.getElementById("newPasswordMessage").classList.add("text-right","text-red-600");
        document.getElementById('newPasswordMessage').textContent = "يجب ان تكون كلمة المرور أكثر من 8 محارف";
      }
    }
    if (!(document.getElementById("oldPassword").value == "") && !(document.getElementById("newPassword").value == "")) {
      let Data = {
        'token': cookies.get('token'),
        "oldPassword": document.getElementById('oldPassword').value,
        "newPassword": document.getElementById('newPassword').value,

      }
      await axios.post(`http://127.0.0.1:8000/api/User/changePassword`, Data)
        .then(res => {
          if (res.data.status == "200") {
            document.getElementById("newPasswordMessage").classList.remove("hidden","text-right","text-red-600");
            document.getElementById("newPasswordMessage").classList.add("text-center","text-green-400");
  
            document.getElementById("newPasswordMessage").textContent = res.data.message;
          }
          if (res.data.status == "401") {
            document.getElementById("oldPasswordMessage").classList.remove("hidden");

            document.getElementById("oldPasswordMessage").textContent = res.data.message;
            
          }
        })
    }
  }

  function oldPassword(e){
    if(e.target.value.length>0){
     if(!(document.getElementById('oldPasswordMessage').classList.contains('hidden'))) {
       document.getElementById('oldPasswordMessage').classList.add('hidden');
      }
    }
  }
  function newPassword(e){
    if(e.target.value.length>0){
      if(!(document.getElementById('newPasswordMessage').classList.contains('hidden'))) {
        document.getElementById('newPasswordMessage').classList.add('hidden');
       }
     }
  }
  function ShowSlideMenu() {
    if (document.getElementById('slidesMenu').classList.contains("hidden")) {
       document.getElementById('slidesMenu').classList.remove("hidden");
       document.getElementById('slidesMenu').classList.add("flex");

    } else if (!(document.getElementById('slidesMenu').classList.contains("hidden"))) {
       document.getElementById('slidesMenu').classList.add("hidden");
       document.getElementById('slidesMenu').classList.remove("flex");

  }
  }
  async  function SignOut() {
    var user = {
       token: cookies.get('token'),
   };
   cookies.remove('token', { path: '/' });
   console.log(user);
   await axios.post(`http://127.0.0.1:8000/api/logout`, user)
       .then(res => {
          window.location.replace("/");            
       });
 }
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
              <div className='w-full h-full flex-col items-center justify-center'>
                  <div className='w-3/4 h-full flex  justify-center m-auto'>
                  <div className='w-2/4 pr-5 mt-10'>
                        <input id="fileInput"  type="file" className='hidden'  accept="image/*" onChange={(e)=>getImage(e)}/>
                          <div className="bg-[#F5F7F9] rounded-3xl w-full h-full  text-right ">
                            <label for="title" className=' w-full mt-5 text-lg mr-7 text-right mb-2 font-Somar-Medium '  >شعار المتجر</label>
                              
                            <div style={{ backgroundImage: `url(${Image})` }} className='bg-center mr-5 bg-no-repeat bg-contain shadow-md rounded-3xl flex justify-center text-[#F5F7F9] items-center h-full'>
              
                              <BsCloudArrowUp className={`${Image ? "hidden":"block"} text-6xl bg-[#035AA7] shadow-md rounded-full p-2 cursor-pointer`} onClick={(e)=>filebrowser(e) } />
                </div>
                <button  className='border-4 border-[#EA676C] mr-7 bg-white rounded-lg  py-1.5  font-bold text-2xl w-[90%]  text-[#EA676C]  mt-5 font-Somar-Bold' onClick={(e)=>filebrowser(e) }>وضع صورة</button>
                          </div>
                    </div>
                 <div className='w-1/2 mt-10 mr-5'>
                  <div className='flex flex-col  w-full h-fit mr-5'>
                            <label for="name" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >اسم المتجر</label>
                <input placeholder={UserData?.name} required id="name" type="text" className='text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  ' name="title" />
                
                          </div>
                          <div className='flex flex-col  w-full h-fit mr-5'>
                            <label  for="type" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >نوع الكيان</label>
                <input placeholder={UserData?.entity_type} required id="type" type="text" className='text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  ' name="title" />
                
                          </div>
                          <div className='flex flex-col  w-full h-fit mr-5'>
                <label for="phone" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium '  >رقم الهاتف</label>
                <PhoneInput
                          id="phone"
                          className=' text-left text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-5 pr-2 py-1.5 '
                          placeholder={UserData?.phone}
                          value={value}
                          onChange={(e)=>StorePhone(e)}
                  onFocus={() => PhoneBox()} />
                        <span id="phoneMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال رقم الهاتف</span>
                
                          </div>
                      </div>

                      
          </div>

          <div className='w-3/4 h-full flex flex-col  justify-center m-auto mt-32'>
          <span id="success" className='text-center text-sm text-green-400 font-semibold hidden'></span>

          <button className='w-full bg-[#035AA7] border-[#035AA7] border-4 text-white mt-5 rounded-xl py-2 font-Somar-Black text-2xl' onClick={()=>ChangeInfo()}>تغيير المعلومات</button>
          </div>
                  <div dir='rtl' className='w-3/4 mt-10 m-auto flex flex-col justify-center items-center'>
                      <h1 className='text-right w-full'>تغيير كلمة المرور</h1>
                      <hr className='w-full text-xl h-10 mt-3 font-bold' />
                      <div className='flex flex-col  w-full h-fit mr-5'>
                            <label for="oldPassword" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium mr-2'  >كلمة المرور القديمة</label>
              <input required id="oldPassword" type="text" className='text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  ' name="title" onChange={(e)=>oldPassword(e)}/>
              <span id ="oldPasswordMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال كلمة المرور</span>
            
                      </div>
                      <div className='flex flex-col  w-full h-fit mr-5'>
                            <label for="newPassword" className=' w-full mt-5 text-lg ml-[-0.5rem] text-right mb-2 font-Somar-Medium mr-2'  >كلمة المرور الجديدة</label>
              <input required id="newPassword" type="text" className='text-right m-auto w-full text-[#035AA7] border-4 outline-none border-[#035AA7] rounded-lg pl-10 pr-2 py-1.5  ' name="title" onChange={(e)=>newPassword(e)}/>
              <span id ="newPasswordMessage" className='text-right text-sm text-red-600 font-semibold hidden'>الرجاء ادخال كلمة المرور</span>
              
                      </div>
                      <div className='flex flex-col  w-full  h-fit justify-start'>
                          <div className='w-full mr-5'>
                      <button  className='border-4 border-[#EA676C] bg-white rounded-lg  py-1.5  font-bold text-xl w-1/6 text-[#EA676C] m-auto mt-5 font-Somar-Bold'  onClick={()=>ChangePassword()}>تغيير كلمة المرور</button>
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
                          <h1 className='text-sm'>{UserData?.name} </h1>
                              <p className='text-xs'>Admin</p>
                          </div>
                        
                          <div className='h-full w-full border-2'>
                              <Link to="/DashBoard/Store" className='cursor-pointer flex items-center justify-end mr-5 mt-5'>
                                 <h1 className='font-Somar-Regular text-2xl'>معلومات المتجر</h1>
                                 <img src={Show} className="ml-5" />  
                              </Link>
                              <Link to="/DashBoard/Products" className='cursor-pointer flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>المنتجات</h1>
                                 <img src={shirt} className="ml-5" />  
                              </Link>
                              <Link to="/DashBoard/sales" className='cursor-pointer flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>المبيعات</h1>
                                 <img src={shopping} className="ml-5" />  
                              </Link>
                             
                              <Link to="/DashBoard/Clients" className='cursor-pointer flex items-center justify-end mr-5 mt-10'>
                                 <h1  className=' font-Somar-Regular text-2xl'>العملاء</h1>
                                 <img src={Clients} className="ml-5" />  
                    </Link>
                    
                    <div className='flex items-center justify-end mr-5 mt-10 cursor-pointer' onClick={()=>ShowSlideMenu()}>
                       <h1 className='font-Somar-Regular text-2xl'>شرائح</h1>
                                 <RiSlideshowLine className="ml-5 text-5xl text-[#035AA7]" />  
                    </div>
                    <div id="slidesMenu" className=' flex-col text-right mr-20 mt-2 hidden'>
                           <Link to="/DashBoard/Sections/Slides/View" className='my-1'>عرض الشرائح</Link>
                          <Link to="/DashBoard/Sections/Slides" className='my-1'>إضافة شرائح صور</Link>
                          <Link to="/DashBoard/Sections/Products">إضافة شرائح منتجات</Link>
                     </div>
                              <div className='flex items-center justify-end mr-5 mt-10'>
                                 <h1 className='font-Somar-Regular text-2xl'>الشحن</h1>
                                 <img src={delivery} className="ml-5" />  
                              </div>
                              <div className=' cursor-pointer flex items-center justify-end mr-2 mt-64' onClick={()=>SignOut()}>
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

export default StoreInfo