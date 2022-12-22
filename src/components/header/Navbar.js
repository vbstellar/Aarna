import React from "react";
import Logo from "../../Assets/ARNA-LOGO.png";

export default function Navbar() {
  return (
    <div classname="font-semibold">
      <img
        src={Logo}
        alt="aarna logo"
        className="w-[202px] inline mx-[100px] my-[30px] cursor-pointer"
        href="localhost:3000"
      />
      <a
        href="/"
        className="ml-[100px] mr-4 text-lg font-semibold hover:text-gray-500"
      >
        Home{" "}
      </a>
      <a href="/" className="m-4 text-lg font-semibold hover:text-gray-500">
        Aboutus
      </a>
      <a href="/" className="m-4 text-lg font-semibold hover:text-gray-500">
        Department
      </a>
      <a href="/" className="m-4 text-lg font-semibold hover:text-gray-500">
        Services
      </a>
      <a href="/" className="m-4 text-lg font-semibold hover:text-gray-500">
        Doctors
      </a>
      <a href="/" className="m-4 text-lg font-semibold hover:text-gray-500">
        Contactus
      </a>

      <button class="rounded border-white border-2 ml-[200px] mt-[15px] text-white bg-[#e91e63] p-2 hover:bg-gray-500">
        Appointment
      </button>
    </div>
  );
}
