import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarPlus,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="navcontainer">
        <div className="nav">
          <Link to="/" className="links">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/addTrip" className="links">
            <FontAwesomeIcon icon={faCalendarPlus} />
          </Link>
          <Link to="/list" className="links">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Link>
        </div>
      </div>
    );
  }
}
