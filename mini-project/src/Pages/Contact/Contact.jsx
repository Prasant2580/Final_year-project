import Navbar from "../../Component/Navbar/navbar.jsx";
function Contact() {
  return (
    <>
    <Navbar></Navbar>
    <div className="flex justify-center items-center min-h-screen px-4 bg-[#F5F6FA]">
      <form
        className="w-full max-w-[600px] bg-white 
        px-6 pt-6 pb-8 rounded-lg 
        shadow-md text-gray-700"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Contact Us
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block font-medium">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 px-4 py-3 
            border-2 border-gray-300 rounded-md 
            outline-none text-base 
            focus:border-indigo-500 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-3 
            border-2 border-gray-300 rounded-md 
            outline-none text-base 
            focus:border-indigo-500 transition"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block font-medium">Message</label>
          <textarea
            placeholder="Write your message"
            className="w-full mt-2 px-4 py-3 h-[120px]
            border-2 border-gray-300 rounded-md 
            outline-none resize-none text-base 
            focus:border-indigo-500 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-[35%] h-10 bg-indigo-500 
          text-white rounded-md font-medium 
          shadow-md transition-all duration-300
          hover:bg-indigo-600 hover:scale-105"
        >
          Send
        </button>
      </form>
    </div>
    </>
  );
}

export default Contact;
