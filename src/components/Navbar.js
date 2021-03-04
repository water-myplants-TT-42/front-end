import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import user from '../icons/user-icon.svg'
import logo from '../icons/plant-color.svg'
import Button, { ButtonWrapper } from './styled/Button'


const NavWrapper = styled.div`
    height: ${(props) => props.theme.navBarHeight};
    size: ${(props) => props.theme.navIconSize};
    border-bottom: ${(props) => props.theme.navBarBorderBottom};
    margin: 0 auto;
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    * {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
    & > div{
        // only applies to immediate children of wrapper
        cursor: pointer;
        align-items:center;
    }
    h3{
        font-size: 1.5rem;
    }
    #logo{
        width: 50px;
        height: auto;
    }
    #user{
        width: 50px;
        height: auto;
        cursor: pointer;
    }

    ul {
        width: 50%;        
        li{
        justify-content: space-between;
        }
    }
    ${ButtonWrapper} {
        background-color: ${(props) => props.theme.successColor};
        font-size: 1rem;
        height: 33px;
        padding: ${(props) => props.size === 'small' ? `0.25rem 0.5rem` : `0.5rem 1rem`};
        margin: 0 auto;
        &:hover {
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
        }
        transition: all 0.5s ease-in-out;
    }
`


export default function Navbar(props) {
const history = useHistory()    
const { maxWidth, className } = props
    return (
        <>
            {/* <h1>text placeholder</h1> */}
            <NavWrapper maxWidth={maxWidth} className={className}>
                <div onClick={() => {history.push('/plantlist')}}>
                    <img src={logo} id='logo' alt="logo"/>
                    <h3>Water My Plants</h3>
                </div>
                <ul>
                    
                    <li><Button onClick={() => {history.push('/signup')}}>Sign Up</Button></li>
                    <li><Button onClick={() => {history.push('/login')}}>Login</Button></li>
                {/* </ul>
                <br></br>
                <ul> */}
                    <li><Button onClick={() => {history.push('/plantform')}}>Create Plant</Button></li>
                    <li><Button onClick={() => {history.push('/plantlist')}}>View Plant List</Button></li>
                </ul>
                <img src={user} alt="user-icon" id='user' onClick={() => {history.push('/edituser')}}></img>
            </NavWrapper>
        </>
    )
}