import React from 'react';
import CompanyPage from './views/CompanypageView/index'
import Main from './views/Main';
import MyPage from './views/MypageView/index'
import './App.css';
import Footer from './views/Footer';
import { Routes } from 'react-router-dom';
import NavigationBar from './views/NavigationBar';
import MainContents from './views/Main/MainContents';
import LoginCardView from './views/Authentication.View/LoginCardView';

function App() {
  return(
  <>
    <NavigationBar/>
      <Main />
    <Footer/>
  </>
 
  
  );
}

export default App;
