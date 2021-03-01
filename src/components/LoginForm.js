import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
    username: yup.string().required(),
    password: yup.string().required()
})

export default function LoginForm(props) {
    const { submit } = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES)
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory();

    const onSubmit = evt => {
        evt.preventDefault()
        schema.validate(values)
            .then(_ => {
                submit(values)
                setValues(INITIAL_FORM_VALUES)
                setErrors(INITIAL_FORM_ERRORS)
                axios
                .post('', values)
                .then(res => {
                    localStorage.setItem('token', res.data.payload)
                    push('/');
                })
                .catch(err => {
                    console.log('login failure', err);
                })
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
        <form className='form container' onSubmit={onSubmit}>
		<div className='form-group submit'>
			<h2>submit</h2>
			<div className='errors'>
				<div>{errors.username}</div>
				<div>{errors.password}</div>
			</div>
			<button disabled={disabled}>submit</button>
		</div>
		<div className='form-group inputs'>
			<h1>text placeholder</h1>
			<label>Username:&nbsp;
				<input
				value={values.username}
				onChange={onChange}
				name='username'
				type='text'
				/>
			</label>
			<label>Password:&nbsp;
				<input
				value={values.password}
				onChange={onChange}
				name='password'
				type='password'
				/>
			</label>
		</div>
	</form>
    )
}