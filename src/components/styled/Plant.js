import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    border: 1px solid red;
    background-image: ${props => `url(${props.image})`};
    width: ${props => props.theme.cardSizeSmall};
    height: ${props => props.theme.cardSizeSmall};
`

const CardTitle = styled.h5`
    background: white;
    margin: 0;
    height: ${props => props.theme.cardHeaderHeight};
    text-align: center;
    font-size: ${props => props.theme.fontSize};
`

export default function Card(props) {
    const { title, image } = props
    return (
        <CardWrapper image={image}>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}