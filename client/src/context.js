import React from 'react';

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  showAlert: true,
};

const MyContext = React.createContext();

export const MyContextProvider = ({children}) => {
const [values, setValues] = React.useState(initialState);

return <MyContext.Provider value={{
    values,
    setValues
}}>
    {children}
</MyContext.Provider>
}

export const useGlobalContext = () => {
    return React.useContext(MyContext);
}

