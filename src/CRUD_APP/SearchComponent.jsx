/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import UserCart from "./UserCart";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserInfoSlice } from "./features/UserNote";

const SearchComponent = ({ user }) => {
   let  prevUserState=user;
  const [users, setUsers] = useState(user);
  const [keyword, setKeyword] = useState("");
	const dispatch=useDispatch();
  let UpdateUserList = UserInfoSlice.actions.UpdateUserList;
  
//   console.log(user);

// let ChangeHandler=(e)=>{
// 	let key=e.target.value;
// 	return user.filter((users) => {
// 		return (
// 			key.toLowerCase().includes(users.name)||
// 			key.toLowerCase().includes(users.userName)
// 	)
// 	})
// }

	const matchingUsers=(e) => {
		let keyword=e.target.value;
		console.log("🚀 ~ file: SearchComponent.jsx:32 ~ matchingUsers ~ keyword:", keyword)
		
		return users.filter((users) => {
			return (
        users.name.toLowerCase().includes(keyword) ||
        users.userName.toLowerCase().includes(keyword)
      );
	  
		})
	}
  let FilteredUser=(e)=>{
  
  e.preventDefault();
  console.log("🚀 ~ file: SearchComponent.jsx:47 ~ FilteredUser ~ matchingUsers:", matchingUsers(e))
  if(keyword.length>=0){
	  console.log(users);
	  setUsers([...matchingUsers(e)]);
	  dispatch(UpdateUserList(users));
  }else{
	  dispatch(UpdateUserList(user))
  }
 if(e.target.value.length===0)
      dispatch(UpdateUserList(prevUserState));
  
}
  return (
    <>
      <form onSubmit={FilteredUser}>
        <div className="search-component">
          <span>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            //   value={keyword}
						  onChange={(e) => {
						    // setKeyword(e.target.value)
						    FilteredUser(e);
						    }
						  }
              
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <button>Search</button>
          </span>
        </div>
      </form>
      {user && user.map((user) => {
            return (
              <div key={user.id}>
                <UserCart user={user} />
              </div>
            );
          })}
      {/* <UserCart user={user} /> */}
    </>
  );
};

export default SearchComponent;
