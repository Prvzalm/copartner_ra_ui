import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { subscriptionData } from "../constants";
import DatePicker from "react-datepicker";

const Chats = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isChatLive, setIsChatLive] = useState(false);
  const [expertData, setExpertData] = useState(null);

  const stackholderId = sessionStorage.getItem("stackholderId");

  const handleSuccess = () => {
    toast.success("Successfully Deleted!", {
      position: "top-right",
    });
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const isChatLiveApi = `https://copartners.in/ExpertServices/api/Experts?Id=${stackholderId}`;

  const handleDeleteTable = () => {};

  const handleDateChange = () => {};

  const handleDownloadSheet = () => {};

  const handleCheckboxChange = async () => {
    const newValue = !isChatLive;
    setIsChatLive(newValue);

    try {
      await axios.patch(isChatLiveApi, [
        {
          path: "isChatLive",
          op: "replace",
          value: newValue,
        },
      ]);
      toast.success("Chat status updated successfully!", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("Failed to update chat status!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-[1rem] md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="xl:w-[1520px] md:w-[1130px] w-[370px] flex items-center justify-between">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white md:ml-0 ml-2">
          Chats Status
        </span>
        <label className="inline-flex items-center me-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isChatLive}
            onChange={handleCheckboxChange}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
      </div>

      <div className="flex py-[4rem]">
        <Link to="/chats/chats_history">
          <div className="flex xl:w-[1520px] md:w-[1120px] md:gap-6 gap-2">
            <div className="md:h-[230px] h-[160px] border border-white border-opacity-50 rounded-lg w-full p-4 flex flex-col gap-4">
              <span className="font-[700] md:text-[26px] text-[14px] md:leading-[35px] leading-[20px] text-gradient-2 md:w-auto w-[140px] md:h-auto h-[28px]">
                Paid Active Queries:
              </span>
              <span className="font-[700] md:text-[52px] text-[22px] md:leading-[50px] leading-[12px] text-white">
                10
              </span>
              <span className="text-white opacity-[50%] font-[500] md:text-[16px] text-[12px] md:leading-[18px] leading-[12px]">
                5 Minutes Access
              </span>
              <button className="px-4 w-[100%] py-2 bg-blue-500 text-white md:text-[14px] text-[14px] rounded-lg hover:bg-blue-600">
                Response
              </button>
            </div>
            <div className="md:h-[230px] h-[160px] border border-white border-opacity-50 rounded-lg w-full p-4 flex flex-col gap-4">
              <span className="font-[700] md:text-[26px] text-[14px] md:leading-[35px] leading-[20px] text-gradient-2 md:w-auto w-[140px] md:h-auto h-[28px]">
                Free Active Queries:
              </span>
              <span className="font-[700] md:text-[52px] text-[22px] md:leading-[50px] leading-[12px] text-white">
                10
              </span>
              <span className="text-white opacity-[50%] font-[500] md:text-[16px] text-[12px] md:leading-[18px] leading-[12px]">
                5 Minutes Access
              </span>
              <button className="px-4 w-[100%] py-2 bg-blue-500 text-white md:text-[14px] text-[14px] rounded-lg hover:bg-blue-600">
                Response
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <div className="xl:w-[1420px] md:w-[1030px] flex flex-col gap-8 mt-4">
          <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-2">
            <span className="text-white md:w-[210px] h-[27px] font-inter font-[600] text-[22px] md:leading-[27px] md:items-center items-start">
              Customer Listing
            </span>

            <div className="flex items-center flex-row md:gap-10 gap-8 md:mr-[-6rem] mr-0">
              <div className="ml-0">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  isClearable
                  placeholderText="Select Date range"
                  className="bg-[#2E323C] h-[55px] text-white rounded-[10px] px-4 md:w-[200px] w-[180px]"
                />
              </div>
              <button
                onClick={handleDownloadSheet}
                className={`w-[140px] h-[40px] text-[14px] rounded-[10px] border-solid border-[1px] border-white text-white`}
              >
                Download Sheet
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:mt-[2rem] mt-1">
        {smallScreen ? (
          <div className="flex flex-wrap justify-center items-center ml-[-22px]">
            {subscriptionData.map((row, index) => (
              <div
                key={index}
                className="flex flex-col justify-around h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
              >
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  {row.transactioId}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DATE:</span> {row.date}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">USER NUMBER:</span>{" "}
                  {row.phNum}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">TIME:</span> {row.duration}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">AMOUNT:</span> {row.amount}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">ADD ON:</span> {row.subType}
                </span>
              </div>
            ))}
            <button className="mt-6 md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
              Show More
            </button>
          </div>
        ) : (
          <table className="xl:w-[1520px] md:w-[1130px] h-[230px] bg-[#29303F] rounded-[30px]">
            <thead className="text-[#BABABA] font-inter font-[600] text-[14px] leading-[20px] h-[51px]">
              <tr>
                <th className="text-center">TRANSACTION ID</th>
                <th className="text-center">DATE</th>
                <th className="text-center">USER NUMBER</th>
                <th className="text-center">TIME</th>
                <th className="text-center">AMOUNT</th>
                <th className="text-center">ADD ON</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite h-[81px]">
              {subscriptionData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                >
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.transactioId}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.date}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.phNum}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.duration}
                  </td>
                  <td className="py-2 text-center font-[500] text-[16px] leading-[18px]">
                    {row.amount}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.subType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Chats;
