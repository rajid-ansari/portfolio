import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import heroPic from "../assets/hero_pic.jpg";
import ContactForm from "./ContactForm";
import { MdMessage } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Hero = () => {
    const [formVisibility, setFormVisibility] = useState(false);

    const handleFormVisibility = () => {
        console.log(formVisibility);
        setFormVisibility((prev) => !prev);
    };

    return (
        <div className="min-h-[84vh] px-4 md:px-16 overflow-x-hidden font-moranga">
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
                    <img
                        src={heroPic}
                        className="object-center h-full w-full object-cover"
                    />
                </div>
            </div>
            {/* contact form */}
            {formVisibility && (
                <motion.div 
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{ease: easeIn, duration: 0.5}}
                className="h-[80vh] w-[80vw] z-10 fixed top-28 left-44 grid place-content-center">
                    <ContactForm />
                </motion.div>
            )}

            {/* contact form visibility btn*/}

            <button
                onClick={handleFormVisibility}
                className="fixed h-[50px] w-[50px] right-4 top-1/2 bg-[#3B82F6] text-white-10 font-moranga  rounded-full flex items-center justify-center transition-all duration-100 ease-out z-10"
            >
                {formVisibility ? <ImCross size={25} title="Cancel" /> : <MdMessage size={30} title="Contact" />}
            </button>
        </div>
    );
};

export default Hero;
