import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="relative flex items-center justify-center w-32 h-32">
        <div className="spin-cw absolute w-32 h-32 rounded-full border-4 border-transparent border-t-green-700 border-r-green-700"></div>

        <div className="spin-ccw absolute w-20 h-20 rounded-full border-4 border-transparent border-b-green-400 border-l-green-400"></div>

        <div className="w-3 h-3 rounded-full bg-white opacity-80"></div>
      </div>
    </div>
  );
};

export default Loading;
