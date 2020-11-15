import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rootContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textEnd:{
    textAlign: "end"
  },
  marginText: {
    marginLeft: "1rem"
  }
});

const Show = () => {
  let { hash } = useParams();

  const [url, setUrl] = useState();

  const classes = useStyles();

  async function fetchTask() {
    if (hash.length == 6 && hash[5] == "+") {
      axios
        .get(`http://localhost:3001/url/${hash.slice(0, -1)}`)
        .then((result) => {
          setUrl(result.data);
        });
    } else if (hash.length == 5) {
      axios
        .post(`http://localhost:3001/url/${hash}`, { hash: hash })
        .then((result) => {
          window.location = result.data.original;
        });
    }
  }

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <Box className={classes.root}>
      <Card className={classes.rootContainer}>
        <CardContent>
      {url ? (
        <Grid container className={classes.centered}>
          <Grid item sm={4} className={classes.textEnd}>
            <Typography variant="h5">La URL original fue:</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography className={classes.marginText}>{url.original}</Typography>
          </Grid>
          <Grid item sm={4} className={classes.textEnd}>
            <Typography variant="h5">La URL generada es:</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography className={classes.marginText}>{"http://localhost:3000/" + url.hash}</Typography>
          </Grid>
          <Grid item sm={4} className={classes.textEnd}>
            <Typography variant="h5">Veces redireccionado:</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography className={classes.marginText}>{url.count}</Typography>
          </Grid>
        </Grid>
      ) : null}
      </CardContent>
      </Card>
    </ Box>
  );
};

export default Show;
