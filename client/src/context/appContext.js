import React from 'react';
import reducer from "./reducer.js";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
  //sidebar
  showSidebar: false
};

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: "DISPLAY_ALERT" });
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 3000);
  };

  // Register user functions
  async function registerUser(currentUser) {
    console.log(currentUser);
    dispatch({ type: "REGISTER_USER_BEGIN" });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: { user, token, location },
      });
      // Local storage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  }

  // Add user to local storage
  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
    console.log("user registered", user, token, location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  }

  //login user
  async function loginUser (currentUser) {
    console.log(currentUser)
    dispatch({ type: "LOGIN_USER_BEGIN" });
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: { user, token, location },
      });
      // Local storage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "LOGIN_USER_ERROR",
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  }

  //toggle sidebar
  function toggleSidebar () {
    dispatch({type: "TOGGLE_SIDEBAR"})
  }

  //logout user
  function logoutUser () {
    dispatch({type: "LOGOUT_USER"});
    removeUserFromLocalStorage();
  } 

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        //showSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return React.useContext(AppContext);
}

export { AppContext, initialState, useAppContext };









