import React from 'react'
import Logo from "../images/Logo.svg";
import SmallCover from "../images/SmallCover.svg";
import EndCoverRight from "../images/EndCoverRight.svg";
import Drawer from "../images/Drawer.svg";

import Cover from "../images/Cover.svg";
import { BsList } from 'react-icons/bs';
import { AiOutlineClose} from 'react-icons/ai';
import PrivacyPolic from "../images/PrivacyPolicy.svg"
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

function PrivacyPolicy() {
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
                        <div className='hidden lg:flex w-full mt-2 justify-center  text-[#035AA7] font-semibold'>
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
                            <img src={Logo} className="w-1/6 h-fit mt-8 lg:mr-20 mr-5" />
                        </div>
                    </div>
                    {/* */}
                    <div className='w-full h-full flex flex-col'>
                    <div className='h-1/3 w-full flex justify-center'>
                      <img src={PrivacyPolic} className="w-3/5 m-0 h-3/4 "/>
                        </div>
                        {/* المقدمة */}
                        <div className='relative z-10'>
                            <img src={EndCoverRight} className="absolute bottom-0"/>
                        <div className='relative z-10 text-right  '>
                            <div className='mr-5 lg:mr-20'>
                            <h1 className='font-bold  text-2xl font-Somar-Bold mb-5'>: سياسة الخصوصية وسرية المعلومات</h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                            <p dir="rtl" lang="ar" className='mt-5 leading-relaxed font-Somar-Medium'>يرحّب بكم فريق عمل منصة سلة عبر منصته الالكترونية، وتتقدّم منصة سلة بالشكر على ثقتكم بالمنصة، وتفيدكم منصة سلة بأنه حرصاً من منصة سلة وادراكها التام بأن التاجر له حقوق معيّنة عبر منصة سلة، فإن منصة سلة تسعى للحفاظ على المعلومات الخاصة بالتجار والمستهلكين وفقاً لآلية سياسة الخصوصية وسرية المعلومات المعمول بها في منصة سلة . وعليه فإن منصة سلة تنوّه بأنه وفقاً لاتفاقية الاستخدام المبرمة بينكم كتجار وبين منصة سلة فإن هذه الوثيقة تحيطكم علماً بسياسة الخصوصية وسرية المعلومات المعمول بها في منصة سلة، وأنه وفقاً للبند الرابع من المادة الخامسة عشرة من اتفاقية الاستخدام فقد أنشأت منصة سلة هذه القواعد “سياسة الخصوصية وسرية المعلومات” لتوضيح وتحديد آلية السرية والخصوصية المعمول بها في منصة سلة الالكترونية، ويرجى اطلاعكم عليها حيث أنكم بولوجكم إلى منصة سلة وتأسيسكم للمتجر الالكتروني فإن جميع معلوماتكم تخضع لهذه السياسة.</p>
                            </div>
                       
                        {/* */}
                        <h1 className='font-bold  text-2xl mt-10 font-Somar-Bold mb-5'>:المعلومات التي تحصل عليها منصة سلّة وتحتفظ بها في أنظمتها الالكترونية</h1>
                        <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-5 font-Somar-Medium'>المعلومات الشخصية الخاصة بالمستهلك، كالاسم البريد الالكتروني، ورقم الهوية الوطنية أو رقم الإقامة.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>المعلومات الشخصية الخاصة بالتاجر، كالاسم والعمر والبريد الالكتروني، ورقم الهوية الوطنية أو رقم الإقامة.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>المعلومات الخاصة بالمتجر وكيانه القانوني، كرقم السجل التجاري وصورة من السجل التجاري.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>معلومات الدخول الشخصية الخاصة بالمتجر الالكتروني، مثل اسم المستخدم وكلمة السر والبريد الالكتروني، والسؤال الخاص باسترجاع كلمة السر وإجابته.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>في حال عدم توفير التاجر للمعلومات المطلوبة منه فإن منصة سلّة قدّ تحاول الحصول عليها عبر مصادر أخرى.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'></p>
                        </div>
                            {/* */}
                            <h1 className='font-bold text-2xl mt-10 font-Somar-Bold mb-5'>:معلومات الإيرادات أو البضائع أو الخدمات الخاصة بالمتاجر</h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-5 font-Somar-Medium'>منصة سلة على اطلاع دائم بالإيرادات الحاصلة في المتجر، وذلك لكون التاجر يستخدم بوابات الدفع التي توفّرها منصة سلة.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>منصة سلة على اطلاع بنوع البضائع أو الخدمات المعروضة في منصة المتجر.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>منصة سلّة على إطلاع بأداء المتاجر وذلك في حال استدعت الحاجة إلى توجيه الدعم أو النصح والإرشاد للتُجّار أو المتاجر لمساعدتهم وتحسين أدائهم.</p>
                            </div>
                            {/* */}
                            <h1 className='font-bold  text-2xl mt-10 font-Somar-Bold mb-5'>:معلومات مستهلكي المتاجر أو عملاء أو زبائن التجار</h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-5 font-Somar-Medium'>حيث أن منصة سلة تسعى إلى الحفاظ على جودة عمل المتاجر، وتحسين جودة أعمالهم، فإنها تطلع باستمرار على عدد مستهلكي المتاجر وعملائهم وشرائحهم.</p>
                            </div>
                            {/* */}
                            <h1 className='font-bold  text-2xl mt-10 font-Somar-Bold mb-5'>:مشاركة المعلومات الخاصة بالمتاجر والتُجّار </h1>
                             <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-5 font-Somar-Medium'>بطبيعة الحال فإن منصة سلة تسعى بالاحتفاظ بهذه المعلومات بما يحفظ خصوصية التاجر، ومنصة سلة لا تحتفظ بهذه المعلومات إلا بهدف تحسين جودة المنصة وجودة عمل المتاجر وتسهيلاً وتيسيراً لأعمال التجار والمتاجر.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>كقاعدة عامة فإن جميع هذه المعلومات لا يطلع عليها إلا بعض القائمين على منصة سلة وذلك بعد حصولهم على تصريح للاطلاع عليها من قِبل إدارة منصة سلّة – عادة ما يكون التصريح محدد ومقيّد ويخضع لرقابة قانونية وإدارية من قِبل منصة سلّة – ولن يتم نشر أو بث هذه المعلومات للغير.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>حيث أن منصة سلة تسعى للحفاظ على سلامة المتاجر وحقوق التُجّار ، فإنه – في حال ملاحظة منصة سلة لأي نشاط غير نظامي أو غير شرعي يقوم به التاجر – فإن منصة سلة تطبيقاً لمواد وبنود وأحكام اتفاقية الاستخدام وحيث أنها تسعى بقدر الإمكان إلى الحفاظ على سلامة عمل المتاجر فإنها قد تشارك أيٍ من هذه المعلومات مع الجهات المختصة لاتخاذ اللازم حيال التاجر أو المتجر المخالف ، وذلك لحماية منصة سلّة وباقي التُجّار والمتاجر والمستهلكين من أي مسائلة قانونية قدّ تطرأ على المنصة أو على أحد مستخدميها نتيجة لهذا النشاط الغير شرعي أو الغير نظامي.</p>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>ان التاجر الذي يبادر بتسجيل متجره لدى منصة سلة بواسطة شركاء النجاح فإنه بذلك يمنح شريك النجاح الذي قام بالتسجيل بواسطته الحق في الاطلاع على كافة المعلومات الخاصة بالتاجر ومتجره.</p>
                             </div>
                        </div>
                   
                            <div className='flex flex-col  w-full h-fit '>
                          <div className=' flex flex-col w-full h-full'>     
                           <div className='text-right mr-5 lg:mr-20'>
                            <h1 className='font-bold font-Somar-Medium text-2xl mt-10 mb-5'>:ما هو مدى أمان سرية المعلومات الخاصة بالتُجّار أو المستهلكين أو المتاجر</h1>
                             <div className='w-[90%] ml-[10%] text-xl font-thin'>                    
                             <p dir="rtl" lang="ar" className='mt-5 font-Somar-Medium'>تسعى منصة سلة إلى الحفاظ على سرية معلومات مستخدمين المنصة ، وحيث أن سياسة الخصوصية الخاصة بالتُجّار أو المتاجر لن تخالف أحكام اتفاقية الاستخدام أو سياسة الخصوصية وسرية المعلومات. ولكن نظراً لعدم إمكانية ضمان ذلك 100% في ( فضاء الإنترنت ) فإن فريق عمل منصة سلة ، ينوّه على يلي:</p>
                             <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>تسعى منصة سلة إلى الحفاظ على جميع المعلومات الخاصة بالمتاجر وألا يطلع عليها أي شخص بما يخالف السياسة المعمول بها في منصة سلة.</p>
                             <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>تعمل منصة سلة على حماية معلومات التُجّار والمتاجر بموجب أنظمة حماية إلكترونية وتقنية ذات جودة عالية وتُحدّث بشكل مستمر ودوري.</p>   
                             <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>غير أنه نظراً لأن شبكة الانترنت لا يمكن ضمانها 100% لما قد يطرأ من اختراق أو فيروسات على أنظمة الحماية الالكترونية و على جدران الحماية المعمول بها في منصة سلة فإن منصة سلة تنصح التجار بالحفاظ على معلوماتهم بسرية تامة، وعدم إفشاء أي معلومات يراها التاجر هامة جداً له، وهذا حرصاً من منصة سلة على حماية وتوجيه وإرشاد التٌجّار والمتاجر.</p>
                             <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>الخدمات الإستراتيجية واللوجستية ( خدمات الطرف الثالث ) :</p>
                             <p dir="rtl" lang="ar" className='mt-5 font-Somar-Medium'>يُقر التاجر بعلمه التام والنافي للجهالة بأنه في حال تقدّم لطلب الاشتراك في خدمة مُقدّمة عن طريق طرف ثالث ، بأنه يمنح تصريح وتخويل وإذن كامل وتام إلى منصة سلّة بتزويد مُقدّم الخدمة ببيانات التاجر أو المتجر أو المستخدم المشترك لدى مُقدِم الخدمة ، مثل: اسم المستخدم – الهاتف الشخصي – البريد الإلكتروني – رقم الهوية أو الإقامة – عنوان المنزل ، وغير ذلك من المعلومات التي يحتاجها مقدّم الخدمة ( الطرف الثالث ). وذلك حتى يتمكّن مقدم الخدمة ( الطرف الثالث ) من تقديم الخدمة المطلوبة والتي اشترك بها المستخدم.</p>
                            </div>
                            {/*  */}
                            <h1 className='font-bold font-Somar-Medium text-2xl mt-10 mb-5'>قواعد وأحكام استخدام منصة سلة </h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-3 font-Somar-Medium'>إن جميع التزامات منصة سلة، وجميع التزامات التجار، وجميع الحقوق الواردة في العلاقة بين التاجر ومنصة سلة، – موجودة هنا Https://salla.sa/site/terms/ – . حيث أن هذه القواعد هي “سياسة الخصوصية وسرية المعلومات” والمنبثقة من الاتفاقية التي ابرمت بين التاجر ومنصة سلة عند تأسيسه للمتجر، وقد وضعت سياسة الخصوصية وسرية المعلومات لضمان المصداقية والثقة التي تحرص منصة سلة على توفيرها للتجار.</p>
                            </div>
                             {/* Footer */}
                             <div className='mt-32 grid grid-cols-2 lg:flex justify-evenly lg:mt-52 border-2 p-2 m-auto  gap-5 w-3/4  md:ml-48 mb-2'>
                          
                             <div className='row-start-2 flex flex-col  items-center col-span-2'>
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
                              <h1 className='font-semibold text-[#035AA7] font-Somar-Black text-xl'>من المدونة</h1>
                              <p className='mt-2 font-Somar-Mediume'>تصوير المنتجات باحترافية وبأقل التكاليف</p>
                              <p className=' font-Somar-Mediume'>استراتيجيات التسعير الاحترافية </p>
                              <p className=' font-Somar-Mediume'>التجارة الالكترونية</p>
                          </div>
                          <div dir='rtl'  className='flex flex-col '>
                              <h1 className='font-semibold text-[#035AA7] font-Somar-Black text-xl'>عن بسيط</h1>
                              <p className='mt-2  font-Somar-Mediume'>اتفاقية الاستخدام</p>
                              <p className=' font-Somar-Mediume'> سياسة الخصوصية </p>
                              <p className=' font-Somar-Mediume'>انضم لفريق بسيط</p>
                                      </div>
                                      </div>
                            </div>
                            </div>
                                </div>
                            </div> 
                                </div>
                    </div>
                </div>
            </div>
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
            <Link to="/Packages" className='font-Somar-Bold text-2xl'>الأسعار </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to='/Blog' className='font-Somar-Bold text-2xl'>المدونة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to=" /Info" className='font-Somar-Bold text-2xl'>تجربة المنصة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
            <Link to="/CreateStoreBody" className='font-Somar-Bold text-2xl'>أنشئ متجرك</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            {cookies.get('token') ?
                   <a href='/' onClick={() => Signout()} className='font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                        :
                   <Link to="/SignIn" className='font-Somar-Bold text-2xl' >تسجيل الدخول</Link>
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

export default PrivacyPolicy