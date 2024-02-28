import React from "react";

function NewsLetter() {
  return (
    <div className=" w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips and tricks to optimize growth
          </h1>
          <p>Singup to our News Letter and stay up to date.</p>
        </div>
        <div className="my-4 ">
          <div className="flex  flex-col  sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button class="bg-[#009dfa] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care bout your privacy, so don't worry!{" "}
            <span className="text-[#009dfa]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
