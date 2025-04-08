import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="h-auto w-full font-moranga pt-10 pb-12 px-4 md:px-16 flex flex-col justify-between ">
            <hr />
            <h2 className="text-center text-gray-300 font-semibold mb-4 md:mb-2 md:mt-3 text-3xl md:text-5xl p-2">
                Social ~
            </h2>
            <div className="grid grid-cols-3 w-fit mx-auto grid-rows-1 gap-5 md:gap-6">
                <a
                    href="https://www.instagram.com/rajidansari_01"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="h-10 w-10 md:h-[5vh] md:w-[5vh] rounded-full flex items-center justify-center ">
                        <img src="https://ik.imagekit.io/vx7u9slhq/assets/ig_logo.png?updatedAt=1744104660306" alt="" />
                    </button>
                </a>
                <a
                    href="https://www.linkedin.com/in/rajidansari"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="h-10 w-10 md:h-[5vh] md:w-[5vh] rounded-full flex items-center justify-center text-[#2c5ebb] hover:text-[#3d58b1d0]">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt=""
                        />
                    </button>
                </a>
                <a
                    href="https://www.github.com/rajid-ansari"
                    target="_blank"
                    // rel="noopener noreferrer"
                >
                    <button className="h-10 w-10 md:h-[5vh] md:w-[5vh] rounded-full flex items-center justify-center">
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png"
                            alt=""
                        />
                    </button>
                </a>
            </div>
            <p className="text-gray-300 leading-none mx-auto mt-12">Made with 🤍</p>
        </div>
    );
};

export default Footer;
