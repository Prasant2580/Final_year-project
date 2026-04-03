import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-[20px] text-black">
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md">
          ED
        </div>
        Edox - An AI Based e-learning Platfrom
      </div>

      {/* Nav Links */}
      <nav className="flex gap-8 text-sm font-medium">
        <Link to="/Home" className="text-black no-underline">Home</Link>
        <Link to="/DashBoard" className="text-black no-underline">Dashboard</Link>
        <Link to="/ScanSolve" className="text-black no-underline">Snap & Solve</Link>
        <Link to="/AboutUs" className="text-black no-underline">About Edox</Link>
        <Link to="/Contact" className="text-black no-underline">Contact</Link>
        <Link to="/About_Student" className="text-black no-underline">Account</Link>
      </nav>
    </header>
  );
}
