import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../icons/plant-color.svg'
import Button from './styled/Button'
import { Theme } from './styled/theme'

const StyledHome = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    #logo {
        width: ${Theme.largeLogoSize};
        height: auto;
        margin: ${Theme.space} auto;
    }

    h1 {
        font-size: ${Theme.h1FontSize};
        margin-bottom: ${Theme.space};
    }

    button {
        width: ${Theme.buttonWidth};
        height: ${Theme.buttonHeight};
        font-size: ${Theme.fontSize};
        margin-bottom: ${Theme.space};
    }
`

export default function Home(props) {
    const history = useHistory()

    const routeTo = (location) => {
        history.push(location)
    }

    return (
        <StyledHome>
            <img src={logo} id='logo'/>
            <h1>Water My Plants</h1>
            <Button 
                onClick={() => routeTo('/login')} 
                variant='success'
                children='Log In'
            />
            <Button 
                onClick={() => routeTo('/signup')} 
                variant='success'
                children='Sign Up'
            />
        </StyledHome>
    )
}