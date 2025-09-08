import React, { useState, useEffect, useRef } from "react";
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
import Navbar from "./component/Navbar";

const App = () => {
    const [isPorscheGridVisible, setIsPorscheGridVisible] = useState(false);
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsPorscheGridVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => {
            if (gridRef.current) {
                observer.unobserve(gridRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`transition-colors duration-1000 ease-in-out ${isPorscheGridVisible ? "bg-black" : "bg-white"}`}
        >

            <Navbar />

            <Routes>
                <Route path="/car/:title" element={<TestCar />} />
                <Route
                    path="/"
                    element={
                        <div>
                            <HeroSection />
                            <CarCards />
                            {/* attach ref here */}
                            <div ref={gridRef}>
                                <PorscheGrid isPorscheGridVisible={isPorscheGridVisible} />
                            </div>
                            <FindPorsche />
                            <Discover />
                            
                        </div>
                    }
                />
                <Route path="/model/:title" element={<Model />} />
                <Route path="/configure" element={<Configure />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
