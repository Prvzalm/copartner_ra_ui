import React, { useState } from "react";
import axios from "axios";
import { closeIcon } from "../assets";
import api from "../api";

const CallExitDialog = ({ isDialogExitOpen, closeDialog, callPostId }) => {
  const [hideCall, setHideCall] = useState(false); // For checkbox state

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setHideCall(!hideCall);
  };

  // Function to handle the SEND button click and make PATCH request
  const handleSendClick = async () => {
    const url = `/CallPost/ExitCall?Id=${callPostId.callPostId}&hideFromApp=${hideCall ? 'true' : 'false'}`;
  
    try {
      await api.post(
        url
      );
      console.log("POST request successful");
      closeDialog(); // Close dialog after successful post
    } catch (error) {
      console.error("Error with POST request", error);
    }
  };  

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[600px] w-[378px] md:h-[380px] h-[360px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Exit Call
            </h2>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <span className="font-[500] text-[20px] leading-[16px]">
              Are you sure to exit {callPostId.serviceType}
            </span>
            <div className="flex gap-[6rem]">
              <span className="font-[500] text-[20px] leading-[16px]">
                Above: {callPostId.amount}
              </span>
              <span className="font-[500] text-[20px] leading-[16px]">
                SL: {callPostId.sl}
              </span>
            </div>
            <span className="font-[500] text-[20px] leading-[16px]">
              Target: {callPostId.target1}, {callPostId.target2}, {callPostId.target3}, {callPostId.target4}
            </span>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="hideCall"
                className="h-6 w-6"
                checked={hideCall}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="hideCall"
                className="font-[400] text-[14px] leading-[16px]"
              >
                Completely hide call from app
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="bg-white opacity-[90%] md:w-[127px] w-[100px] h-[36px] md:h-[40px] rounded-[10px]"
              onClick={handleSendClick}
            >
              <span className="font-[500] md:text-[16px] text-[12px] text-black">
                CONFIRM
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallExitDialog;
