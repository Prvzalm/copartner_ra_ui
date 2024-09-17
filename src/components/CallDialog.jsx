import React, { useState } from "react";
import { closeIcon, dropdown } from "../assets";

const CallDialog = ({ isFreeCallsDialogOpen, closeDialog }) => {
  const [name, setName] = useState("");
  const [above, setAbove] = useState("");
  const [target, setTarget] = useState("");
  const [SL, setSL] = useState("");
  const [subscriptionType, setSubscriptionType] = useState(null);
  const [methodType, setMethodType] = useState(null);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isMethodOpen, setIsMethodOpen] = useState(false);

  const inputClassName =
    subscriptionType || methodType === null ? "text-[#9BA3AF]" : "text-white";

  const getSubscriptionTypeLabel = (type) => {
    switch (type) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Futures & Options";
      default:
        return "Select Subscription Type";
    }
  };

  const toggleSubscriptionDropdown = () => {
    setIsSubscriptionOpen(!isSubscriptionOpen);
  };

  const handleSubClick = (option) => {
    setSubscriptionType(option);
    setIsSubscriptionOpen(false);
  };

  const getMethodTypeLabel = (type) => {
    switch (type) {
      case 1:
        return "BUY";
      case 2:
        return "SELL";
      case 3:
        return "HOLD";
      default:
        return "Select Method Type";
    }
  };

  const toggleMethodDropdown = () => {
    setIsMethodOpen(!isMethodOpen);
  };

  const handleMethodClick = (option) => {
    setMethodType(option);
    setIsMethodOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] w-[378px] md:h-[60%] overflow-y-auto p-8 relative">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Add Free Call
            </h2>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>

          <div className="flex flex-col gap-4 md:w-[1006px]">
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px] mt-4">
              {/* Subscription Type (Call Type) Dropdown */}
              <div className="relative">
                <label
                  htmlFor="subscriptionType"
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[100px] w-[74px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Call Type
                </label>
                <div className="relative">
                  <div className="relative">
                    <input
                      id="subscriptionType"
                      value={getSubscriptionTypeLabel(subscriptionType)}
                      onClick={toggleSubscriptionDropdown}
                      className={`md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E] ${inputClassName}`}
                      readOnly
                    />
                    <img
                      src={dropdown}
                      alt="DropDown"
                      className="absolute inset-y-0 md:right-3 right-[-6px] w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                    />
                  </div>
                  {isSubscriptionOpen && (
                    <div className="absolute z-10 mt-2 md:w-[382px] w-[345px] rounded-md bg-white shadow-lg">
                      <ul className="py-1">
                        <li
                          onClick={() => handleSubClick(1)}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Commodity
                        </li>
                        <li
                          onClick={() => handleSubClick(2)}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Equity
                        </li>
                        <li
                          onClick={() => handleSubClick(3)}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Futures & Options
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Method Type Dropdown */}
              <div className="relative">
                <div className="mb-0">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[70px] w-[60px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                  >
                    Method
                  </label>
                  <div className="relative">
                    <input
                      id="methodType"
                      value={getMethodTypeLabel(methodType)}
                      onClick={toggleMethodDropdown}
                      className={`md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E] ${inputClassName}`}
                      readOnly
                    />
                    <img
                      src={dropdown}
                      alt="DropDown"
                      className="absolute inset-y-0 md:right-3 right-[-6px] w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                    />
                    {isMethodOpen && (
                      <div className="absolute z-10 mt-2 md:w-[382px] w-[345px] rounded-md bg-white shadow-lg">
                        <ul className="py-1">
                          <li
                            onClick={() => handleMethodClick(1)}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            BUY
                          </li>
                          <li
                            onClick={() => handleMethodClick(2)}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            SELL
                          </li>
                          <li
                            onClick={() => handleMethodClick(3)}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            HOLD
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Name and Above Inputs */}
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px] mt-4">
              {/* Name Input */}
              <div className="relative">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[70px] w-[58px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name-input"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>

              {/* Above Input */}
              <div className="relative">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[70px] w-[60px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Above
                </label>
                <input
                  type="number"
                  value={above}
                  onChange={(e) => setAbove(e.target.value)}
                  id="above-input"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            
            {/* Target and SL */}
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px] mt-4">
              {/* Name Input */}
              <div className="relative">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[70px] w-[58px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Target
                </label>
                <input
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  id="name-input"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>

              {/* Above Input */}
              <div className="relative">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[30px] w-[34px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  SL
                </label>
                <input
                  type="number"
                  value={SL}
                  onChange={(e) => setSL(e.target.value)}
                  id="above-input"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          {/* Send Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-white opacity-[90%] md:w-[107px] w-[90px] h-[36px] md:h-[40px] rounded-[10px]">
              <span className="font-[500] md:text-[16px] text-[15px]">SEND</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDialog;