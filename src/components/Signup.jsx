import { useState } from "react";

export default function Signup({ onSignup, goLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSignup({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white">
      <form onSubmit={submit} className="bg-dark2 p-8 rounded w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign up for Spotify
        </h1>

        <input
          className="w-full p-2 mb-3 bg-black border border-gray-700 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 mb-4 bg-black border border-gray-700 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-spotify text-black py-2 rounded font-bold">
          Sign Up
        </button>

        <p
          onClick={goLogin}
          className="text-sm text-gray-400 mt-4 text-center cursor-pointer hover:underline"
        >
          Already have an account? Log in
        </p>
      </form>
    </div>
  );
}
