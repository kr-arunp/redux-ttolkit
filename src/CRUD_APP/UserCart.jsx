/** @format */

import React, { useState } from "react";
import "./UserCard.css";
import { useDispatch } from "react-redux";
import { UserInfoSlice } from "./features/UserNote";
const UserCart = ({ user }) => {
  const [NewUserID, setNewUserID] = useState("");
  const dispatch = useDispatch();
  let DeleteUser = UserInfoSlice.actions.DeleteUser;
  let UpdateUserName = UserInfoSlice.actions.UpdateUserName;
  

  const deleteUser = (user) => {
        return dispatch(DeleteUser({ id: user.id }));
  };
   const UpdateUser = (user) => {
     return dispatch(UpdateUserName({ id: user.id, userName: NewUserID }));
   };
  return (
    <>
      <div className="container">
        <div className="cart blue">
          <div className="user">
            <div className="user-name">Name: {user.name}</div>
            <div className="user-age">Age:{user.age}</div>
            <div className="user-username">User-ID: @{user.userName}</div>
            <input
              type="text"
              placeholder="Change User-ID..."
              value={NewUserID}
              onChange={(e) => setNewUserID(e.target.value)}
            />
            <button onClick={() => UpdateUser(user,NewUserID)}>
              New UserId
            </button>
            <span className="deleteBtn">
              <button onClick={() => deleteUser(user)}>Delete User</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCart;
