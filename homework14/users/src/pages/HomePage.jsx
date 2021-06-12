import React from "react";
import WithLoading from "../components/WithLoading";
import User from "../components/User";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
  table: {
    marginTop: 50,
    minWidth: 650
  },
  tableHeaderCell: {
    fontSize: 18,
    padding: 20,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  }
}));

const HomePage = ({ data, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table">
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell className={classes.tableHeaderCell}>#</TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Avatar
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Name
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    LastName
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Email
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <User row={row} index={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default WithLoading(
  HomePage,
  "https://60c1ccd04f7e880017dc0678.mockapi.io/users"
);
