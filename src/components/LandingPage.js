import React from "react";
import first from "../images/test.jpg";
import second from "../images/test6.jpg";
import logo from "../images/logo1.jpg";
import test from "../images/test2.png";
import test1 from "../images/test5.jpg";
const landingPage = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center text-center "
        style={{ backgroundImage: `url(${test1})`, color: "#BCC6CC" }}
      >
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold mb-8 ">
            NO ONE KNOWS WHERE WE STARTED
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold mb-8 ">
            WHERE WE MAKE
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold mb-8 ">
            WHERE WE ARE GOING
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold mb-14 ">
            WE ARE KRYSS MOTORCYCLES
          </h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 fill-lime-400 animate-bounce "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/*  */}
      <div className="bg-black place-content-around h-screen flex justify-center items-center flex-col lg:flex-row sm:flex-col  ">
        <div
          className="flex flex-col"
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{ color: "#515A5A" }}
        >
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-6  sm:mb-8 lg:mb-12 ">
            WE DO NOT SIMPLY BUILD EV
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-6  sm:mb-8 lg:mb-12  ">
            WE CRAFT EMOTIONS...
          </h1>
          <h5 className="lg:text-2xl md:text-xl sm:text-3sm text-1xl  mb-4  sm:mb-8 lg:mb-8 ">
            WE LOOK INTO THE FUTURE AND BUILD EVs
          </h5>
          <h5 className="lg:text-2xl md:text-xl sm:text-sm text-1xl  mb-6  sm:mb-8 lg:mb-12 ">
            THAT WE ALL ARE GOING TO STEP AHEAD...
          </h5>
        </div>

        <div className=" text-white ">
          <img className="h-full rounded h-90 w-96" src={first} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="bg-black  flex flex-col justify-center items-center h-min sm:h-min lg:h-screen">
        <div className=" text-white  ">
          <img
            className="  scale-100 mb-10"
            data-aos="fade-up"
            data-aos-duration="3000"
            src={logo}
            alt=""
          />
        </div>

        {/* <h1
          className="lg:text-4xl md:text-2xl sm:text-1xl text-xl font-bold text-white mb-14  mt-20 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          DEDICATION + DISCIPLINE + PLANNING + SAVE NATURE + CRAFTING + WIN
          FORMULA
        </h1> */}
        <h1
          className="lg:text-4xl md:text-2xl sm:text-1xl text-xl font-bold text-white  bg-gradient-to-r from-indigo-600 to-pink-500 animate-bounce"
          data-aos="zoom-out-up"
          data-aos-duration="3000"
        >
          COMING SOON
        </h1>
      </div>
      {/*  */}
      <div className="container mx-auto bg-black place-content-around h-screen flex justify-center items-center flex-col lg:flex-row sm:flex-col ">
        <div
          className="flex flex-col "
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{ color: "#515A5A" }}
        >
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-6  sm:mb-8 lg:mb-12 ">
            WE PUT OUR SIGNATURE ON
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-6  sm:mb-8 lg:mb-12 ">
            EVERY KRYSS CRAFTED BY US...
          </h1>
          <h5 className="lg:text-2xl md:text-xl sm:text-3sm text-1xl   mb-4  sm:mb-8 lg:mb-8 ">
            DESERVES ON ROAD AND OFF-ROAD DRIVES, SCULPTURE MAKES
          </h5>
          <h5 className="lg:text-2xl md:text-xl sm:text-sm text-1xl   mb-4  sm:mb-8 lg:mb-8 ">
            ADRELINE RUSH, MAKES EVERY JOURNEY A REAL PLEASURE...
          </h5>
        </div>

        <div className=" text-white ">
          <img className="scale-70 rounded" src={second} alt="" />
        </div>
      </div>
      {/*  */}
      <div
        className=" bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${test})`, color: "#BCC6CC" }}
      >
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-14 ">
            WE STOP FOR NOTHING
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-14 ">
            WE GO ANYWHERE WE WANT
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-14 ">
            WE HAVE THE STRANGEST SHAPES,
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold  mb-14 ">
            SCULPTING THE MASTER PIECE...
          </h1>
        </div>
      </div>
      <div
        className="bg-black flex justify-center h-screen items-center "
        style={{ color: "#515A5A" }}
      >
        <h1
          className="lg:text-6xl md:text-4xl sm:text-3xl text-1xl font-bold   "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          WORLD IS SWITCHING TO <span className="text-lime-500">EV</span>
          ...WHERE IS YOUR <span className="text-lime-500">EV?</span>
        </h1>
      </div>
    </div>
  );
};

export default landingPage;
