import React, { useState, useEffect } from 'react';
import CompanyPage from './views/CompanypageView/index'
import Main from './views/Main';
import MyPage from './views/MypageView/index'
import './App.css';
import Footer from './views/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './views/NavigationBar';
import AuthenticationLogInView from './views/AuthenticationView/LoginCardVIew';
import AuthenticationSignUpView from './views/AuthenticationView/SignUpCardView';
import MyCompanypageView from './views/CompanypageView/MyCompanypage';
import UserLoginCardView from './views/AuthenticationView/LoginCardVIew/UserLoginCardView';
import CompanyLoginCardView from './views/AuthenticationView/LoginCardVIew/CompanyLoginCardView';
import UserSignUpCardView from './views/AuthenticationView/SignUpCardView/UserSIgnUpCardVIew';
import CompanySignUpCardView from './views/AuthenticationView/SignUpCardView/CompanySIgnUpCardView';
import { useCookies } from 'react-cookie';
import { useUserStore } from './stores/userstores';
import NotFoundPage from './views/ErrorPage';

function App() {
  const path = useLocation();
  const { user } = useUserStore();
  const [cookies, setCookies] = useCookies();
  const [loginView, setLoginView] = useState<boolean>(true);

  useEffect(() => {
    if (cookies.accessToken && !user) {

    }
  }, []);

  return(
    <>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={(<Main/>)}/>
      <Route path='/auth'>
        <Route path='login'>
          <Route index element={(<AuthenticationLogInView/>)} />
          <Route path='user' element={(<UserLoginCardView/>)} />
          <Route path='company' element={(<CompanyLoginCardView />)} />
        </Route>
        <Route path='signup'>
          <Route index element={(<AuthenticationSignUpView/>)} />
          <Route path='user' element={(<UserSignUpCardView />)} />
          <Route path='company' element={(<CompanySignUpCardView />)} />
        </Route>
      </Route>
      <Route path='/myPage' element={(<MyPage/>)}/>
      <Route path='/myCompanyPage' element={(<MyCompanypageView/>)} /> 
      <Route path='/Company' element={(<CompanyPage/>)}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer/>
    </>
  
  );
}

export default App;
