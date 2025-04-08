import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import heroPic from "../assets/hero_pic.jpg";
import ContactForm from "./ContactForm";
import { MdMessage } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Hero = () => {
    const [formVisibility, setFormVisibility] = useState(false);

    const handleFormVisibility = () => {
        setFormVisibility((prev) => !prev);
    };

    return (
        <div className="min-h-[84vh] px-4 sm:px-8 md:px-16 overflow-x-hidden font-moranga relative">
            <div className="h-full w-full py-4 sm:py-6 md:py-8 flex items-center justify-center flex-col gap-3">
                <motion.h1
                    initial={{ opacity: 0, x: "-200px" }}
                    animate={{ opacity: 1, x: "0px" }}
                    transition={{ ease: "easeOut", delay: 1, duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight sm:leading-none px-2 sm:px-4 text-gray-100 mb-2 sm:mb-3 font-semibold capitalize text-center"
                >
                    who am i
                </motion.h1>

                <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] overflow-hidden px-2 sm:px-4 rounded-2xl sm:rounded-3xl">
                    <img
                        src="https://ik.imagekit.io/vx7u9slhq/assets/hero_pic.jpg?updatedAt=1744104662803"
                        alt="Hero"
                        className="object-center h-full w-full object-cover"
                        loading="eager"
                    />
                </div>
            </div>

            {/* contact form */}
            {formVisibility && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ease: easeIn, duration: 0.5 }}
                    className="fixed inset-0 z-10 flex items-center justify-center px-4 sm:px-6 md:px-8"
                >
                    <div className="w-full max-w-md">
                        <ContactForm />
                    </div>
                </motion.div>
            )}

            {/* contact form visibility btn*/}
            <button
                onClick={handleFormVisibility}
                className="fixed h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 bg-[#3B82F6] text-white-10 font-moranga rounded-full flex items-center justify-center transition-all duration-200 ease-out z-20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                {formVisibility ? (
                    <ImCross
                        size={20}
                        className="sm:text-[22px] md:text-[25px]"
                        title="Cancel"
                    />
                ) : (
                    <MdMessage
                        size={24}
                        className="sm:text-[27px] md:text-[30px]"
                        title="Contact"
                    />
                )}
            </button>
        </div>
    );
};

export default Hero;
