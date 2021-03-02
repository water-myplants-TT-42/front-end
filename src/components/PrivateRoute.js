import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute ({ component: Component, ...rest }) {
    console.log("in the private route")
    return (
        <Route 
        { ...rest }
        render = {() => {
            if (localStorage.getItem('token')) {
                console.log("here's the token", localStorage.getItem('token'))
                return <Component />
            } else {
                return <Redirect to='/login' />
            }
        }}
        />
    )
}

export default PrivateRoute;