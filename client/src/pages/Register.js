import React from 'react';
import styled from "styled-components";
import Logo from "../components/Logo.js";
import FormRow from '../components/FormRow.js';
import Alert from "../components/Alert.js";
import { useAppContext } from '../context/appContext.js';
import {useNavigate, Link} from "react-router-dom";

function Register() {
    //global state
    const {isLoading, showAlert, displayAlert, clearAlert, registerUser, user, loginUser} = useAppContext();
    console.log(showAlert);
    const navigate = useNavigate();

    //local state
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false
};

const [values, setValues] = React.useState(initialState);

function handleChange(e) {
const {name, value}=e.target;
  setValues((prevState) => ({ ...prevState, [name]: value }));
}

function handleSubmit(e) {
  e.preventDefault();
    const {name, email, password, isMember}= values;
  if(!email || !password || (!isMember && !name)) {
    displayAlert();
    clearAlert();
    return;
  }
  let currentUser = {name, email, password};
  if(isMember) {
    console.log("Already a member")
    loginUser(currentUser)
  } else {
    registerUser(currentUser)
  }
  console.log(values);
}

//redirect user to the dashboard page
React.useEffect(() => {
  console.log(user);
if(user) {
  setTimeout(() => {
    navigate("/");
  }, 3000)
}
}, [user, navigate])


    function getLabel(name) {
        let labelName={
            name: "Name:",
            email: "Email:",
            password: "Password:"
        }
        return labelName[name] || "";
    }

    function toggleMember () {
    setValues({...values, isMember: !values.isMember})
    console.log(values)
    }


  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo></Logo>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert></Alert>}
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
        <button type="submit" className="btn btn-block" disabled={isLoading}>Submit</button>

          <div className="register">
            <span>{values.isMember ? "Not a member?" : "Already a member?"}</span>
            <button type="button" className="member-btn" onClick={toggleMember}>
              {values.isMember ? <Link to="/register">Register</Link> : <Link to="/login">Login</Link>}
            </button>
          </div>
          <div className="back__home">
            <Link to="/home">Back Home</Link>
          </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
max-width: var(--max-width);
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;

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
    font-size: 1.19rem;
    transition: color 0.5 ease-in-out;
}

.member-btn:hover {
    color: var(--primary-700);
}

.back__home {
  width: 100%;
  height: max-content;
}

.back__home a {
  display: block;
  margin: 0 auto;
  text-align: center;
  text-decoration: dotted;
}
`;

export default Register;

