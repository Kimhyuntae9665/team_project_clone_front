import React from 'react';
import CompanyPage from './views/CompanypageView/index'
import Main from './views/Main';
import MyPage from './views/MypageView/index'
import './App.css';
import Footer from './views/Footer';
import { Routes } from 'react-router-dom';
import NavigationBar from './views/NavigationBar';
import MainContents from './views/Main/MainContents';

function App() {
  return(
  <>
    <NavigationBar/>
      <MyPage />
    <Footer/>
  </>
 
  
  );
}

export default App;
