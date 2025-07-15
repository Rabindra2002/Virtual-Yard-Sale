//import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AddListing from "./pages/AddListing"; // Impimport EditProfile from "./pages/EditProfile";ort AddListing component
import "./styles/styles.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BrowseAll from "./pages/BrowseAll";
import { ToastContainer } from "react-toastify";//import toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import UserProfile from "./user/UserProfile";
import Vehicle from "./Categories/Vehicle";
// import { FaBookSkull } from "react-icons/fa6";
import Books from "./Categories/Books";
import Antique from "./Categories/Antique";
import HouseGoods from "./Categories/HouseGoods";
import Musical from "./Categories/Musicals";
import Toys from "./Categories/Toys";
import Apparel from "./Categories/Apparel";
import Sporting from "./Categories/Sporting";
import Furniture from "./Categories/Furniture";
import Electronics from "./Categories/Electronics";
import Mumbai from "./Location_wise/Mumbai";
import Mahalaxmi from "./Location_wise/Mahalaxmi";
import Mira from "./Location_wise/Mira";
import Dadar from "./Location_wise/Dadar";
import Bandra from "./Location_wise/Bandra";
import Boriwali from "./Location_wise/Boriwali";
import Virar from "./Location_wise/Virar";
import SellingItems from "./Sell_Buy/SellingItems";
import ListingDetails from "./Sell_Buy/ListingDetails";
import ListItems from "./Sell_Buy/ListItems";
import BuyingPage from "./Sell_Buy/BuyingPage";
// import ResetPassword from "./user/ResetPassword";
import FeaturePage from "./pages/FeaturePage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQPage from "./pages/FAQPage";
import TermsOfService from "./pages/TermsOfService";


const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  // const [user, setUser] = useState("");
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <SideBar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <div className="content-wrapper">
          <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
        <div className={`main-content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<div> <Home/></div>} />
            <Route path="/add-listing" element={<AddListing />} />
            <Route path="/browse-all" element={<BrowseAll searchQuery={searchQuery}/>} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/reset-password/:token" element={<ResetPassword/>} /> */}

            <Route path="/signup" element={<SignUp />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/sellingitems" element={<SellingItems />} />
            <Route path="/listitems" element={<ListItems />} />
            <Route path="/listing/:id" element={<ListingDetails/>}/>
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/books" element={<Books/>} />
            <Route path="/antique" element={<Antique />} />
            <Route path="/homegoods" element={<HouseGoods/>} />
            <Route path="/musical" element={<Musical />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="/sporting" element={<Sporting />} />
            <Route path="/furniture" element={<Furniture/>} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/mumbai" element={<Mumbai/>}/>
            <Route path="/mahalaxmi" element={<Mahalaxmi/>}/>
            <Route path="/mira" element={<Mira/>}/>
            <Route path="/dadar" element={<Dadar/>}/>
            <Route path="/bandra" element={<Bandra/>}/>
            <Route path="/boriwali" element={<Boriwali/>}/>
            <Route path="/virar" element={<Virar/>}/>
            <Route path="/buy" element={<BuyingPage/>}/>
            <Route path="/feature" element={<FeaturePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/policy" element={<PrivacyPolicy/>}/>
            <Route path="/FAQ" element={<FAQPage/>}/>
            <Route path="/terms" element={<TermsOfService/>}/>
          </Routes>
          <Footer/>
        </div>
        
        </div>
    </Router>
  );
};

export default App;
