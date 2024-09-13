import React, { useState } from "react";
import { chatIcon, closeIcon, heart, threeDots } from "../assets";
import FollowerFeedDialog from "./FollowerFeedDialog";
import FeedUploadPostDialog from "./FeedUploadPostDialog";

const ImageDetailsDialog = ({ imageSrc, closeDialog }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#2E374B] w-[530px] h-[370px] rounded-[10px] p-4 relative">
        <button
          onClick={closeDialog}
          className="absolute top-2 right-2 text-white"
        >
          <img src={closeIcon} alt="CLOSE" className="w-[30px] h-[30px]" />
        </button>
        <img
          src={imageSrc}
          alt="Uploaded"
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <p className="text-white opacity-[50%] text-start mt-4">
          Lorem ipsum dolor sit amet consectetur. At urna blandit dolor purus
          hendrerit est mi laoreet quisque. In sed diam dui orci feugiat. Nunc
          fames sed libero vitae nunc. In diam maecenas sapien orci nibh sed.
        </p>

        <div className="flex flex-row justify-between mt-4">
          <div className="flex items-center gap-4">
            <img src={heart} alt="LIKES" className="w-[22px] h-[22px]" />
            <span className="text-white opacity-[50%] font-[500] text-[14px] leading-[7px]">
              230+ Liked
            </span>
          </div>

          <div className="bg-white opacity-[50%] w-[2px] h-6"></div>

          <div className="flex items-center gap-4">
            <img src={chatIcon} alt="LIKES" className="w-[22px] h-[22px]" />
            <span className="text-white opacity-[50%] font-[500] text-[14px] leading-[7px]">
              200+ Comments
            </span>
          </div>

          <button>
            <img src={threeDots} alt="MENU" className="w-[18px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

const FeedPost = () => {
  const [isFollowerDialog, setIsFollowerDialog] = useState(false);
  const [isUploadPostDialog, setIsUploadPostDialog] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]); // To store multiple uploaded images
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image

  const openFollwerDialog = () => {
    setIsFollowerDialog(true);
  };

  const openUploadPostDialog = () => {
    setIsUploadPostDialog(true);
  };

  const closeDialog = () => {
    setIsFollowerDialog(false);
    setIsUploadPostDialog(false);
    setSelectedImage(null); // Close image details dialog as well
  };

  const handleImageUpload = (imageURL) => {
    setUploadedImages((prevImages) => [...prevImages, imageURL]); // Add the new image to the existing images array
  };

  const handleShowImageDetails = (image) => {
    setSelectedImage(image); // Set the selected image and open dialog
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[16rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="md:w-[1100px] w-[350px] border border-[#29303F] rounded-[16px] md:h-[75px] md:ml-0 ml-0">
        <div className="flex items-center justify-between py-5 px-4">
          <span className="text-white font-[600] md:text-[22px] leading-[26px]">
            App Followers: 3000
          </span>
          <button
            onClick={openFollwerDialog}
            className="border-solid border-[1px] border-white opacity-[60%] rounded-[20px] w-[92px] h-[32px]"
          >
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
          onClick={openUploadPostDialog}
          className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2"
        >
          +Add
        </button>
        {isUploadPostDialog && (
          <FeedUploadPostDialog
            isUploadPostDialog={isUploadPostDialog}
            closeDialog={closeDialog}
            handleImageUpload={handleImageUpload}
          />
        )}
      </div>

      {/* Render the uploaded images below the Feed Post */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:w-[1084px]">
        {uploadedImages.map((image, index) => (
          <button key={index} onClick={() => handleShowImageDetails(image)}>
            <img
              src={image}
              alt={`Uploaded ${index}`}
              className="w-[340px] h-[244px] object-cover rounded-lg"
            />
          </button>
        ))}
      </div>

      {/* Show the Image Details Dialog if an image is clicked */}
      {selectedImage && (
        <ImageDetailsDialog
          imageSrc={selectedImage}
          closeDialog={closeDialog}
        />
      )}
    </div>
  );
};

export default FeedPost;
