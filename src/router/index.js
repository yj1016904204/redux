import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../views/Home';
import More from '../views/More';
import Mos from '../views/Mos';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/mos" component={Mos}></Route>
      <Route path="/more" component={More}></Route>
      <Redirect to="/home" from="/"></Redirect>
    </Switch>
  )
}

export default Routes