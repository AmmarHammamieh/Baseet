import React from 'react'
import Logo from "../images/Logo.svg";
import SmallCover from "../images/SmallCover.svg";
import PrivacyUse from "../images/PrivacyOfUse.svg";
import HomeContactCover from "../images/HomeContactCover.svg";
import Drawer from "../images/Drawer.svg";
import { AiOutlineClose} from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';



function PrivacyOfUse() {

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
        
            <div className='flex justify-start'>
                <img src={SmallCover} className="w-4/5 h-fit" />
                <div  className='absolute flex flex-col w-full h-full '>
                    <div id="header" className='flex justify-evenly '>
                        <div className='hidden w-full mt-2 justify-center lg:flex text-[#035AA7] font-semibold'>
                        {cookies.get('token') ?
                                    <a href='/' onClick={() => Signout()} className='m-3 cursor-pointer font-Somar-Bold text-2xl'>تسجيل الخروج</a>
                                    :
                                    <Link to="/SignIn" className='m-3 cursor-pointer  font-Somar-Bold text-2xl'>تسجيل الدخول</Link>
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
                    {/*  */}
            <div className=' w-full h-full flex flex-col'> 
          
                    <div  className=' h-1/3 w-full flex justify-center'>
                      <img src={PrivacyUse} className="w-3/5 m-0 h-3/4 "/>
                        </div>
                        {/* المقدمة */}
              <div className='relative z-10'>
              <img src={HomeContactCover} className="absolute bottom-0 z-0"/>
                        <div className='relative z-10 text-right mr-5 lg:mr-20 '>
                            <h1 className='font-bold font-Somar-Bold text-2xl'>: المقدّمة</h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                            <p className='mt-5 font-Somar-Regular  '>منصة سلّة المملوكة لشركة سلة القابضة المحدودة والمسجلة في سوق أبوظبي العالمي بموجب رخصة تجارية رقم: 000001302 والتي تمثلها في المملكة العربية السعودية شركة تطبيق سلّة لتقنية المعلومات ذات السجل التجاري رقم: 4031200589 ترحّب بكم ، وتبلغكم بأنكم سوف تجدون أدناه الشروط والأحكام المُنظّمة لاستخدامكم لمنصة سلّة وكافة الآثار القانونية التي تنتج عن استخدامكم لخدمات منصة سلّة في الشبكة العنكبوتية ، حيث أن استخدام أي شخصٍ كان لمنصة سلّة سواءً كان مستهلكاً أو تاجراً أو غير ذلك فإن هذا يُعد موافقة وقبول منه وهو بكامل أهليته المعتبرة شرعاً ونظاماً وقانوناً لكافة مواد وبنود وأحكام هذه الاتفاقية وهو تأكيد لالتزامكم بأنظمتها ولما ذُكر فيها، ونشير إليكم بأن منصة سلّة قد تكون عبارة عن ( موقع إلكتروني أو تطبيق على الهواتف المحمولة أو منصة إلكترونية ) وتعتبر هذه الاتفاقية سارية المفعول ونافذة بمجرد قيامكم بالموافقة عليها والبدء في التسجيل بمنصة سلّة بموجب المادتين الخامسة والعاشرة من نظام التعاملات الالكترونية السعودي.</p>
                            </div>
                            {/*  */}
                            <h1 className='font-bold  font-Somar-Bold text-2xl mt-16'>: المادة الأولى – المقدّمة والتعريفات</h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin mt-6'>
                                <p className='font-Somar-Regular'>: يعتبر التمهيد أعلاه جزءاً لا يتجزأ من هذه الاتفاقية ، كما تجدون أدناه الدلالات والتعريفات للعبارات الرئيسية المستخدمة في هذه الاتفاقية  </p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>   (  منصة سلّة المملوكة لشركة سلّة القابضة )يقصَد بهذه العبارة شركة تطبيق سلة لتقنية المعلومات، ويشمل هذا التعريف كافة أشكال شركة تطبيق سلّة لتقنية المعلومات على الشبكة العنكبوتية، سواءً كانت تطبيق الكتروني، أو موقع الكتروني على الشبكة العنكبوتية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>( التاجر ) يقصَد بهذه العبارة كل تاجر يسجّل في منصة سلة لإنشاء متجره الالكتروني، سواءً كان شخص طبيعي أو معنوي، ويشمل هذا التعريف كافة أوجه المتجر طالما أنه يقوم بتجارته عن طريق منصة سلة، ويشمل ذلك الموقع الالكتروني للتاجر.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>( المتجر ) يقصَد بهذه العبارة المتجر المستخدَم من قبل التاجر في منصة سلة الالكترونية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>( المستهلك ) يقصَد بهذه العبارة كل مستهلك يقوم بشراء المنتج أو الخدمة من التاجر، وذلك عن طريق متجر التاجر الالكتروني الذي أسسه عبر منصة سلة.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>( الاتفاقية ) يقصَد بهذه العبارة قواعد وشروط وأحكام استخدام منصة سلة الإلكترونية، أي كافة أحكام وشروط هذه الاتفاقية، والتي تحكم وتنظّم العلاقة فيما بين أطراف هذه الاتفاقية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'> مزود الخدمة ) يقصَد بهذه العبارة الخدمات التي تقوم منصة سلّة بتوفيرها للتُجّار عن طريق أطراف ثالثة ، ويُقصد بـ توفير الخدمات أي مجرد توفير الربط بين التاجر ومزود الخدمة ، حيث أنه لا سلطان ولا علاقة لمنصة سلّة بالاتفاق المبرم بين التاجر ومزود الخدمة.</p>
                            </div>
                            {/*  */}
                            <h1 className='font-bold font-Somar-Bold text-2xl mt-10 mb-5'  dir="rtl" lang="ar">المادة الثانية – أهلية التاجر القانونية: </h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يقر التاجر بأنه ذا أهلية قانونية معتبرة شرعاً وقانوناً، وأن عمره لا يقل عن ثمانية عشرة عاماً، كما هو معتبر في القوانين والأنظمة المرعية بالمملكة العربية السعودية ، وأنه ذا دراية كافية لإنشاء وتأسيس وإدارة متجره الالكتروني عبر منصة سلة.</p>
                               <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>استثناءً مما ورد في البند الأول ( 1 ) من المادة الثانية ( 2 ) ، يجوز للتاجر أن يمارس التجارة إذا كان يقل عن سن الرشد المعتبر في المملكة العربية السعودية (ثمانية عشرة عاماً) ، حيث أنه يلتزم بأن يقدّم ما يثبت موافقة وليه على تأسيسه للمتجر الالكتروني، كصك الولاية، وإفادة الموافقة الموقّعة من قبل وليه القانوني الشرعي في حال استلزم ذلك.</p>
                               <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يقر التاجر بأنه ذا أهلية سليمة وأنه غير مصاب بأي عارض من عوارض الأهلية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>في حال قيام التاجر بالتسجيل كمؤسسة أو شركة، أو أي شكل نظامي آخر، فإن هذه المؤسسة أو الشركة أو الشكل النظامي المسجّل عن طريقه يجب أن تتوافر فيه الأهلية القانونية والنظامية والشرعية اللازمة للقيام بأعمال التجارة عبر منصة سلة الالكترونية.</p>
                               <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يوافق التاجر بأنه في حال مخالفته لهذه المادة ” أهلية التاجر القانونية ” فإنه يتحمّل تبعات هذه المخالفة أمام المستهلكين أو المستخدمين أو الغير، حيث أن منصة سلة لا علاقة لها بتعاملات التاجر مع المستهلك أو الغير من الناحية القانونية والنظامية والشرعية، كما أنه يحق لمنصة سلة في هذه الحالة مساءلة التاجر بموجب أحكام المسئولية العقدية، ومطالبته بالتعويض عن الأضرار التي قد تنشأ نتيجة هذه المخالفة، ومن قبيل هذه الأضرار ما يصيب منصة سلة في سمعتها أمام التجار الآخرين أو المستهلكين أو المستخدمين أو أمام الغير.</p>                                  
                            </div>
                            {/*  */}
                            <h1 className='font-bold font-Somar-Bold text-2xl mt-10 mb-5' dir="rtl" lang="ar">المادة الثالثة – طبيعة التزام منصة سلة:  </h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                            <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>إن مهمة منصة سلة هي مجرد تقديم أدوات الدعم الالكتروني، عن طريق تأسيس المتجر، حيث أن التزام منصة سلة بموجب هذه الاتفاقية هو فقط انشاء المتجر الالكتروني الخاص بالتاجر لدى منصة سلة الالكترونية، ووضع المتجر أمام المستخدمين.</p>
                            <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>قد توفّر منصة سلة خدمات أخرى للتاجر أو المتجر كخدمات الدعم التسويقي أو خدمات التوجيه والإرشاد، وكذلك قد توفّر له بوابات دفع الكترونية عبر الانترنت، وجميع خدمات منصة سلة تخضع لمواد وبنود وأحكام اتفاقية الاستخدام هذه.</p>
                            <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>لا تلتزم منصة سلة بإتمام عمليات بيع المنتجات أو الخدمات بين المستهلك والمتجر، حيث أن التزامها ينتهي بتقديم خدمات إنشاء المتجر الالكتروني عبر منصة سلة، ولا يضر ذلك بالخدمات الأخرى التي تستمر منصة سلة بتقديمها كخدمات التوجيه والإرشاد والدعم الفني والتسويق ووسائل الدفع</p>
                            <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>إن منصة سلّة قدّ توفّر وبشكل مؤقت بعض الخدمات المجانية لبعض المتاجر ، مثل أن يقوم التاجر بـ : تعديل وتغيير مظهر أو شكل أو ألوان المتجر بناء على رغبته ، وتُقدّم هذه الخدمات من قبل إدارة منصة سلّة بشكل مجاني ومحدود وتخضع لقيود محددة ومعيّنة فإن رغب التاجر بخدمات إضافية عليه أن يتواصل مع الدعم الفني الخاص بمنصة سلّة للاستفسار عن العروض ورسوم الباقات والخدمات الإضافية.</p>
                            <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>إن جميع التعاملات التي تتم بين التاجر والمستهلك لا علاقة لها بشخص منصة سلة، ومنصة سلة غير مسئولة عنها، حيث أن هذا التعامل هو علاقة تعاقدية مستقلة تخضع للاتفاق الذي يبرم بين التاجر والمستهلك. وبناءً عليه فإذا تخلّف المستهلك عن سداد ثمن الخدمة أو المنتج الذي يوفّره التاجر فلا علاقة لمنصة سلة بهذه المخالفات.</p>
                            <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>إن جميع التعاملات التي تتم بين التاجر ومزودي الخدمات ( خدمات الطرف الثالث ) الذين توفر منصة سلّة الربط مع خدماتهم أو عرض خدماتهم ليستفيد منها التاجر والمستهلك لا علاقة لها بمنصة سلّة ، حيث أن هذا التعامل هو علاقة تعاقدية مستقلة عن منصة سلّة وخاضعة للاتفاق المبرم بين التاجر ومزود الخدمة ، وبناءً عليه فإذا تخلّف أو امتنع أو لم يلتزم أحد الاطراف في تنفيذ التزاماته التي جرى الاتفاق عليها أو لم ينفذها على الوجه المطلوب فإن منصة سلّة غير مسئولة عن ما ينتج عن هذه التصرفات، إن منصة سلّة غير مسئولة عن أي مخالفات تحدث أو يتم ارتكابها بين التاجر ومزود الخدمة.</p>
                                <p dir="rtl" lang="ar" className='mt-4 font-Somar-Regular'>أنت تعلم أن منصة سلّة تعتبر منصة إلكترونية تقنية على شبكة الانترنت تتيح للتاجر الذي يوافق على هذه الاتفاقية تأسيس متجره الالكتروني ، وممارسة نشاطه عبر المتجر ، ومهمتها تنتهي عند هذا الحد. فليس هناك أدنى مسئولية على منصة سلة حول المخالفات التي يقوم بها التاجر في متجره بالمخالفة لأحكام هذه الاتفاقية، وليس لمنصة سلة أي علاقة بالنسبة للتعاملات التي تتم بين التاجر والمستهلك.</p>
                            </div>
                            {/* */}
                            <h1 className='font-bold font-Somar-Bold text-2xl mt-10 mb-5' dir="rtl" lang="ar">المادة الرابعة – ضوابط إنشاء المتجر الالكتروني: </h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                            <p dir="rtl" lang="ar" className='mt-4 font-Somar-Regular'>يجوز لكل شخص توافرت فيه الأهلية القانونية المعتبرة نظاماً وشرعاً إنشاء متجره وفقاً لقواعد وأحكام اتفاقية الاستخدام وعلى وجه الخصوص  “.</p>  
                            <p dir="rtl" lang="ar" className='mt-4 text-base font-semibold font-Somar-Regular'>” المادة الأولى – أهلية التاجر القانونية:</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يجب أن يكون المتجر الذي تم تأسيسه وفقاً لاتفاقية استخدام منصة سلة غير مخالف للأنظمة والقوانين في المملكة العربية السعودية، ويلتزم التاجر بتوضيح ماهية الأعمال التي يقوم بالتجارة الالكترونية عن طريقها، وماهية الخدمات أو المنتجات التي يقدّمها أو يبيعها، وتخلي منصة سلّة مسئوليتها عن مخالفة المتجر لأحكام النظام السعودي في المملكة العربية السعودية والآداب العامة، و يبقى لمنصة سلة دائماً الحق في رفض تسجيل أي متجر الكتروني لا يتوافق مع القوانين والأنظمة المرعية في المملكة العربية السعودية أو أحكام هذه الاتفاقية، وعليه فإن التاجر يقر بموجب أحكام الاتفاقية أن متجره لا يخالف النظام العام في المملكة العربية السعودية أو الآداب الإسلامية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يجب أن يكون المتجر الذي تم تأسيسه عن طريق منصة سلة غير مخالف لقواعد وأحكام اتفاقية الاستخدام هذه ، كما يقر التاجر بأن المحل الذي ينصب عليه التعامل في المتجر غير مخالف لهذه الاتفاقية و غير مخالف للأنظمة والقوانين المعمول بها في المملكة العربية السعودية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>لا يحق لأي شخص استخدام منصة سلّة إذا ألغيت عضويته أو متجره من قبل منصة سلّة أو بموجب أوامر أو أحكام قضائية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>في حال قيام أي مستخدم بالتسجيل كمؤسسة أو شركة، أو مؤسسة خيرية أو جهة اعتبارية، فإن المؤسسة أو الشركة أو الجهة المسجّلة تكون ملزمة بكافة القواعد والأحكام المذكورة في اتفاقية الاستخدام الخاصة بمنصة سلّة.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>ينبغي على كافة المتاجر والتُجّار الالتزام بكافة القوانين المعمول بها لتنظيم التجارة عبر الانترنت وكذلك الالتزام بنظام الجرائم المعلوماتية وأنظمة وزارة التجارة والاستثمار ونظام التعاملات الالكترونية ونظام التجارة الالكترونية.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يقر التاجر بأنه قبل تسجيله في منصة سلة الالكترونية قد تحقق من توافر جميع الإجراءات والاشتراطات المطلوبة من قبل الجهات الرسمية في المملكة العربية السعودية وقد استوفى جميع هذه الإجراءات والاشتراطات لممارسة نشاطه في المتجر.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>في حالة كان التاجر المتقدّم لطلب الانضمام وتأسيس المتجر عبارة عن تاجر فرد “شخص طبيعي”، فيلتزم كذلك بالتحقق من الاشتراطات المطلوبة لدى الجهات الرسمية وتوفيرها بحسب طبيعة نشاط الفرد التاجر، حيث أن التاجر الفرد يقر بأنه ملتزم بهذه الاشتراطات وملتزم بتوفيرها وتجهيزها، كما يلتزم التاجر الفرد بتوفير رقم هويته الوطنية وغير ذلك من المعلومات اللازمة والوثائق التي تطلبها منصة سلة.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>في حالة كان التاجر المتقدم لطلب الانضمام وتأسيس متجره يمثل مؤسسة تجارية أو شركة أو مؤسسة خيرية أو جهة اعتبارية فلابُد من تزويد منصة سلّة بكافة المعلومات والوثائق الثبوتية، مثل السجل التجاري وأي وثائق أخرى للمتجر تطلبها منصة سلّة للتسجيل ولإثبات الشخصية القانونية الخاصة بالمتجر.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يجب أن يلتزم المتجر والتاجر بالتزامات التسجيل المحددة في ” المادة الخامسة – الحسابات والتزامات التسجيل “، وجميع قواعد وأحكام اتفاقية الاستخدام.</p>
                            </div>
                            {/* */}
                            <h1 className='font-bold font-Somar-Bold text-2xl mt-10 mb-5' dir="rtl" lang="ar">المادة الخامسة – الحسابات والتزامات التسجيل:</h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>فور التقدم بطلب الانضمام إلى عضوية منصة سلّة أو طلب إنشاء المتجر الالكتروني تكون مطالباً بالإفصاح عن معلومات محددة واختيار اسم مستخدم وكلمة مرور سرية لاستعمالها عند الولوج لخدمات منصة سلّة. وبعد تنشيط حسابك سوف تصبح مستخدمًا لخدمات منصة سلّة ، وبذلك تكون قد وافقت على:</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>أن تكون مسؤولاً عن المحافظة على سرية معلومات حسابك وسرية كلمة المرور ، وتكون بذلك موافقاً على إعلام منصة سلّة حالاً بأي استخدام غير مفوض به لمعلومات حسابك لدى منصة سلّة أو أي اختراق آخر لمعلوماتك السرية.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>لن تكون منصة سلّة بأي حال من الأحوال مسؤولًة عن أي خسارة قد تلحق بك بشكل مباشر أو غير مباشر معنوية أو مادية نتيجة كشف معلومات اسم المستخدم أو كلمة الدخول أو في حال إساءة استخدام المتجر.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>أنت تلتزم باستخدام متجرك الالكتروني بنفسك، حيث أنك مسؤولاً عنه مسؤولية كاملة، وفي حال استخدام غيرك له فهذه يعني أنك قد فوّضته باستخدام المتجر باسمك ولحسابك مالم يقوم المتجر بإبلاغ إدارة سلة بعكس ذلك.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>أنت تلتزم عند استخدام منصة سلّة أن تستخدمها بكل جدية ومصداقية، وأن تلتزم بقواعد وأحكام اتفاقية الاستخدام وأن تلتزم بالضوابط النظامية والقانونية المعمول بها في المملكة العربية السعودية، وتعتبر ملزماً بتعويض منصة سلّة عن أي خسائر مباشرة أو غير مباشرة قد تلحق بمنصة سلّة نتيجة أي استخدام غير شرعي أو غير حقيقي أو غير مفوض لحسابك من طرفك أو من طرف أي شخص آخر حصل على مفاتيح الولوج إلى حسابك بالمنصة سواء كان لإنجاز الخدمات باستعمال اسم المستخدم وكلمة المرور أو نتيجة لإهمالك المحافظة على سرية اسم المستخدم وكلمة المرور ، وسواء بتفويض منك أو بلا تفويض.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>أنت تلتزم بالإفصاح عن معلومات حقيقية وصحيحة ومحدثة و كاملة وقانونية عن نفسك حسبما هو مطلوب أثناء التسجيل لدى منصة سلّة وتلتزم بتحديث بياناتك في حال تغييرها في الواقع أو في حال الحاجة إلى ذلك.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>أن لا تدرج ضمن اسم المستخدم أي من تفاصيل الاتصال بك كعناوين البريد الإلكتروني أو أرقام هواتفك أو أي تفاصيل شخصية، أو أي عبارة تُشير إلى علاقة شخصية أو تجارية بينك وبين منصة سلّة أو منسوبيها أو مُلّاكها.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>أن لا تضع ما يشير في متجرك إلى أي علاقة مباشرة أو غير مباشرة بين المتجر ومنصة سلّة أو إدارتها أو مُلّاكها أو منسوبيها، حيث أن منصة سلة لا علاقة لها بما تقوم به في متجرك وهي غير مسئولة عن نشاط متجرك.</p>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>إن منصة سلة تلتزم بالتعامل مع معلوماتك الشخصية وعناوين الاتصال بك بسريّة وفقاً لأحكام سياسة الخصوصية وسرية المعلومات المعمول بها لدى منصة سلة.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>سوف تكون ملزمًا بالحفاظ على بيانات التسجيل وتحديثها دائمًا للإبقاء عليها حقيقية وصحيحة وراهنة وكاملة وقانونية، وإذا أفصحت عن معلومات غير حقيقية أو غير صحيحة أو غير راهنة أو غير كاملة أو غير قانونية او مخالفة لما جاء في اتفاقية الاستخدام، فإن منصة سلّة تمتلك الحق في وقف أو تجميد أو إلغاء عضويتك أو متجرك وحسابك في المنصة، وذلك دون إلحاق الأضرار بحقوق منصة سلّة الأخرى ووسائلها المشروعة في استرداد حقوقها وحماية باقي المستخدمين.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>لمنصة سلّة الحق في أي وقت في أن تجري أي تحقيقات تراها ضرورية سواء كانت مباشرة أو عبر طرف ثالث وتطالبك بالإفصاح عن أي معلومات إضافية أو وثائق مهما كان حجمها لإثبات هويتك أو ملكيتك لأموالك أو للحساب الخاص بك.</p>
                              <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>في حالة عدم الالتزام بأي مما ورد أعلاه فإن لإدارة منصة سلّة الحق في إيقاف أو إلغاء متجرك أو عضويتك أو حجبك من الولوج لخدمات منصة سلة مرة أخرى. وتحتفظ كذلك بالحق في إلغاء أي حسابات غير مؤكدة وغير مثبتة أو عمليات أو حسابات مر عليها مدة طويلة دون نشاط.</p>
                            </div>
                            {/*  */}
                            <h1 className='font-bold font-Somar-Bold text-2xl mt-10 mb-5' dir="rtl" lang="ar">المادة السادسة – الاتصالات الإلكترونية ووسائل التواصل الرسمية:</h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>يوافق التاجر في منصة سلّة على أن يتم التواصل معه عبر البريد الإلكتروني، أو من خلال قيام إدارة منصة سلّة ببث رسائل عامة ترد إلى كافة المستخدمccccين أو إلى مستخدمين محددين حال الولوج إلى حساباتهم داخل منصة سلّة. كما يوافق التاجر في منصة سلّة على أن جميع الاتفاقيات والإعلانات والبيانات والاتصالات الأخرى التي تزود بها الكترونياً تقوم مقام مثيلاتها المكتوبة ، وهي حجة قائمة بذاتها ، في تلبية الاحتياجات القانونية.</p>
                            <p dir="rtl" lang="ar" className='mt-2 font-Somar-Regular'>سوف تقوم منصة سلّة خلال فترة عضويتك وتجارتك لدى المنصة بإرسال رسائل إلكترونية ترويجية لتعريفك بأي تغيرات أو إجراءات أو نشاطات دعائية جديدة قد تضاف إلى منصة سلّة.</p>
                            </div>


                                  <h1 className='font-bold  font-Somar-Bold text-2xl mt-10 mb-5'>قواعد وأحكام استخدام منصة سلة </h1>
                            <div className='w-[90%] ml-[10%] text-xl font-thin'>
                                <p dir="rtl" lang="ar" className='mt-3  font-Somar-Regular '>إن جميع التزامات منصة سلة، وجميع التزامات التجار، وجميع الحقوق الواردة في العلاقة بين التاجر ومنصة سلة، – موجودة هنا Https://salla.sa/site/terms/ – . حيث أن هذه القواعد هي “سياسة الخصوصية وسرية المعلومات” والمنبثقة من الاتفاقية التي ابرمت بين التاجر ومنصة سلة عند تأسيسه للمتجر، وقد وضعت سياسة الخصوصية وسرية المعلومات لضمان المصداقية والثقة التي تحرص منصة سلة على توفيرها للتجار.</p>
                            </div>
                {/* Footer */}


                             <div className=' mt-20 grid grid-cols-2 border-2 p-2 m-auto  gap-5 w-3/4  md:ml-48 mb-2 lg:flex lg:justify-evenly'>
                            
                             <div className=' row-start-2 flex flex-col  items-center col-span-2'>
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
                              <h1 className='font-bold text-[#035AA7] font-Somar-Black text-xl'>من المدونة</h1>
                              <p className='mt-2 font-Somar-Medium'>تصوير المنتجات باحترافية وبأقل التكاليف</p>
                              <p className='font-Somar-Medium'>استراتيجيات التسعير الاحترافية </p>
                              <p className='font-Somar-Medium'>التجارة الالكترونية</p>
                          </div>
                          <div dir='rtl'  className='flex flex-col '>
                              <h1 className='font-bold text-[#035AA7] font-Somar-Black text-xl'>عن بسيط</h1>
                              <p className='mt-2 font-Somar-Medium'>اتفاقية الاستخدام</p>
                              <p className='font-Somar-Medium'> سياسة الخصوصية </p>
                              <p className='font-Somar-Medium'>انضم لفريق بسيط</p>
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
              <Link to="/" className='font-Somar-Bold text-2xl'>الرئيسية </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 '>
            <Link to="/Packages" className='font-Somar-Bold text-2xl'>الأسعار </Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to='/Blog' className='font-Somar-Bold text-2xl'>المدونة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2'>
            <Link to="/CreateStoreBody " className='font-Somar-Bold text-2xl'>تجربة المنصة</Link>
            </div>
            <div className='mb-4 cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2'>
            <Link to="/CreateStoreBody" className='font-Somar-Bold text-2xl'>أنشئ متجرك</Link>
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
        <div className='hidden sm:block h-full w-full bg-black opacity-40'/>
    </div>
    </div>
  )
}

export default PrivacyOfUse