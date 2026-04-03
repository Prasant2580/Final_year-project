import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import AboutUs from "../Pages/About/AboutUs.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import ScanSolve from "../Pages/ScanSolve/ScanSolve.jsx";
import AboutStudent from "../Pages/Account/account.jsx";

export default function Approutes() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path = "/DashBoard" element={<Dashboard/>}/>
                <Route path = "/AboutUs" element={<AboutUs/>}/>
                <Route path = "/Contact" element={<Contact/>}/>
                <Route path = "/ScanSolve" element={<ScanSolve/>}/>
                <Route path = "/About_Student" element={<AboutStudent/>}/>

            </Routes>
        </BrowserRouter>
    );
}