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
        <div className="text-white-10 font-moranga px-16 my-20">
            <h1 className="text-4xl">Skilled In -</h1>

            {/* techstack images */}
            <div className="w-full py-4 flex flex-wrap items-center gap-2">
                <div
                    data-tooltip-id="html-tt"
                    data-tooltip-content="HTML"
                    data-tooltip-place="top"
                >
                    <Tooltip id="html-tt" style={style} />
                    <img
                        src={html}
                        alt="HTML"
                        className="h-20 w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                    />
                </div>

                <div>
                    <div
                        data-tooltip-id="css-tt"
                        data-tooltip-content="CSS"
                        data-tooltip-place="top"
                    >
                        <Tooltip id="css-tt" style={style} />
                        <img
                            src={css}
                            alt="CSS"
                            className="h-20 w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                        />
                    </div>
                </div>

                <div>
                    <div
                        data-tooltip-id="js-tt"
                        data-tooltip-content="JavaScript"
                        data-tooltip-place="top"
                    >
                        <Tooltip id="js-tt" style={style} />
                        <img
                            src={js}
                            alt="JavaScript"
                            className="h-20 w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                        />
                    </div>
                </div>

                <div>
                    <div
                        data-tooltip-id="react-tt"
                        data-tooltip-content="React"
                        data-tooltip-place="top"
                    >
                        <Tooltip id="react-tt" style={style} />
                        <img
                            src={react}
                            alt="React Js"
                            className="h-20 w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                        />
                    </div>
                </div>

                <div>
                    <div
                        data-tooltip-id="tailwind-tt"
                        data-tooltip-content="Tailwind CSS"
                        data-tooltip-place="top"
                    >
                        <Tooltip id="tailwind-tt" style={style} />
                        <img
                            src={tailwind}
                            alt="Tailwind CSS"
                            className="h-20 w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                        />
                    </div>
                </div>

                <div>
                    <div
                        data-tooltip-id="git-tt"
                        data-tooltip-content="Git"
                        data-tooltip-place="top"
                    >
                        <Tooltip id="git-tt" style={style} />
                        <img
                            src={git}
                            alt="Git"
                            className="h-20 w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                        />
                    </div>
                </div>

                <div>
                    <div
                        data-tooltip-id="github-tt"
                        data-tooltip-content="Github"
                        data-tooltip-place="top"
                    >
                        <Tooltip id="github-tt" style={style} />
                        <img
                            src={github}
                            alt="Github"
                            className="h-20 w-20 object-contain object-center cursor-pointer hover:scale-110 transition-all duration-200 ease-in"
                        />
                    </div>
                </div>

                <div className="relative h-[73px] w-[73px] bg-gradient-to-b from-white to-gray-300 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 ease-in">
                    <div
                        data-tooltip-id="redux-tt"
                        data-tooltip-content="Redux"
                        data-tooltip-place="top"
                    >
                        <Tooltip id="redux-tt" style={style} />
                        <img
                            src={redux}
                            alt="Redux Logo"
                            className="h-16 w-16 object-contain object-center cursor-pointer "
                        />
                        {/* Shiny effect */}
                        <span className="absolute top-0 left-0 w-6 h-6 bg-white opacity-30 blur-md rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Techstack;
