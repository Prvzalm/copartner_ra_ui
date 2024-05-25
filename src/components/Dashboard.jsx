// import React from "react";
// import { userAnalysis, expertise_data } from "../constants";
// import { edit, customDrop } from "../assets";
// import BarGraph from "../graphs/BarGraph";
// import EarningAnalysis from "./EarningAnalysis";
// import ReferralLinkComponent from "./ReferralLinkComponent";

// const yTicks = [0, 100, 200, 300, 400, 500];

// const Dashboard = () => {
//   return (
//     <div className="xl:pl-[12rem] md:pl-[10rem] pl-6 md:py-[6rem] xl-py-[6rem] pt-[8rem]">
//       <div className="flex xl:w-[1580px] md:w-[1180px] items-center">
//         <div className="flex md:gap-0 gap-16 items-center">
//           <span className="md:w-[176px] md:h-[27px] w-[125px] h-[28px] font-inter md:text-[22px] text-[20px] font-[600] leading-[27px] text-white">
//             User Analysis
//           </span>
//           <div className="flex md:gap-[2rem] gap-2 xl:ml-[57rem] md:ml-[30rem] ml-[-10px]">
//             <button className="md:w-[85px] w-[43px] md:h-[40px] h-[30px] rounded-[10px] bg-white text-black font-[600] font-inter md:text-[12px] text-[10px]">
//               Today
//             </button>
//             <button className="md:w-[85px] w-[43px md:h-[40px] h-[30px] rounded-[10px] border-solid border-[1px] border-white text-white font-[600] font-inter md:text-[12px] text-[10px] md:p-0 p-1">
//               Weekly
//             </button>
//             <button className="md:w-[100px] w-[43px md:h-[40px] h-[30px] rounded-[10px] border-solid border-[1px] border-white text-white font-[600] font-inter md:text-[12px] md:block hidden">
//               Monthly
//             </button>
//             <div className="relative flex flex-row">
//               <button className="md:w-[90px] w-[63px] md:h-[40px] h-[30px] rounded-[10px] border-solid border-[1px] border-white text-white font-[600] font-inter md:text-[12px] text-[10px] md:p-2 p-1 flex items-center justify-between">
//                 <span>Custom</span>
//                 <img src={customDrop} alt="" className="w-[14px] h-[14px]" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row md:gap-6 gap-4 md:px-[4rem] pl-[2.5rem] md:py-8 py-0">
//         <div className="flex-1">
//           <BarGraph />
//         </div>

//         <div className="flex flex-col gap-4 md-mr-0 ml-[-12px]">
//           {userAnalysis.map((user) => (
//             <div
//               className="flex flex-col md:justify-between md:w-[288px] w-[355px] md:h-[298px] md:mr-0 ml-[-2rem] h-[178px] rounded-[25px] bg_cards p-4"
//               key={user.id}
//             >
//               <div className="flex flex-row justify-between">
//                 <div className="flex md:flex-col flex-row gap-2">
//                   <img
//                     src={user.telegramIcon}
//                     alt={user.telegram}
//                     className="md:w-[65px] w-[53px] md:h-[65px] h-[53px]"
//                   />
//                   <span className="text-white">{user.telegram}</span>
//                 </div>
//                 <span className="text-[#E4E4E7] font-[400] font-inter text-[16px] leading-[16px] opacity-[40%]">
//                   {user.joined}
//                 </span>
//               </div>

//               <div className="flex flex-col md:gap-[1rem] md:mb-4 mt-2 gap-[0.6rem]">
//                 <div className="flex flex-row justify-between md:w-[232px] md:h-[40px]">
//                   <span className="text-[#E4E4E7] opacity-[40%]">
//                     {user.totalVisit}
//                   </span>
//                   <span className="text-[#E4E4E7] opacity-[40%]">
//                     {user.totalVisitIs}
//                   </span>
//                 </div>
//                 <div className="flex flex-row justify-between md:w-[232px] md:h-[20px]">
//                   <span className="text-[#E4E4E7] opacity-[40%]">
//                     {user.user}
//                   </span>
//                   <span className="text-[#25A2DE]">{user.totalUser}</span>
//                 </div>
//                 <div className="flex flex-row justify-between md:w-[232px] md:h-[20px]">
//                   <span className="text-[#E4E4E7] opacity-[40%]">
//                     {user.noInterested}
//                   </span>
//                   <span className="text-[#D0667A]">{user.noInterestedIs}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <ReferralLinkComponent />

//       <EarningAnalysis />

//       <div className="py-8 flex flex-col gap-4 md:mt-0 mt-[-2rem]">
//         <span className="font-inter font-[600] text-[22px] leading-[27px] w-[246px] h-[27px] text-white">
//           Subscription : Services
//         </span>

//         <div className="xl:w-[1530px] md:w-[1122px] md:h-[480px] xl-h-[480px] w-[361px] md:ml-0 ml-[-8px] bg_cards p-4 rounded-[24px] md:mt-0 mt-[-2px]">
//           {expertise_data.map((expert) => (
//             <div className="flex flex-col">
//               <div className="flex flex-row">
//                 <div className="flex flex-col gap-4">
//                   <div className="flex flex-col">
//                     <span className="md:w-[331px] w-[152px] md:h-[67px] h-[31px] font-inter font-[700] md:text-[57px] text-[26px] md:leading-[66px] leading-[30px] text-gradient">
//                       {expert.name}
//                     </span>
//                     <span className="text-white font-inter font-[500] md:text-[17px] text-[14px] md:leading-[22px]">
//                       {expert.title}
//                     </span>
//                   </div>
//                   <div className="md:w-[278px] w-[176px] md:h-[53px] h-[25px] flex flex-row justify-between">
//                     <div className="md:w-[84px] w-[54px] md:h-[53px] h-[25px] flex flex-col">
//                       <span className="text-[#E4E4E7] opacity-[40%] font-[400] md:text-[14px] text-[10px] md:leading-[17px] leading-[12px] font-inter md:w-[83px] w-[56px] md:h-[17px]">
//                         {expert.experience}
//                       </span>
//                       <span className="text-white md:w-[83px] w-[54px] md:h-[20] h-[12px] font-[600] md:text-[16px] text-[10px] text-center leading-[20px]">
//                         {expert.totalExp}
//                       </span>
//                     </div>

//                     <div className="bg-white w-[1px] h-[35px]"></div>
//                     <div className="md:w-[84px] w-[54px] md:h-[53px] h-[25px] flex flex-col">
//                       <span className="text-[#E4E4E7] opacity-[40%] font-[400] md:text-[14px] text-[10px] md:leading-[17px] leading-[12px] font-inter md:w-[83px] w-[56px] md:h-[17px]">
//                         {expert.followers}
//                       </span>
//                       <span className="text-white md:w-[83px] w-[54px] md:h-[20] h-[12px] font-[600] md:text-[16px] text-[10px] text-center leading-[20px]">
//                         {expert.totalFollowers}
//                       </span>
//                     </div>
//                   </div>
//                   <span className="text-white md:w-[187px] w-[100px] md:h-[22px] font-inter font-[500] md:text-[14px] text-[12px] md:leading-[22px]">
//                     {expert.content}
//                   </span>
//                   <span className="text-white md:w-[187px] w-[140px] md:h-[22px] font-inter font-[500] md:text-[16px] text-[14px] md:leading-[22px]">
//                     <span className="text-white opacity-[50%]">
//                       Active User:
//                     </span>{" "}
//                     100
//                   </span>
//                   <div className="md:w-[373px] md:h-[31px] w-[310px] h-[22px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc]">
//                     <button className="flex justify-center items-center md:gap-2 gap-2">
//                       <img
//                         src={expert.telegram}
//                         alt="Telegram"
//                         className="md:w-[18.6px] w-[14px] h-[14px] md:h-[18.6px]"
//                       />
//                       <button className="md:w-[300px] md:h-[23px] text-white font-[400] md:text-[12px] text-[10px] md:leading-[22px]">
//                         {expert.greet}
//                       </button>
//                       <img
//                         src={expert.arrowIcon}
//                         alt="arrow"
//                         className="w-[13px] h-[13px]"
//                       />
//                     </button>
//                   </div>
//                 </div>

//                 {/* <div className="md:h-[344px] relative profile-image_1 mb-4">
//                   <img
//                     src={expert.icon}
//                     alt="background"
//                     className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
//                   />
//                   <img
//                     src={expert.userImg}
//                     alt="User"
//                     className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
//                   />
//                 </div> */}
//                 <div className="md:h-[344px] sm:h-[240px] md:max-h-[250px] max-h-[180px] md:right-0 right-[10rem] relative profile-image_1 mb-4">
//                   <img
//                     src={expert.icon}
//                     alt="background"
//                     className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
//                   />
//                   <img
//                     src={expert.userImg}
//                     alt="User"
//                     className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between md:ml-[-2rem] ml-[-14rem]">
//                   <div className="flex flex-row gap-2 md:w-[70px] w-[41px] md:h-[32px] h-[19px]">
//                     <img
//                       src={expert.ratingIcon}
//                       alt={expert.rating}
//                       className="md:w-[25px] w-[14px] md:h-[25px] h-[14px]"
//                     />
//                     <span className="md:w-[38px] w-[22px] md:h-[32px] h-[19px] font-[600] md:text-[25px] text-[15px] md:leading-[31px] leading-[18px] text-[#E1E1E3]">
//                       {expert.rating}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="md:flex md:flex-row grid grid-cols-3 md:gap-[4rem] gap-4 md:px-[1rem] md:mt-[2rem] mt-4">
//                 <div className="md:w-[165px] w-[150px] h-[38px] flex flex-col">
//                   <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
//                     <span className="text-gradient-2 md:w-[89px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
//                       Monthly
//                     </span>
//                     <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
//                       ₹1,999
//                     </span>
//                   </div>
//                   <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
//                     <span className="text-[#E4E4E7] opacity-[40%]">
//                       {expert.activeUser}
//                     </span>
//                     <span className="text-white">15/100</span>
//                   </div>
//                 </div>
//                 <div className="bg-white md:w-[2px] w-[0.7px] md:h-[130px] md:ml-0 ml-[3rem]"></div>
//                 <div className="md:w-[165px] w-[150px] h-[38px] flex flex-col">
//                   <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
//                     <span className="text-gradient-2 md:w-[110px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
//                       Quaterly
//                     </span>
//                     <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
//                       ₹2,999
//                     </span>
//                   </div>
//                   <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
//                     <span className="text-[#E4E4E7] opacity-[40%]">
//                       {expert.activeUser}
//                     </span>
//                     <span className="text-white">15/100</span>
//                   </div>
//                 </div>
//                 <div className="bg-white w-[2px] h-[130px] ml-[1rem] md:flex hidden"></div>
//                 <div className="md:w-[165px] w-[150px] h-[38px] flex flex-col">
//                   <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
//                     <span className="text-gradient-2 md:w-[149px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
//                       Half-Yearly
//                     </span>
//                     <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
//                       ₹5,999
//                     </span>
//                   </div>
//                   <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
//                     <span className="text-[#E4E4E7] opacity-[40%]">
//                       {expert.activeUser}
//                     </span>
//                     <span className="text-white">35/100</span>
//                   </div>
//                 </div>
//                 <div className="bg-white md:w-[2px] w-[0.7px] md:h-[130px] md:ml-0 ml-[3rem]"></div>
//                 <div className="md:w-[165px] md:h-[20px] w-[150px] h-[38px] flex flex-col">
//                   <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
//                     <span className="text-gradient-2 md:w-[89px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
//                       Yearly
//                     </span>
//                     <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
//                       ₹7,999
//                     </span>
//                   </div>
//                   <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
//                     <span className="text-[#E4E4E7] opacity-[40%]">
//                       {expert.activeUser}
//                     </span>
//                     <span className="text-white">35/100</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { userAnalysis, expertise_data } from "../constants";
import { customDrop } from "../assets";
import BarGraph from "../graphs/BarGraph";
import EarningAnalysis from "./EarningAnalysis";
import ReferralLinkComponent from "./ReferralLinkComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("Today");
  const [customStartDate, setCustomStartDate] = useState(null);
  const [customEndDate, setCustomEndDate] = useState(null);
  const [isCustomPickerVisible, setIsCustomPickerVisible] = useState(false);
  const [activeButtonSecondSection, setActiveButtonSecondSection] = useState("today");
  const [totalVisits, setTotalVisits] = useState(0);
  const [paidUsers, setPaidUsers] = useState(0);
  const [notInterested, setNotInterested] = useState(0);

  const handleCustomButtonClick = () => {
    setActiveButtonSecondSection("custom");
    setIsCustomPickerVisible(!isCustomPickerVisible);
  };

  const handleDateChange = (start, end) => {
    setCustomStartDate(start);
    setCustomEndDate(end);
    setIsCustomPickerVisible(false);
  };

  const handleClearDates = () => {
    setCustomStartDate(null);
    setCustomEndDate(null);
  };

  const handleDataUpdate = (data) => {
    setTotalVisits(data.totalVisits);
    setPaidUsers(data.paidUsers);
    setNotInterested(data.notInterested);
  };

  return (
    <div className="xl:pl-[12rem] md:pl-[10rem] pl-6 md:py-[6rem] xl:py-[6rem] pt-[8rem]">
      <div className="flex xl:w-[1580px] md:w-[1180px] items-cente">
        <div className="">
          <div className="flex items-center md:gap-0 gap-10">
            <h2 className="md:w-[176px] md:h-[27px] w-[125px] h-[28px] font-inter md:text-[22px] text-[20px] font-[600] leading-[27px] text-white">User Analysis</h2>
            <div className="flex items-center md:gap-[2rem] gap-2 xl:ml-[57rem] md:ml-[25rem] ml-[-20px]">
              <button
                className={`button ${activeButtonSecondSection === "today" ? "bg-[#fff] text-[#000]" : "bg-transparent"} md:text-[18px] border-solid border-[1px] border-white text-white hover:bg-[#fff] hover:text-[#000] transition duration-300 md:py-2 py-1 px-2 md:px-6 rounded mb-2 md:mb-0`}
                onClick={() => setActiveButtonSecondSection("today")}
              >
                Today
              </button>
              <button
                className={`button ${activeButtonSecondSection === "weekly" ? "bg-[#fff] text-[#000]" : "bg-transparent"} md:text-[18px] border-solid border-[1px] border-white text-white hover:bg-[#fff] hover:text-[#000] transition duration-300 md:py-2 py-1 px-2 md:px-6 rounded mb-2 md:mb-0`}
                onClick={() => setActiveButtonSecondSection("weekly")}
              >
                Weekly
              </button>
              <button
                className={`button ${activeButtonSecondSection === "monthly" ? "bg-[#fff] text-[#000]" : "bg-transparent"} md:text-[18px] border-solid border-[1px] border-white text-white hover:bg-[#fff] hover:text-[#000] transition duration-300 md:py-2 py-1 px-2 md:px-6 rounded mb-2 md:mb-0`}
                onClick={() => setActiveButtonSecondSection("monthly")}
              >
                Monthly
              </button>
              <div className="relative inline-block">
                <button
                  className={`button ${activeButtonSecondSection === "custom" ? "bg-[#fff] text-[#000]" : "bg-transparent"} md:text-[18px] border-solid border-[1px] border-white text-white hover:bg-[#fff] hover:text-[#000] transition duration-300 md:py-2 py-1 px-2 md:px-6 rounded mb-2 md:mb-0`}
                  onClick={handleCustomButtonClick}
                >
                  Custom
                </button>
                {isCustomPickerVisible && (
                  <div className="absolute top-full right-0 mt-2 z-10 bg-[#2b2d42] p-4 rounded-lg shadow-lg flex flex-col gap-3">
                    <DatePicker
                      selected={customStartDate}
                      onChange={(date) => setCustomStartDate(date)}
                      selectsStart
                      startDate={customStartDate}
                      endDate={customEndDate}
                      placeholderText="Start Date"
                      className="bg-transparent text-white border-b border-white mb-2"
                      renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                        <div className="flex justify-between items-center">
                          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{'<'}</button>
                          <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(parseInt(value))}>
                            {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - 79 + i).map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                          <select value={date.getMonth()} onChange={({ target: { value } }) => changeMonth(parseInt(value))}>
                            {Array.from({ length: 12 }, (_, i) => i).map(month => (
                              <option key={month} value={month}>{new Date(0, month).toLocaleString(undefined, { month: 'long' })}</option>
                            ))}
                          </select>
                          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{'>'}</button>
                        </div>
                      )}
                    />
                    <DatePicker
                      selected={customEndDate}
                      onChange={(date) => handleDateChange(customStartDate, date)}
                      selectsEnd
                      startDate={customStartDate}
                      endDate={customEndDate}
                      minDate={customStartDate}
                      placeholderText="End Date"
                      className="bg-transparent text-white border-b border-white"
                      renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                        <div className="flex justify-between items-center">
                          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{'<'}</button>
                          <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(parseInt(value))}>
                            {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - 79 + i).map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                          <select value={date.getMonth()} onChange={({ target: { value } }) => changeMonth(parseInt(value))}>
                            {Array.from({ length: 12 }, (_, i) => i).map(month => (
                              <option key={month} value={month}>{new Date(0, month).toLocaleString(undefined, { month: 'long' })}</option>
                            ))}
                          </select>
                          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{'>'}</button>
                        </div>
                      )}
                    />
                    <button
                      onClick={handleClearDates}
                      className="bg-[#fff] text-[#000] px-4 py-1 rounded-md focus:outline-none"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-12 gap-4 md:px-[4rem] md:py-8 py-0">
            <div className="flex-1 md:ml-[-4rem]">
              <BarGraph
                activeButton={activeButtonSecondSection}
                customStartDate={customStartDate}
                customEndDate={customEndDate}
                onDataUpdate={handleDataUpdate}
              />
            </div>
            <div className="flex flex-col gap-4 md-mr-0 ml-[1.6rem] md:py-0 py-4">
              {userAnalysis.map((user) => (
                <div
                  className="flex flex-col md:justify-between md:w-[288px] w-[355px] md:h-[298px] md:mr-0 ml-[-2rem] h-[178px] rounded-[25px] bg_cards p-4"
                  key={user.id}
                >
                  <div className="flex flex-row justify-between">
                    <div className="flex md:flex-col flex-row gap-2">
                      <img
                        src={user.telegramIcon}
                        alt={user.telegram}
                        className="md:w-[65px] w-[53px] md:h-[65px] h-[53px]"
                      />
                      <span className="text-white">{user.telegram}</span>
                    </div>
                    <span className="text-[#E4E4E7] font-[400] font-inter text-[16px] leading-[16px] opacity-[40%]">
                      {user.joined}
                    </span>
                  </div>
                  <div className="flex flex-col md:gap-[1rem] md:mb-4 mt-2 gap-[0.6rem]">
                    <div className="flex flex-row justify-between md:w-[232px] md:h-[40px]">
                      <span className="text-[#E4E4E7] opacity-[40%]">
                        {user.totalVisit}
                      </span>
                      <span className="text-[#E4E4E7] opacity-[40%]">
                        {user.totalVisitIs}
                      </span>
                    </div>
                    <div className="flex flex-row justify-between md:w-[232px] md:h-[20px]">
                      <span className="text-[#E4E4E7] opacity-[40%]">
                        {user.user}
                      </span>
                      <span className="text-[#25A2DE]">{user.totalUser}</span>
                    </div>
                    <div className="flex flex-row justify-between md:w-[232px] md:h-[20px]">
                      <span className="text-[#E4E4E7] opacity-[40%]">
                        {user.noInterested}
                      </span>
                      <span className="text-[#D0667A]">{user.noInterestedIs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ReferralLinkComponent />
          <EarningAnalysis />
          <div className="py-8 flex flex-col gap-4 md:mt-0 mt-[-2rem]">
            <span className="font-inter font-[600] text-[22px] leading-[27px] w-[246px] h-[27px] text-white">
              Subscription : Services
            </span>
            <div className="xl:w-[1530px] md:w-[1122px] md:h-[480px] xl:h-[480px] w-[361px] md:ml-0 ml-[-8px] bg_cards p-4 rounded-[24px] md:mt-0 mt-[-2px]">
              {expertise_data.map((expert) => (
                <div className="flex flex-col" key={expert.id}>
                  <div className="flex flex-row">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <span className="md:w-[331px] w-[152px] md:h-[67px] h-[31px] font-inter font-[700] md:text-[57px] text-[26px] md:leading-[66px] leading-[30px] text-gradient">
                          {expert.name}
                        </span>
                        <span className="text-white font-inter font-[500] md:text-[17px] text-[14px] md:leading-[22px]">
                          {expert.title}
                        </span>
                      </div>
                      <div className="md:w-[278px] w-[176px] md:h-[53px] h-[25px] flex flex-row justify-between">
                        <div className="md:w-[84px] w-[54px] md:h-[53px] h-[25px] flex flex-col">
                          <span className="text-[#E4E4E7] opacity-[40%] font-[400] md:text-[14px] text-[10px] md:leading-[17px] leading-[12px] font-inter md:w-[83px] w-[56px] md:h-[17px]">
                            {expert.experience}
                          </span>
                          <span className="text-white md:w-[83px] w-[54px] md:h-[20px] h-[12px] font-[600] md:text-[16px] text-[10px] text-center leading-[20px]">
                            {expert.totalExp}
                          </span>
                        </div>
                        <div className="bg-white w-[1px] h-[35px]"></div>
                        <div className="md:w-[84px] w-[54px] md:h-[53px] h-[25px] flex flex-col">
                          <span className="text-[#E4E4E7] opacity-[40%] font-[400] md:text-[14px] text-[10px] md:leading-[17px] leading-[12px] font-inter md:w-[83px] w-[56px] md:h-[17px]">
                            {expert.followers}
                          </span>
                          <span className="text-white md:w-[83px] w-[54px] md:h-[20px] h-[12px] font-[600] md:text-[16px] text-[10px] text-center leading-[20px]">
                            {expert.totalFollowers}
                          </span>
                        </div>
                      </div>
                      <span className="text-white md:w-[187px] w-[100px] md:h-[22px] font-inter font-[500] md:text-[14px] text-[12px] md:leading-[22px]">
                        {expert.content}
                      </span>
                      <span className="text-white md:w-[187px] w-[140px] md:h-[22px] font-inter font-[500] md:text-[16px] text-[14px] md:leading-[22px]">
                        <span className="text-white opacity-[50%]">
                          Active User:
                        </span>{" "}
                        100
                      </span>
                      <div className="md:w-[373px] md:h-[31px] w-[310px] h-[22px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc]">
                        <button className="flex justify-center items-center md:gap-2 gap-2">
                          <img
                            src={expert.telegram}
                            alt="Telegram"
                            className="md:w-[18.6px] w-[14px] h-[14px] md:h-[18.6px]"
                          />
                          <span className="md:w-[300px] md:h-[23px] text-white font-[400] md:text-[12px] text-[10px] md:leading-[22px]">
                            {expert.greet}
                          </span>
                          <img
                            src={expert.arrowIcon}
                            alt="arrow"
                            className="w-[13px] h-[13px]"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="md:h-[344px] sm:h-[240px] md:max-h-[250px] max-h-[180px] md:right-0 right-[10rem] relative profile-image_1 mb-4">
                      <img
                        src={expert.icon}
                        alt="background"
                        className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                      />
                      <img
                        src={expert.userImg}
                        alt="User"
                        className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                      />
                    </div>
                    <div className="flex flex-col justify-between md:ml-[-2rem] ml-[-14rem]">
                      <div className="flex flex-row gap-2 md:w-[70px] w-[41px] md:h-[32px] h-[19px]">
                        <img
                          src={expert.ratingIcon}
                          alt={expert.rating}
                          className="md:w-[25px] w-[14px] md:h-[25px] h-[14px]"
                        />
                        <span className="md:w-[38px] w-[22px] md:h-[32px] h-[19px] font-[600] md:text-[25px] text-[15px] md:leading-[31px] leading-[18px] text-[#E1E1E3]">
                          {expert.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex md:flex-row grid grid-cols-3 md:gap-[4rem] gap-4 md:px-[1rem] md:mt-[2rem] mt-4">
                    <div className="md:w-[165px] w-[150px] h-[38px] flex flex-col">
                      <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
                        <span className="text-gradient-2 md:w-[89px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
                          Monthly
                        </span>
                        <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
                          ₹1,999
                        </span>
                      </div>
                      <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
                        <span className="text-[#E4E4E7] opacity-[40%]">
                          {expert.activeUser}
                        </span>
                        <span className="text-white">15/100</span>
                      </div>
                    </div>
                    <div className="bg-white md:w-[2px] w-[0.7px] md:h-[130px] md:ml-0 ml-[3rem]"></div>
                    <div className="md:w-[165px] w-[150px] h-[38px] flex flex-col">
                      <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
                        <span className="text-gradient-2 md:w-[110px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
                          Quaterly
                        </span>
                        <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
                          ₹2,999
                        </span>
                      </div>
                      <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
                        <span className="text-[#E4E4E7] opacity-[40%]">
                          {expert.activeUser}
                        </span>
                        <span className="text-white">15/100</span>
                      </div>
                    </div>
                    <div className="bg-white w-[2px] h-[130px] ml-[1rem] md:flex hidden"></div>
                    <div className="md:w-[165px] w-[150px] h-[38px] flex flex-col">
                      <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
                        <span className="text-gradient-2 md:w-[149px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
                          Half-Yearly
                        </span>
                        <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
                          ₹5,999
                        </span>
                      </div>
                      <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
                        <span className="text-[#E4E4E7] opacity-[40%]">
                          {expert.activeUser}
                        </span>
                        <span className="text-white">35/100</span>
                      </div>
                    </div>
                    <div className="bg-white md:w-[2px] w-[0.7px] md:h-[130px] md:ml-0 ml-[3rem]"></div>
                    <div className="md:w-[165px] md:h-[20px] w-[150px] h-[38px] flex flex-col">
                      <div className="md:w-[225px] md:h-[97px] md:gap-0 gap-1 flex md:flex-col flex-row md:items-start items-center">
                        <span className="text-gradient-2 md:w-[89px] md:h-[32px] font-inter font-[700] md:text-[23px] text-[12px]">
                          Yearly
                        </span>
                        <span className="text-white md:w-[120px] font-poppins font-[700] md:text-[36px]">
                          ₹7,999
                        </span>
                      </div>
                      <div className="flex flex-row md:w-[184px] w-[90px] md:h-[22px] h-[10px] gap-2 font-[500] md:text-[17px] text-[8px] md:mt-2">
                        <span className="text-[#E4E4E7] opacity-[40%]">
                          {expert.activeUser}
                        </span>
                        <span className="text-white">35/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;