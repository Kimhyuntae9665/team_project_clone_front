import React from 'react';
import CompanyPage from './views/CompanypageView/index'
import Main from './views/Main';
import MyPage from './views/MypageView/index'
import './App.css';
import Footer from './views/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './views/NavigationBar';
import MainContents from './views/Main/MainContents';

function App() {
  const path = useLocation();
  return(
    <>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={(<Main/>)}/>
      {/* <Route path='/auth'/> */}
      <Route path='/myPage' element={(<MyPage/>)}/>
      {/* <Route path='/myCompanyPage'/> */}
      <Route path='/Company' element={(<CompanyPage/>)}/>
    </Routes>
    <Footer/>
    </>
  
  );
}

export default App;
