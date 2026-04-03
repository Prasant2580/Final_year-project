import { useState } from "react";

export default function Login({ switchToSignup }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button className="w-full py-3 rounded-lg bg-linear-to-r from-pink-500 to-purple-500 hover:scale-105 transition">
          Sign In
        </button>
      </form>

      <p className="text-sm text-center mt-6">
        Don’t have an account?{" "}
        <button
          onClick={switchToSignup}
          className="text-pink-400 hover:underline"
        >
          Sign Up
        </button>
      </p>
    </>
  );
}
