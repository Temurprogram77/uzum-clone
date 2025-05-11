import React, { useEffect, useRef, useState } from "react";
import { Wifi } from "lucide-react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Cards from "./components/cards/cards";
import Nav from "./components/nav/nav";
import Slider from "./components/slider/slider";
import CardBox from "./components/cardBox/cardBox";
import Pages from "./components/pages/pages";
import AllSeeButton from "./components/allSeeButton/allSeeButton";
import Cooler from "./components/cooler/cooler";

const App = () => {
  const headerRef = useRef(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        headerRef.current?.classList.add("bottom-6");
      } else {
        headerRef.current?.classList.remove("bottom-6");
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="bg-white">
      {loading ? (
        <></>
      ) : isOnline ? (
        <>
          <Nav />
          <Navbar />
          <Pages />
          <Slider />
          <CardBox />
          <Cards />
          <AllSeeButton />
          <Cooler />
          <div
            ref={headerRef}
            onClick={scrollToTop}
            className="arrow-btn p-3 duration-300 fixed -bottom-16 right-6 rounded-full bg-[#7F4DFF] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              fill="white"
            >
              <path d="M12 4.83582L5.79291 11.0429L7.20712 12.4571L12 7.66424L16.7929 12.4571L18.2071 11.0429L12 4.83582ZM12 10.4857L5.79291 16.6928L7.20712 18.107L12 13.3141L16.7929 18.107L18.2071 16.6928L12 10.4857Z"></path>
            </svg>
          </div>
        </>
      ) : (
        <div
          className={
            isOnline
              ? ""
              : "mx-auto my-28 text-center text-red-900 border-8 w-fit border-red-700 py-3 px-6 rounded-xl"
          }
        >
          <h1 className="status-text flex flex-col items-center">
            You are currently offline. <Wifi size={40} />
          </h1>
        </div>
      )}
    </div>
  );
};

export default App;
