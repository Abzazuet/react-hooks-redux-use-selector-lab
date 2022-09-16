import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";
function Users() {
  const users = useSelector((state) => state.users)
  return (
    <div>
      <ul>
       Total Users: {users.length}
        {users.map(user => <h1>{user.username}</h1>)}
        
      </ul>
    </div>
  );
}

export default Users;
