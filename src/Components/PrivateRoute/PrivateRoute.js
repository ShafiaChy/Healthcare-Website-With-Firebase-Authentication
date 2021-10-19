import React from 'react';
import { Redirect, Route } from 'react-router';
import useHooks from '../../Hooks/useHooks';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useHooks();
    return (
        <div>
           <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
        </div>
    );
};

export default PrivateRoute;