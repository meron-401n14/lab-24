import React, {useState} from 'react';

export const ThemeContext = React.createContext();

function GetThem(props){
    const [state, setState] = useState({

      update: newColor => {
              setState(state => ({...state, color: newColor}));
      },

      updateBackground: newBackground=>{
                  setState(state => ({...state, backgroundColor:newBackground}));
      },
      updatePadding: newPadding => {
        setState(state => ({...state, padding:newPadding}));
      },

      updateBorder:newBorder=>{
                setState(state=>({...state, border:newBorder}));
      },

      updateLang: newLang => {
          setState(state=> ({ ...state, lang: newLang}));
      },

      updateborderRadius:newbr=>{
        setState(state=>({...state,  borderRadius:newbr}));
      },
      padding:'20',
      color: '',
      backgroundColor:'cyan',
      border:'1px solid #E25F3C',
      borderRadius:'1rem',

      lang:'en'
    });
    
    
    return (
      <ThemeContext.Provider value={state}>
        
          {props.children}
     
      </ThemeContext.Provider>
    )
  }



  export default GetThem;
  