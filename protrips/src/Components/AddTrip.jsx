import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [...this.props.trips],
    };
  }
  addNewTrip = () => {
    let date = document.getElementById("date").value;
    let place = document.getElementById("place").value;
    let type = document.getElementById("type").value;
    console.log(`Date:${date}\nPlace:${place}\nType:${type}`);
    this.state.trips.push({ date: date, place: place, type: type });
    this.props.addTrip(this.state.trips);
  };
  render() {
    return (
      <div className="addTripContainer">
        <div className="heading">Add a Trip</div>
        <div className="form">
          <label>Date:</label>
          <input type="date" id="date" />
          <label>Place:</label>
          <input type="text" id="place" placeholder="Enter place name" />
          <label>Type:</label>
          <select id="type">
            <option className="option" value="trek">Trek</option>
            <option className="option" value="club">Club</option>
            <option className="option" value="tropic">Tropic</option>
          </select>
        </div>
        <Link to="/list" className="submitbtn" onClick={this.addNewTrip}>
          Submit
        </Link>
      </div>
    );
  }
}
