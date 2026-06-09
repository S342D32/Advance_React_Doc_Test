import React from "react";

const sample = () => {
  return (
    <div className="flex justify-center gap-4 p-4">
      <div className="p-4 bg-gray-500  border border-2 rounded-lg w-88 h-140  bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 ">
        <span className="flex justify-center text-gray-300 text-2xl font-bold font-serif">
          CASIO
        </span>
        <div className="border-2 rounded-lg h-16 mx-3 mt-4 flex justify-end items-center bg-yellow-100">
          <span className="text-6xl justify-end-start"> 0</span>
        </div>

        <div className="flex justify-between rounded-lg h-8 mx-3 mt-8 ">
          <div className="border-2 border-red-600 p-4 w-15 bg-red-300 text-red-600 font-medium rounded-lg flex justify-center items-center">
            Prev
          </div>
          <div className="border-2 border-cyan-600 p-4 w-15 bg-cyan-300 text-cyan-600 font-medium rounded-lg flex justify-center items-center">
            Next
          </div>
          <div className="border-2 border-yellow-600 p-4 w-15 bg-yellow-200 text-yellow-600 font-medium rounded-lg flex justify-center items-center">
            Reset
          </div>
          <div className="border-2 border-gray-300 p-4 w-15 bg-green-600 text-white font-medium rounded-lg flex justify-center items-center">
            Start
          </div>
        </div>
        <div className="flex justify-between rounded-lg h-8 mx-3 mt-8 ">
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            1
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            2
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            3
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            =
          </div>
        </div>
        <div className="flex justify-between rounded-lg h-8 mx-3 mt-8 ">
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            4
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            5
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            6
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            +
          </div>
        </div>
        <div className="flex justify-between rounded-lg h-8 mx-3 mt-8 ">
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            7
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            8
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            9
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            -
          </div>
        </div>
        <div className="flex justify-between rounded-lg h-8 mx-3 mt-8 ">
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            .
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            0
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            #
          </div>
          <div
            className="border-2 rounded-full w-12 h-12 flex items-center justify-center text-center bg-gradient-to-r from-gray-500 to-gray-300 hover:from-gray-300 hover:to-gray-500 
transition-all duration-500 ease-in-out hover:cursor-pointer"
          >
            *
          </div>
        </div>
        <div className="flex justify-between rounded-lg h-8 mx-3 mt-8 ">
          <div className="border-2 w-full rounded-lg h-6 mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default sample;
