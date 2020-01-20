import React, {useContext} from 'react';

import {ThemeContext} from './GetThem';


      // <button className='btn btn-primary' onClick={e => {context.update(e.target.value)}}>
      // change Color: </button>

function ThemChanger(props){
  const context = useContext(ThemeContext)
  // const changeThem = () =>{
  //   context.update('color')
  // };


  return (

    <div>
      <input type='number'
      value={context.padding}
       onChange={e => {context.updatePadding(e.target.value)}} />

       <input type='text'
       value= {context.color}
       onChange={e => {
         context.update(e.target.value)}} />

         <input type='text'
         value={context.backgroundColor}
         onChange={e => { context.updateBackground(e.target.value)}} />
       

      <button
      className='btn btn-primary'
      onClick={e => {
                  context.updateLang('fr');
                  
      }}
      />
    </div>
  );

}



export default ThemChanger;