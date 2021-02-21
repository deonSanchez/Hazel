import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home } from "react-feather";

import styles from "./styles";

function NavBar(): JSX.Element {
  const classes = styles();

  return (
    <List className={classes.list}>
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </List>
  );
}

export default NavBar;
