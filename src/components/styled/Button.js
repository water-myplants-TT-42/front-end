import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => {
        if (props.variant === 'success') { 
            return props.theme.successColor
        } else if (props.variant === 'danger') {
            return props.theme.dangerColor
        } else {
            return props.theme.darkBgColor
        }
    }};
    font-size: 24px;
    padding: ${(props) => props.size === 'small' ? `0.25rem 0.5rem` : `0.5rem 1rem`};
    margin: 0 auto;
`

export default function Button(props) {
    const { onClick, children, variant, size, ...rest } = props
    return (
        <ButtonWrapper {...rest} size={size} onClick={onClick} variant={variant}>
            {children}
        </ButtonWrapper>
    )
}