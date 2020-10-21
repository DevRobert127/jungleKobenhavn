import React from "react";
import { getAllPlants } from "../lib/api";
import { PlantType } from "./PlantType";
import PlantCard from "./PlantCard";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

export default function PlantIndex() {
  const useStyles = makeStyles({
    root: {
      padding: 10,
      backgroundColor: "#25462e",
    },
    title: {
      fontFamily: "Old Standard TT",
      fontSize: 35,
      letterSpacing: 3,
      textTransform: "uppercase",
      textAlign: "center",
      color: "#fff9ed",
    },
  });

  const [data, setData] = React.useState([]);
  const classes = useStyles();

  const getData = async () => {
    const res = await getAllPlants();
    setData(res.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (!data) return null;
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        <b>House Plants</b>
      </Typography>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {data.map((plant: PlantType) => (
            <PlantCard key={plant._id} {...plant} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}