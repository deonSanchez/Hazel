import { makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

const styles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default styles;
