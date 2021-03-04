import React from 'react'
import styled from 'styled-components'
import plantImage from '../images/plant-image.png'

import Button, { ButtonWrapper } from './styled/Button'

const CardWrapper = styled.div`
    position: relative;
    border: 1px solid red;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    width: ${props => props.theme.cardSizeSmall};
    height: ${props => props.theme.cardSizeSmall};
    margin: ${props => props.theme.space};

    @media only screen and (min-width: 768px) {
        width: ${props => props.theme.cardSizeLarge};
        height: ${props => props.theme.cardSizeLarge};
    }

    ${ButtonWrapper} {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
    }
`

const CardTitle = styled.h5`
    background: white;
    margin: 0;
    height: ${props => props.theme.cardHeaderHeight};
    text-align: center;
    font-size: ${props => props.theme.fontSize};
`

export default function Card(props) {
    const { plant, deletePlant } = props
    return (
        <CardWrapper image={plant.image || plantImage}>
            <CardTitle>{plant.nickname}</CardTitle>
            <Button size="mini" variant="danger" onClick={() => deletePlant(plant)}>Delete</Button>
        </CardWrapper>
    )
}