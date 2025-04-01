import { motion } from "framer-motion";
import React from "react";
import heroPf from "../assets/hero_pf.png";
import About from "./About";

const Hero = () => {
    return (
        <div className="h-[84vh] px-4 md:px-16 overflow-x-hidden font-moranga">
            <div className="h-full w-full py-8 flex items-center justify-center flex-col gap-3">
                <motion.h1
                    initial={{ opacity: 0, x: "-200px" }}
                    animate={{ opacity: 1, x: "0px" }}
                    transition={{ ease: "easeOut", delay: 1, duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-6xl leading-none px-4 text-gray-100 mb-3 font-semibold capitalize text-center"
                >
                    who am i
                </motion.h1>

                <div className="h-[80%] md:h-full w-full sm:w-[95%] md:w-[70%] overflow-hidden px-4 rounded-3xl">
                    <img src={heroPf} className="object-center h-full w-full object-cover" />
                </div>
            </div>

            {/* About section */}

            {/* <About /> */}

        </div>
    );
};

export default Hero;
