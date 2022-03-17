import { Button } from "@material-ui/core";
import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();

  return (
    <div>
      {user.email}
      <Button color="primary" onClick={logOut}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
