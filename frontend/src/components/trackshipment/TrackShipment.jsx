
import React, { useState } from "react";
import "./TrackShipment.css"; // Import the CSS file

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentStatus, setShipmentStatus] = useState(null);

  const handleTrack = async () => {
    if (!trackingNumber) {
      alert("Please enter a tracking number.");
      return;
    }

    // Simulate an API call
    const mockResponse = {
      trackingNumber,
      status: "In Transit",
      estimatedDelivery: "2025-01-30",
      lastLocation: "New York, NY",
    };

    // Simulating a delay
    setTimeout(() => {
      setShipmentStatus(mockResponse);
    }, 1000);
  };

  return (
    <div className="container">
      <h1 className="title">Track Your Shipment</h1>
      <div className="form-container">
        <input
          type="text"
          className="input"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button className="button" onClick={handleTrack}>
          Track
        </button>
        {shipmentStatus && (
          <div className="status">
            <p><strong>Tracking Number:</strong> {shipmentStatus.trackingNumber}</p>
            <p><strong>Status:</strong> {shipmentStatus.status}</p>
            <p><strong>Estimated Delivery:</strong> {shipmentStatus.estimatedDelivery}</p>
            <p><strong>Last Location:</strong> {shipmentStatus.lastLocation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackShipment;
