import React from "react";
import CreateShipment from "../CreateShipment";
import "./ReceiverInfo.css"; // Import the external CSS file

const ReceiverInfo = () => {
  return (
    <div className="receiver-info-container">
      <CreateShipment />
      <div className="form-container">
        <h2 className="form-title">Receiver Information</h2>
        <form>
          <div className="form-grid">
            <div>
              <label className="form-label">Name</label>
              <input type="text" placeholder="Enter Name" className="form-input" />
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <input type="text" placeholder="Enter Phone" className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Mail</label>
            <input type="email" placeholder="Enter Mail" className="form-input" />
          </div>
          <h3 className="form-subtitle">Address</h3>
          <div className="form-grid">
            <div>
              <label className="form-label">Country/Region</label>
              <input type="text" placeholder="Country/Region" className="form-input" />
            </div>
            <div>
              <label className="form-label">State</label>
              <input type="text" placeholder="State" className="form-input" />
            </div>
            <div>
              <label className="form-label">Flat, House no., Building, Company, Apartment</label>
              <input type="text" placeholder="Enter Address" className="form-input" />
            </div>
            <div>
              <label className="form-label">Area, Street, Sector, Village</label>
              <input type="text" placeholder="Enter Area" className="form-input" />
            </div>
            <div>
              <label className="form-label">Landmarks</label>
              <input type="text" placeholder="Enter Landmarks" className="form-input" />
            </div>
            <div>
              <label className="form-label">Town/City</label>
              <input type="text" placeholder="Enter Town/City" className="form-input" />
            </div>
          </div>
          <div className="form-checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" className="form-checkbox" />
              <span className="checkbox-text">Make this my default address</span>
            </label>
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReceiverInfo;
