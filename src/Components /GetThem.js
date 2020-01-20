import React, {useState} from 'react';

export const ThemeContext = React.createContext();

function GetThem(props){
    const [state, setState] = useState({

      update: newColor => {
              setState(state => ({...state, color: newColor}));
      },

      updateBackground: newBackground=>{
                  setState(state => ({...state, background:newBackground}));
      },
      updatePadding: newPadding => {
        setState(state => ({...state, padding:newPadding}));
      },

      updateLang: newLang => {
          setState(state=> ({ ...state, lang: newLang}));
      },
      padding:20,
      color: 'white',
      background:'blue',
      lang:'en'
    });
    
    
    return (
      <ThemeContext.Provider value={state}>
        
          {props.children}
     
      </ThemeContext.Provider>
    )
  }



  export default GetThem;
  