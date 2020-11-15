import React, { useState } from "react";
import axios from "axios";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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
  input: {
    width: "100%",
  },
  button: {
    width: "100%",
    height: "50px",
    marginLeft: "2rem"
  },
  text: {
    textAlign: "center",
    fontSize: "30px",
    marginTop: "2rem"
  },
}));

const Index = () => {
  const [url, setUrl] = useState();
  const [hash, setHash] = useState();

  const classes = useStyles();

  const trimUrl = (url) => {
    axios
      .post(`http://localhost:3001/url`, {
        original: url,
      })
      .then(function (response) {
        setHash("http://localhost:3000/" + response.data.hash);
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.rootContainer}>
        <Grid item sm={6} lg={4}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            type="text"
            value={url}
            id="create-form"
            onChange={(e) => setUrl(e.target.value)}
          />
        </Grid>
        <Grid item sm={2}>
          <Button
            variant="contained"
            onClick={() => trimUrl(url)}
            className={classes.button}
          >
            Create
          </Button>
        </Grid>
        <Grid item sm={8} className={classes.text}>
          <p>{hash}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
