import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideBar } from "./constants";
import { closeIcon, login, logo } from "./assets";

const Sidebar = ({ activeTab, setActiveTab, setShowSidebar, telegramData }) => {
  // Accept telegramData as a prop
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/signup");
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const activeNav = sideBar.find(
      (side) =>
        `/${side.id}` === currentPath ||
        (side.id === "dashboard" && currentPath === "/")
    );
    if (activeNav) {
      setActiveTab(activeNav.title);
    } else {
      setActiveTab(null);
    }
  }, [location, setActiveTab]);

  const handleClose = () => {
    setShowSidebar(false);
    setActiveTab("");
  };

  const handleSidebarTabClick = () => {
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
    setActiveTab("");
  };

  return (
    <div
      className={`fixed flex flex-col bg-gradient md:w-[210px] h-[100%] py-[2rem] px-[2rem] mb-[1rem] z-[999] ${
        window.innerWidth < 768
          ? "w-[120%] flex justify-center items-center"
          : ""
      } overflow-y-auto`}
    >
      <button
        onClick={handleClose}
        className={`relative bottom-[2rem] left-[8rem] ${
          window.innerWidth < 786 ? "flex" : "hidden"
        }`}
      >
        <img
          src={closeIcon}
          alt="Close"
          className="w-[45px] h-[45px] ml-[5rem]"
        />
      </button>
      <Link onClick={scrollToTop} to="/">
        <img
          src={logo}
          className="flex justify-center items-center md:w-[133px] w-[160px] md:h-[39px]"
        />
      </Link>
      <div className="flex gap-[1rem] flex-col mt-[2rem]">
        {sideBar.map(
          (side) =>
            (side.title !== "Telegram Channel" || telegramData.length > 0) && (
              <Link
                to={side.path}
                key={side.id}
                onClick={() => {
                  scrollToTop();
                  setActiveTab(side.title);
                  handleSidebarTabClick();
                }}
                className={`flex w-auto h-[74px] rounded-[16px] text-white flex-row cursor-pointer ${
                  window.innerWidth >= 768 ? "md:ml-[-4rem] xl:ml-[-4rem]" : ""
                } ${
                  window.innerWidth >= 768 &&
                  (activeTab === side.title
                    ? "tab-btn text-[#fff] px-4"
                    : "text-white opacity-[50%]")
                }`}
              >
                <div className="flex flex-row justify-center gap-4 items-center ml-[4rem]">
                  <img
                    src={
                      activeTab === side.title
                        ? side.activeIcon
                        : side.inactiveIcon
                    }
                    alt={side.title}
                    className="md:w-[24px] w-[30px] md:h-[24px] h-[30px]"
                  />
                  <span className="font-[400] md:text-[16px] text-[18px]">
                    {side.title}
                  </span>
                </div>
              </Link>
            )
        )}
      </div>
      <div className="relative">
        <button
          onClick={handleLogout}
          className="w-[110px] h-[30px] text-[14px] bg-white text-black rounded-[5px] mt-[1rem] flex items-center justify-center gap-2"
        >
          Logout
          <img src={login} className="w-[16px] h-[16px]" alt="Login icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
