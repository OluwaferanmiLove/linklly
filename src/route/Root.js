import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Analytics, Error404, Home } from "../screens";

function Root() {
  return (
    <Router>
        <Switch>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/404">
            <Error404 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default Root;