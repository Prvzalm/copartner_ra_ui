import React, { useState, useEffect } from "react";
import axios from "axios";
import { commentIcon, exit } from "../assets";
import PremiumCallPost from "./PremiumCallPost";
import CallPostDialog from "./CallPostDialog";
import CallPostNotoficationDialog from "./CallPostNotoficationDialog";
import CallDialog from "./CallDialog";
import CallExitDialog from "./CallExitDialog";
import { useAuth } from "../authContext";
import CommentPopup from "./CommentPopup";
import api from "../api";
import { toast } from "react-toastify";
import ExitCalls from "./ExitCalls";
import Stories from "./Stories";

const CallPost = ({ stackholderId, token }) => {
  const [isNotificationDialogOpen, setIsNotificationDialogOpen] =
    useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogExitOpen, setIsDialogExitOpen] = useState(false);
  const [isFreeCallsDialogOpen, setIsFreeCallsDialogOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [showSubscriptionType, setShowSubscriptionType] = useState("1");
  const [selectedCallPost, setSelectedCallPost] = useState(null);
  const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false);
  const [selectedCallPostId, setSelectedCallPostId] = useState(null);
  const [subTable, setSubTable] = useState([]); // New state to store the fetched data

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
    setIsDialogOpen(true);
  };

  const openExitDialog = (row) => {
    setSelectedCallPost(row);
    setIsDialogExitOpen(true);
  };

  const closeDialog = () => {
    setIsNotificationDialogOpen(false);
    setIsDialogOpen(false);
    setIsFreeCallsDialogOpen(false);
    setIsDialogExitOpen(false);
  };

  useEffect(() => {
    fetchCallData("Commodity"); // Fetch Commodity data when the page loads
  }, []);

  // Function to fetch data based on subscription type
  const fetchCallData = async (subscriptionType) => {
    try {
      const response = await api.get(
        `/CallPost?callMode=F&expertsId=${stackholderId}&callType=${subscriptionType}&page=1&pageSize=1000000`
      );

      if (response.data.isSuccess) {
        // Map the fetched data into subTable format
        const mappedData = response.data.data.flatMap((item) => {
          return item.shareList.map((share) => ({
            callPostId: share.id,
            createdOn: new Date(share.createdOn).toLocaleString(),
            serviceType: share.name,
            amount: share.above, // Modify this if you want a different value
            sl: share.stopLoss,
            action: share.action,
            target1: share.target1,
            target2: share.target2,
            target3: share.target3,
            target4: share.target4,
          }));
        });
        setSubTable(mappedData); // Update the subTable state with the mapped data
      }
    } catch (error) {
      console.error("Error fetching call data", error);
    }
  };

  // Handler to change subscription type and fetch relevant data
  const handleSubscriptionChange = (type) => {
    setShowSubscriptionType(type);
    const subscriptionTypeLabel = getSubscriptionTypeLabel(type);
    fetchCallData(subscriptionTypeLabel); // Fetch data based on subscription type
  };

  const getSubscriptionTypeLabel = (type) => {
    switch (type) {
      case "3":
        return "Options";
      case "1":
        return "Commodity";
      case "2":
        return "Equity";
      default:
        return "Select Subscription Type";
    }
  };

  const handleSLChange = (index, newValue) => {
    const updatedTable = [...subTable];
    updatedTable[index].sl = newValue;
    setSubTable(updatedTable);
  };

  const handleTargetHitChange = (index, newValue) => {
    const updatedTable = [...subTable];
    updatedTable[index].targetHit = newValue;
    setSubTable(updatedTable);
  };

  const handleActionChange = (index, newValue) => {
    const updatedTable = [...subTable];
    updatedTable[index].action = newValue;
    setSubTable(updatedTable);
  };

  const handleSendMessage = async (callPostId, row) => {
    if (!row.action || !row.sl || !row.targetHit) {
      toast.error("Select the required fields!");
      return;
    }
    try {
      // Make the PATCH request
      // await makePatchRequest(callPostId, row.action, row.sl, row.targetHit);

      // Make the POST request
      await makePostRequest(callPostId, row.action, row.sl, row.targetHit);
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  const makePatchRequest = async (callPostId, action, stopLoss, targetHit) => {
    console.log(targetHit);
    const patchData = [
      { path: "action", op: "replace", value: action },
      { path: "stopLoss", op: "replace", value: stopLoss.toString() },
      { path: "targetHit", op: "replace", value: targetHit },
    ];

    try {
      await api.patch(`/CallPost?Id=${callPostId}`, patchData);
      console.log("PATCH request successful");
    } catch (error) {
      console.error("Error with PATCH request", error);
    }
  };

  const makePostRequest = async (callPostId, action, stopLoss, targetHit) => {
    const postData = {
      expertsId: stackholderId,
      callPostId: callPostId,
      action: action,
      stopLoss: stopLoss,
      targetHit: targetHit,
      exitCall: false,
    };
    console.log(postData);

    try {
      await api.post("/CallNotification/SendMessageFree", postData);
      console.log("POST request successful");
    } catch (error) {
      console.error("Error with POST request", error);
    }
  };

  const openCommentPopup = (callPostId) => {
    setSelectedCallPostId(callPostId);
    setIsCommentPopupOpen(true);
  };

  // Close comment popup
  const closeCommentPopup = () => {
    setIsCommentPopupOpen(false);
    setSelectedCallPostId(null);
  };

  return (
    <div className="pb-[5rem] xl:pl-[18rem] md:pl-[16rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="flex md:flex-row flex-row items-center md:gap-[50rem] gap-10">
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
              stackholderId={stackholderId}
            />
          )}
        </div>
      </div>
      <Stories />

      <div className="flex flex-col md:gap-4 gap-2 md:mt-[3rem] mt-8">
        <div className="flex justify-between md:mr-40">
          <div className="text-white text-[22px] font-[600] leading-[26.5px]">
            Free Calls
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
              stackholderId={stackholderId}
            />
          )}
        </div>
        <div className="flex md:flex-row flex-col md:items-center md:gap-[39rem] gap-2">
          <div className="flex flex-row md:gap-4 gap-8">
            <button
              onClick={() => handleSubscriptionChange("1")}
              className={`md:w-[120px] w-[100px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                showSubscriptionType === "1"
                  ? "bg-[#ffffff] font-[600] font-inter md:text-[12px] text-[12px]"
                  : "bg-transparent text-white font-[600] font-inter md:text-[12px] text-[12px]"
              }`}
            >
              Commodity
            </button>
            <button
              onClick={() => handleSubscriptionChange("2")}
              className={`md:w-[90px] w-[70px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                showSubscriptionType === "2"
                  ? "bg-[#ffffff] font-[600] font-inter md:text-[12px] text-[12px]"
                  : "bg-transparent text-white font-[600] font-inter md:text-[12px] text-[12px]"
              }`}
            >
              Equity
            </button>
            <button
              onClick={() => handleSubscriptionChange("3")}
              className={`md:w-[140px] w-[120px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                showSubscriptionType === "3"
                  ? "bg-[#ffffff] font-[600] font-inter md:text-[12px] text-[12px]"
                  : "bg-transparent text-white font-[600] font-inter md:text-[12px] text-[12px]"
              }`}
            >
              Futures & Options
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:mt-[3rem] mt-1">
        {smallScreen ? (
          <div className="flex md:mt-[3rem] mt-1">
            <div className="flex flex-col flex-wrap justify-center items-center ml-[-12px]">
              {subTable.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[350px] justify-around h-auto bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 max-w-sm" // Changed padding to p-6
                >
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">DATE:</span> {row.createdOn}
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">NAME:</span>{" "}
                    {row.serviceType}
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">TARGET HIT:</span>
                    <select
                      className="md:w-[100px] w-[70px] md:h-[44px] h-[34px] rounded-[10px] bg-black text-center text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white" // Increased height by 4px
                      value={row.targetHit || ""}
                      onChange={(e) =>
                        handleTargetHitChange(index, e.target.value)
                      }
                    >
                      <option value="">Select Target</option>
                      <option value={row.target1}>{row.target1}</option>
                      <option value={row.target2}>{row.target2}</option>
                      <option value={row.target3}>{row.target3}</option>
                      <option value={row.target4}>{row.target4}</option>
                    </select>
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">ABOVE:</span> {row.amount}
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">SL:</span>
                    <input
                      type="number"
                      className="md:w-[100px] w-[70px] md:h-[44px] h-[34px] rounded-[10px] bg-black text-center text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white" // Increased height by 4px
                      value={row.sl || ""}
                      onChange={(e) => handleSLChange(index, e.target.value)}
                    />
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">ACTION:</span>
                    <select
                      className="md:w-[100px] w-[70px] md:h-[44px] h-[34px] rounded-[10px] text-center text-white bg-black font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white" // Increased height by 4px
                      value={row.action || ""}
                      onChange={(e) =>
                        handleActionChange(index, e.target.value)
                      }
                    >
                      <option value="">Select Action</option>
                      <option value="BUY">BUY</option>
                      <option value="SELL">SELL</option>
                      <option value="HOLD">HOLD</option>
                    </select>
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">MESSAGE:</span>
                    <button
                      className="md:w-[100px] w-[70px] md:h-[44px] h-[34px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white" // Increased height by 4px
                      onClick={() => handleSendMessage(row.callPostId, row)}
                    >
                      Send Message
                    </button>
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">EXIT:</span>
                    <button onClick={() => openExitDialog(row)}>
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
                        callPostId={selectedCallPost}
                      />
                    )}
                  </span>
                  <span className="flex items-center my-2 justify-between sm:w-full font-[500] text-[14px] leading-[12px] text-lightWhite">
                    <span className="text-dimWhite">COMMENT:</span>
                    <button onClick={() => openCommentPopup(row.callPostId)}>
                      <img
                        src={commentIcon}
                        alt="Comment"
                        className="w-[24px] h-[24px]"
                      />
                    </button>
                    {isCommentPopupOpen &&
                      selectedCallPostId === row.callPostId && (
                        <CommentPopup
                          isOpen={isCommentPopupOpen}
                          closePopup={closeCommentPopup}
                          callPostId={selectedCallPostId}
                          stackholderId={stackholderId}
                        />
                      )}
                  </span>
                </div>
              ))}
            </div>
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
                <th className="text-start">COMMENT</th>
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
                    <select
                      className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-center text-white bg-black font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2"
                      value={row.targetHit || ""}
                      onChange={(e) =>
                        handleTargetHitChange(index, e.target.value)
                      }
                    >
                      <option value="">Select Target</option>
                      <option value={row.target1}>{row.target1}</option>
                      <option value={row.target2}>{row.target2}</option>
                      <option value={row.target3}>{row.target3}</option>
                      <option value={row.target4}>{row.target4}</option>
                    </select>
                  </td>
                  <td className="py-2 text-center font-[500] text-[16px] leading-[18px]">
                    {row.amount}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    <input
                      type="number"
                      className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-center text-white bg-black font-[600] font-inter md:text-[16px] text-[14px] border-solid border-[1px] border-white"
                      value={row.sl || ""}
                      onChange={(e) => handleSLChange(index, e.target.value)}
                    />
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    <select
                      className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-center text-white bg-black font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2"
                      value={row.action || ""}
                      onChange={(e) =>
                        handleActionChange(index, e.target.value)
                      }
                    >
                      <option value="">Select Action</option>
                      <option value="BUY">BUY</option>
                      <option value="SELL">SELL</option>
                      <option value="HOLD">HOLD</option>
                    </select>
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    <button
                      className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-0 mr-2"
                      onClick={() => handleSendMessage(row.callPostId, row)}
                    >
                      Send Message
                    </button>
                  </td>
                  <td className="text-center">
                    {/* Exit button */}
                    <button onClick={() => openExitDialog(row)}>
                      <img
                        src={exit}
                        alt="Exit"
                        className="w-[24px] h-[24px]"
                      />
                    </button>

                    {/* Call Exit Dialog */}
                    {isDialogExitOpen && (
                      <CallExitDialog
                        isDialogOpen={isDialogExitOpen}
                        closeDialog={closeDialog}
                        callPostId={selectedCallPost}
                      />
                    )}
                  </td>
                  <td className="text-center">
                    {/* Comment button */}
                    <button onClick={() => openCommentPopup(row.callPostId)}>
                      <img
                        src={commentIcon}
                        alt="Comment"
                        className="w-[24px] h-[24px]"
                      />
                    </button>
                    {/* Comment Popup */}
                    {isCommentPopupOpen &&
                      selectedCallPostId === row.callPostId && (
                        <CommentPopup
                          isOpen={isCommentPopupOpen}
                          closePopup={closeCommentPopup}
                          callPostId={selectedCallPostId}
                          stackholderId={stackholderId}
                        />
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <PremiumCallPost stackholderId={stackholderId} />
      <ExitCalls stackholderId={stackholderId} />
    </div>
  );
};

export default CallPost;
