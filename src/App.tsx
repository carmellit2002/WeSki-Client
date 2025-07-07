import React from 'react';
import NavBar from './components/navbar/nav-bar';
import MainPageBody from "./components/main-page-body";

const App: React.FC =() => {
  return (
    <div className='app'>
      <NavBar />
      <MainPageBody />
    </div>
  )
};

export default App;
