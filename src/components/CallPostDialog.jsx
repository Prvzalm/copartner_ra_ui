import React, { useState } from "react";
import axios from "axios";
import { closeIcon } from "../assets";
import { toast } from "react-toastify";

const CallPostDialog = ({ isDialogOpen, closeDialog, stackholderId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [caption, setCaption] = useState("");

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setMediaType(file.type.startsWith("image") ? "Images" : "Videos"); // Automatically set mediaType
    }
  };

  // Function to handle the upload click
  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file before uploading.");
      return;
    }

    try {
      // Step 1: Upload file to AWS and get the presigned URL
      const formData = new FormData();
      formData.append("file", selectedFile);

      const awsResponse = await axios.post(
        `https://copartners.in:5134/api/AWSStorage?prefix=${mediaType}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const presignedUrl = awsResponse.data.data.presignedUrl;
      if (!presignedUrl) {
        toast.error("Failed to upload file to AWS.");
        return;
      }

      // Step 2: After getting the presigned URL, post to the Story API
      const postData = {
        expertsId: stackholderId,
        mediaPath: presignedUrl, // Use the presigned URL as mediaPath
        mediaType: mediaType,
        caption: caption || "No caption",
      };
      console.log(postData);
      

      const storyResponse = await axios.post(
        "https://copartners.in:5137/api/Story",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (storyResponse.data.isSuccess) {
        toast.success("File uploaded and story created successfully!");
        closeDialog(); // Close dialog after successful upload
      } else {
        toast.error("Failed to create story. Please try again.");
      }
    } catch (error) {
      console.error("Error during upload:", error);
      toast.error("An error occurred during the upload process.");
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[900px] w-[378px] md:h-[380px] h-[360px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Story
            </h2>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <label className="flex flex-col items-center justify-center w-full h-[200px] border-2 border-dotted border-gray-400 rounded-lg cursor-pointer">
              <span className="text-gray-500 font-[400] md:text-[36px] text-[20px]">
                Upload Your Content
              </span>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <label className="text-white">
              Caption:
              <input
                type="text"
                className="w-full mt-2 p-2 rounded-lg bg-gray-800 text-white"
                placeholder="Add a caption (optional)"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </label>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-white opacity-[90%] md:w-[147px] w-[100px] h-[36px] md:h-[40px] rounded-[10px]"
              onClick={handleUpload}
            >
              <span className="font-[500] md:text-[16px] text-[12px]">
                UPLOAD
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPostDialog;
