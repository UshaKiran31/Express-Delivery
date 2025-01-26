import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateShipment.css"; // Import the external CSS file

const CreateShipment = () => {
  const [selectedDetail, setSelectedDetail] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedDetail(e.target.value);
    if (e.target.value === "sender_information") {
      navigate("/sender-info");
    } else if (e.target.value === "receiver_information") {
      navigate("/receiver-info");
    } else if (e.target.value === "shipping") {
      navigate("/shipping");
    } else if (e.target.value === "payment") {
      navigate("/payment");
    }
  };

  return (
    <div className="shipment-container">
      <h2 className="shipment-title">Create Shipment Details</h2>
      <form className="shipment-form">
        <div>
          <label className="radio-label">
            <input
              type="radio"
              name="shipment_detail"
              value="sender_information"
              checked={selectedDetail === "sender_information"}
              onChange={handleRadioChange}
              className="radio-input"
            />
            Sender Information
          </label>
        </div>
        <div>
          <label className="radio-label">
            <input
              type="radio"
              name="shipment_detail"
              value="receiver_information"
              checked={selectedDetail === "receiver_information"}
              onChange={handleRadioChange}
              className="radio-input"
            />
            Receiver Information
          </label>
        </div>
        <div>
          <label className="radio-label">
            <input
              type="radio"
              name="shipment_detail"
              value="shipping"
              checked={selectedDetail === "shipping"}
              onChange={handleRadioChange}
              className="radio-input"
            />
            Shipping
          </label>
        </div>
        <div>
          <label className="radio-label">
            <input
              type="radio"
              name="shipment_detail"
              value="payment"
              checked={selectedDetail === "payment"}
              onChange={handleRadioChange}
              className="radio-input"
            />
            Payment
          </label>
        </div>
      </form>
    </div>
  );
};

export default CreateShipment;
