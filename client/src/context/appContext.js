import React from 'react';
import reducer from "./reducer.js";
import axios from "axios";


const initialState = {
isLoading: false,
showAlert: false,
alertText: "",
alertType: "",
///// add values for the user
user: null,
token: null,
userLocation: "",
jobLocation: ""
};

const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({type: "DISPLAY_ALERT"})
    }

    const clearAlert = () => {
        setTimeout(() => {
                dispatch({type: "CLEAR_ALERT"});
        }, 3000);
    }

    //register user functions
    async function registerUser (currentUser) {
        console.log(currentUser);
        dispatch({type: "REGISTER_USER_BEGIN"})
        try {
            const response = await axios.post("/api/v1/auth/register", currentUser);
            console.log(response);
            const {user, token, location}=response.data;
            dispatch({ type: "REGISTER_USER_SUCCESS", payload: {user, token, location}});
            //localStorage later
        } catch (error) {
            console.log(error.response);
            dispatch({type: "REGISTER_USER_ERROR", payload: {msg: error.response.data.msg}})
        }
        clearAlert();
    }

    return <AppContext.Provider value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser
        }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
return React.useContext(AppContext);
}

export { AppContext, initialState, useAppContext };



