import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Menu, Notifications, AccountCircle, Mail } from "@material-ui/icons";

import NavBar from "components/NavBar";

import styles from "./styles";

function Header(): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = styles();
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setOpenDrawer(true)}
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <NavBar />
        </Drawer>
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
