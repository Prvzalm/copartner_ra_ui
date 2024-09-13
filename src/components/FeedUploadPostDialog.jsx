import React, { useState } from "react";
import { closeIcon } from "../assets";

const FeedUploadPostDialog = ({ closeDialog, handleImageUpload }) => {
  const [des, setDes] = useState("");
  const [link, setLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // Store the selected file
  const [preview, setPreview] = useState(null); // Store the preview URL

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the selected file in state
      setPreview(URL.createObjectURL(file)); // Set the preview URL for the image
    }
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      handleImageUpload(imageURL); // Pass the image URL to the parent component
      closeDialog(); // Close the dialog after upload
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[900px] w-[378px] md:h-[580px] h-[360px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Upload Post
            </h2>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>

          {/* Image Upload Section */}
          <div className="flex flex-col gap-4 mt-4">
            <label className="flex flex-col items-center justify-center w-[480px] h-[140px] border-2 border-dotted border-gray-400 rounded-lg cursor-pointer">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-500 font-[400] md:text-[16px] text-[12px]">
                  Upload Your Content
                </span>
              )}
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <div className="relative md:ml-0 ml-[-16px] mt-4">
            <label className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%] w-[70px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[13px] text-center">
              Caption
            </label>
            <textarea
              typeof="text"
              onChange={(e) => setDes(e.target.value)}
              id="des-input"
              value={des}
              rows="4"
              className="block p-2 rounded-md text-white border border-[#40495C] bg-transparent md:w-full w-[105%]"
              placeholder="Write something here"
            ></textarea>
          </div>

          <div className="relative md:ml-0 ml-[-16px] mt-4">
            <div className="mb-0">
              <label className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%] md:w-[52px] w-[210px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center">
                Link
              </label>
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="text"
                id="default-input"
                className="md:w-full w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-white opacity-[90%] md:w-[147px] w-[100px] h-[36px] md:h-[40px] rounded-[10px]"
              onClick={handleUploadClick}
            >
              <span className="font-[500] md:text-[16px] text-[12px]">UPLOAD</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedUploadPostDialog;
