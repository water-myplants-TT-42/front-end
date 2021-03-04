import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme'

export const ButtonWrapper = styled.button`
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: ${props => {
        switch(props.size) {
            case 'mini':    return Theme.miniBorderRadius
            default:        return Theme.borderRadius
        }
    }};
    background-color: ${props => {
        switch (props.variant) {
            case 'danger':      return Theme.buttonRed
            case 'disabled':    return Theme.buttonGray
            default:            return Theme.buttonGreen
        }
    }};
    font-size: ${props => {
        switch (props.size) {
            case 'mini':    return Theme.miniButtonFontSize
            default:        return Theme.fontSize
        }
    }};
    width: ${props => {
        switch(props.size) {
            case 'mini':    return Theme.miniButtonWidth
            case 'med':     return Theme.medButtonWidth
            case 'nav':     return Theme.navButtonWidth
            default:        return Theme.buttonWidth
        }
    }};
    height: ${props => {
        switch(props.size) {
            case 'mini':    return Theme.miniButtonHeight
            default:        return Theme.buttonHeight
        }
    }};
    margin: ${props => {
        switch(props.size) {
            case 'nav':     return `0 ${Theme.navBarSpace} 0 auto`
            default:        return `0 auto ${Theme.space}`
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