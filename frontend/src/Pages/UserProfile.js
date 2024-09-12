/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  const [profile, setProfile] = useState({
    name: "New User",
    email: "newuser@gmail.com",
    aboutMe: "",
    isDraft: false,
  });

  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveDraft = () => {
    setProfile({ ...profile, isDraft: true });
    setEditing(false);
  };

  const handleSubmit = () => {
    setProfile({ ...profile, isDraft: false });
    setEditing(false);
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={profile.name}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={profile.email}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">About Me</label>
          {editing ? (
            <textarea
              name="aboutMe"
              value={profile.aboutMe}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
            />
          ) : (
            <p>{profile.aboutMe || "No content available."}</p>
          )}
        </div>
        {editing ? (
          <>
            <button
              className="btn btn-secondary mb-2"
              onClick={handleSaveDraft}
            >
              Save as Draft
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          <button
            className="btn btn-outline-primary"
            onClick={() => setEditing(true)}
          >
            Edit About Me
          </button>
        )}
      </div>
      <Link
        className="btn btn-danger mt-3"
        onClick={() => alert("Logged out")}
        to="/"
      >
        Logout
      </Link>
    </div>
  );
}

export default UserProfile;
