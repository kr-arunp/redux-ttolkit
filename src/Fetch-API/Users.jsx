/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./features/FetchUserSlice";
import UserCard from "./UserCart";
import { useState } from "react";

const Users = () => {
  const [isData, setIsData] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.FetchUsers.users);
  console.log("🚀 ~ file: Users.jsx:14 ~ Users ~ users:",users)
  
  let getUsers = () => {
    dispatch(getUserData());
    setIsData(!true);
  };
  return (
    <div>
      <button onClick={() => getUsers()}>getUserData</button>
      {!isData &&
        users &&
        users.map((user) => {
          return (
            <div key={user.id}>
            <UserCard user={user}/>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
