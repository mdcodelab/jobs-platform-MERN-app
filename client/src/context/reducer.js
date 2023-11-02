const reducer = (state, action) => {  
    if(action.type === "DISPLAY_ALERT") {
        return {...state, showAlert: true, alertType: "danger", alertText: "Please provide all values!"}
    } else if(action.type === "CLEAR_ALERT") {
        return {...state, showAlert: false, alertType: "", alertText: ""}
    } else if (action.type === "REGISTER_USER_BEGIN") {
        return {...state, }
    }

throw Error(`no actions of such ${action.type}`);
}

export default reducer


