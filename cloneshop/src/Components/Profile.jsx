import React from "react";
import "../Pages.css";

function Profile() {
  return (
    <div className="page profile">
      <h2 className="section-title">👤 User Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> Karthik Korukonda</p>
        <p><strong>Email:</strong> karthik@example.com</p>
        <p><strong>Joined:</strong> March 2023</p>
      </div>
    </div>
  );
}

export default Profile;
