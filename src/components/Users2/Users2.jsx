import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);

  console.log("Users 2 Suspense Data Load", users);

  return (
    <div>
      <h2>Users 2 Suspense Data Load</h2>
    </div>
  );
};

export default Users2;
