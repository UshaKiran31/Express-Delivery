import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [deliveryPreferences, setDeliveryPreferences] = useState({
    safePlace: "Front Porch",
    deliveryWindow: "9 AM - 5 PM",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    deliveryUpdates: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeliveryPreferenceChange = (e) => {
    const { name, value } = e.target;
    setDeliveryPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password updated successfully!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleDeliveryPreferencesSubmit = (e) => {
    e.preventDefault();
    alert("Delivery preferences updated successfully!");
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Parcel Delivery Settings</h1>
      <div className="settings-content">

        {/* Profile Settings */}
        <section className="settings-section">
          <h2 className="settings-section-title">Profile Settings</h2>
          <form onSubmit={handleProfileSubmit} className="settings-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleProfileChange}
              />
            </div>
            <button type="submit" className="button-primary">
              Update Profile
            </button>
          </form>
        </section>

        {/* Password Settings */}
        <section className="settings-section">
          <h2 className="settings-section-title">Change Password</h2>
          <form onSubmit={handlePasswordSubmit} className="settings-form">
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="button-primary">
              Change Password
            </button>
          </form>
        </section>

        {/* Delivery Preferences */}
        <section className="settings-section">
          <h2 className="settings-section-title">Delivery Preferences</h2>
          <form onSubmit={handleDeliveryPreferencesSubmit} className="settings-form">
            <div className="form-group">
              <label>Preferred Safe Place</label>
              <input
                type="text"
                name="safePlace"
                value={deliveryPreferences.safePlace}
                onChange={handleDeliveryPreferenceChange}
              />
            </div>
            <div className="form-group">
              <label>Preferred Delivery Window</label>
              <select
                name="deliveryWindow"
                value={deliveryPreferences.deliveryWindow}
                onChange={handleDeliveryPreferenceChange}
              >
                <option value="9 AM - 12 PM">9 AM - 12 PM</option>
                <option value="12 PM - 3 PM">12 PM - 3 PM</option>
                <option value="3 PM - 6 PM">3 PM - 6 PM</option>
                <option value="6 PM - 9 PM">6 PM - 9 PM</option>
              </select>
            </div>
            <button type="submit" className="button-primary">
              Update Delivery Preferences
            </button>
          </form>
        </section>

        {/* Notification Preferences */}
        <section className="settings-section">
          <h2 className="settings-section-title">Notification Preferences</h2>
          <div className="settings-notifications">
            <div className="form-group">
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
              />
              <label>Email Notifications</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationChange}
              />
              <label>SMS Notifications</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="push"
                checked={notifications.push}
                onChange={handleNotificationChange}
              />
              <label>Push Notifications</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="deliveryUpdates"
                checked={notifications.deliveryUpdates}
                onChange={handleNotificationChange}
              />
              <label>Delivery Updates</label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
