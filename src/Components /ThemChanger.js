import React, { useContext } from 'react';

import { ThemeContext } from './GetThem';


// <button className='btn btn-primary' onClick={e => {context.update(e.target.value)}}>
// change Color: </button>

function ThemChanger(props) {
  const context = useContext(ThemeContext)
  // const changeThem = () =>{
  //   context.update('color')
  // };


  return (
    <div className='container'>
    
    
    <div style={{
      
      display:'inline-block',
      color:context.color,
      padding:context.padding + 'px',
      border:context.border,
      borderRadius:context.borderRadius,
    }} >

<label>Text Color
            <input type='text'
            value={context.color}
            onChange={e => {
              context.update(e.target.value)
            }} />
         
          </label>
              
          <label>UI Color
             <input type='text'
             value={context.backgroundColor}
             onChange={e => { context.updateBackground(e.target.value) }} />
          </label>
            
          <div>
            <label>Padding:
              <input 
              id='typeinp'
              type="range" 
              min='0'
              max='80'
              defaultValue="3"
              value={context.padding} 
              onChange={e => {
                context.updatePadding(e.target.value)
              }}
              step="1"/>
                     </label>
                     </div>

                <label>Border-radius
                  <input 
                  id= 'typeinp'
                  type='range'
                  min='0'
                  max='50'
                  value={context.borderRadius}
                  onChange={e=> { context.updateborderRadius(e.target.value)}}  
                  step="1"/>
                </label>

                
             </div>
      <button style={{
        type:'button',
        
      }}
      className='btn btn-green'
      onClick={e => {
        context.updateLang('fr');

        }}
        >Lang </button>
        
            
    </div>
  );

}



export default ThemChanger;