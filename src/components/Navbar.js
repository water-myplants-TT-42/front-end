import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <h1>text placeholder</h1>
            <div>
            <h5>navbar</h5>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            <br></br>
            <ul>
                <li><Link to='/edituser'>View/Edit User</Link></li>
                <li><Link to='/plantform'>Create Plant</Link></li>
                <li><Link to='/plantlist'>View Plant List</Link></li>
            </ul>
            </div>
        </>
    )
}