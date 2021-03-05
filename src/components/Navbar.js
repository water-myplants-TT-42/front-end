import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import user from '../icons/user-icon.svg'
import logo from '../icons/plant-color.svg'
import Button from './styled/Button'

const NavWrapper = styled.div`
    height: ${props => props.theme.navBarHeight};
    border-bottom: ${props => props.theme.navBarBorderBottom};
    padding: ${props => props.theme.navBarSpace};
    margin-bottom: ${props => props.theme.space};

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        display: none;
    }

    #logo, #user {
        width: 50px;
        height: auto;
        cursor: pointer;
    }

    div {
        display: flex;
        flex-flow: row nowrap
        justify-content: space-between
        align-items: center
    }
    
    #user {
        &:hover {
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
        }
        transition: all 0.5s ease-in-out;
    }

    @media (min-width: 600px) {
        h3 {
            display: initial;
            font-size: ${props => props.theme.navBarTitleFontSize};
            padding-top: 0.4rem;
            margin-left: ${props => props.theme.navBarSpace};
            cursor: pointer;
        }
    }
`

export default function NavBar(props) {
    
    const { maxWidth, className, userID } = props
    const history = useHistory()

    const routeTo = (location) => {
        history.push(location)
    }
    if (userID === null ){
        return(
            <NavWrapper maxWidth={maxWidth} className={className}>
                <div id='nav-logo' onClick={() => routeTo('/')}>
                    <img src={logo} id='logo' />
                    <h3>Water My Plants</h3>
                </div>
                <div id='nav-buttons'>
                    <Button
                        children='Log In'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/login')} 
                        />
                    <Button 
                        children='Sign Up'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/signup')}
                        />
                </div>
            </NavWrapper>
        )
    } else {
        return (
            <NavWrapper maxWidth={maxWidth} className={className}>
                <div id='nav-logo' onClick={() => routeTo('/plantlist')}>
                    <img src={logo} id='logo' />
                    <h3>Water My Plants</h3>
                </div>
                <div id='nav-buttons'>
                    <Button
                        children='List'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/plantlist')} 
                        />
                    <Button 
                        children='+ New'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/plantform')}
                        />
                    <img 
                        src={user} 
                        id='user' 
                        onClick={() => routeTo('/edituser')} 
                    />
                </div>
            </NavWrapper>
        )
    }
}