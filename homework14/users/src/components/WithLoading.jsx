import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorConection from "../images/5406715.jpg";

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
    const history = useHistory();
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
            history.push("/");
            break;
          case 401:
            toast.error("unauthenticated");
            history.push("/");
            break;
          case 403:
            toast.error("Forbidden request");
            history.push("/");
            break;
          case 404:
            toast.error("Not Found");
            history.push("/");
            break;
          case 408:
            toast.error("Request Timeout");
            history.push("/");
            break;
          case 500:
            toast.error("Internal Server Error");
            history.push("/");
            break;
          case 504:
            history.push("/");
            toast.error("Gateway Timeout");
            break;
          case 502:
            toast.error("Bad Gateway");
            history.push("/");
            break;

          default:
            break;
        }

        setData(result);
        setLoading(false);
      } catch (error) {
        toast.error("request failed! Check your network");
        setLoading(false);
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
    } else if (!data) {
      return (
        <React.Fragment>
          <CssBaseline />
          <Grid container justify="center" alignItems="center">
            <grid item>
              <img
                src={ErrorConection}
                alt="Error Conection"
                style={{ width: 700, height: 700 }}
              />
            </grid>
          </Grid>
        </React.Fragment>
      );
    } else {
      return <WrappedComponent data={data} {...props} />;
    }
  };

  return WithLoadingComponent;
}
export default withLoading;
