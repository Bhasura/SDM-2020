import React from "react";
import { Component } from "react";
import {
    Container,
    Typography
  } from "@material-ui/core";
  

export default class SearchForm extends Component{
    render() {
        return (
          <Container component="main">
            <Typography component="h1" variant="h5">
              Search
            </Typography>
          </Container>
        )
    }
}