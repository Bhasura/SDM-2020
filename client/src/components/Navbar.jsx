import React from 'react'
import {Link} from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles
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
        const classes = useStyles()

        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>SEER</Typography>
                    <Button color="inherit" component={Link} to="/register">Register/Login</Button>
                </Toolbar>
            </AppBar>
        )
}

export default Navbar