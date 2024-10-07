import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  logo from "./rep.png";
import axios from 'axios';
const CaseDetails = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [symptoms, setSymptoms] = useState([]);
    const [closeContact, setCloseContact] = useState(null);

  const {id} = useParams()

  const getCaseDetails = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`https://citizen.moh.gov.rw/sm-backend-app/api/surveys/${id}`, config)
      .then((res) => {
        if(res.data.success){
              
                const answers = res.data.data?.answer;
              
                // Map each state according to its respective questionId
                answers?.forEach((answer) => {
                  switch (answer.questionId) {
                    case "f664b743-0099-4b29-b77a-36bd4887c91a":
                      setFirstName(answer.answerText);
                      break;
                    case "6eb42611-aa08-4949-a048-f662ed16096d":
                      setLastName(answer.answerText);
                      break;
                    case "9a471d64-9075-4789-871a-6f55f7f4205f":
                      setEmail(answer.answerText);
                      break;
                    case "a631ae62-8b16-483c-a8ac-7827c2472528":
                      setPhoneNumber(answer.answerText);
                      break;
                    case "17363bb6-d775-4e50-b589-8d4c4d8d4676":
                      // Save an array of optionText for symptoms
                      const symptomsText = answer.option.map((opt) => opt.optionText);
                      setSymptoms(symptomsText);
                      break;
                    case "1d737b38-4d9a-4896-8323-3c6822c71831":
                      // Save an array of optionText for close contact
                      const closeContactText = answer.option.map((opt) => opt.optionText);
                      setCloseContact(closeContactText);
                      break;
                    default:
                      break;
                  }
                });

              
        }else{
          alert('Data not retrieved. Something went wrong')
        }
      })
      .catch((error) => {
        alert('Data not retrieved. Something went wrong')
        console.log(error.message);
      });
  };

  useEffect(()=>{
      getCaseDetails();
  },[])
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
                First Name : <span className="text-sm text-gray-500 font-normal ml-3">{firstName || '-'}</span>
              </p>

            </div>

            <div className="mb-4">
              <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                Last Name : <span className="text-sm text-gray-500 font-normal ml-3">{lastName || '-'}</span>
              </p>

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                Email : <span className="text-sm text-gray-500 font-normal ml-3">{email || '-'}</span>
              </p>

            </div>

            <div className="mb-4">
              <p className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                Phone : <span className="text-sm text-gray-500 font-normal ml-3">{phoneNumber || '-'}</span>
              </p>

            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Symptoms</h2>

          <p className="font-semibold text-lg text-gray-600">{symptoms?.join(', ') || "-"}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Had any contact with a person who has been confirmed or suspected to have MVD?</h2>

          <p className="font-semibold text-lg text-gray-600">{closeContact?.join(', ') || "-"}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Status</h2>

          <p className="font-semibold text-lg text-gray-600">N/A</p>
        </>
      </div>
    </div>
  );
};

export default CaseDetails;
