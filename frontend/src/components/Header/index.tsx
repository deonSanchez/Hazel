import React, { useState } from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu, Notifications, AccountCircle, Mail } from "@material-ui/icons";

import styles from "./styles";

interface Props {
  openDrawer: () => void;
  drawerStatus: boolean;
}

function Header({ openDrawer, drawerStatus }: Props): JSX.Element {
  const classes = styles();

  return (
    <AppBar
      position="relative"
      className={drawerStatus ? classes.appBarShift : classes.appBar}
    >
      <Toolbar>
        <IconButton
          className={drawerStatus ? classes.hide : classes.menuButton}
          color="inherit"
          edge="start"
          onClick={openDrawer}
        >
          <Menu />
        </IconButton>

        <Typography color="inherit" variant="h6" noWrap>
          Hazel Website
        </Typography>
        <div className={classes.grow} />
        <div className={classes.rightSide}>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <Mail />
          </IconButton>
          <IconButton color="inherit" edge="end">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
