import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Sale from './sale/Sale'
import About from './about/About'

export default props => (
    <div>
        <Switch>
            <Route exact path='/sales' component={Sale} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/sales' />
        </Switch>
    </div>
)