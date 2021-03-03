import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../icons/plant-color.svg'
import Button from './styled/Button'

const StyledHome = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #logo {
        width: 50%;
        height: auto;
        margin-bottom: 20px;
    }

    h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    button {
        width: 200px;
        height: 50px;
        font-size: 24px;
        margin-bottom: 20px;
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