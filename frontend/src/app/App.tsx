import { Switch, Route } from "react-router-dom";

import DashboardPage from "pages/DashboardPage";

function App(): JSX.Element {
  return (
    <Switch>
      <Route component={DashboardPage} />
    </Switch>
  );
}

export default App;
