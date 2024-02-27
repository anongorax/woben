import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div class="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white">
      <h1 class="w-full text-3xl font-bold text-[#009dfa] m-4">Harshdeep S.</h1>
      <ul class="hidden md:flex">
        <li class="p-4 whitespace-nowrap">Home</li>
        <li class="p-4 whitespace-nowrap">Bio</li>
        <li class="p-4 whitespace-nowrap">Favourite Resources</li>
        <li class="p-4 whitespace-nowrap">Recommanded Resources</li>
        <li class="p-4 whitespace-nowrap">Contact Me</li>
      </ul>
      <div onClick={handleNav} class="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        class={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 class="w-full text-3xl font-bold text-[#009dfa] m-4">React.</h1>
        <ul class=" capitalize p-4">
          <li class="p-4 ">Home</li>
          <li class="p-4 ">Bio</li>
          <li class="p-4 ">Favourite Resources</li>
          <li class="p-4 ">Recommanded Resources</li>
          <li class="p-4 ">Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
