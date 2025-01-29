"use client";

import React from "react";

const TopNavbar = () => {
  return (
    <div className="sticky top-0 w-full bg-gray-800 text-white text-center py-2 z-50">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl">My Portfolio</h1>
        <div>
          <a
            href="https://nazirali007.github.io/Portfolio/NazirResume.pdf"
            download="Nazir_Ali_Siddiqui_Resume.pdf"
          >
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
