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
    fontFamily: "Oswald"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    fontFamily: "Oswald"
  },
}));

const searchButtonStyles = makeStyles((theme) => ({
  root: {
    marginRight: 30,
    "&:hover": {
      backgroundColor: "#4AD293"
    }
  }
}));


const Navbar = () => {
  const classes = useStyles();
  const searchStyles = searchButtonStyles();

  const navbarWrapper = {
    marginLeft: 100,
    marginRight: 100
  }

  return (
    <AppBar
      style={{
        backgroundColor: "#52b788",
        background: "transparent",
        boxShadow: "none",
      }}
      position="static"
    >
      <div style={navbarWrapper}>
        <Toolbar style={{ margin: 10 }}>
          <Typography variant="h4" className={classes.title}>
            SEER
        </Typography>
          <Button color="inherit" component={Link} to="/search" className={searchStyles.root} >
            <div style={{ paddingLeft: 5, paddingRight: 5 }}>
              Search
          </div>
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
      </div>
    </AppBar>
  );
};

export default Navbar;
