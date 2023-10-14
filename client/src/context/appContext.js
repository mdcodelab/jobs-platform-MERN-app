import React from 'react';
import reducer from "./reducer.js";


const initialState = {
isLoading: false,
showAlert: false,
alertText: "",
alertType: ""
};

const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({type: "DISPLAY_ALERT"})
    }

    return <AppContext.Provider value={{
        ...state,
        displayAlert
        }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
return React.useContext(AppContext)
}

export { AppContext, initialState, useAppContext };



