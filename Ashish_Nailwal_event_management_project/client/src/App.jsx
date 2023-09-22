import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import AdminRegister from './pages/AdminRegister';
import UserRegister from './pages/UserRegister';
import VendorRegister from './pages/VendorRegister';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import VendorLogin from './pages/VendorLogin';
import AdminMain from './pages/AdminMain';
import VendorMain from './pages/VendorMain';
import UserMain from './pages/UserMain';
import ErrorPage from './pages/ErrorPage';
import ProductList from './pages/ProductList';

function App() {

  

  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* signup Rs */}
    <Route path="/" element={<Home/>}/>
    <Route path="/signup/admin" element={<AdminRegister/>}/>
    <Route path="/signup/user" element={<UserRegister/>}/>
    <Route path="/signup/vendor" element={<VendorRegister/>}/>
    {/* login Rs */}
    <Route path="/login/admin" element={<AdminLogin/>}/>
    <Route path="/login/user" element={<UserLogin/>}/>
    <Route path="/login/vendor" element={<VendorLogin/>}/>
    {/* adminmain */}
    <Route path="/admin/main" element={<AdminMain/>}/>
    <Route path="/vendor/main" element={<VendorMain/>}/>
    <Route path="/user/main" element={<UserMain/>}/>
    {/* errorpage */}
    <Route path="/errorpage" element={<ErrorPage/>}/>
    <Route path="/user/vendor/productlist" element={<ProductList/>}/>
    

    
    </Routes>
   
    </BrowserRouter>
    
      
    </>
  )
}

export default App
