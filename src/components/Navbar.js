import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import user from '../icons/user-icon.svg'
import logo from '../icons/plant-color.svg'
import Button, { ButtonWrapper } from './styled/Button'
import { Theme } from './styled/theme'

const NavWrapper = styled.div`
    height: ${Theme.navBarHeight};
    border-bottom: ${Theme.navBarBorderBottom};
    padding: ${Theme.navBarSpace};

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
    
    ${ButtonWrapper} {
        &:hover {
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
        }
        transition: all 0.5s ease-in-out;
    }

    @media (min-width: 600px) {
        h3 {
            display: initial;
            font-size: ${Theme.navBarTitleFontSize};
            padding-top: 0.4rem;
            margin-left: ${Theme.navBarSpace};
            cursor: pointer;
        }
    }
`

export default function NavBar(props) {
    
    const { maxWidth, className, isAuthenticated } = props
    const history = useHistory()

    const routeTo = (location) => {
        history.push(location)
    }

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