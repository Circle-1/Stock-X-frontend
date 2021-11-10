import  { useState } from 'react';
//import DataTable from 'react-data-table-component';
import{
  UploadIcon
  } from "@heroicons/react/outline"

export default function Input() {
  const [selectedFile, setSelectedFile] = useState();


 const handleFileUpload = e => {
  setSelectedFile(event.target.files[0]);
  setIsSelected(true);
}
const handleSubmission = e => {
 
  
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
        onChange={handleFileUpload}
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