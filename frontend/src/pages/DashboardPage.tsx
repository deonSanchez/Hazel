import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "components/Navigation";

function DashboardPage(): JSX.Element {
  return (
    <>
      <Navigation />
      <div>Dashboard Page</div>
      <Switch>
        <Route></Route>
      </Switch>
    </>
  );
}

export default DashboardPage;
