import React from "react";
import "./DeliveryHistory.css"; // Import the external CSS file

const DeliveryHistory = () => {
  // Mock delivery data
  const deliveries = [
    {
      id: 1,
      recipient: "John Doe",
      address: "123 Main St, New York, NY",
      date: "2025-01-20",
      status: "Delivered",
    },
    {
      id: 2,
      recipient: "Jane Smith",
      address: "456 Elm St, Los Angeles, CA",
      date: "2025-01-18",
      status: "In Transit",
    },
    {
      id: 3,
      recipient: "Michael Johnson",
      address: "789 Pine St, Chicago, IL",
      date: "2025-01-15",
      status: "Delayed",
    },
  ];

  return (
    <div className="delivery-history-container">
      <h1 className="delivery-history-title">Delivery History</h1>
      <div className="delivery-history-card">
        {deliveries.length > 0 ? (
          <table className="delivery-history-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Recipient</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td>{delivery.id}</td>
                  <td>{delivery.recipient}</td>
                  <td>{delivery.address}</td>
                  <td>{delivery.date}</td>
                  <td className={`status-${delivery.status.replace(" ", "-").toLowerCase()}`}>
                    {delivery.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="delivery-history-empty">No delivery history available.</p>
        )}
      </div>
    </div>
  );
};

export default DeliveryHistory;
