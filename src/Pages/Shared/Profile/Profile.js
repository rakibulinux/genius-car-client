import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>I am {user?.displayName}</h1>
    </div>
  );
};

export default Profile;
