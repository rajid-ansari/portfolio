import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <div>
//                 <Navbar />
//                 <Hero />
//                 <Projects />
//                 <Footer />
//             </div>
//         ),
//     },
//     {
//         path: "/about",
//         element: (
//             <div>
//                 <Navbar />
//                 <About />
//                 <Footer />
//             </div>
//         ),
//     },
//     {
//         path: "/contact",
//         element: (
//             <div>
//                 <Navbar />
//                 <Contact />
//                 <Footer />
//             </div>
//         ),
//     },
// ]);

const App = () => {
    const locomotiveScroll = new LocomotiveScroll();

    return (
        <>
            <MouseTrail strokeColor="purple" lineWidthStart={15} />
            {/* <RouterProvider router={router} /> */}
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </>
    );
};

export default App;
