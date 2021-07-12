import React from "react";
import Details from "./Details";
import TrackerInput from "./TrackerInput";

export default function Tracker() {
  return (
    <div className="tracker">
      <h1 className="tracker-title">IP Address Tracker</h1>
      <TrackerInput />
      <Details />
    </div>
  );
}
