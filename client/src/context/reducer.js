
import {initialState} from "./appContext"

const reducer = (state, action) => {  
    if (action.type === "DISPLAY_ALERT") {
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values!",
      };
    } else if (action.type === "CLEAR_ALERT") {
      return { ...state, showAlert: false, alertType: "", alertText: "" };
    } else if (action.type === "REGISTER_USER_BEGIN") {
      return { ...state, isLoading: true };
    } else if (action.type === "REGISTER_USER_SUCCESS") {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        location: action.payload.location,
        userLocation: action.payload.userLocation,
        jobLocation: action.payload.jobLocation,
        showAlert: true,
        alertType: "success",
        alertText: "User created! Redirecting ...",
      };
    } else if (action.type === "REGISTER_USER_ERROR") {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    } else if (action.type === "LOGIN_USER_BEGIN") {
      return { ...state, isLoading: true };
    } else if (action.type === "LOGIN_USER_SUCCESS") {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        location: action.payload.location,
        userLocation: action.payload.userLocation,
        jobLocation: action.payload.jobLocation,
        showAlert: true,
        alertType: "success",
        alertText: "Login successful! Redirecting ...",
      };
    } else if (action.type === "LOGIN_USER_ERROR") {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    } else if(action.type === "TOGGLE_SIDEBAR") {
      return {...state, showSidebar: !state.showSidebar}
    } else if(action.type === "LOGOUT_USER") {
      return {...initialState, user: null, token: null, userLocation: "", jobLocation: ""}
    }

throw Error(`no actions of such ${action.type}`);
}

export default reducer


