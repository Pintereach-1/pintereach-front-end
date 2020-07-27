import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'

export const Login = () => {

    const blankForm = {
        username:'',
        password:''
    }

    const defaultErrors = {
        username:'',
        password:''
    }

    let defaultSchema = yup.object.shape({
        username: yup.string().required('Please enter your username.'),
        password: yup.string().required('Please enter your password.')
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

            <div>
                <form onSubmit={onSubmit}>
                    <h1>Log In</h1>
                    <div>
                    <label htmlFor="username">
                        <div>Username:</div>
                        <input 
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
                        <input 
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={newForm.password}
                        errors={newError}
                        />
                        <p>{newError.password}</p>
                    </label>
                    </div>
                    <button disabled={disableButton}>Submit</button>
                </form>
            </div>
            
        </div>
    )
}