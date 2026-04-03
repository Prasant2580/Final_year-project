import { useState } from "react";

export default function Signup({ switchToLogin, goToOTP }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    goToOTP(form.email);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

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

        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition">
          Sign Up
        </button>
      </form>

      <p className="text-sm text-center mt-6">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-pink-400 hover:underline"
        >
          Login
        </button>
      </p>
    </>
  );
}
