import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "components/Navigation";

import styles from "./styles";

function DashboardPage(): JSX.Element {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const classes = styles();

  return (
    <>
      <Navigation
        drawerStatus={drawerStatus}
        openDrawer={() => setDrawerStatus(true)}
        closeDrawer={() => setDrawerStatus(false)}
      />
      <main className={drawerStatus ? classes.content : classes.contentShift}>
        <div>Dashboard Page</div>
      </main>
      <Switch>
        <Route></Route>
      </Switch>
    </>
  );
}

export default DashboardPage;
