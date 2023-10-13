import React from 'react';
import styled from "styled-components";
import Logo from "../components/Logo.js";
import FormRow from '../components/FormRow.js';
import Alert from "../components/Alert.js"

function Register() {

    const initialState = {
        name: "",
        email: "", 
        password: "",
        isMember: false,
        showAlert: true
    }

    const[values, setValues]=React.useState(initialState);
    //global states

    function handleChange (e) {
        let newValues = e.target.value;
        console.log(newValues);
        setValues(newValues); 
    }

    function handleSubmit (e) {
        e.preventDefault();
        //console.log(e.target);
    }

    function getLabel(name) {
        let labelName={
            name: "Name:",
            email: "Email:",
            password: "Password:"
        }
        return labelName[name] || "";
    }


  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo></Logo>
        <h3>Login</h3>
        {values.showAlert && (<Alert></Alert>)}
        <FormRow type="text" value={values.name} name="name" onChange={handleChange} getLabel={getLabel}></FormRow>
        <FormRow type="email" value={values.email} name="email" onChange={handleChange} getLabel={getLabel}></FormRow>
        <FormRow type="password" value={values.password} name="password" onChange={handleChange} getLabel={getLabel}></FormRow>
        <button type="submit" className="btn btn-block">Submit</button>
        <div>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
h3 {
    text-align: center;
    font-size: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
}

.form div {
    display: flex;
    justify-content: center;
}
`;

export default Register;

