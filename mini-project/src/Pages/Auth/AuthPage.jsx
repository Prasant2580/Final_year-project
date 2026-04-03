import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import OTPVerification from "../components/OTPVerification";

export default function AuthPage() {
  const [view, setView] = useState("login");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md sm:max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-white">

        {view === "login" && (
          <Login
            switchToSignup={() => setView("signup")}
          />
        )}

        {view === "signup" && (
          <Signup
            switchToLogin={() => setView("login")}
            goToOTP={(email) => {
              setUserEmail(email);
              setView("otp");
            }}
          />
        )}

        {view === "otp" && (
          <OTPVerification
            email={userEmail}
            goBack={() => setView("signup")}
            goToLogin={() => setView("login")}
          />
        )}

      </div>
    </div>
  );
}
