import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import logo from '../icons/plant-color.svg'
import TextInput from './styled/Input'
import Button from './styled/Button'

const INITIAL_FORM_VALUES = {
    username: '',
    password: ''
}

const INITIAL_FORM_ERRORS = {
    username: '',
    password: ''
}

// Form schema
const schema = yup.object().shape({
    username: yup.string().required('required'),
    password: yup.string().required('required')
})

const LoginFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
        
    #logo {
        width: ${props => props.theme.smallLogoSize};
        height: ${props => props.theme.smallLogoSize};
        margin: ${props => props.theme.space} auto;
    }

    h1 {
        font-size: ${props => props.theme.h1FontSize};
        margin-bottom: ${props => props.theme.space};
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export default function LoginForm(props) {
    const { submit, setUserID } = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES)
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory();

    const onSubmit = evt => {
        evt.preventDefault()
        schema.validate(values)
            .then(_ => {
                submit(values, push, setUserID);
                setValues(INITIAL_FORM_VALUES)
                setErrors(INITIAL_FORM_ERRORS)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const onChange = evt => {
        const {name, value} = evt.target
        setValues({
            ...values,
            [name]: value
        })

        yup.reach(schema, name)
            .validate(value)
            .then(_ => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({ 
                    ...errors,
                    [name]: err.errors[0]
                })
                    setDisabled(true)
            })
    }

    useEffect(() => {
        schema.validate(values)
            .then(isValid => setDisabled(!isValid))
            .catch(err => console.log(err))
    })

    return (
        <LoginFormWrapper>
            <img src={logo} id='logo' alt="logo" />
            <h1>Log In</h1>
            <form className='form container' onSubmit={onSubmit}>
                
                <TextInput 
                    onChange={onChange}
                    value={values.username}
                    name='username'
                    type='text'
                    error={errors.username}
                    labelText='Username'
                />
                <TextInput
                    onChange={onChange}
                    value={values.password}
                    name='password'
                    type='password'
                    error={errors.password}
                    labelText='Password'
                />
                
                <Button 
                    children='Submit'
                    variant={disabled ? 'disabled' : 'success'}
                    size='normal'
                />

            </form>
        </LoginFormWrapper>
    )
}