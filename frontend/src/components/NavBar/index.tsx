import React, { useState } from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Home, Map } from "react-feather";

import styles from "./styles";

interface Props {
  closeDrawer: () => void;
  drawerStatus: boolean;
}

function NavBar({ closeDrawer, drawerStatus }: Props): JSX.Element {
  const classes = styles();

  return (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeDrawer}>
          {drawerStatus ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Map />
          </ListItemIcon>
          <ListItemText primary="Location" />
        </ListItem>
      </List>
    </>
  );
}

export default NavBar;
