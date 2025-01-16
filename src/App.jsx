import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import FeedSection from "./pages/Feed";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                {/* <Route path="/aboutus" element={<AboutUs/>}/> */}
                <Route path="/feed" element={<FeedSection/>}/>
            </Routes>
        </Router>
    );
};

export default App;
