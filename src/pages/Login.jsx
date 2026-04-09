import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email == "" && password == "") {
        alert("all field are required.!!");
      } else {
        const res = await axios.get(
          `http://localhost:3000/users?email=${email}&password=${password}`,
        );

        const users = res.data;
        // console.log(res.data)
        if (users.length > 0) {
          const loginUser = users[0];
          // console.log(loginUser);
          localStorage.setItem("readIndiaUser", JSON.stringify(loginUser));
        } else {
          console.log("Icorrect email and password.!");
        }
        alert("Login successfully.!!");
        navigate("/");
      }
    } catch (error) {
      console.log("Faild to login user.!!", error);
    }
  };
  return (
    <div>
      <div className="input-group">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
        <span>
          Create an account?<Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
