import React, { useState } from "react";
import { useTracker } from "../TrackerContext.js";
import Toast, { showToast } from "../Toast";

export default function TrackerInput() {
  const [ip, setIP] = useState("");
  const { trackAddress, isLoading } = useTracker();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFetched = await trackAddress(ip);
    if (!isFetched) {
      showToast();
    }
    setIP("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="tracker-form">
      <Toast />
      <input
        value={ip}
        onChange={(e) => setIP(e.target.value)}
        className="tracker-input"
        placeholder="Search for any IP address or domain"
      />
      <button type="submit" className="tracker-submit" disabled={isLoading}>
        <i className="arrow right" />
      </button>
    </form>
  );
}
