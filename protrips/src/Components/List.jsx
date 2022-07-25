import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [...this.props.trips],
      type: "All",
    };
  }

  typeAll = () => {
    this.setState({
      trips: [...this.props.trips],
      type: "All",
    });
  };

  typeTrek = () => {
    this.setState({
      trips: [
        ...this.props.trips.filter((trip) => {
          return trip.type === "trek";
        }),
      ],
      type: "Trek",
    });
  };

  typeTropic = () => {
    this.setState({
      trips: [
        ...this.props.trips.filter((trip) => {
          return trip.type === "tropic";
        }),
      ],
      type: "Tropic",
    });
  };

  typeClub = () => {
    this.setState({
      trips: [
        ...this.props.trips.filter((trip) => {
          return trip.type === "club";
        }),
      ],
      type: "Club",
    });
  };

  render() {
    return (
      <div className="listContainer">
        <div className="heading">{this.state.type} Trips</div>
        <table>
          <tr>
            <th>Date</th>
            <th>Place</th>
            <th>Type</th>
          </tr>
          {this.state.trips.map((trip) => {
            return (
              <tr>
                <td>{trip.date}</td>
                <td>{trip.place}</td>
                <td>{trip.type}</td>
              </tr>
            );
          })}
        </table>
        <div className="filter">
          <div className="filterlist">
            <span className="text">Filter by:</span>
            <span onClick={this.typeAll} className='submitbtn'>All</span>
            <span onClick={this.typeTrek} className='submitbtn'>Treks</span>
            <span onClick={this.typeClub} className='submitbtn'>Clubs</span>
            <span onClick={this.typeTropic} className='submitbtn'>Tropics</span>
          </div>
        </div>
      </div>
    );
  }
}
