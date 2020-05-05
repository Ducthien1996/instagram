import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import _isEmpty from 'lodash/isEmpty'

const PrivateRouteFb = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        sessionStorage.getItem('accessToken')
            ? <Component {...props} />
            : <Redirect to='/signin' />
    )} />
)

export default PrivateRouteFb 