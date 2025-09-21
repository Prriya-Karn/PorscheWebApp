import React, { useEffect, Fragment } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import Wishlist from "./pages/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

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

      {/* Full page flex container */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Routes will expand to fill space */}
        <div className="flex-grow">
          <Routes>
            <Route path="/car/:title" element={<TestCar />} />
            <Route
              path="/"
              element={
                <div>
                  <HeroSection />
                  <CarCards />
                  <PorscheGrid />
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
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
