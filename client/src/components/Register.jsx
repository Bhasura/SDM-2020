import React from "react";
import { Component } from "react";
import { register } from "./UserFunctions";
import { Button, Container, TextField, Typography } from "@material-ui/core";

const styles = {
  input: {
    backgroundColor: "white",
  },
};
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      organisation: "",
      user_type: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      organisation: this.state.organisation,
      user_type: this.state.user_type,
    };

    register(newUser).then((res) => {
      //this.props.history.push(`/register`) //register instead of login because login hasn't been developed yet
    });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form noValidate onSubmit={this.onSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            autoComplete="email"
            autoFocus
            id="email"
            label="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            InputProps={{ style: styles.input }}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="username"
            autoFocus
            id="username"
            label="Username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            InputProps={{ style: styles.input }}
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
            value={this.state.password}
            onChange={this.onChange}
            InputProps={{ style: styles.input }}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            id="organisation"
            label="Organisation"
            name="organisation"
            value={this.state.organisation}
            onChange={this.onChange}
            InputProps={{ style: styles.input }}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            id="user_type"
            label="User Type"
            name="user_type"
            value={this.state.user_type}
            onChange={this.onChange}
            InputProps={{ style: styles.input }}
          ></TextField>

          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Container>
    );
  }
}
