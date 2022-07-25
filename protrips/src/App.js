import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddTrip from "./Components/AddTrip";
import List from "./Components/List";
import Nav from "./Components/Nav";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      trips: [],
    };
  }
  
  addTrip = (createNewTrip) => {
    this.setState({
      trips: [...createNewTrip],
    });
  };
  
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home trips={this.state.trips} />} />
          <Route
            path="/addTrip"
            element={
              <AddTrip addTrip={this.addTrip} trips={this.state.trips} />
            }
          />
          <Route path="/list" element={<List trips={this.state.trips} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
