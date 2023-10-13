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

    function toggleMember () {
    setValues({...values, isMember: !values.isMember, showAlert:!values.showAlert})
    console.log(values)
    }


  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo></Logo>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert></Alert>}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            getLabel={getLabel}
          ></FormRow>
        )}

        <FormRow
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          getLabel={getLabel}
        ></FormRow>

        <FormRow
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
          getLabel={getLabel}
        ></FormRow>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
          <div className="register">
            <span>{values.isMember ? "Not a member?" : "Already a member?"}</span>
            <button type="button" className="member-btn" onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </button>
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

.form .register {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
}

.member-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--primary-500);
    font-size: 1.1.9rem;
    transition: color 0.5 ease-in-out;
}

.member-btn:hover {
    color: var(--primary-700);
}
`;

export default Register;

