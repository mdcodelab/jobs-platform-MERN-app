import React from 'react';

const initialState = {
isLoading: false,
showAlert: false,
alertText: "",
alertType: ""
};

const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {
    const[state, setState]=React.useState(initialState);


    return <AppContext.Provider value={{
        ...state}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
return React.useContext(AppContext)
}

export { AppContext, initialState, useAppContext };



