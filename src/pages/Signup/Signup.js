import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Homepage";
import "../../styles/Signup.css";
import meal from "../../pictures/meal.jpg";
import { SignupRequest } from "./SignupFetch";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await SignupRequest(username, email, password, setUser);
    const blankUsername = "";
    const blankEmail = "";
    const blankPassword = "";

    setUsername("you");
    setEmail();
    setPassword();
  };
  return (
    <div className="main">
      <div className="navBar">
        <Navbar></Navbar>
      </div>
      <div className="body">
        <div className="leftBody">
          <img src={meal} />
        </div>
        <div className="rightBody">
          <h2>Signup</h2>
          <Input
            username={username}
            email={email}
            password={password}
            user={user}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setUser={setUser}
            submitHandler={submitHandler}
          ></Input>
        </div>
      </div>
    </div>
  );
};

const Input = ({ user, setUsername, setEmail, setPassword, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} className="inputBlock">
      <input
        placeholder="username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Signup</button>
      {/* <input placeholder="re-type password" type="password" /> */}
      <h1>{user ? `Welcome ${(user.username, user.email)}` : "No User"}</h1>
    </form>
  );
};
export default Signup;
