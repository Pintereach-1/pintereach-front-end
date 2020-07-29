import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../../store/actions';

import * as yup from "yup";
import axios from 'axios'
import querystring from 'querystring';
const schema = yup.object().shape({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
});


function Login(props) {
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
               
                
                    <label>Username&nbsp;
                    <input
                            ref={register}
                            name='username'
                            type='text'
                        />
                    </label>
                
               
                    <label>Password&nbsp;
                    <input
                            ref={register}
                            name='password'
                            type='password'
                        />
                    </label>
               
                <button>Login</button>
                <h3 color='muted'>Don't have an account? <Link to='/register'>Register Here!</Link></h3>
            
        </form>
    )
}
export default Login;

