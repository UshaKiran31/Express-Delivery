import { useState } from "react";
import axios from "axios";
import CreateShipment from "../CreateShipment";
import "./Shipping.css";

const ShippingDetails = ({ onSubmitSuccess }) => {
  const [packageDetails, setPackageDetails] = useState({
    weight: "", // Weight in kilograms
    dimensions: "", // Dimensions in "LxWxH cm" format
    package_type: "", // Type of package (e.g., Box, Envelope)
    time_slot: "Morning", // Default time slot
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageDetails({
      ...packageDetails,
      [name]: value,
    });
  };

  const handleCreateShipment = async () => {
    try {
      // Convert dimensions to the required format (e.g., "30x20x15 cm")
      const dimensions = `${packageDetails.length}x${packageDetails.width}x${packageDetails.height} cm`;

      // Prepare the payload
      const payload = {
        weight: parseFloat(packageDetails.weight), // Convert to float
        dimensions: dimensions,
        package_type: packageDetails.package_type,
        time_slot: packageDetails.time_slot,
      };

      // Send the data to the Django backend
      const response = await axios.post("http://127.0.0.1:8000/api/packages/", payload);
      console.log("Package created:", response.data);
      alert("Package details saved successfully!");
      onSubmitSuccess("payment"); // Move to Payment
    } catch (error) {
      console.error("Error creating package:", error);
      alert("Failed to save package details.");
    }
  };

  return (
    <div>
      <CreateShipment />
      <div className="container">
        <h2 className="header">Shipping</h2>
        <form className="form">
          {/* Weight */}
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={packageDetails.weight}
              onChange={handleChange}
              placeholder="Enter weight in kilograms"
              className="input"
            />
          </div>

          {/* Dimensions */}
          <div className="form-group">
            <label>Dimensions (L x W x H in cm)</label>
            <div className="form-group-row">
              <input
                type="number"
                name="length"
                value={packageDetails.length || ""}
                onChange={handleChange}
                placeholder="Length"
                className="input"
              />
              <input
                type="number"
                name="width"
                value={packageDetails.width || ""}
                onChange={handleChange}
                placeholder="Width"
                className="input"
              />
              <input
                type="number"
                name="height"
                value={packageDetails.height || ""}
                onChange={handleChange}
                placeholder="Height"
                className="input"
              />
            </div>
          </div>

          {/* Package Type */}
          <div className="form-group">
            <label>Package Type</label>
            <input
              type="text"
              name="package_type"
              value={packageDetails.package_type}
              onChange={handleChange}
              placeholder="Enter package type (e.g., Box, Envelope)"
              className="input"
            />
          </div>

          {/* Time Slot */}
          <div className="form-group">
            <label>Delivery Time Slot</label>
            <select
              name="time_slot"
              value={packageDetails.time_slot}
              onChange={handleChange}
              className="input"
            >
              <option value="Morning">Morning (8 AM - 12 PM)</option>
              <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="Evening">Evening (4 PM - 8 PM)</option>
            </select>
          </div>

          {/* Submit Button */}
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