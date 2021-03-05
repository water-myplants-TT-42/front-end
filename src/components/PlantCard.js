import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Button, { ButtonWrapper } from './styled/Button'
import Image, { ImageWrapper } from './styled/Image'

const CardWrapper = styled.div`
    z-index: 1;
    position: relative;
    width: ${props => props.theme.cardSizeSmall};
    height: ${props => props.theme.cardSizeSmall};
    margin: ${props => props.theme.space};
    border: ${props => props.theme.cardBorder};
    box-shadow: ${props => props.theme.cardBoxShadow};

    ${ImageWrapper} {
        position: absolute;
        width: ${props => props.theme.cardSizeSmall};
        height: ${props => props.theme.cardSizeSmall};
        z-index: -1;
        left: -1px;
    }

    @media only screen and (min-width: 768px) {
        width: ${props => props.theme.cardSizeLarge};
        height: ${props => props.theme.cardSizeLarge};

        ${ImageWrapper} {
            position: absolute;
            width: ${props => props.theme.cardSizeLarge};
            height: ${props => props.theme.cardSizeLarge};
        }
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
    padding: 0 0.5rem;
    a {
        color: inherit;
        text-decoration: none;
    }

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

const CardContent = styled.div`
    ${ButtonWrapper} {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
    }
`

export default function Card(props) {
    const { plant, deletePlant } = props

    return (
        <CardWrapper>
            <Link to={`/plantlist/${plant.plant_id}`}>
                <Image src={plant.image}/>
            </Link>
            <CardContent>
                <CardTitle>
                    <Link to={`/plantlist/${plant.plant_id}`}>
                        <p>{plant.nickname}</p>
                    </Link>
                </CardTitle>
                <Button size="mini" variant="danger" onClick={() => deletePlant(plant)}>Delete</Button>
            </CardContent>
        </CardWrapper>
    )
}