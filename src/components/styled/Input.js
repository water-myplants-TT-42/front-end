import React from 'react'
import styled from 'styled-components'

import InputLabel from './InputLabel'

const InputWrapper = styled.div`
    input {
        border-radius: 25px;
        border: 2px solid;
        border-color: ${(props) => props.error ? props.theme.dangerColor : 'transparent'};
        background-color: ${(props) => props.theme.mediumBgColor};
        width: 100%;
        font-size: 22px;
        padding: 0.25rem 0.5rem;
        outline: none;

        &:focus {
            border-color: ${(props) => props.error ? props.theme.dangerColor : props.theme.darkBgColor};
        }
    }
`

export default function TextInput(props) {
    const { onChange, value, name, type, error, labelText} = props
    return (
        <InputWrapper error={error}>
            <InputLabel labelText={labelText} name={name} error={error} />
            <input name={name} onChange={onChange} value={value} type={type} />
        </InputWrapper>
    )
}