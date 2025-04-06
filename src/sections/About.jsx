import React from "react";

function About() {
    return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/public/images/yopPixel.gif" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext"> Hi, I'm Nacho!</p>
                        <p className="grid-subtext">With my experience, I've honed my skills in Software and Videogame Development</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;