import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import React from "react";
import AllFlights from "./components/AllFlights/AllFlights";
import AddFlight from "./components/AddFlight/AddFlight";
import ShowFlight from "./components/ShowFlight/ShowFlight";
class App extends React.Component {
  // navigate = useNavigate();
  // goTo = () => {
  //   this.navigate("/index");
  // };
  render() {
    return (
      <div className="App">
        <br />
        <nav className="nav">
          <Link to="flights/create">Add Flight</Link>
          <Link to="flights/show">All Flights</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to Flights</h1>} />
          <Route path="flights/show" element={<AllFlights />} />
          <Route path="flights/create" element={<AddFlight />} />
          <Route path="flights/show/:id" element={<ShowFlight />} />
        </Routes>
      </div>
    );
  }
}

export default App;
