import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../../store/actions';
import styled from 'styled-components'

import * as yup from "yup";
import axios from 'axios'
import querystring from 'querystring';


const schema = yup.object().shape({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
});


function Login() {
    const { register, handleSubmit, errors, getValues } = useForm({
        validationSchema: schema,
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = () => {

        dispatch({ type: LOGIN_START });
        const values = getValues();
        axios.post('https://karminer60-pintereach.herokuapp.com/login',
            querystring.encode({ grant_type: 'password', ...values }), {
            headers: {
                // btoa is converting our client id/client secret into base64
                Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((res) => {
                console.log(res.data.access_token);
                localStorage.setItem("token", res.data.access_token);
                dispatch({ type: LOGIN_SUCCESS, payload: res.access_token });
                console.log(res);
                history.push("/dashboard");
            })
            .catch((err) => {
                dispatch({ type: LOGIN_FAIL, payload: err });
                console.log(err);
            });
    }
    return (
        <div>
            <Details>
                <h2>Pintereach</h2>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Details>

            <CenterDiv>
                <form onSubmit={e => {
                    handleSubmit(onSubmit)(e);
                }}>
                    <h2>Login</h2>
                    <div className="errors">
                        <p>
                            {errors.username && errors.username.message}
                        </p>
                        <p>
                            {errors.password && errors.password.message}
                        </p>
                    </div>

                    <div>Username&nbsp;</div>

                    <StyledInput
                        ref={register}
                        name='username'
                        type='text'
                    />


                    <div>Password&nbsp;</div>
                    <StyledInput
                        ref={register}
                        name='password'
                        type='password'
                    />


                    <StyledButton>Login</StyledButton>
                    <Details color='muted'>Don't have an account? <Link to='/register'>Register Here!</Link></Details>
                </form>
            </CenterDiv>
        </div>
    )
}
export default Login;


const Details = styled.header`
background-color:#C8D96F;
color:#5C573E;
min-height:10vh;
display:flex;
justify-content:space-around;
align-items:center;
a {
  text-decoration:none;
  color:ivory;
}
`

const StyledButton = styled.button`
background-color:#C8D96F;
color:#5C573E;
width:240px;
height:33px;
margin:10px;
border-radius:10px;
border:1px solid #5C573E;
`

const StyledInput = styled.input`
width:300px;
height:33px;
border-radius:10px;
border:1px solid;
`

// const CenterP = styled.p`
// display:flex;
// justify-content:center;
// text-align:center;
// `

const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:white;
color:black;
border:1px solid black;
width:35%;
margin:5% auto;
padding:2.5%;
flex-direction:column;
`