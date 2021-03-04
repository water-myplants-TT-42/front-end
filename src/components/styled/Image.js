import React from 'react'
import styled from 'styled-components'

import logo from '../../icons/plant-outline-white.svg'

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.size};
    height: ${props => props.size};

    margin-bottom: ${props => props.theme.space};

    background-color: ${props => props.theme.inputGray};
    border: ${props => props.theme.cardBorder};

    img {
        width: ${props => props.src ? '100%' : '80%'};
        height: ${props => props.src ? '100%' : '80%'};
    }
`

export default function Image(props) {
    const { size, src, alt, ...rest } = props

    return (
        <ImageWrapper size={size} {...rest} src={!!src} >
            {
                src 
                    ? <img src={src} alt={alt} /> 
                    : <img src={logo} alt='logo' />
            }
        </ImageWrapper>
    )
}