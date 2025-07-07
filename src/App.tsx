import React from 'react';
import NavBar from './components/navbar/nav-bar';
import HotelsContextProvider from "./context/contextProvider";
import MainPageBody from "./components/main-page-body";

const App: React.FC =() => {
  return (
    <div className='app'>
      <HotelsContextProvider>
        <NavBar />
        <MainPageBody />
      </HotelsContextProvider>
    </div>
  )
};

export default App;
