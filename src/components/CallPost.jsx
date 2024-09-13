import React, { useState, useEffect } from "react";
import { exit } from "../assets";
import PremiumCallPost from "./PremiumCallPost";
import CallPostDialog from "./CallPostDialog";
import CallPostNotoficationDialog from "./CallPostNotoficationDialog";
import CallDialog from "./CallDialog";
import CallExitDialog from "./CallExitDialog";

const subTable = [
  {
    createdOn: "26/01/2024 10:00AM",
    serviceType: "BANKNIFTY SE 610",
    amount: 150,
  },
  {
    createdOn: "26/01/2024 10:00AM",
    serviceType: "BANKNIFTY SE 610",
    amount: 150,
  },
];

const CallPost = () => {
  const [isNotificationDialogOpen, setIsNotificationDialogOpen] =
    useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogExitOpen, setIsDialogExitOpen] = useState(false);
  const [isFreeCallsDialogOpen, setIsFreeCallsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [showSubscriptionType, setShowSubscriptionType] = useState("1");

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const openNotificationDialog = () => {
    setIsNotificationDialogOpen(true);
  };

  const openFreeCallsDialog = () => {
    setIsFreeCallsDialogOpen(true);
  };

  const openDialog = () => {
    setIsDialogOpen(true); //
  };

  const openExitDialog = () => {
    setIsDialogExitOpen(true);
  };

  const closeDialog = () => {
    setIsNotificationDialogOpen(false);
    setIsDialogOpen(false); 
    setIsFreeCallsDialogOpen(false);
    setIsEditDialogOpen(false);
    setIsDialogExitOpen(false);
  };

  const getSubscriptionTypeLabel = (type) => {
    switch (type) {
      case "3":
        return "Futures & Options";
      case "1":
        return "Commodity";
      case "2":
        return "Equity";
      default:
        return "Select Subscription Type";
    }
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="flex md:flex-row flex-row md:justify-between items-center md:gap-0 gap-10">
        <span className="font-inter text-[22px] font-[600] leading-[27px] text-white">
          Story
        </span>
        <div className="flex md:gap-8 gap-4">
          <button
            onClick={openNotificationDialog} // Open notification dialog on click
            className="md:w-[120px] w-[140px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white"
          >
            Send Notification
          </button>
          {isNotificationDialogOpen && (
            <CallPostNotoficationDialog
              isDialogOpen={isNotificationDialogOpen}
              closeDialog={closeDialog}
            />
          )}

          <button
            onClick={openDialog} // Open CallPostDialog on click
            className="md:w-[100px] w-[100px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white"
          >
            +Add Story
          </button>
          {isDialogOpen && (
            <CallPostDialog
              isDialogOpen={isDialogOpen}
              closeDialog={closeDialog}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col md:gap-4 gap-2 md:mt-[3rem] mt-8">
        <span className="text-white text-[22px] font-[600] leading-[26.5px]">
          Free Calls
        </span>
        <div className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-2">
          <div className="flex flex-row md:gap-4 gap-8">
            <button
              onClick={() => setShowSubscriptionType("1")}
              className={`md:w-[120px] w-[100px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                showSubscriptionType === "1"
                  ? "bg-[#ffffff] font-[600] font-inter md:text-[12px] text-[12px]"
                  : "bg-transparent text-white font-[600] font-inter md:text-[12px] text-[12px]"
              }`}
            >
              Commodity
            </button>
            <button
              onClick={() => setShowSubscriptionType("2")}
              className={`md:w-[90px] w-[70px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                showSubscriptionType === "2"
                  ? "bg-[#ffffff] font-[600] font-inter md:text-[12px] text-[12px]"
                  : "bg-transparent text-white font-[600] font-inter md:text-[12px] text-[12px]"
              }`}
            >
              Equity
            </button>
            <button
              onClick={() => setShowSubscriptionType("3")}
              className={`md:w-[140px] w-[120px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                showSubscriptionType === "3"
                  ? "bg-[#ffffff] font-[600] font-inter md:text-[12px] text-[12px]"
                  : "bg-transparent text-white font-[600] font-inter md:text-[12px] text-[12px]"
              }`}
            >
              Futures & Options
            </button>
          </div>
          <button
            onClick={openFreeCallsDialog}
            className="md:w-[100px] w-[90px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2"
          >
            +Add Calls
          </button>
          {isFreeCallsDialogOpen && (
            <CallDialog
              isDialogOpen={isFreeCallsDialogOpen}
              closeDialog={closeDialog}
            />
          )}
        </div>
      </div>

      <div className="flex md:mt-[3rem] mt-1">
        {smallScreen ? (
          <div className="flex flex-col flex-wrap justify-center items-center ml-[-12px]">
            {subTable.map((row, index) => (
              <div
                key={index}
                className="flex flex-col w-[350px] justify-around h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 max-w-sm"
              >
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DATE:</span> {row.createdOn}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">NAME:</span> {row.serviceType}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">TARGET HIT:</span>
                  <button className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2">
                    Select
                  </button>
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">ABOVE:</span> {row.amount}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">SL:</span> {row.amount}
                </span>
              </div>
            ))}
            <button className="mt-6 md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
              Show More
            </button>
          </div>
        ) : (
          <table className="xl:w-[1520px] md:w-[1100px] h-[230px] bg-[#29303F] rounded-[30px]">
            <thead className="text-[#BABABA] font-inter font-[600] text-[14px] leading-[20px] h-[51px]">
              <tr>
                <th className="text-center">DATE</th>
                <th className="text-center">NAME</th>
                <th className="text-center">TARGET HIT</th>
                <th className="text-center">ABOVE</th>
                <th className="text-center">SL</th>
                <th className="text-center">ACTION</th>
                <th className="text-center">MESSAGE</th>
                <th className="text-start">EXIT</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite h-[81px]">
              {subTable.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                >
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.createdOn}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.serviceType}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    <button className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2">
                      Select
                    </button>
                  </td>
                  <td className="py-2 text-center font-[500] text-[16px] leading-[18px]">
                    {row.amount}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    80
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    <button className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2">
                      BUY
                    </button>
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    <button className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2">
                      Send Message
                    </button>
                  </td>
                  <td className="">
                    <button onClick={openExitDialog}>
                      <img
                        src={exit}
                        alt="Exit"
                        className="w-[24px] h-[24px]"
                      />
                    </button>
                    {isDialogExitOpen && (
                      <CallExitDialog
                        isDialogOpen={isDialogExitOpen}
                        closeDialog={closeDialog}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <PremiumCallPost />
    </div>
  );
};

export default CallPost;
