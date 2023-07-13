import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header'
import Courses from './components/courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contactus from './components/Contactus.jsx/Contactus';
import Request from './components/Request/Request';
import About from './components/About/About';
import NotFound from './components/Layout/NotFound/Notfound'
import PaymentSuccess from './components/Payments/PaymentSuccess'
import PaymentFailure from './components/Payments/PaymentFailure'
import Subscribe  from './components/Payments/Subscribers';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile'
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';

function App() {

  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
  })
  return ( 
    <>
      <Router>
      <Header />
        <Routes>
          <Route  exact path={'/'} element={<Home/>}/>
          <Route  exact path={'/courses'} element={<Courses/>}/>
          <Route  exact path={'/course/:id'} element={<CoursePage/>}/>

          <Route  exact path={'/login'} element={<Login/>}/>
          <Route  exact path={'/signup'} element={<Signup/>}/>
          <Route  exact path={'/forgotpassword'} element={<ForgetPassword/>}/>
          <Route  exact path={'/resetpassword/:token'} element={<ResetPassword/>}/>
          <Route  exact path={'/contact'} element={<Contactus/>}/>
          <Route  exact path={'/about'} element={<About/>}/>
          <Route exact path ={'/profile'} element={<Profile/>}/>
          <Route  exact path={'/request'} element={<Request/>}/>
          <Route  exact path={'/subscribe'} element={<Subscribe/>}/>
          <Route  exact path={'/paymentsuccess'} element={<PaymentSuccess/>}/>
          <Route  exact path={'/paymentfailure'} element={<PaymentFailure/>}/>
          <Route  exact path={'*'} element={<NotFound/>}/>
          <Route  exact path={'/changepassword'} element={<ChangePassword/>}/>
          <Route  exact path={'/updateprofile'} element={<UpdateProfile/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
