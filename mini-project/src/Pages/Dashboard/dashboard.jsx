import { Search, Bell, ChevronRight, Pointer } from "lucide-react";
import Calendar from "./Calendar";
import Navbar from "../../Component/Navbar/navbar.jsx";


export default function Dashboard() {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-[#F5F6FA] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-600 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Edox</h1>
        <nav className="space-y-4">
            <nav className="space-y-2 text-sm">
  <a
    href="#"
    className="block px-4 py-2 rounded-lg text-white font-medium
               hover:bg-black transition"

  >🏠 Dashboard
  </a>
  

  <a
    href="#"
    className="block px-4 py-2 rounded-lg text-white font-medium
               hover:bg-black transition"
  >
   📚 All Courses
  </a>

  <a
    href="#"
    className="block px-4 py-2 rounded-lg text-white font-medium
               hover:bg-black transition"
  >
   💬 Messages
  </a>

  <a
    href="#"
    className="block px-4 py-2 rounded-lg text-white font-medium
               hover:bg-black transition"
  >
    👩🏻‍🏫Friends
  </a>
</nav>
        </nav>
        <div class="p-4 mt-auto border-t">
        <div className="mt-auto text-xm "> ⚙️Settings</div>
        <br></br>
        <div class="mt-auto text-xs">
          <ul>
            <a href="#">🌐</a>
            <a href="#">🌐</a>
            <a href="#">🌐</a>
            <a href="#">🌐</a>
          </ul>
        </div>
        <div class="p-4 text-xs text-black text-opacity-25">Design by Isha ✨ </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 grid grid-cols-12 gap-6">
        {/* Center */}
        <section className="col-span-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-black font-semibold"> ☰ My Courses</h2>
            <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition" />
<Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition" />
            </div>
          </div>
<select class=" text-black border-2 border-indigo-600 text-sm border-2 border-indigo-600 text-sm ml-2 mr-4 mt-6 mb-8">
  <option>Sem</option>
  <option>1st</option>
  <option>2nd</option>
   <option>3rd</option>
  <option>4th</option>
  <option>5th</option>
</select>
<select  class="text-black border-2 border-indigo-600 text-sm ml-2 mr-4 mt-6 mb-8">
  <option>Language</option>
  <option>Bengali</option>
  <option>English</option>
</select>
          <div className="space-y-4 text-black">
            <CourseCard
              title="Operating System"
              description="Learn the basic operating system abstractions, mechanisms, and their implementations."
              author="teacher1"
              color="bg-indigo-100"
              image="os.png"
            />
            <CourseCard
              title="Image Processing"
              description="Learn the basic operating system abstractions, mechanisms, and their implementations."
              author="teacher1"
              color="bg-indigo-100"
              image="ab.png"
            />
            <CourseCard
              title="Artificial Intelligence"
              description="Understand how machines mimic natural intelligence."
              author="teacher2"
              color="bg-purple-100"
              image="ai.png"
            />
            <CourseCard
              title="Software Engineering"
              description="Learn detailed engineering processes for software."
              author="Teacher3"
              color="bg-pink-100"
              image="se.png"
            />
          </div>
        </section>

        {/* Right Panel */}
    
        <aside className="col-span-4 space-y-6 text-black">
            <aside className="col-span-4 space-y-6">
  <Calendar></Calendar>
</aside>
{/* <aside className="col-span-4 space-y-6">
  <Body></Body>
</aside> */}

          <div className="bg-white rounded-2xl p-4">
<h3 className="font-semibold mb-4">Online Users</h3>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<img
src="https://i.pravatar.cc/40?img=1"
alt="Maren Maureen"
className="w-8 h-8 rounded-full object-cover"
/>
<span>Isha Mahato</span>
</li>
<li className="flex items-center gap-3">
<img
src="https://i.pravatar.cc/40?img=2"
alt="Jennifer Jane"
className="w-8 h-8 rounded-full object-cover"
/>
<span>Moumita Patel</span>
</li>
<li className="flex items-center gap-3">
<img
src="https://i.pravatar.cc/40?img=3"
alt="Ryan Herwinds"
className="w-8 h-8 rounded-full object-cover"
/>
<span>Dhrian Basu</span>
</li>
<li className="flex items-center gap-3">
<img
src="https://i.pravatar.cc/40?img=4"
alt="Kierra Culhane"
className="w-8 h-8 rounded-full object-cover"
/>
<span>Esha Mahato</span>
</li>
</ul>
</div>
<div className="object-bottom-right">
<p className="flex items-center gap-3 ">
<img
src="https://i.pravatar.cc/40?img=2"
alt="img"
className="w-8 h-8 rounded-full object-cover "
/>
<span>A Patel</span>
</p>
</div>
        </aside>
      </main>
    </div>
    </>
  );
}
function CourseCard({ title, description, author, color, image }) {
  return (
    <div
      className={`rounded-2xl p-5 flex items-center justify-between gap-4 ${color}`}
    >
      {/* Left image + content */}
      <div className="flex items-center gap-4">
        {/* Course image */}
        <img
          src={image}
          alt={title}
          className="w-16 h-16 rounded-xl object-cover"
        />

        {/* Text */}
        
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {description}
          </p>
          <span className="text-xs text-gray-500">
            Created by {author}
          </span>
        </div>
      </div>

      {/* Right arrow */}

      <button class="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500">➤</button>
    </div>
    
  );
}



