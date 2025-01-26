import React, { useState } from "react";
import "./Notifications.css"; // Import the CSS file

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Order Delivered",
      description: "Your order #12345 has been successfully delivered.",
      time: "2 hours ago",
      status: "unread",
    },
    {
      id: 2,
      title: "New Message",
      description: "You have a new message from customer support.",
      time: "1 day ago",
      status: "unread",
    },
    {
      id: 3,
      title: "Promotion",
      description: "Get 20% off on your next order! Offer expires soon.",
      time: "3 days ago",
      status: "read",
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, status: "read" }
          : notification
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-container">
      <h1 className="notifications-title">Notifications</h1>

      <div className="notifications-list">
        {notifications.length > 0 ? (
          <div>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${
                  notification.status === "unread"
                    ? "notification-unread"
                    : "notification-read"
                }`}
              >
                <div className="notification-header">
                  <h2
                    className={`notification-title ${
                      notification.status === "unread"
                        ? "text-bold"
                        : "text-normal"
                    }`}
                  >
                    {notification.title}
                  </h2>
                  {notification.status === "unread" && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="mark-read-button"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
                <p className="notification-description">
                  {notification.description}
                </p>
                <p className="notification-time">{notification.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-notifications">No notifications available.</p>
        )}
      </div>

      {notifications.length > 0 && (
        <button
          onClick={clearNotifications}
          className="clear-button"
        >
          Clear All Notifications
        </button>
      )}
    </div>
  );
};

export default Notifications;
