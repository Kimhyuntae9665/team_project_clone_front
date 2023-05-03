import React from 'react';
import CompanyPage from './views/CompanypageView/index'
import Main from './views/Main';
import MyPage from './views/MypageView/index'
import './App.css';
import Footer from './views/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './views/NavigationBar';
import MainContents from './views/Main/MainContents';
import UserLoginCardView from './views/AuthenticationView/LoginCardVIew/UserLoginCardView';
import AuthenticationView from './views/AuthenticationView';
import CompanyLoginCardView from './views/AuthenticationView/LoginCardVIew/CompanyLoginCardView';
import MyCompanypageView from './views/CompanypageView/MyCompanypage';

function App() {
  const path = useLocation();
  return(
    <>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={(<Main/>)}/>
      <Route path='/auth' element={(<AuthenticationView/>)}/>
      <Route path='auth/login'>
        <Route path='user' element={(<UserLoginCardView/>)}/>
        <Route path='company' element={(<CompanyLoginCardView/>)}/>
      </Route>
      <Route path='/myPage' element={(<MyPage/>)}/>
      <Route path='/myCompanyPage' element={(<MyCompanypageView/>)} /> 
      <Route path='/Company' element={(<CompanyPage/>)}/>
    </Routes>
    <Footer/>
    </>
  
  );
}

export default App;
