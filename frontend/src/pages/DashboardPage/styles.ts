import { makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

const styles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    marginLeft: drawerWidth,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default styles;
