// src/components/Login.js
import React, { useState } from "react";
import { BASE_URL } from "../baseUrl";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    // console.log("username: " + username + " password: " + password);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/admin/login`,
        { username, password },
        { withCredentials: true } // include cookies
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.error || "Login failed. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
