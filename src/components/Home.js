import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home(props) {
    const { routeTo } = props;
    const history = useHistory()

    return (
        <div>
            {/* logo icon here */}
            <h1>Water My Plants</h1>
            <button onClick={routeTo('/login')}>Log In</button>
            <button onClick={routeTo('/signup')}>Sign Up</button>
        </div>
    )
}