import './App.css';
import HomeBody from './components/HomeBody';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignInBody from './components/SignInBody';
import PrivacyOfUse from './components/PrivacyOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import CreateStoreBody from './components/CreateStoreBody';
import Info from './components/Info';
import PackagesBody from './components/PackagesBody';
import ControlPanelBody from './components/DashBoard/ControlPanelBody';
import OrdersBody from './components/DashBoard/OrdersBody';
import Blog from './components/Blog';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ForgotPassword from './components/ForgotPasswordBody';
import ResetPassword from './components/ResetPassword';
import Cookies from 'universal-cookie';
import NotFound from './components/NotFound';
import Products from './components/DashBoard/Products';
import AddProduct from './components/DashBoard/Modals/AddProduct';
import Sales from './components/DashBoard/Sales';
import SlideSection from './components/DashBoard/SlideSection';
import ProductSection from './components/DashBoard/ProductSection';
import ViewProductSlides from './components/DashBoard/ViewProductSlides';
import StoreInfo from './components/DashBoard/StoreInfo';
import Client from './components/DashBoard/Client';


function App() {
  
  const cookies = new Cookies();
  return (
    <div className="App">
      <Router>
      <Provider store={store}>
        <Routes>
            <Route path="/" element={<HomeBody />} />
            <Route path="/NotFound" element={<NotFound />} />
            {cookies.get('token') ?
              (
              <>
                    <Route path="/SignIn" element={<NotFound />} />
                    <Route path="/ForgotPassword" element={<NotFound />} />
                    
                    <Route path="/DashBoard/ControlPanel" element={<ControlPanelBody />} />
                    <Route path="/DashBoard/Orders" element={<OrdersBody />} />

              </>
              ) : ( 
                <>
                    <Route path="/SignIn" element={<SignInBody />} />     
                    <Route path="/ForgotPassword" element={<ForgotPassword />} />
                    <Route path="/DashBoard/ControlPanel" element={<ControlPanelBody />} />
                  <Route path="/DashBoard/Orders" element={<OrdersBody />} />
                  <Route path="/DashBoard/Products" element={<Products />} />
                  
                </>
              )
            }
            {console.log(cookies.get('token__to__Reset'))}
                {cookies.get('token__to__Reset') ?
              (

                <Route path="/ResetPassword" element={<ResetPassword />} />

              ) : ( 
              
                <Route path="/ResetPassword" element={<NotFound />} />
              )
            }
            <Route path="/DashBoard/Store" element={<StoreInfo />} />
            
            <Route path="/DashBoard/Products" element={<Products />} />
            <Route path="/DashBoard/Sales" element={<Sales />} />
            <Route path="/DashBoard/Clients" element={<Client />} />

            
            <Route path="/DashBoard/Sections/Slides" element={<SlideSection />} />
            <Route path="/DashBoard/Sections/Products" element={<ProductSection />} />
            <Route path="/DashBoard/Sections/Slides/View" element={<ViewProductSlides />} />

          <Route path="/PrivacyOfUse" element={<PrivacyOfUse />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/CreateStoreBody" element={<CreateStoreBody />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Packages" element={<PackagesBody />} />
            <Route path="/Blog" element={<Blog />} />
            
          </Routes>
          </Provider>
    </Router>
      
    </div>
  );
}

export default App;
