import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      style={{
        backgroundColor: "#52b788",
        background: "transparent",
        boxShadow: "none",
      }}
      position="static"
    >
      <Toolbar style={{ margin: 10 }}>
        <Typography variant="h6" className={classes.title}>
          SEER
        </Typography>
        <Button color="inherit" component={Link} to="/search">
          Search
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to="/register"
          size="medium"
        >
          Login/Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
