import React from "react";
class ShowFlight extends React.Component {
  state = {
    flights: [],
  };
  async componentDidMount() {
    try {
      let fetchOrdersResponse = await fetch("/flights/:id/destinations");

      if (!fetchOrdersResponse.ok) throw new Error("Couldn't fetch fligths");
      let flights = await fetchOrdersResponse.json();
      this.setState({ flights: flights });
      console.log("flights", this.state.flights);
    } catch (err) {
      console.error("ERROR:", err);
    }
  }
  async handleClick(e) {
    e.preventDefault();
    try {
      const response = await fetch("/flights/:id/destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flights: this.state.flights,
        }),
      });
      console.log(response);
      let serverResponse = await response.json();
      this.setState({ flights: serverResponse });
    } catch (err) {
      console.log("Error:", err);
    }
  }
  render() {
    return (
      <div>
        {flights && (
          <li>
            {fligths.airport},{flights.airline},{flights.departs},
            {flights.flightNo},{flights.arrival}
            <input
              type="text"
              name="destinatoin"
              placeholder="destination"
              onChange={(e) => e.target.value}
              value={flights}
            />
            <button onClick={this.handleClick}>Save</button>
          </li>
        )}
      </div>
    );
  }
}
export default ShowFlight;
