import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Sale from './sale/Sale'
import About from './about/About'

export default props => (
    <HashRouter>
        <Route path='/sales' component={Sale} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/sales' />
    </HashRouter>
)