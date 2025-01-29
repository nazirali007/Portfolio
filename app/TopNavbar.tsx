"use client";

import React from "react";

const TopNavbar = () => {
  return (
    <div className="sticky top-0 w-full bg-gray-800 text-white text-center py-2 z-50">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl">My Portfolio</h1>
        <div>
          {/* <a href="/resume.pdf" download="Nazir_Ali_Siddiqui_Resume.pdf">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Download Resume
            </button>
          </a> */}
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Nazir_Ali_Siddiqui_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
