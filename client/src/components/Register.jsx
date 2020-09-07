import React from "react";
import { Component } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

export default class Register extends Component {
  render() {
    return (
      <Container component="main">
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
            id="email"
            label="Email Address"
            name="email"
          ></TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="password"
            autoFocus
            id="password"
            label="Password"
            name="password"
          ></TextField>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            id="organisation"
            label="Organisation"
            name="organisation"
          ></TextField>
          <InputLabel id="label">User Type</InputLabel>
          <Select labelId="label" id="select" value="20">
            <MenuItem value="10">Student</MenuItem>
            <MenuItem value="20">Software Engineer</MenuItem>
          </Select>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Container>
    );
  }
}
