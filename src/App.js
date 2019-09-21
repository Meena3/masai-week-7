import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Fotter from './components/Fotter';
import End from './components/Ending';


function App() {
  return (
    <div>
      <Header/>
      <Body1/>
      <Body2/>
      <Body3/>
      <Fotter/>
      <End/>
    
    </div>
  );
}

export default App;
