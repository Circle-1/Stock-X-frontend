import React, { useState } from 'react';
//import DataTable from 'react-data-table-component';
import{
  UploadIcon
  } from "@heroicons/react/outline"

import axios from 'axios';

export default function Input() {
  const [setSelectedFile] = useState('')

  let onFileChange = event => {(
    setSelectedFile = event.target.files[0]
  )}

  let onFileUpload = () => {
    const data = new FormData();
    data.append("data", setSelectedFile, setSelectedFile.name);
    console.log(setSelectedFile);
    axios.post("http://localhost:1000/server", data, {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    }).then(function(res) {
      console.log("Server accepted");
    }).catch(function(err) {
      console.log(err);
    });
  };

  let handleFileUpload = event => {
    setSelectedFile = event.target.files[0]
  }

  let fileData = () => {
    if(setSelectedFile) {
      return(
        <div className="grid place-items-center py-24 bg-[#C7D2FE] h-screen bg-opacity-25">
      <h4 className="  text-black text-3xl flex flex-grow mx-20  items-start font-semibold text-center justify-center ">A STOCK PREDICTING MODEL BASED ON CNN-LSTM </h4>
      <h2 className="  text-black text-xl flex flex-grow mx-20  items-start font-semibold text-center justify-center ">
   
      Get started by uploading your data file (in CSV/Excel format)!!! </h2>
    <div className=" flex flex-col group m-auto items-center  justify-center w-auto h-96">

     <div className=" flex flex-row flex-none group  items-center bg-[#95ee7f] bg-opacity-50 justify-center whitespace:nowrap rounded-lg "> 
     <UploadIcon className=" h-8 group-hover:animate-bounce "/> 
    <input 
        type="file"
        id="file-upload"
        name=""
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
        value={onFileChange}
      /> </div>
        <div className="">
           <button 
           type="submit"
           className="bg-[#F5D0FE]  rounded-lg py-3 px-6 hover:bg-[#D946EF] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
           onClick={onFileUpload}> Get Prediction</button>
  </div> 
  </div> 
  </div>
      )
    }
  };
const handleSubmission = e => {
  if(fileData()) {
    console.log("File present!");
    console.log("Checking upload fn...");
    onFileUpload();
    console.log("Redirecting to TFJS function....");

  }
  else {
    console.log("Error!");
  }
  
}

  return (
    <div className="grid place-items-center py-24 bg-[#C7D2FE] h-screen bg-opacity-25">
      <h4 className="  text-black text-3xl flex flex-grow mx-20  items-start font-semibold text-center justify-center ">A STOCK PREDICTING MODEL BASED ON CNN-LSTM </h4>
      <h2 className="  text-black text-xl flex flex-grow mx-20  items-start font-semibold text-center justify-center ">
   
      Get started by uploading your data file (in CSV/Excel format)!!! </h2>
    <div className=" flex flex-col group m-auto items-center  justify-center w-auto h-96">

     <div className=" flex flex-row flex-none group  items-center bg-[#95ee7f] bg-opacity-50 justify-center whitespace:nowrap rounded-lg "> 
     <UploadIcon className=" h-8 group-hover:animate-bounce "/> 
    <input 
        type="file"
        id="file-upload"
        name=""
        accept=".csv,.xlsx,.xls"
        onChange={onFileChange}
      /> </div>
        <div className="">
           <button 
           type="submit"
           className="bg-[#F5D0FE]  rounded-lg py-3 px-6 hover:bg-[#D946EF] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
           onClick={handleSubmission}> Get Prediction</button>
  </div> 
  </div> 
  </div>
)
}
