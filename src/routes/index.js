import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Appointments from '../pages/appointments';
import Blogs from '../pages/blogs';
import Home from '../pages/home'

// type RouteProps = {
//     isPrivate: boolean,
//     component: 
// }
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/appointments" component={Appointments} />
            <Route path="/blogs" component={Blogs} />
            <Route component={Login} />
        </Switch>
    );
}
