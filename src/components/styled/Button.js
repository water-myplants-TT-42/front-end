import React from 'react'
import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: ${props => {
        switch(props.size) {
            case 'mini':    return props.theme.miniBorderRadius
            default:        return props.theme.borderRadius
        }
    }};
    background-color: ${props => {
        switch (props.variant) {
            case 'danger':      return props.theme.buttonRed
            case 'disabled':    return props.theme.buttonGray
            default:            return props.theme.buttonGreen
        }
    }};
    font-size: ${props => {
        switch (props.size) {
            case 'mini':    return props.theme.miniButtonFontSize
            default:        return props.theme.fontSize
        }
    }};
    width: ${props => {
        switch(props.size) {
            case 'mini':    return props.theme.miniButtonWidth
            case 'med':     return props.theme.medButtonWidth
            case 'nav':     return props.theme.navButtonWidth
            default:        return props.theme.buttonWidth
        }
    }};
    height: ${props => {
        switch(props.size) {
            case 'mini':    return props.theme.miniButtonHeight
            default:        return props.theme.buttonHeight
        }
    }};
    margin: ${props => {
        switch(props.size) {
            case 'nav':     return `0 ${props.theme.navBarSpace} 0 auto`
            default:        return `0 auto ${props.theme.space}`
        }
    }};
`

export default function Button(props) {
    const { onClick, children, variant, size, ...rest } = props
    return (
        <ButtonWrapper {...rest} size={size} onClick={onClick} variant={variant} disabled={variant==='disabled'}>
            {children}
        </ButtonWrapper>
    )
}