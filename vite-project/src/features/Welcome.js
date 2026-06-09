import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../features/auth/authSlice";
import { Link } from "react-router-dom";

import React from "react";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const welcome = user ? `Welcome ${user}!` : "WelCome!";
  const tokenAbbr = `${token?.slice(0, 20)}...`;
  return (
    
      <section className="welcome">
        <h1>{welcome}</h1>
        <h1>{tokenAbbr}</h1>
        <p><Link to="/userlist">User List</Link></p>
      </section>
  );
};

export default Welcome;
