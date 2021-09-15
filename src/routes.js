import { Switch, Route, Redirect } from 'react-router-dom'

import { Green } from './pages/Green'
import { Red } from './pages/Red'
import { Yellow } from './pages/Yellow'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/red" exact>
        <Red />
      </Route>
      <Route path="/yellow" exact>
        <Yellow />
      </Route>
      <Route path="/green" exact>
        <Green />
      </Route>
      <Redirect to={localStorage.getItem('activePage') || '/red'} />
    </Switch>
  )
}
