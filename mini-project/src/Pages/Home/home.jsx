import Navbar from "../../Component/Navbar/navbar.jsx";

export default function LearningFromHome() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="grid grid-cols-2 gap-[60px] px-20 py-10 items-center 
        max-[900px]:grid-cols-1 max-[900px]:px-10">

        {/* Left side */}
        <div>
          <h1 className="text-[56px] font-extrabold leading-[1.1] mb-6 text-black">
            Learning <br /> From Home
          </h1>

          <p className="text-[#666] max-w-[420px] mb-8">
            Unlock your potential from the comfort of home with flexible,
            engaging online lessonss
          </p>

          <button className="px-8 py-3.5 rounded-full font-semibold 
            bg-gradient-to-r from-yellow-400 to-orange-400">
            Read More
          </button>

          <div className="flex gap-10 mt-12 text-black">
            <Stat value="350+" label="Subject Classes" />
            <Stat value="400+" label="Video Materials" />
            <Stat value="1500+" label="Happy Students" />
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex justify-center max-[900px]:mt-10">
          <div className="absolute w-[280px] h-[280px] bg-orange-300 
            rounded-[50%_0_0_0] top-[-40px] right-[-80px]" />

          <img
            src="home_image.png"
            alt="Student learning online"
            className="relative w-[380px] h-[380px] object-cover 
              rounded-[50%_50%_10%_50%] 
              shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          />
        </div>
      </main>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-[20px] font-bold">{value}</div>
      <div className="text-sm text-[#777]">{label}</div>
    </div>
  );
}
