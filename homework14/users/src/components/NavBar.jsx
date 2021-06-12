import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8e99f3",
      main: "#5c6bc0",
      dark: "#26418f"

      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

const useStyles = makeStyles(theme => ({
  nav: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  }
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to="/"
              exact
              activeClassName="mainHeader__active">
              Home
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
