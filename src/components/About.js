import React from "react";
import { makeStyles } from "@material-ui/core";

import Image from "../img/About.jpg";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  introWrapper: {
    backgroundImage: `url(${Image})`,
    minHeight: "60vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.mixins.toolbar.height,
    marginTop: -theme.mixins.toolbar.height
  },
  introContent: {
    padding: theme.spacing(2),
  }
}))

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.introWrapper}>
        <Paper className={classes.introContent}>
          Hi, I am Tony Hanchi Zhang
        </Paper>
      </div>
    </div>
    
  )
}

export default About;