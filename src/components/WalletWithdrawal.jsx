import React, { useState, useEffect } from "react";
import { closeIcon, dropdown, tick } from "../assets";
import { withdrawalBank, upiBank } from "../constants";
import AddBankDialog from "./AddBankDialog";
import AddUpiDialog from "./AddUpiDialog";
import axios from "axios";

const WalletWithdrawal = ({ closeDialog, walletBalance }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddBankOpen, setIsAddBankOpen] = useState(false);
  const [isUpiOpen, setUpiOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedUpi, setSelectedUpi] = useState(null);
  const [withdrawalAmount, setWithDrawalAmount] = useState([]);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const stackholderId = sessionStorage.getItem("stackholderId");
  const withdrawal_api = `https://copartners.in:5135/api/Withdrawal/BankUPIByUserId/${stackholderId}?userType=RA&page=1&pageSize=10`;

  const fetchData = async () => {
    try {
      const res = await axios.get(withdrawal_api);
      setWithDrawalAmount(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [withdrawal_api]);

  const handleBankClick = (id) => {
    setSelectedBank(id === selectedBank ? null : id);
    setSelectedUpi(null); // Deselect UPI when a bank is selected
  };

  const handleUpiClick = (id) => {
    setSelectedUpi(id === selectedUpi ? null : id);
    setSelectedBank(null); // Deselect bank when a UPI is selected
  };

  const openAddBankDialog = () => {
    setIsAddBankOpen(true);
  };

  const closeAddBankDialog = () => {
    setIsAddBankOpen(false);
  };

  const saveBankDetails = (details) => {
    setBankDetails(details);
    fetchData(); // Fetch updated bank details after adding a new bank
  };

  const openUpiBank = () => {
    setUpiOpen(true);
  };

  const closeUpiDialog = () => {
    setUpiOpen(false);
  };

  const isButtonDisabled =
    !inputValue || inputValue <= 0 || (!selectedBank && !selectedUpi);

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] xl:h-[550px] md:h-full w-[378px] h-[600px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Withdrawal
            </h2>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="md:w-[184px] md:h-[23px] text-white md:text-[20px] text-[16px] font-inter font-[500] leading-[16px] md:ml-0 ml-[-0.8rem]">
              Select Your Bank
            </span>
            <button
              onClick={openAddBankDialog}
              className="md:w-[100px] w-[90px] border-solid border-[1px] border-white md:h-[40px] h-[30px] rounded-[10px] border text-white font-[600] font-inter md:text-[12px] text-[10px] md:mr-0 mr-[-0.8rem]"
            >
              +Add Bank
            </button>
            {isAddBankOpen && (
              <AddBankDialog
                fetchData={fetchData}
                isOpen={isAddBankOpen}
                onClose={closeAddBankDialog}
                saveBankDetails={saveBankDetails}
              />
            )}
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 items-center mt-4">
            {withdrawalAmount.map((withdrawal, index) => {
              if (withdrawal.paymentMode === "Bank") {
                return (
                  <button
                    key={index}
                    onClick={() => handleBankClick(withdrawal.id)}
                    className={`relative md:w-[310px] w-[200px] md:h-[70px] h-[70px] text-white rounded-[16px] border border-[#40495C] ${
                      selectedBank === withdrawal.id
                        ? "bg-[#282F3E]"
                        : "bg-transparent"
                    }`}
                  >
                    {selectedBank === withdrawal.id && (
                      <img
                        src={tick}
                        alt="Selected"
                        className="absolute top-2 right-2 w-[20px] h-[20px]"
                      />
                    )}
                    <div className="flex md:ml-8 justify-center md:flex-col flex">
                      <div className="flex flex-col md:items-start items-center items-center">
                        <span className="text-[16px] font-[600]">
                          {withdrawal.bankName}
                        </span>
                        <span className="text-[14px]">
                          {withdrawal.accountNumber}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="flex flex-row items-center mt-4 justify-between">
            <span className="md:w-[184px] md:h-[23px] text-white md:text-[20px] text-[16px] font-inter font-[500] leading-[16px] md:ml-0 ml-[-0.8rem]">
              Select Your UPI ID
            </span>
            <button
              onClick={openUpiBank}
              className="md:w-[100px] w-[90px] border-solid border-[1px] border-white md:h-[40px] h-[30px] rounded-[10px] border text-white font-[600] font-inter md:text-[12px] text-[10px] md:mr-0 mr-[-0.8rem]"
            >
              +Add UPI ID
            </button>
            {isUpiOpen && (
              <AddUpiDialog onClose={closeUpiDialog} isOpen={isUpiOpen} />
            )}
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 items-center mt-6">
            {withdrawalAmount.map((withdrawal, index) => {
              if (withdrawal.paymentMode === "UPI") {
                return (
                  <button
                    key={index}
                    onClick={() => handleUpiClick(withdrawal.id)}
                    className={`relative md:w-[310px] w-[200px] h-[50px] text-white rounded-[16px] border border-[#40495C] ${
                      selectedUpi === withdrawal.id
                        ? "bg-[#282F3E]"
                        : "bg-transparent"
                    }`}
                  >
                    {selectedUpi === withdrawal.id && (
                      <img
                        src={tick}
                        alt="Selected"
                        className="absolute top-2 right-2 w-[20px] h-[20px]"
                      />
                    )}
                    <div className="flex justify-center items-start md:ml-4 md:flex-col flex">
                      <span className="text-[16px] font-[600]">
                        {withdrawal.upI_ID}
                      </span>
                    </div>
                  </button>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="md:h-[50px] flex md:flex-row flex-col md:gap-2 gap-0 md:justify-center md:items-center mt-4">
            <span className="font-[500] text-[18px] leading-[27px] text-white">
              Amount:
            </span>
            <input
              type="number"
              id="wallet_withdrawal"
              value={inputValue}
              onChange={handleInputChange}
              className="md:w-[287px] w-[344px] h-[50px] border border-[#40495C] bg-[#282F3E] rounded-[16px] text-white px-2  md:ml-0 ml-[-0.8rem]"
              placeholder={`Your Withdrawal Balance: ${walletBalance?.withdrawalBalance}`}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`rounded-[10px] w-[147px] h-[40px] md:text-[18px] text-[14px] ${
                isButtonDisabled ? "bg-red-500 text-white" : "bg-white"
              }`}
              disabled={isButtonDisabled}
            >
              Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletWithdrawal;
