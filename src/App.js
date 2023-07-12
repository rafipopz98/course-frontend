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

function App() {
  return ( 
    <>
      <Router>
      <Header />
        <Routes>
          <Route  exact path={'/'} element={<Home/>}/>
          <Route  exact path={'/courses'} element={<Courses/>}/>
          <Route  exact path={'/login'} element={<Login/>}/>
          <Route  exact path={'/signup'} element={<Signup/>}/>
          <Route  exact path={'/forgotpassword'} element={<ForgetPassword/>}/>
          <Route  exact path={'/resetpassword/:token'} element={<ResetPassword/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
