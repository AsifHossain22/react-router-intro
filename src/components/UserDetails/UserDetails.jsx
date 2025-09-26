import React from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId);

  //   const params = useParams();
  //   console.log(params.userId);

  return (
    <div>
      <h3>User Details</h3>
    </div>
  );
};

export default UserDetails;
