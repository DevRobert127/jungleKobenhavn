import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

export default function LondonAddress() {
  const useStyles = makeStyles({
    container: {
      margin: 10,
    },
    title: {
      fontFamily: "Playfair Display",
      fontWeight: "bold",
      fontSize: 18,
      color: "#848380",
      marginTop: "30%",
      textTransform: "uppercase",
      letterSpacing: 4,
    },
    text: {
      marginTop: "5%",
      fontFamily: "Open Sans",
      fontSize: 16,
      color: "#848380",
    },
    text2: {
      fontFamily: "Open Sans",
      fontSize: 12,
      color: "#848380",
    },
    email: {
      fontFamily: "Open Sans",
      fontSize: 12,
      color: "#848380",
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>London</Typography>
      <Typography className={classes.text}>
        9 Morocco Street {<br />}Bermondsey, London {<br />} SE1 3HB
      </Typography>
      <br />
      <Typography className={classes.text2}>
        <a href="mailto:hello@junglekobenhavn.co.uk" className={classes.email}>
          hello@junglekobenhavn.co.uk
        </a>
        {<br />}
        +44 2087 342 900
      </Typography>
    </Container>
  );
}
