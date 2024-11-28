import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import CardHolder from "../Guest/CardHolder";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const JetAnimation = () => {
    useEffect(() => {
        // Fighter Jet Animation
        gsap.to(".fighter-jet", {
          scrollTrigger: {
            trigger: ".scene",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
          motionPath: {
            path: "M.5 122.7s24.7-275 276.9 0c327.1 356.7 266.1-330.3 548-33.3 256.9 270.7 271.1 0 271.1 0",
            align: "self",
            autoRotate: true,
          },
        });
      

    // Cloud Animations
    gsap.to(".cloud", {
      scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      x: (i) => (i % 2 === 0 ? 500 : -500), // Alternate cloud movement
      opacity: 0,
    });

    gsap.to(".card-holder", {
        scrollTrigger: {
          trigger: ".scene",
          start: "top 150vh",  // When the top of the .scene hits 150vh
          end: "bottom 180vh", // When the bottom of the .scene hits 150vh
          scrub: true,         // Sync the animation with the scroll
        },
        opacity: 1,            // Fade in the CardHolder
        y: -50,                // Optional: Move it up if you want an effect
    });

  }, []);

  return (
    <>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-8xl text-white pt-48 z-20">
        Jet Animation
    </div>
    
    <div className="scene relative w-full min-h-[180vh] bg-black">
      {/* Fighter Jet */}
      <div className="fighter-jet fixed top-36 left-12 w-12 h-auto text-current z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="100"
          fill="gold"
        >
          <path d="M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z" />
        </svg>
      </div>
      {/* Clouds */}
      {Array(3)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className={`cloud absolute w-[12vw] h-auto fill-gold/50 ${
              i === 1 ? "top-[100vh] left-[15vw]" : i === 2 ? "top-[160vh] left-[70vw]" : "top-[5vh] left-[60vw]"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="100" fill="gold">
              <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z" />
            </svg>
          </div>
        ))}
    </div>

    </>
  );
};

export default JetAnimation;
