import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import logo from '../icons/plant-color.svg'
import Button from './styled/Button'

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-size: ${props => props.theme.h1FontSize};
        margin-bottom: ${props => props.theme.space};
    }

    #logo {
        width: ${props => props.theme.smallLogoSize};
        height: ${props => props.theme.smallLogoSize};
        margin: ${props => props.theme.space} auto;
    }
`

export default function User(props) {
    const { userID } = props;
    const history = useHistory()

    useEffect(() => {
        if (userID == null) {
            history.push('/')
        }
    }, [])

    const clickLogout = () => {

    }

    return (
        <UserWrapper>
            <img src={logo} id='logo' alt="logo" />
            <h1>User</h1>

            <Button 
                children='Edit Info'
                variant='success'
                size='normal'
                onClick={() => history.push('edituser')}
            />

            <Button 
                children='Log Out'
                variant='success'
                size='normal'
                onClick={clickLogout}
            />
        </UserWrapper>
    )
}