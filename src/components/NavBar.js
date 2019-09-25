import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  options: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
  }
}))

const NavBar = ({title}) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
          <div className={classes.titleWrapper}>
            <Typography variant="title" color="textPrimary">
              Welcome to
            </Typography>
            <Typography variant="h5" color="textPrimary">
              Hanchi's Website
            </Typography>
          </div>
          
          <div className={classes.grow}></div>
          <div className={classes.options}>
            <Button 
              className={classes.button}
              component={Link}
              to="/"
            >
              ABOUT
            </Button>
            <Button 
              className={classes.button}
              component={Link}
              to="/academics/"
            >
              ACADEMICS
            </Button>
            <Button 
              className={classes.button}
              component={Link}
              to="/projects/"
            >
              PROJECTS
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;