import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { addPlantRequest, editPlantRequest } from '../utils/requests';
import styled from 'styled-components';

import Container from './styled/Container';
import Form from './styled/Form';
import Image from './styled/Image';
import TextInput, { WaterInput } from './styled/Input';
import Button from './styled/Button';

const INITIAL_PLANT_FORM_STATE = {
    nickname: '',
    species: '',
    h2oFrequency: '1 daily',
    user_id: ''
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
    nickname: yup.string().required('required'),
    species: yup.string().required('required'),
    h2oFrequency: yup.string().required('required') 
})

const PlantFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-size: ${props => props.theme.h1FontSize};
        margin-bottom: ${props => props.theme.space};
    }
`

export default function PlantForm(props) {
    const { plantToEdit, userID } = props;
    const location = useLocation();
    const thisPlant = location.state ? location.state.plant : INITIAL_PLANT_FORM_STATE;
    const [values, setValues] = useState(thisPlant);
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS);
    const [isDisabled, setIsDisabled] = useState(true);
    const { push } = useHistory();

    // Utility to keep number and dropbox in sync
    const [freqNumber, freqTimes] = parseFrequency(values.h2oFrequency)

    const isEditing = !!thisPlant.nickname.length; // Coerce to boolean to check if editing

    const onChange = (evt) => {
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
            .then(_ => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            .catch(err => {
                setIsDisabled(true)
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

    const onSubmit = (evt) => {
        evt.preventDefault()

        formSchema.validate(values)
            .then(_ => {
                setValues(INITIAL_PLANT_FORM_STATE)
                setErrors(INITIAL_FORM_ERRORS)
                setIsDisabled(true)

                if (isEditing) {

                    editPlantRequest(thisPlant.plant_id, values, push)
                } else {
                    const userValues = {...values, user_id:userID};
                    addPlantRequest(userValues, push);
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
        <PlantFormWrapper>

            <h1>{isEditing ? 'Edit' : 'New'} Plant</h1>
            <Image size='15rem'/>
            
            <Form onSubmit={onSubmit}>

                <TextInput 
                    name="nickname"
                    labelText="Nickname"
                    onChange={onChange}
                    value={values.nickname}
                    error={errors.nickname}
                />
                <TextInput 
                    name="species"
                    labelText="Species"
                    onChange={onChange}
                    value={values.species}
                    error={errors.species}
                />
                
                <WaterInput
                    names={['h2oNumber', 'h2oTimes']}
                    values={[freqNumber, freqTimes]}
                    onChange={onChange}
                    error={errors.h2oFrequency}
                    labelTexts={['Water', `${freqNumber === 1 ? 'time' : 'times'} per`]}
                    numMax={10}
                />
                
                <Button
                    children='Save'
                    variant={isDisabled ? 'disabled' : 'success'}
                    size='normal' 
                />

            </Form>
        </PlantFormWrapper>
    )
}
