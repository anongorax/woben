import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div class="text-white">
      <div class="max-w-[880px] mt-[90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p class="text-[#009dfa] font-bold p-2">Growing with Data Analytic</p>
        <h1 class="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data
        </h1>
        <div class="flex justify-center items-center">
          <p class="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, Flexible, Financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p class="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your business growth by consuming our services.
        </p>
        <button class="bg-[#009dfa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
