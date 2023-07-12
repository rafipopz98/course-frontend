import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header'
import Courses from './components/courses/Courses';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return ( 
    <>
      <Router>
      <Header />
        <Routes>
          <Route  exact path={'/'} element={<Home/>}/>
          <Route  exact path={'/courses'} element={<Courses/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
