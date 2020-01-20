import React from 'react';

import GetThem from './Components /GetThem';
import AboutmeConsumer from './Components /AboutMe';
import ThemChanger from './Components /ThemChanger';

import './Components /Styles/styles.scss';

function App() {
  return (
    <div className="App">
    <GetThem>
    
    <AboutmeConsumer />
    <ThemChanger/>
  
   
    </GetThem>
    </div>
  );
}


   

export default App;

     


      
