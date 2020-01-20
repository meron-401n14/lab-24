import React, {useContext} from 'react';
import {ThemeContext} from './GetThem';



function AboutmeConsumer () {
  const context= useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor:context.background,
      color:context.color,
      padding:context.padding + 'px',
    }}
    
     
    
    > 
    {context.lang === 'en' ? <div>
    <h1>Hello,</h1>
    <p>I am Meron Sibani</p>
    <p>Student at Code-Fellows</p>
    <p>I like Coding</p>
</div> :
 <div>
<h1>Bonjour,</h1>
    <p>Je suis Meron Sibani</p>
    <p>Étudiant chez Code-Fellows</p>
    <p>J'aime coding</p>
    </div>}

    </div>
  );
}



export default AboutmeConsumer;