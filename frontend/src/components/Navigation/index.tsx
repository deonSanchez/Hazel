import React, { useState } from "react";

import { Drawer } from "@material-ui/core";

import NavBar from "components/NavBar";
import Header from "components/Header";

import styles from "./styles";

function Navigation(): JSX.Element {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const classes = styles();

  return (
    <>
      <Header drawerStatus={drawerStatus} openDrawer={() => setDrawerStatus(true)} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerStatus}
        onClose={() => setDrawerStatus(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <NavBar drawerStatus={drawerStatus} closeDrawer={() => setDrawerStatus(false)} />
      </Drawer>
    </>
  );
}

export default Navigation;
