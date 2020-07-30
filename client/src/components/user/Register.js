import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../../store/actions";
import styled from "styled-components";

import * as yup from "yup";
import axios from "axios";
import querystring from "querystring";

const schema = yup.object().shape({
  username: yup.string().required("That is not a real name. Please try again."),
  password: yup.string().required("This is not a valid password."),
});

function Register() {
  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: schema,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({ type: REGISTER_START });
    const values = getValues();
    axios
      .post(
        "https://karminer60-pintereach.herokuapp.com/createnewuser",
        querystring.encode({ grant_type: "password", ...values }),
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(res => {
        console.log(res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
        dispatch({ type: REGISTER_SUCCESS, payload: res.access_token });
        console.log("CONSOLE LOG - LINE 64 REGISTER.JS", res);
        history.push("/login");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAIL, payload: err });
        console.log("REGISTER FAIL", err);
      });
  };

  return (
    <div>
      <Details>
        <h2>Pintereach</h2>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Details>

      <CenterDiv>
        <form
          onSubmit={e => {
            handleSubmit(onSubmit)(e);
          }}
        >
          <h1>Register</h1>
          <div className="errors">
            <p>{errors.username && errors.username.message}</p>
            <p>{errors.password && errors.password.message}</p>
          </div>

          <div>
            <label htmlFor="username">
              <div>Create Username:</div>
              <StyledInput type="text" name="username" ref={register} />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <div>Create Password:</div>
              <StyledInput type="password" name="password" ref={register} />
            </label>
          </div>
          <StyledButton>Submit</StyledButton>
        </form>

        <CenterP>Already have an Account?</CenterP>
        <Link to="/login">
          <StyledButton>Log in</StyledButton>
        </Link>
      </CenterDiv>
    </div>
  );
}

export default Register;

const Details = styled.header`
  background-color: #c8d96f;
  color: #5c573e;
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: ivory;
  }
`;

const StyledButton = styled.button`
  background-color: #c8d96f;
  color: #5c573e;
  width: 240px;
  height: 33px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #5c573e;
`;

const StyledInput = styled.input`
  width: 240px;
  height: 33px;
  border-radius: 10px;
  border: 1px solid;
`;

const CenterP = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 35%;
  margin: 5% auto;
  padding: 2.5%;
  flex-direction: column;
`;
