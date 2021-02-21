import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header";


function DashboardPage(): JSX.Element {
  return (
    <>
    <Header/>
      <div>Dashboard Page</div>
      <Switch>
        <Route></Route>
      </Switch>
    </>
  );
}

export default DashboardPage;
