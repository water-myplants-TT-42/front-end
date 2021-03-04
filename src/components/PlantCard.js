import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import plantImage from '../images/plant-image.png'

import Button, { ButtonWrapper } from './styled/Button'

const CardWrapper = styled.div`
    position: relative;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    width: ${props => props.theme.cardSizeSmall};
    height: ${props => props.theme.cardSizeSmall};
    margin: ${props => props.theme.space};
    border: ${props => props.theme.cardBorder};
    box-shadow: ${props => props.theme.cardBoxShadow};

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
    display: block;
    background: white;
    margin: 0;
    height: ${props => props.theme.cardHeaderHeight};
    text-align: center;
    font-size: ${props => props.theme.fontSize};
    width: 100%;

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default function Card(props) {
    const { plant, deletePlant } = props
    return (
        <CardWrapper image={plant.image || plantImage}>
            <CardTitle>
                <Link to={`/plantlist/${plant.plant_id}`}>{plant.nickname}</Link>
            </CardTitle>
            <Button size="mini" variant="danger" onClick={() => deletePlant(plant)}>Delete</Button>
        </CardWrapper>
    )
}