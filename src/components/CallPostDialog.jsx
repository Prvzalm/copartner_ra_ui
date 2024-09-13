import React from "react";
import { closeIcon } from "../assets";

const CallPostDialog = ({ isDialogOpen, closeDialog }) => {
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
              <span className="text-gray-500 font-[400] md:text-[36px] text-[20px]">Upload Your Content</span>
              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="flex justify-center mt-4">
          <button className="bg-white opacity-[90%] md:w-[147px] w-[100px] h-[36px] md:h-[40px] rounded-[10px]">
            <span className="font-[500] md:text-[16px] text-[12px]">UPLOAD</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPostDialog;
