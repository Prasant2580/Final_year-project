// import Navbar from "../../Component/Navbar/navbar.jsx";
// function AboutUs() {
//   return (
//     <div className="px-6 sm:px-10 py-10 font-sans">
//       <Navbar></Navbar>
//       <section>
//         {/* Hero Section */}
//         <div className="text-center mb-16 text-black">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-4">
//             Welcome to <span className="text-indigo-600">EDOX</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-sm sm:text-base">
//             An AI-based personalized e-learning platform that adapts to every
//             student’s learning needs and provides instant doubt resolution.
//           </p>
//         </div>

//         {/* Features Section */}
//         <div className="mb-16 text-black">
//           <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8">
//             Why Choose EDOX?
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Card */}
//             <div className="p-5 rounded-lg bg-gray-50 shadow-md 
//               transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
//               <h3 className="text-lg font-semibold mb-2">
//                 AI Personalized Learning
//               </h3>
//               <p className="text-sm sm:text-base">
//                 EDOX analyzes student performance and provides customized study
//                 plans for better learning outcomes.
//               </p>
//             </div>

//             <div className="p-5 rounded-lg bg-gray-50 shadow-md 
//               transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
//               <h3 className="text-lg font-semibold mb-2">Snap & Solve</h3>
//               <p className="text-sm sm:text-base">
//                 Students can upload images of questions and receive step-by-step
//                 solutions using OCR and AI.
//               </p>
//             </div>

//             <div className="p-5 rounded-lg bg-gray-50 shadow-md 
//               transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
//               <h3 className="text-lg font-semibold mb-2">Smart Dashboard</h3>
//               <p className="text-sm sm:text-base">
//                 Track progress, learning gaps, and performance analytics through
//                 an interactive dashboard.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="p-4 sm:p-6">
//           <div className="text-center p-8 sm:p-10 bg-indigo-50 rounded-lg 
//             border border-black transition-shadow duration-300 hover:shadow-lg">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-2">
//               Start Learning Smarter with EDOX
//             </h2>
//             <p className="mb-6 text-sm sm:text-base">
//               Experience the future of education with artificial intelligence.
//             </p>
//             <button
//               className="bg-indigo-600 text-white px-6 py-2 rounded-md 
//               font-medium transition-all duration-300 
//               hover:bg-indigo-700 hover:scale-105"
//             >
//               Join Now
//             </button>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="p-4 sm:p-6">
//           <div className="p-4 border-2 border-black rounded-lg bg-[#bfd2e5] 
//             shadow-md transition-shadow duration-300 hover:shadow-xl">
//             <h2 className="text-lg sm:text-xl font-semibold mb-3 text-center">
//               Our Team
//             </h2>
//             <ul className="list-disc list-inside text-sm sm:text-base">
//               <li>Project Lead – our mentor</li>
//               <li>Backend Developer – Ghost</li>
//               <li>Frontend Developer – Ishaa</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AboutUs;

import Navbar from "../../Component/Navbar/navbar.jsx";
export default function AboutUs() {
    return (
        <>
          <Navbar></Navbar>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">About our WEBSITE</h1>
            <div className="text-center mb-16 text-black">
         <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-indigo-600">EDOX</span>
          </h1>
           
        </div>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
               An AI-based personalized e-learning platform that adapts to every
            student’s learning needs and provides instant doubt resolution.
           
            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 pt-20">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <div className="py-10 border-b border-gray-200 md:py-0 md:border-r md:border-b-0 md:px-10">
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600"> AI Personalized Learning</h3>
                        <p className="text-sm text-slate-500"> 
                          EDOX analyzes student performance and provides customized study
                           plans for better learning outcomes.</p>
                    </div>
                </div>
                <div className="py-10 border-b border-gray-200 md:py-0 lg:border-r md:border-b-0 md:px-10">
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Snap & Solve</h3>
                        <p className="text-sm text-slate-500">
                          Students can upload images of questions and receive step-by-step
                          solutions using OCR and AI.
                        </p>
                    </div>
                </div>
                <div className="py-10 border-b border-gray-200 md:py-0 md:border-b-0 md:px-10">
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Learning Smarter</h3>
                        <p className="text-sm text-slate-500"> Experience the future of education with artificial intelligence.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
