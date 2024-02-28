import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3  gap-8 text-gray-300">
      <div>
        <h1 class="w-full text-3xl font-bold text-[#009dfa]">Harshdeep S.</h1>
        <p className="py-4">
          Lorenm ipsum is a cool set of text that is very impressive now it is
          widely used every where in the dummy text, people find it useful for
          creativity of the paragraph, Okay so now im ending this paragraph.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-10">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytic</li>
            <li className="py-2 text-sm"> Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insight</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Analytic</li>
            <li className="py-2 text-sm"> Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insight</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Pricing</h6>
          <ul>
            <li className="py-2 text-sm">Analytic</li>
            <li className="py-2 text-sm"> Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insight</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Guides</h6>
          <ul>
            <li className="py-2 text-sm">Analytic</li>
            <li className="py-2 text-sm"> Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insight</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
