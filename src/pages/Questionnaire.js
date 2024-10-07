import React, { useState } from "react";
import logo from "./rep.png";
import axios from 'axios'; 
const Questionnaire = () => {
  // State variables for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [closeContact, setCloseContact] = useState(null); // null, true, false

  // Handle checkbox changes for symptoms
  const handleSymptomChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSymptoms((prev) => [...prev, id]);
    } else {
      setSymptoms((prev) => prev.filter((symptom) => symptom !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for required fields
    if (!firstName || !lastName || !email || !phoneNumber || closeContact === null) {
      alert("Please fill in all required fields.");
      return; // Exit the function if validation fails
    }

    const postObj = JSON.stringify({
        email:email,
        answers:[
            {
              questionId: "fac3d33e-a641-4fe4-b22e-937746efb1aa",
              optionIds: [],
              answerText: firstName
            },
            {
              questionId: "f4903cf1-55f8-4841-861c-a7a9575f4db0",
              optionIds: [],
              answerText: lastName
            },
            {
              questionId: "5c0c570a-7c78-46ff-8f20-166dd0b95d89",
              optionIds: [],
              answerText: email
            },
            {
              questionId: "af90632f-36e8-445a-a879-0cd81e2c0307",
              optionIds: [],
              answerText: phoneNumber
            },
            {
              questionId: "079188cf-05ba-4c69-ad3c-df7b52cc2d06",
              optionIds: symptoms,
              answerText: ""
            },
            {
              questionId: "ec2e749e-2963-43b6-8943-49594aeaef3d",
              optionIds: [closeContact],
              answerText: ""
            }
          ]
    });

    axios.defaults.headers = {
        "Content-Type": "application/json",
      };


    axios
      .post(`https://citizen.moh.gov.rw/sm-backend-app/api/surveys/create`, postObj) //declare api Path
      .then((res) => {
        if (res.data.success === true) {
          alert('Successfully sent!');
          window.location.reload();
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        alert('Something went wrong!')
        console.log(error.message);
      });
  };

  // Handle close contact yes/no
  const handleCloseContactChange = (event) => {
    const { value } = event.target; // Get the value from the radio button
    setCloseContact(value); // Set the value (which is the ID) to closeContact
  };

  // Options data for question 2
  const options = [
    {
      id: "1cbece24-1a18-4342-8ffc-1bcc89f412f4",
      optionText: "Yes",
    },
    {
      id: "0468d385-2765-484e-91ba-cb66388c1484",
      optionText: "No",
    },
    {
      id: "730606d8-501b-4e82-a030-237917f6a018",
      optionText: "I don't Know",
    },
  ];

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

        <form onSubmit={handleSubmit}>
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  required // Make this field required
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  required // Make this field required
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required // Make this field required
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Type number"
                  required // Make this field required
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
              {[
                { id: "c566dcc4-257c-4d20-a156-eb083072fd81", label: "High fever (≥38° C)" },
                { id: "08a7a195-82e0-4bb2-9d6d-7931114e5e51", label: "Severe headache" },
                { id: "16f9446b-c1e2-44e9-80ce-a606b0c5f09d", label: "Muscle ache" },
                { id: "b897724e-fe58-4b79-aa80-ed2b748f9331", label: "Vomiting/nausea" },
                { id: "a9d3a642-f9c6-4937-b981-7dcb353c38cd", label: "Diarrhea" },
                { id: "8cae60ab-8f75-4569-aeb9-88928d7fd811", label: "Intense fatigue/general weakness" },
                { id: "432cf333-b301-4a06-81d4-7dace0999bd4", label: "Chest pain" },
                { id: "ad134572-987b-43c3-8b17-f7f0dba047d6", label: "Unexplained bleeding" },
              ].map((symptom) => (
                <div key={symptom.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={symptom.id}
                    onChange={handleSymptomChange}
                  />
                  <label className="ml-2 text-gray-700 text-sm">{symptom.label}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">2. Have you had close contact with a person who has been confirmed or suspected to have MVD?</label>
            <div className="flex space-x-4">
              {options.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    id={option.id}
                    name="closeContact"
                    value={option.id}
                    onChange={handleCloseContactChange}
                    required // Make this field required
                  />
                  <label className="ml-2 text-gray-700 text-sm">{option.optionText}</label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
