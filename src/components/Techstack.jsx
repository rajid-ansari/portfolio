import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import { Tooltip } from "react-tooltip";

const Techstack = () => {
    const style = {
        backgroundColor: "whitesmoke",
        color: "black",
        fontFamily: "Sans-serif",
        fontWeight: 600,
        borderRadius: "20px",
    };

    return (
        <div className="text-white-10 font-moranga px-4 sm:px-8 md:px-16 my-10 md:my-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6">Tools & Technology</h1>

            {/* techstack images */}
            <div className="w-full py-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
                {[{ id: "html-tt", src: html, alt: "HTML", tooltip: "HTML" },
                  { id: "css-tt", src: css, alt: "CSS", tooltip: "CSS" },
                  { id: "js-tt", src: js, alt: "JavaScript", tooltip: "JavaScript" },
                  { id: "react-tt", src: react, alt: "React Js", tooltip: "React" },
                  { id: "tailwind-tt", src: tailwind, alt: "Tailwind CSS", tooltip: "Tailwind CSS" },
                  { id: "git-tt", src: git, alt: "Git", tooltip: "Git" },
                  { id: "github-tt", src: github, alt: "Github", tooltip: "Github" },
                  { id: "redux-tt", src: redux, alt: "Redux Logo", tooltip: "Redux" }]
                  .map(({ id, src, alt, tooltip }) => (
                    <div
                        key={id}
                        data-tooltip-id={id}
                        data-tooltip-content={tooltip}
                        data-tooltip-place="top"
                        className="relative flex items-center justify-center"
                    >
                        <Tooltip id={id} style={style} />
                        <img
                            src={src}
                            alt={alt}
                            className="h-16 w-16 sm:h-20 sm:w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Techstack;
