import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function withLoading(WrappedComponent, url) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      "& > * + *": {
        margin: theme.spacing(2)
      }
    },
    circular: {
      margin: 100
    }
  }));
  const WithLoadingComponent = props => {
    const classes = useStyles();
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchData(url, id);
    }, []);
    const fetchData = async api => {
      const currentUser = id ? api + id : api;

      try {
        const response = await fetch(currentUser);
        const result = await response.json();
        console.log(response.status);
        switch (response.status) {
          case 400:
            toast.error(
              "The server could not understand the request due to invalid syntax."
            );
            break;
          case 401:
            toast.error("unauthenticated");
            break;
          case 403:
            toast.error("Forbidden request");
            break;
          case 404:
            toast.error("Not Found");
            break;
          case 408:
            toast.error("Request Timeout");
            break;
          case 500:
            toast.error("Internal Server Error");
            break;
          case 504:
            toast.error("Gateway Timeout");
            break;
          case 502:
            toast.error("Bad Gateway");
            break;

          default:
            break;
        }
        setData(result);
        setLoading(false);
      } catch (error) {
        toast.error("request failed!");
      }
    };
    if (isLoading) {
      return (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.root}>
          <Grid item>
            <CircularProgress color="secondary" className={classes.circular} />
          </Grid>
        </Grid>
      );
    } else {
      return <WrappedComponent data={data} {...props} />;
    }
  };

  return WithLoadingComponent;
}
export default withLoading;
