// src/components/Signup.js
import React, { useState } from "react";
import { BASE_URL } from "../baseUrl";
import axios from "axios";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/admin/signup`, {
        username,
        password,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.error || "Signup failed. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
      <p>{message}</p>
    </div>
  );
}

export default Signup;
