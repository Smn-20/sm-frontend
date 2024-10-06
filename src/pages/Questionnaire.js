import React from "react";
import  logo from "./rep.png";

const Questionnaire = () => {
  return (
    <div className="w-full min-h-[100vh] h-[100%] bg-gray-100">
      {/* Header with blue background */}
      <div className="w-full bg-gray-100 py-4 flex items-center justify-start px-6 shadow-lg">
        <img src={logo} alt="Logo" className="h-[80px]" />
        <h1 className="text-gray-700 text-2xl ml-10 font-semibold">
          Passenger Questionnaire
        </h1>
      </div>

      
      <div className="lg:w-1/2 md:w-2/3 sm:w-4/5 mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Passenger Information</h2>
        
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                First Name
              </label>
              <div className="relative">
                <input
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  type="text"
                  id="first-name"
                  placeholder="Enter your first name"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="bx bx-user text-gray-700"></i>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                Last Name
              </label>
              <div className="relative">
                <input
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  type="text"
                  id="last-name"
                  placeholder="Enter your last name"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="bx bx-user text-gray-700"></i>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  type="email"
                  id="email"
                  placeholder="Your email"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="bx bx-envelope text-gray-700"></i>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone-number">
                Phone Number
              </label>
              <div className="relative">
                <input
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  type="tel"
                  id="phone-number"
                  placeholder="Type number"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="bx bx-phone text-gray-700"></i>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">
            Epidemiological risk factors and exposures to MVD
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="risk-factors">
              1. Have you, or any member of your group travelling with you, had any of the following symptoms during the past 21 days?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500"
                  id="fever"
                />
                <label htmlFor="fever" className="text-sm text-gray-700 ml-3">
                  High fever (≥38° C)
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500"
                  id="headache"
                />
                <label htmlFor="headache" className="text-sm text-gray-700 ml-3">
                  Severe headache
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500"
                  id="muscle-ache"
                />
                <label htmlFor="muscle-ache" className="text-sm text-gray-700 ml-3">
                  Muscle ache
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500"
                  id="vomiting"
                />
                <label htmlFor="vomiting" className="text-sm text-gray-700 ml-3">
                  Vomiting/nausea
                </label>
              </div>

              {/* Add other checkboxes similarly */}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="close-contact">
              2. During the past 21 days, have you, or a member of your group travelling with you, had close contact (Physical contact) with someone who had symptoms suggestive of Marburg virus disease?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500"
                  id="contact-yes"
                />
                <label htmlFor="contact-yes" className="text-sm text-gray-700 ml-3">
                  Yes
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500"
                  id="contact-no"
                />
                <label htmlFor="contact-no" className="text-sm text-gray-700 ml-3">
                  No
                </label>
              </div>
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
