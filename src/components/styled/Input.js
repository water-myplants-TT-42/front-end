import React from 'react'
import styled from 'styled-components'

import InputLabel from './InputLabel'

const InputWrapper = styled.div`
    width: ${props => props.theme.inputWidth};
    margin-bottom: ${props => props.theme.space};

    input {
        border-radius: ${props => {
            switch (props.type) {
                case 'dropdown': return 'none'
                default: return props.theme.borderRadius
            }
        }};
        border: ${props => (
            props.error
                ? props.theme.inputErrorBorder
                : 'none'
        )};
        background-color: ${props => props.theme.inputGray};
        color: ${props => props.theme.inputTextGray};
        font-size: ${props => props.theme.fontSize};
        width: ${props => props.theme.inputWidth};
        height: ${props => props.theme.inputHeight};
        padding: ${props => props.theme.inputFieldPadding};
        outline: none;

        &:focus {
            border: ${(props) => (
                props.error 
                    ? props.theme.inputErrorBorder 
                    : `2px solid ${props.theme.borderGray}`
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