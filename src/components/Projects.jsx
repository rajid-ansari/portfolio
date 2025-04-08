import { easeInOut, motion } from "framer-motion";
import React from "react";
import ochi from "../assets/ochi.png";
import works from "../assets/works.png";
import netflix from "../assets/netflix.png";
import sidcup from "../assets/sidcup.png";

const Projects = () => {
    return (
        <div className="min-h-screen px-4 md:px-16 py-5 overflow-x-hidden">
            <div className="flex items-center gap-2 mb-3 ml-2">
            <div className="h-2 w-2 rounded-full bg-gray-200 "></div>
            <h1 className="text-white-10 text-xl font-moranga">Projects</h1>
            </div>
            <div>
                <div className="h-[40vh] md:h-[58vh] w-full bg-black/90 mb-5 rounded-xl cursor-pointer relative group overflow-hidden bg-cover">
                    <ProjectsLink link="https://ui-ochi.netlify.app" />
                    <img
                        className="h-full w-full group-hover:hidden object-contain transition-all duration-[0.5s] ease-in-out"
                        src="https://ik.imagekit.io/vx7u9slhq/assets/ochi.png?updatedAt=1744104661403"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="h-[40vh] md:h-[58vh] w-full gap-5 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                <div className="bg-black/90 rounded-xl cursor-pointer relative overflow-hidden bg-cover group">
                    <ProjectsLink link="https://rajid-ansari.github.io/works-studio-ui/" />
                    <img className="h-full w-full group-hover:hidden object-contain transition-all duration-[0.5s] ease-in-out" src="https://ik.imagekit.io/vx7u9slhq/assets/works.png?updatedAt=1744104666765" alt="" loading="lazy" />
                </div>

                <div className="bg-black/90 rounded-xl cursor-pointer relative overflow-hidden bg-cover group">
                    <ProjectsLink link="https://rajid-ansari.github.io/netflix-ui-clone/" />
                    <img className="h-full object-contain group-hover:hidden transition-all duration-[0.5s] ease-in-out" src="https://ik.imagekit.io/vx7u9slhq/assets/netflix.png?updatedAt=1744104663272" alt="" loading="lazy" />
                </div>
            </div>

            <div className="h-[40vh] md:h-[58vh] w-full bg-black/90 mt-5 rounded-xl cursor-pointer relative overflow-hidden bg-cover group">
                <ProjectsLink link="https://rajid-ansari.github.io/sidcup-family-golf-UI/" />
                <img
                className="group-hover:hidden object-contain h-full w-full transition-all duration-[0.5s] ease-in-out"
                src="https://ik.imagekit.io/vx7u9slhq/assets/sidcup.png?updatedAt=1744104667683" alt="" loading="lazy" />
            </div>
        </div>
    );
};

export default Projects;

const ProjectsLink = ({ link }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            className='text-2xl text-white-10 font-["Neue_Montreal"] font-semibold underline text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-[0.5s] ease-out'
        >
            <button className="rounded-full py-2 px-4 md:py-[0.5vw] md:px-[1.5vw] bg-[#563D7C]">
                Click to Visit
            </button>
        </motion.a>
    );
};
