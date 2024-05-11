import React, { useState, useEffect } from "react";
import styles from "./style";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard, Subscription, Wallet, Setting } from "./components";
import SignUp from "./components/SignUp";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showSidebar, setShowSidebar] = useState(!isSmallScreen);
  const location = useLocation();
  const [isSignedUp, setIsSignedUp] = useState(false);

  const isSignUpPage = location.pathname === '/signup';

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-gradient overflow-hidden ${styles.boxWidth} ${styles.paddingX}`}
    >
      {!isSignUpPage && <Navbar activeTab={activeTab} toggleSidebar={toggleSidebar} />}
      {!isSignUpPage && showSidebar && (
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowSidebar={setShowSidebar}
        />
      )}
      <div className="flex">
        <div className="flex-grow">
          <>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<SignUp setIsSignedUp={setIsSignedUp} />} />
            </Routes>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
