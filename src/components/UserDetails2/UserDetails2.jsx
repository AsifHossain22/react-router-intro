import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const { name, username } = use(userPromise);

  return (
    <div>
      {/* <h2>This is User Details 2</h2> */}
      <p>
        <small>User Name: {username}</small>
      </p>
      <p>{name}</p>
    </div>
  );
};

export default UserDetails2;
