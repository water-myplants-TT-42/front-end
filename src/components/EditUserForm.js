import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

const INITIAL_FORM_VALUES = {
    phoneNumber: '',
    password: ''
}

const INITIAL_FORM_ERRORS = {
    phoneNumber: '',
    password: ''
}

// Form schema
const schema = yup.object().shape({
    phoneNumber: yup.string().required('A Phone Number is required.'),
    password: yup.string().required('A password is required.')
})

export default function EditUserForm(props) {
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
                .then(() => {
                    push('/login')
                })
                .catch(err => {
                    console.log('User information update failure', err)
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
		<div className='form-group inputs'>
			<h1>Update User Information</h1>
			<label>Phone Number:&nbsp;
				<input
				value={values.phoneNumber}
				onChange={onChange}
				name='phoneNumber'
				type='tel'
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
        <div className='form-group submit'>
			<h3>Submit</h3>
			<div className='errors'>
				<div>{errors.phoneNumber}</div>
				<div>{errors.password}</div>
			</div>
			<button disabled={disabled}>submit</button>
		</div>
	</form>
    )
}