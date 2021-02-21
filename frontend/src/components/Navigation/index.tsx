import React, { useState } from "react";

import { Drawer } from "@material-ui/core";

import NavBar from "components/NavBar";
import Header from "components/Header";

import styles from "./styles";

interface Props {
  drawerStatus: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

function Navigation({drawerStatus, openDrawer, closeDrawer}: Props): JSX.Element {
  const classes = styles();

  return (
    <>
      <Header drawerStatus={drawerStatus} openDrawer={openDrawer} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerStatus}
        onClose={closeDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <NavBar drawerStatus={drawerStatus} closeDrawer={closeDrawer} />
      </Drawer>
    </>
  );
}

export default Navigation;
