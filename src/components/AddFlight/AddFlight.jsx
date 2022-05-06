import React from "react";
import AllFlights from "../AllFlights/AllFlights";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
// let navigate = useNavigate();
class AddFlight extends React.Component {
  state = {
    newFlight: { airline: " ", airport: "DEN", flightNo: "", departs: "" },
    flights: [
      { airline: " he", airport: "DEN", flightNo: "ee", departs: "ee" },
    ],
  };

  handleChange = (e) => {
    this.setState((state) => {
      return {
        newFlight: {
          ...state.newFlight,
          [e.target.name]: e.target.value,
        },
      };
    });
  };
  handleClick = async (e) => {
    e.preventDefault();

    console.log(this.state.newFlight);
    try {
      const response = await fetch("/flights/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newFlight: this.state.newFlight,
        }),
      });
      console.log(response);
      let serverResponse = await response.json();
      this.setState({ flights: serverResponse });
    } catch (err) {
      console.log("Error:", err);
    }
  };
  render() {
    return (
      <div>
        <h2>Enter a new Flight information</h2>
        <br />
        <form onSubmit={this.handleClick}>
          <div className="flight-flex">
            <label>Airline: </label>
            <select
              className="select"
              name="airline"
              value={this.state.newFlight.airline}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="American">American</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>

            <br />
            <label>Airport: </label>
            <select
              className="select"
              name="airport"
              value={this.state.newFlight.airport}
              onChange={this.handleChange}
            >
              <option value="DEN">DEN</option>
              <option value="AUS">AUS</option>
              <option value="DFW">DFW</option>
              <option value="LAX">LAX</option>
              <option value="SAN">SAN</option>
            </select>
          </div>
          <br />
          <div className="flight-flex">
            <label>Flight Number: </label>
            <input
              type="text"
              name="flightNo"
              value={this.state.newFlight.flightNo}
              onChange={this.handleChange}
              required
            />

            <br />
            <label>Departs: </label>
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value={this.state.departs}
              onChange={this.handleChange}
              min="2022-04-07T00:00"
              max="2023-04-14T00:00"
            />
          </div>
          <br />
          <button className="btn" onClick={this.handleClick}>
            Submit
          </button>
        </form>
        <AllFlights flights={this.state.flights} />
      </div>
    );
  }
}

export default AddFlight;
