import React, { useState, useEffect } from "react";
import { closeIcon, signup, eye, eyeClose } from "../assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ setIsSignedUp }) => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionDeleted, setSessionDeleted] = useState(false);
  const [logoutTimeout, setLogoutTimeout] = useState(null);
  const navigate = useNavigate();
  let timeoutId;

  const STACKHOLDER_API = `https://copartners.in:5132/api/Experts`;
  const handleLogout = () => {
    localStorage.removeItem("stackholderId");
    navigate("/signup");
  };

  useEffect(() => {
    return () => {
      if (logoutTimeout) {
        clearTimeout(logoutTimeout);
      }
    };
  }, [logoutTimeout]);

  const handleContinue = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!emailId || !password) {
      setError("Email and Password are required");
      setLoading(false);
      return;
    }
    const postData = {
      mobile: "",
      email: emailId,
      passwordHash: password,
      isLoginUsingOtpRequest: true,
      userIpAddress: "string",
    };
    try {
      const response = await axios.post(
        "https://copartners.in:5130/Authentication/authenticate",
        postData,
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data;
      const stackholderId = data.data.stackholderId;
      console.log(stackholderId, 'Session store')
      sessionStorage.setItem("stackholderId", stackholderId);
      // Schedule removal of sessionStorage item after 10 seconds
      timeoutId = setTimeout(() => {
        sessionStorage.removeItem("stackholderId");
        sessionStorage.setItem("visitedSignUp", "false");
        setSessionDeleted(true);
        toast.info("Session expired. Please log in again.", {
          position: "top-right",
        });
      }, 86400000);
      const stackholderResponse = await axios.get(
        `${STACKHOLDER_API}/${stackholderId}`
      );
      if (data.data.email.toLowerCase() === emailId.toLowerCase()) {
        if (password === "Copartner@1234#") {
          navigate("/reset", { state: { emailId, password } });
        } else {
          setIsSignedUp(true);
          sessionStorage.setItem("visitedSignUp", "true");
          toast.success("Login successful!", {
            position: "top-right",
          });
          navigate("/");
        }
        const timeout = setTimeout(() => {
          handleLogout();
        }, 86400000);
      } else {
        setError("Email ID or Password does not match.");
        toast.error("Email ID or Password does not match.", {
          position: "top-right",
        });
      }
    } catch (error) {
      setError("EmailID or Password is incorrect");
      toast.error("EmailID or Password is incorrect", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div
        className="h-screen w-screen md:ml-[-7rem]"
        style={{
          backgroundImage: `url(${signup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50 w-screen h-screen">
        <div className="w-[342px] bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-6 rounded-lg w-96 relative text-center">
          <div className="absolute top-3 right-0 text-right">
            <button
              className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white"
              aria-label="Close"
            >
              <img
                src={closeIcon}
                className="w-[32px] h-[32px] absolute top-2 right-6"
                alt="close"
              />
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-white">Login</h2>
          </div>
          <p className="text-gray-300 text-center mb-4">
            Get access to daily free calls from varieties of India's SEBI
            Registered Research Analysts.
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="w-full flex gap-2 flex-col justify-between">
            <div className="w-full mx-auto h-[50px]">
              <input
                type="email"
                placeholder="Enter your Mail ID"
                className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </div>
            <div className="relative w-full mx-auto h-[50px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <img
                  src={showPassword ? eye : eyeClose}
                  className="w-5"
                  alt="Toggle Password Visibility"
                />
              </button>
            </div>
            <button
              className="w-full text-[14px] text-[#0081F1] text-right"
              onClick={() =>
                navigate("/forget", { state: { emailId, password } })
              }
            >
              Forget Password?
            </button>
            <button
              type="submit"
              onClick={handleContinue}
              className="w-full h-[50px] bg-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]"
              disabled={loading}
            >
              {loading ? "Loading..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default SignUp;