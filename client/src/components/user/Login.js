import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'
import {Switch, Link, Route} from 'react-router-dom'
import Register from './Register'


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
width:240px;
height:33px;
border-radius:10px;
border:1px solid;
`

const CenterP = styled.p`
display:flex;
justify-content:center;
text-align:center;
`

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




const Login = () => {

    const blankForm = {
        username:'',
        password:''
    }

    const defaultErrors = {
        username:'',
        password:''
    }

    let defaultSchema = yup.object().shape({
        username: yup.string().required('That is not a real name. Please try again.'),
        password: yup.string().required('This is not a valid password.')
    }) 

    const [newForm, setForm] = useState(blankForm)
    const [newError, setError] = useState(defaultErrors)
    const [disableButton, setButton] = useState(true)
    const [newUser, setUser] = useState([])

    useEffect( () => {
        defaultSchema.validate(newForm)
        .then(valid => setButton(!valid) )
    },[newForm,defaultSchema])

    const validationCheck = (event) => {
        event.persist()
        yup.reach(defaultSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => setError( 
            {...newError, [event.target.name]:''}
        ))
        .catch(error => setError(
            {...newError, [event.target.name]: error.newError[0]}
        ))
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('submit start')
        axios.post('https://reqres.in/api/users', newForm)
        .then(value => {
            const user = value.data
            setUser([user],...newUser)
            setUser(value.data) 
        })
        .catch(error => {
            console.log(error, 'submit error')
        })
    }

    const onChange = (event) => {
        const value = event.target.value
        setForm ({...newForm, [event.target.name]: value})
        validationCheck(event)
    }

    let userDisplay = JSON.stringify(newUser)
    console.log(userDisplay)

    return (
        <div>
            <Details>
                <h2>Pintereach</h2>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Details>

            <CenterDiv>
                <form onSubmit={onSubmit}>
                    <h1>Log In</h1>
                    <div>
                    <label htmlFor="username">
                        <div>Username:</div>
                        <StyledInput 
                        type="text"
                        name="username"
                        onChange={onChange}
                        value={newForm.username}
                        errors={newError}
                        />
                        <p>{newError.username}</p>
                    </label>
                    </div>
                    <div>
                    <label htmlFor="password">
                        <div>Password:</div>
                        <StyledInput
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={newForm.password}
                        errors={newError}
                        />
                        <p>{newError.password}</p>
                    </label>
                    </div>
                    <StyledButton disabled={disableButton}>Submit</StyledButton>
                </form>

          
             <CenterP>If you don't have an account, consider signing up:</CenterP>
          < StyledButton>Create An Account</ StyledButton>
       
            </CenterDiv>
         

        </div>
    )
}

export default Login;