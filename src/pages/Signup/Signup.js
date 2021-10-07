import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Index";
import "../../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main">
      <div className="navBar">
        <Navbar></Navbar>
      </div>
      <div className="body">
        <div className="leftBody">Image</div>
        <div className="rightBody">
          <h2>Signup</h2>
          <Input
            email={email}
            password={password}
            user={user}
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

const Input = ({ setUser, setEmail, setPassword, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} className="inputBlock">
      <input
        placeholder="username"
        type="text"
        onChange={(e) => setUser(e.target.value)}
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
    </form>
  );
};
export default Signup;
