import React from "react";
import  logo from "./rep.png";

const CaseDetails = () => {
  return (
    <div className="w-full min-h-[100vh] h-[100%] bg-gray-100">
      {/* Header with blue background */}
      <div className="w-full bg-gray-100 py-4 flex items-center justify-start px-6 shadow-lg">
        <img src={logo} alt="Logo" className="h-[80px]" />
        <h1 className="text-gray-700 text-2xl ml-10 font-semibold">
          Passenger Information
        </h1>
      </div>

      
      <div className="lg:w-1/2 md:w-2/3 sm:w-4/5 mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Passenger Information</h2>
        
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                First Name : <span className="text-sm text-gray-500 font-normal ml-3">Jean Jack</span>
              </p>

            </div>

            <div className="mb-4">
              <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                Last Name : <span className="text-sm text-gray-500 font-normal ml-3">IRAKOZE</span>
              </p>

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                Email : <span className="text-sm text-gray-500 font-normal ml-3">jean@mail.com</span>
              </p>

            </div>

            <div className="mb-4">
              <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                Phone : <span className="text-sm text-gray-500 font-normal ml-3">0770000000</span>
              </p>

            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Status</h2>

          <p className="font-bold text-2xl">N/A</p>
        </>
      </div>
    </div>
  );
};

export default CaseDetails;
