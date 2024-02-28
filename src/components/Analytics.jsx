import React from "react";
import Laptop from "../assets/laptop.jpg";
function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#009dfa] font-bold">Data Analytic Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytic Centrally
          </h1>
          <p>
            Lorenm ipsum is a cool set of text that is very impressive now it is
            widely used every where in the dummy text, people find it useful for
            creativity of the paragraph, Okay so now im ending this paragraph.
          </p>
          <button class="bg-black text-[#009dfa] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
