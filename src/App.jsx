import React, { useState, useEffect, useRef, Fragment } from "react";
import HeroSection from "./component/HeroSection";
import CarCards from "./pages/Home/CarCards";
import PorscheGrid from "./pages/Home/PorscheGrid";
import FindPorsche from "./pages/Home/FindPorsche";
import Discover from "./pages/Home/Discover";
import "./index.css";
import Footer from "./component/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Model from "./pages/ModelOverview/Model";
import TestCar from "./TestCar";
import Configure from "./pages/ModelOverview/Configure";
import Navbar from "./component/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Wishlist from "./pages/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";

const App = () => {
  const [isPorscheGridVisible, setIsPorscheGridVisible] = useState(false);
  const gridRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100,
      once: true,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPorscheGridVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.9,
        rootMargin: "0px 0px -150px 0px",
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }


    const checkVisibility = () => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
        setIsPorscheGridVisible(isVisible);
      }
    };

    checkVisibility();

    window.addEventListener("scroll", checkVisibility); // fallback for fast nav
    window.addEventListener("resize", checkVisibility);

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [location.pathname]);

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    <div
      className={`transition-colors duration-200 ease-in-out ${
        isPorscheGridVisible ? "bg-black" : "bg-white"
      }`}
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

              {/* PorscheGrid section */}
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
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/compare/:variant" element={<Compare />} />
      </Routes>

      <Footer />
    </div>
    </Fragment>
  );
};

export default App;
