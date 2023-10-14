const reducer = (state, action) => {  
    if(action.type === "DISPLAY_ALERT") {
        return {...state, showAlert: true, alertType: "danger", alertText: "Please provide all values!"}
    }
    
throw Error(`no actions of such ${action.type}`);
}

export default reducer


