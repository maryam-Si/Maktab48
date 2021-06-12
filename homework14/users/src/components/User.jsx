import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  avatar: {
    borderRadius: 100
  },

  tableRow: {
    backgroundColor: "#ccd0e1",
    cursor: "pointer"
  },
  tableCell: {
    fontSize: 20
  }
}));

const User = ({ row, index }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <TableRow
        className={classes.tableRow}
        key={row.name}
        hover
        onClick={() => {
          history.push(`/user/${row.id}`);
        }}>
        <TableCell className={classes.tableCell} component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell>
          <img className={classes.avatar} src={row.avatar} alt="" />
        </TableCell>
        <TableCell className={classes.tableCell}>{row.firstName}</TableCell>
        <TableCell className={classes.tableCell}>{row.lastName}</TableCell>
        <TableCell className={classes.tableCell}>{row.email}</TableCell>
      </TableRow>
    </>
  );
};

export default User;
