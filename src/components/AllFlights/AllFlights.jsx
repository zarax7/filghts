import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

class AllFlights extends React.Component {
  state = {
    flightHistory: [],
  };

  async componentDidMount() {
    try {
      let fetchOrdersResponse = await fetch("/flights/show");

      if (!fetchOrdersResponse.ok) throw new Error("Couldn't fetch fligths");
      let flights = await fetchOrdersResponse.json();
      // this.state.flightHistory.push(flights);
      this.setState({ flightHistory: flights });
      console.log("flights", this.state.flightHistory);
    } catch (err) {
      console.log(err);
      console.error("ERROR:", err);
    }
  }
  navigate = useNavigate();
  handleClick = () => {
    this.navigate("flights/show/:id");
  };
  render() {
    return (
      <div>
        {this.state.flightHistory &&
          this.state.flightHistory.map((flight) => {
            <li key={flight.airline + flight.flightNo}>
              {flight.airline}, {flight.airport}, {flight.flightNo},
              {flight.departs}
              <button onClick={handleClick}>Details</button>
            </li>;
          })}
      </div>
    );
  }
}
export default AllFlights;
