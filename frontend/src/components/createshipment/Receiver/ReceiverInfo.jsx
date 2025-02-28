// ReceiverInfo.jsx
import  { useState } from "react";
import axios from "axios";
import CreateShipment from "../CreateShipment";
import "./ReceiverInfo.css";

const ReceiverInfo = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: {
      country_region: "",
      state: "",
      flat_house_building: "",
      area_street_sector_village: "",
      landmarks: "",
      town_city: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.address) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/receivers/", formData);
      console.log("Receiver created:", response.data);
      alert("Receiver information saved successfully!");
      onSubmitSuccess("payment"); // Move to Payment
    } catch (error) {
      console.error("Error creating receiver:", error);
      alert("Failed to save receiver information.");
    }
  };

  return (
    <div className="receiver-info-container">
      <CreateShipment />
      <div className="form-container">
        <h2 className="form-title">Receiver Information</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-grid">
            <div>
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone"
                className="form-input"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Mail"
              className="form-input"
            />
          </div>
          <h3 className="form-subtitle">Address</h3>
          <div className="form-grid">
            <div>
              <label className="form-label">Country/Region</label>
              <input
                type="text"
                name="country_region"
                value={formData.address.country_region}
                onChange={handleChange}
                placeholder="Country/Region"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">State</label>
              <input
                type="text"
                name="state"
                value={formData.address.state}
                onChange={handleChange}
                placeholder="State"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Flat, House no., Building, Company, Apartment</label>
              <input
                type="text"
                name="flat_house_building"
                value={formData.address.flat_house_building}
                onChange={handleChange}
                placeholder="Enter Address"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Area, Street, Sector, Village</label>
              <input
                type="text"
                name="area_street_sector_village"
                value={formData.address.area_street_sector_village}
                onChange={handleChange}
                placeholder="Enter Area"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Landmarks</label>
              <input
                type="text"
                name="landmarks"
                value={formData.address.landmarks}
                onChange={handleChange}
                placeholder="Enter Landmarks"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Town/City</label>
              <input
                type="text"
                name="town_city"
                value={formData.address.town_city}
                onChange={handleChange}
                placeholder="Enter Town/City"
                className="form-input"
              />
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