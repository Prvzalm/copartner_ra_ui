import React from "react";
import { closeIcon } from "../assets";

const AddUpiDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] xl:h-[50%] md:h-[65%] w-[378px] h-[340px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] md:text-[24px] text-[18px] md:leading-[51px] text-new  md:ml-0 ml-[-0.8rem]">
              Add UPI ID Details
            </h2>
            <button onClick={onClose} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[45px] md:h-[45px] w-[40px] h-[40px]"
              />
            </button>
          </div>

          <div className="relative md:mt-8 mt-4">
            <div class="mb-0">
              <label
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[76px] w-[56px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center md:ml-0 ml-[-1rem]"
              >
                UPI ID
              </label>
              <input
                type="link"
                id="default-input"
                placeholder="arunkumar@phonepay"
                className="md:w-full w-[344px] py-2 px-2 rounded-md text-white border border-[#40495C] bg-[#282F3E] md:ml-0 ml-[-1rem]"
              />
            </div>
          </div>

          <div class="flex md:mt-[2rem] mt-[1rem] md:ml-0 ml-[-1rem]">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 mt-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              className="ms-2 text-[14px] font-medium text-white"
            >
              By checking this box, I acknowledge that the bank/payment details
              provided are accurate and authorize Hailgro Tech Solutions Pvt.
              Ltd. to process transactions accordingly.
            </label>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button className="bg-white rounded-[10px] md:text-[18px] text-[14px] w-[147px] h-[40px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUpiDialog;
