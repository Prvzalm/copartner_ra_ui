import React, { useState } from "react";
import FollowerFeedDialog from "./FollowerFeedDialog";

const FeedPost = () => {
  const [isFollowerDialog, setIsFollowerDialog] = useState(false);
  const [isUploadPostDialog, setIsUploadPostDialog] = useState(false);

  const openFollwerDialog = () => {
    setIsFollowerDialog(true);
  };

  const openUploadPostDialog = () => {
    setIsUploadPostDialog(true);
  };

  const closeDialog = () => {
    setIsFollowerDialog(false);
    
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[16rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="md:w-[1100px] w-[350px]  border border-[#29303F] rounded-[16px] md:h-[75px] md:ml-0 ml-0">
        <div className="flex items-center justify-between py-5 px-4">
          <span className="text-white font-[600] md:text-[22px] leading-[26px]">
            App Followers: 3000
          </span>
          <button onClick={openFollwerDialog} className="border-solid border-[1px] border-white opacity-[60%] rounded-[20px] w-[92px] h-[32px]">
            <span className="text-white font-[500] leading-[16px] text-[15px]">
              See All
            </span>
          </button>
          {isFollowerDialog && (
            <FollowerFeedDialog
              isDialogOpen={isFollowerDialog}
              closeDialog={closeDialog}
            />
          )}
        </div>
      </div>

      <div className="xl:w-[1520px] md:w-[1110px] w-[350px] flex items-center justify-between mt-8">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white">
          Feed Post
        </span>
        <button
          //   onClick={openDialog}
          className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2"
        >
          +Add
        </button>
        {/* {isDialogOpen && (
          <SubscriptionDialog
            axiosServiceData={axiosServiceData}
            isDialogOpen={isDialogOpen}
            closeDialog={closeDialog}
            subTable={subTable}
          />
        )} */}
      </div>
    </div>
  );
};

export default FeedPost;
