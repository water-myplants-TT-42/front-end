import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: ${(props) => props.maxWidth};

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-size: ${props => props.theme.h1FontSize};
        margin-bottom: ${props => props.theme.space};
    }
`

export default function Container(props) {
    const { children, maxWidth, className } = props

    return (
        <ContainerWrapper maxWidth={maxWidth} className={className}>
            {children}
        </ContainerWrapper>
    )
}