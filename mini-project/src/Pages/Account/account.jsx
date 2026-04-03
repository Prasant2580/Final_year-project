import Navbar from "../../Component/Navbar/navbar.jsx";
export default function About_Student(){
    return(
        <>
        <Navbar></Navbar>
        <div className="bg-white text-black rounded-2xl p-4 w-full overflow-x-auto">
            <h1 className="text-3xl font-bold mb-4">this page in maintence mode </h1>            
        </div>
        </>
    );
}




// // import { useState, useEffect } from "react";
// // import Navbar from "../components/Navbar";

//  export default function About_Student() {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");

//   useEffect(() => {
//     const storedName = localStorage.getItem("studentName");
//     const storedImage = localStorage.getItem("profileImage");

//     if (storedName) setName(storedName);
//     if (storedImage) setImage(storedImage);
//   }, []);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         localStorage.setItem("profileImage", reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       {/* <Navbar /> */}

//       <div style={{ padding: "40px", textAlign: "center" }}>
//         <h2>Student Profile</h2>

//         {/* Profile Image */}
//         <div>
//           <img
//             src={image || "https://via.placeholder.com/150"}
//             alt="Profile"
//             style={{
//               width: "150px",
//               height: "150px",
//               borderRadius: "50%",
//               objectFit: "cover",
//               marginBottom: "20px"
//             }}
//           />
//         </div>

//         {/* Upload Button */}
//         <input type="file" onChange={handleImageUpload} />

//         {/* Name */}
//         <h3 style={{ marginTop: "20px" }}>👤 {name}</h3>
//       </div>
//     </>
//   );
// }

