import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import styled from 'styled-components'

import logo from '../icons/plant-color.svg'
import TextInput from './styled/Input'
import Button from './styled/Button'
import { Theme } from './styled/theme'

const INITIAL_FORM_VALUES = {
    username: '',
    phoneNumber: '',
    password: ''
}

const INITIAL_FORM_ERRORS = {
    username: '',
    phoneNumber: '',
    password: ''
}

// Form schema
const schema = yup.object().shape({
    username: yup.string().required('required'),
    phoneNumber: yup.string().required('required'),
    password: yup.string().required('required')
})

const SignUpFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
        
    #logo {
        width: ${Theme.smallLogoSize};
        height: ${Theme.smallLogoSize};
        margin: ${Theme.space} auto;
    }

    h1 {
        font-size: ${Theme.h1FontSize};
        margin-bottom: ${Theme.space};
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export default function SignUpForm(props) {
    const { submit } = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES)
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory();

    const onSubmit = evt => {
        evt.preventDefault()
        schema.validate(values)
            .then(_ => {
                submit(values, push)
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
            .then(isValid => {
                setDisabled(!isValid)
                setErrors(INITIAL_FORM_ERRORS)
            })
            .catch(err => setErrors({ 
                ...errors,
                [name]: err.errors[0]
            }))
    }

    useEffect(() => {
        schema.validate(values)
            .then(isValid => setDisabled(!isValid))
            .catch(err => console.log(err))
    })

    return (
        <SignUpFormWrapper>
            <img src={logo} id='logo'/>
            <h1>Sign Up</h1>
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
                    value={values.phoneNumber}
                    name='phoneNumber'
                    type='tel'
                    error={errors.phoneNumber}
                    labelText='Phone'
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
                {/* <button disabled={disabled}>submit</button> */}
                
            </form>
        </SignUpFormWrapper>
    )
}