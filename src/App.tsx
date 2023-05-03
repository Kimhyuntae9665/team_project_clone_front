import React from 'react';
import CompanyPage from './views/CompanypageView/index'
import Main from './views/Main';
import MyPage from './views/MypageView/index'
import './App.css';
import Footer from './views/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './views/NavigationBar';
import MainContents from './views/Main/MainContents';
import AuthenticationLogInView from './views/AuthenticationView/LoginCardVIew';
import UserLoginCardView from './views/AuthenticationView/LoginCardVIew/UserLoginCardView';
import CompanyLoginCardView from './views/AuthenticationView/LoginCardVIew/CompanyLoginCardView';
import UserSignUpCardView from './views/AuthenticationView/SignUpCardView/UserSIgnUpCardVIew';
import CompanySignUpCardView from './views/AuthenticationView/SignUpCardView/CompanySIgnUpCardView';
import AuthenticationSignUpView from './views/AuthenticationView/SignUpCardView';

function App() {
  const path = useLocation();
  return(
    <>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={(<Main/>)}/>
      <Route path='/authL' element={(<AuthenticationLogInView/>)}/>
      <Route path='authL/login'>
        <Route path='user' element={(<UserLoginCardView/>)}/>
        <Route path='company' element={(<CompanyLoginCardView/>)}/>
      </Route>
      <Route path="/authS" element={(<AuthenticationSignUpView/>)} />
      <Route path="/authS/signUp">
        <Route path="user" element={(<UserSignUpCardView/>)} />
        <Route path="company" element={(<CompanySignUpCardView/>)}/>
      </Route>
      <Route path='/myPage' element={(<MyPage/>)}/>
      {/* <Route path='/myCompanyPage'/> */}
      <Route path='/Company' element={(<CompanyPage/>)}/>
    </Routes>
    <Footer/>
    </>
  
  );
}

export default App;
