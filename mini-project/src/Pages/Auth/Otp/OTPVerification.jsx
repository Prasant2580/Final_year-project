import { useState } from "react";

export default function OTPVerification({ email, goBack, goToLogin }) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP for", email, ":", otp);
    goToLogin();
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center">
        OTP Verification
      </h2>

      <p className="text-center text-sm text-purple-200 mb-6">
        Enter the 6-digit code sent to {email}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full text-center tracking-widest px-4 py-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button className="w-full py-3 rounded-lg bg-linear-to-r from-pink-500 to-purple-500 hover:scale-105 transition">
          Verify OTP
        </button>

        <button
          type="button"
          onClick={goBack}
          className="w-full text-sm text-purple-300 hover:text-white"
        >
          Go Back
        </button>
      </form>
    </>
  );
}
