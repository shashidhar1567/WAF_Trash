"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Anu");
  const [email, setEmail] = useState("anu@example.com");
  const [age, setAge] = useState("20");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function testAPI() {
    setLoading(true);
    setOutput("");

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          age: Number(age),
        }),
      });

      const data = await response.json();

      setOutput(JSON.stringify(data, null, 2));
    } catch (error) {
      setOutput("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Student Registration</h1>
      <h2>Server-Side Validation Using Zod</h2>

      <div>
        <label>Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <br />

      <div>
        <label>Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <br />

      <div>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
      </div>

      <br />

      <button onClick={testAPI} disabled={loading}>
        {loading ? "Submitting..." : "Register Student"}
      </button>

      <br />
      <br />

      <pre>{output}</pre>
    </main>
  );
}