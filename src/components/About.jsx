import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const About = () => {
    return (
        <div className=" min-h-[70vh] px-4 sm:px-8 md:px-16 font-moranga text-gray-100 overflow-hidden">
            <div className="h-full w-full">
                
                <h2 className="text-center text-gray-300 text-base sm:text-lg md:text-sm mt-2 sm:mt-3 md:mt-4 lg:mt-[1vw] pb-4 sm:pb-5 md:pb-6 lg:pb-7 leading-none">
                    <span className="tracking-wide">Shaping ~ </span>
                    My Journey
                </h2>
            </div>

            {/* about me */}
            <div className="py-8 sm:py-10 md:py-12 w-full sm:w-[85%] md:w-[75%] text-center mx-auto text-gray-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-normal sm:leading-relaxed md:leading-snug lg:leading-[13vh]">
                <h1>
                    👋 Hii, I’m Rajid!
                    <br />
                    I am a passionate learner and aspiring
                    frontend web developer with a foundation in web development.
                    I’ve been on an exciting journey, honing my skills and
                    gaining practical experience.
                </h1>
            </div>
        </div>
    );
};

export default About;
