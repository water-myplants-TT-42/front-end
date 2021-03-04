import React from 'react'
import styled from 'styled-components'

import InputLabel from './InputLabel'
import { Theme } from './theme'

const InputWrapper = styled.div`
    input {
        border-radius: ${props => {
            switch (props.type) {
                case 'dropdown': return 'none'
                default: return Theme.borderRadius
            }
        }};
        border: ${props => (
            props.error
                ? Theme.inputErrorBorder
                : 'none'
        )};
        background-color: ${Theme.inputGray};
        color: ${Theme.inputTextGray};
        font-size: ${Theme.fontSize};
        width: ${Theme.inputWidth};
        height: ${Theme.inputHeight};
        padding: 0.25rem 0.5rem;
        outline: none;
        margin-bottom: ${Theme.space}

        &:focus {
            border: ${(props) => (
                props.error 
                    ? Theme.inputErrorBorder 
                    : `2px solid ${Theme.borderGray}`
            )};
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