import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../icons/plant-color.svg'
import Button from './styled/Button'

const StyledHome = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    #logo {
        width: ${props => props.theme.largeLogoSize};
        height: ${props => props.theme.largeLogoSize};
        margin: ${props => props.theme.space} auto;
    }

    h1 {
        font-size: ${props => props.theme.h1FontSize};
        margin-bottom: ${props => props.theme.space};
    }
`

export default function Home(props) {
    const history = useHistory()

    const routeTo = (location) => {
        history.push(location)
    }

    return (
        <StyledHome>
            <img src={logo} id='logo' alt="logo"/>
            <h1>Water My Plants</h1>
            <Button 
                size='normal'
                onClick={() => routeTo('/login')} 
                variant='success'
                children='Log In'
            />
            <Button 
                size='normal'
                onClick={() => routeTo('/signup')} 
                variant='success'
                children='Sign Up'
            />
        </StyledHome>
    )
}