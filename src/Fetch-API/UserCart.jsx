/** @format */

import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-image">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className="user-details">
        <h2>{user.login}</h2>
        <p>ID: {user.id}</p>
        <p>Type: {user.type}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
