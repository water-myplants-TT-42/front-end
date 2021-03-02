import React, { useEffect, useState } from 'react'
import * as yup from 'yup'

const INITIAL_PLANT_FORM_STATE = {
    nickname: '',
    species: '',
    h2oFrequency: '1 daily'
}

const INITIAL_FORM_ERRORS = {
    nickname: '',
    species: '',
    h2oFrequency: ''
}

const parseFrequency = (h2oFrequency) => {
    const [num, times] = h2oFrequency.split(' ')
    return [parseInt(num), times]
}

// Form Schema
const formSchema = yup.object().shape({
    nickname: yup.string().required('Your plant needs a name!'),
    species: yup.string().required('What species is your plant?'),
    h2oFrequency: yup.string().required('How often do you need to water it?') 
})

export default function PlantForm(props) {
    const { plantToEdit } = props
    const [values, setValues] = useState(INITIAL_PLANT_FORM_STATE)
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [isDisabled, setIsDisabled] = useState(true)

    // Utility to keep number and dropbox in sync
    const [freqNumber, freqTimes] = parseFrequency(values.h2oFrequency)

    const isEditing = !!plantToEdit // Coerce to boolean to check if editing

    const change = (evt) => {
        const { name, value } = evt.target

        if (name === 'h2oNumber') {
            return setValues({
                ...values,
                h2oFrequency: `${value} ${values.h2oFrequency.split(' ')[1]}`
            })
        } else if (name === 'h2oTimes') {
            return setValues({
                ...values,
                h2oFrequency: `${values.h2oFrequency.split(' ')[0]} ${value}`
            })
        }

        setValues({
            ...values,
            [name]: value
        })

        yup.reach(formSchema, name)
            .validate(value)
            .then(isValid => {
                setIsDisabled(!isValid)
                setErrors(INITIAL_FORM_ERRORS)
            })
            .catch(err => {
                return setErrors({
                    ...errors,
                    [name]: err.errors[0]
                })
            })
    }

    useEffect(() => {
        if (plantToEdit) {
            setValues(plantToEdit)
        }
    }, [plantToEdit])

    const submit = (evt) => {
        evt.preventDefault()

        formSchema.validate(values)
            .then(_ => {
                setValues(INITIAL_PLANT_FORM_STATE)
                setErrors(INITIAL_FORM_ERRORS)
                setIsDisabled(true)

                if (isEditing) {
                    console.log('EDIT', values)
                } else {
                    console.log('CREATE', values)
                }
            })
            .catch(err => err)
    }

    useEffect(() => {
        formSchema.validate(values)
            .then(isValid => setIsDisabled(!isValid))
            .catch(err => err)
    })

    return (
        <div>
            <h2>{isEditing ? 'Edit' : 'Create'} Plant</h2>
            <form onSubmit={submit}>
                <label htmlFor="nickname">Nickname:{' '}</label>
                <input id="nickname" name="nickname" value={values.nickname} onChange={change} />
                <br />
                <label htmlFor="species">Species:{' '}</label>
                <input id="species" name="species" value={values.species} onChange={change} />
                <br />
                
                <label htmlFor="h2oNumber">Water:{' '}</label>
                <input id="h2oNumber" name="h2oNumber" type="number" min={1} step={1} value={freqNumber} onChange={change}/>
                <label htmlFor="h2oTimes">How often:{' '}</label>
                <select name="h2oTimes" id="h2oTimes" value={freqTimes} onChange={change}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <br />
                <button type="submit" disabled={isDisabled}>{isEditing ? 'Edit' : 'Create'} Plant</button>
            </form>
        </div>
    )
}
