import React from "react";
import WithLoading from "../components/WithLoading";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import {
  TextField,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grid
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8e99f3",
      main: "#5c6bc0",
      dark: "#26418f"
    },
    secondary: {
      light: "#d1d5f4",
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
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  appBar: {
    backgroundColor: "#d1d5f4",
    color: "grey"
  }
}));

const UserPage = ({ data, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="stretch">
          <Grid item>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <Typography
                  variant="h6"
                  align="right"
                  className={classes.title}>
                  User Profile
                  <ArrowForwardIcon
                    fontSize="small"
                    style={{ marginLeft: 10 }}
                  />
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid container justify="center" alignItems="center">
            <Grid item lg={2}>
              <img
                alt="Remy Sharp"
                src={data.avatar}
                style={{
                  width: 190,
                  height: 190,
                  borderRadius: "50%",
                  border: "6px solid blue"
                }}
              />
            </Grid>
            <Grid item lg={6} style={{ marginTop: 20 }}>
              <Container maxWidth="md">
                <form noValidate autoComplete="off" style={{ padding: 4 }}>
                  <Grid container spacing={3}>
                    <Grid item lg={12}>
                      <TextField
                        id="outlined-read-only-input"
                        label="Acount Id"
                        defaultValue={data.id}
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={12}>
                      <TextField
                        id="outlined-read-only-input"
                        label="Company"
                        defaultValue={data.company}
                        inputRef={input => input && input.focus()}
                        fullWidth
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={4}>
                      <TextField
                        id="outlined-read-only-input"
                        label="jobPosition"
                        fullWidth
                        defaultValue={data.jobPosition}
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={4}>
                      <TextField
                        id="outlined-read-only-input"
                        label="firstName"
                        fullWidth
                        defaultValue={data.firstName}
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item lg={4}>
                      <TextField
                        id="outlined-read-only-input"
                        label="lastName"
                        fullWidth
                        defaultValue={data.lastName}
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <TextField
                        id="outlined-read-only-input"
                        label="jobTitle"
                        fullWidth
                        defaultValue={data.jobTitle}
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={8}>
                      <TextField
                        id="outlined-read-only-input"
                        label="Email"
                        fullWidth
                        defaultValue={data.email}
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <TextField
                        id="outlined-read-only-input"
                        label="mobile"
                        fullWidth
                        defaultValue={data.mobile}
                        InputProps={{
                          readOnly: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </form>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default WithLoading(
  UserPage,
  `https://60c1ccd04f7e880017dc0678.mockapi.io/users/`
);
