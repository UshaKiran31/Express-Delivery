import React, { useState } from "react";
import CreateShipment from "../CreateShipment";
import "./Shipping.css"; // Import the CSS file

const ShippingDetails = () => {
  const [shippingDetails, setShippingDetails] = useState({
    weight: 0.0,
    weightUnit: "lb",
    length: 0.0,
    width: 0.0,
    height: 0.0,
    dimensionUnit: "inch",
    isWorldwide: true,
    countryOfOrigin: "",
    hsCode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCreateShipment = () => {
    console.log("Shipping Details Submitted:", shippingDetails);
  };

  return (
    <div>
      <CreateShipment />
      <div className="container">
        <h2 className="header">Shipping</h2>
        <form className="form">
          <div className="form-group">
            <label>Weight</label>
            <div className="form-group-row">
              <input
                type="number"
                name="weight"
                value={shippingDetails.weight}
                onChange={handleChange}
                placeholder="Enter weight"
                className="input"
              />
              <select
                name="weightUnit"
                value={shippingDetails.weightUnit}
                onChange={handleChange}
                className="input"
              >
                <option value="lb">lb</option>
                <option value="kg">kg</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Parcel Size</label>
            <div className="form-group-row">
              <input
                type="number"
                name="length"
                value={shippingDetails.length}
                onChange={handleChange}
                placeholder="Length"
                className="input"
              />
              <input
                type="number"
                name="width"
                value={shippingDetails.width}
                onChange={handleChange}
                placeholder="Width"
                className="input"
              />
              <input
                type="number"
                name="height"
                value={shippingDetails.height}
                onChange={handleChange}
                placeholder="Height"
                className="input"
              />
              <select
                name="dimensionUnit"
                value={shippingDetails.dimensionUnit}
                onChange={handleChange}
                className="input"
              >
                <option value="inch">inch</option>
                <option value="cm">cm</option>
              </select>
            </div>
          </div>

          <div className="form-group-checkbox">
            <input
              type="checkbox"
              name="isWorldwide"
              checked={shippingDetails.isWorldwide}
              onChange={handleChange}
              className="checkbox"
            />
            <label>This product is available worldwide</label>
          </div>

          <h3 className="subheader">Worldwide Shipping Information</h3>

          <div className="form-group">
            <label>Country/Region of Origin</label>
            <input
              type="text"
              name="countryOfOrigin"
              value={shippingDetails.countryOfOrigin}
              onChange={handleChange}
              placeholder="Enter region of origin"
              className="input"
            />
          </div>

          <div className="form-group">
            <label>HS (Harmonized System) Code</label>
            <input
              type="text"
              name="hsCode"
              value={shippingDetails.hsCode}
              onChange={handleChange}
              placeholder="Search (product keyword/code)"
              className="input"
            />
          </div>

          <button
            type="button"
            onClick={handleCreateShipment}
            className="button"
          >
            Create Shipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingDetails;
