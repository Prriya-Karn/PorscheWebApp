import React from "react";
import HeroSection from "./component/HeroSection";
import CarCards from "./pages/Home/CarCards";
import PorscheGrid from "./pages/Home/PorscheGrid";
import FindPorsche from "./pages/Home/FindPorsche";
import Discover from "./pages/Home/Discover";
import "./index.css";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Model from "./pages/ModelOverview/Model";
import TestCar from "./TestCar";
import Configure from "./pages/ModelOverview/Configure";




const App = () => {
    return (
        <Routes>
            <Route path="/car" element={<TestCar />} />
            <Route path="/" element={
                <div>
                    <HeroSection />
                    <CarCards />
                    <PorscheGrid />
                    <FindPorsche />
                    <Discover />
                    <Footer />
                </div>
            }
            />
            <Route path="/model/:title" element={<Model />} />
            <Route path="/configure" element = {<Configure />}/>
        </Routes>
    );
};

export default App;
