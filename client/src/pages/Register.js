import React from 'react';
import styled from "styled-components";
import Logo from "../components/Logo.js";
import FormRow from "../components/FormRow.js";

function Register() {

    const initialState = {
        name: "",
        email: "", 
        password: "",
        isMember: true
    }

    const[values, setValues]=React.useState(initialState);
    //global states

    function handleChange (e) {
        let newValues = e.target.value;
        //console.log(newValues);
        setValues(newValues); 
    }

    function handleSubmit (e) {
        e.preventDefault();
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
        <FormRow type="text" value={values.name} name="name" onChange={handleChange} getLabel={getLabel}></FormRow>
        <FormRow type="email" value={values.email} name="email" onChange={handleChange} getLabel={getLabel}></FormRow>
        <FormRow type="password" value={values.password} name="password" onChange={handleChange} getLabel={getLabel}></FormRow>
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;

export default Register;

