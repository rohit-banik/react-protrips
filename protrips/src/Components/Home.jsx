import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMountain, faBeer } from "@fortawesome/free-solid-svg-icons";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [...this.props.trips],
    };
  }
  render() {
    return (
      <div className="homeContainer">
        <div className="totaltrips">
          <span className="noOfTrips">{this.state.trips.length}</span> trips
        </div>
        <div className="tripDivision">
          <span>
            {
              this.state.trips.filter((trip) => {
                return trip.type === "tropic";
              }).length
            }
            <FontAwesomeIcon icon={faSun} className='fontawesome' />
          </span>
          <span>
            {
              this.state.trips.filter((trip) => {
                return trip.type === "trek";
              }).length
            }
            <FontAwesomeIcon icon={faMountain} className='fontawesome' />
          </span>
          <span>
            {
              this.state.trips.filter((trip) => {
                return trip.type === "club";
              }).length
            }
            <FontAwesomeIcon icon={faBeer} className='fontawesome' />
          </span>
        </div>
      </div>
    );
  }
}
