import React from 'react';

import GetThem from './Components /GetThem';
import AboutmeConsumer from './Components /AboutMe';
import ThemChanger from './Components /ThemChanger';



function App() {
  return (
    <div className="App">
    <GetThem>
    <ThemChanger/>
    <AboutmeConsumer />
    </GetThem>
    </div>
  );
}


   

export default App;

     


      
