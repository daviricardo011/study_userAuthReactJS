import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import storeContext from '../../../contexts/context'

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const { token } = useContext(storeContext)

    return (
        <Route {...rest}
            render={() => token
                ? <Component {...rest} />
                : <Redirect to="/login" />
            } />
    )
}

export default PrivateRoutes