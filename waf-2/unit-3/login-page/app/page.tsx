
"use client";

import { useState } from "react";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const pattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

    if (!pattern.test(password)) {
      setMessage(
        "Password must have 8 characters, a letter, a number and a special character."
      );
    } else {
      setMessage("Login successful!");
    }
  }

  return (
    <main className="container">
      <div className="login-box">
        <h1>Welcome Back!</h1>
        <p>Login to your account</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="footer">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </main>
  );
}
