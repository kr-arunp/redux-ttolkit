/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoSlice } from "./features/UserNote";
import { useState } from "react";
import UserCart from "./UserCart";
import SearchComponent from "./SearchComponent";
const UserNote = () => {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserAge, setUserAge] = useState("");
  const UserList = useSelector((state) => state.Users.value);
  console.log("🚀 ~ file: UserNote.jsx:14 ~ UserNote ~ UserList:", UserList);
  const dispatch = useDispatch();
  let { AddUser } = UserInfoSlice.actions;

  const isIdUnique = (UserName) => {
    return UserList.some((user) => user.userName === UserName);
  };
  let AddUserHandler = (e) => {
    e.preventDefault();
    if (!isIdUnique(UserName)) {
      dispatch(
        AddUser({
          id: UserList[UserList.length - 1].id + 1,
          name: Name,
          userName: UserName,
          age: UserAge,
        })
      );
    } else {
      alert(`User ID ${UserName} is already taken`);
      console.log(`User ID ${UserName} is already taken.`);
    }
    setName("");
    setUserName("");
  };
  return (
    <>
      <div>
        <div className="AddUser">
          <div className="User">
            <form onSubmit={AddUserHandler}>
              <input
                type="text"
                placeholder="Your Name..."
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Your Age..."
                value={UserAge}
                onChange={(e) => {
                  if (e.target.value <= 100 && e.target.value != 0) {
                    setUserAge(e.target.value);
                  }
                }}
                required
              />
              <input
                type="text"
                placeholder="Your UserName..."
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <button>Add User</button>
            </form>
          </div>
        </div>

        <div
          className="DisplayList"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            marginTop: "4vh",
            gap: "1rem",
          }}
        >
          <SearchComponent user={UserList} />
          {/* {UserList.map((user) => {
            return (
              <div key={user.id}>
                <UserCart user={user} />
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default UserNote;
