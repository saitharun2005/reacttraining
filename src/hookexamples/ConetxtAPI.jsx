import React,{createContext} from 'react'
export const GlobalDataProvider=createContext();
const Contextapi = (props) => {
  return (
    <GlobalDataProvider.Provider value="MRUH">
            {props.children}
    </GlobalDataProvider.Provider>

  )
}

export default Contextapi