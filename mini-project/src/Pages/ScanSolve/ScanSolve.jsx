import Navbar from "../../Component/Navbar/navbar.jsx";

export default function ScanSolve() {
  return (
    <>
    <Navbar ></Navbar>
    <section  class="qr" className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:40px_40px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        
        <div>
          <p className="text-sm tracking-widest uppercase text-purple-300 mb-4">
            Here you get answers by scanning your result
          </p>

          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            <span className="text-pink-400">Snap & Solve</span>
            <br />
           <div className="text-xs"> You can upload images of questions and receive step-by-step
                solutions using OCR and AI.
            </div>
          </h1>
          <p className="text-purple-200 ">
            <div className="input-box text-sm tracking-widest uppercase text-purple-300 mb-4 ">
                <label> Ask Anything:-</label>
                <input type="text" className="field-mess px-6 py-6" placeholder="your answer" required></input>
            </div>
          </p>
          

          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 font-semibold shadow-lg hover:scale-105 transition">
            Upload here
          </button>
          <br></br> <br></br>
                <br></br>
          <p className="text-purple-200 ">
            <div className="input-box text-sm tracking-widest uppercase text-purple-300 mb-4 ">
                <label> Solution:</label>
                <input type="text" className="field-mess px-6 py-6" placeholder="your answer" required></input>
            </div>
          </p>

          {/* Social icons */}
          {/* <div className="flex gap-4 mt-10 text-purple-300">
            <span className="hover:text-white cursor-pointer">Fb</span>
            <span className="hover:text-white cursor-pointer">Tw</span>
            <span className="hover:text-white cursor-pointer">In</span>
          </div> */}
        </div>

  
        <div className="relative flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-purple-500/40 blur-3xl rounded-full" />
          <div className="relative w-64 h-[420px] rounded-3xl bg-gradient-to-b from-gray-900 to-black shadow-2xl border border-white/10 rotate-[-12deg]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-800 rounded-full" />
            <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-lg grid grid-cols-5 grid-rows-5 gap-1 p-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      Math.random() > 0.5 ? "bg-black" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

