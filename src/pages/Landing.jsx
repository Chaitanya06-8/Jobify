import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.png";
import Navbar from "../components/shared/Navbar";
import PopularCategory from "../components/Home Page/PopularCategory";
import HowWorks from "../components/Home Page/HowWorks";
import Team from "../components/Home Page/Team";
import Brands from "../components/Home Page/Brands";
import Testimonial from "../components/Home Page/Testimonial";

const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef}>
                <div className="hero-content">
                    <div className="text-content">
                        <h1>
                            Get Your <span className="fancy ">Dream Job </span> 
                            Today <span className="fancy">!</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Illo perferendis dignissimos eligendi voluptas
                            exercitationem, eius aut mollitia quasi nisi
                            voluptatem similique, tempore totam, odit
                            repellendus non. Dolores eos animi recusandae.
                        </p>
                        <div className="btn-grp">
                            <Link className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                             focus:ring-blue-300 font-medium rounded-lg text-md px-7 py-4 text-center me-2 mb-2 dark:border-blue-500
                             dark:text-blue-500 dark:hover:text-white
                              dark:hover:bg-blue-500 dark:focus:ring-blue-800" to="/all-jobs">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </Wrapper>
            <div>
            <PopularCategory/>
            <HowWorks/>
            <Team/>
            <Testimonial/>
            <Brands/>
            </div>
        </>
    );
};

export default Landing;
