import React, { useEffect, useState } from "react";
import { Wifi } from "lucide-react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Cards from "./components/cards/cards";
import Nav from "./components/nav/nav";
import Slider from "./components/slider/slider";
import CardBox from "./components/cardBox/cardBox";
import Pages from "./components/pages/pages";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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
  return (
    <div className="bg-white">
      <div className={isOnline ? "" : "mx-auto my-28 text-center text-red-900 border-8 w-fit border-red-700 py-3 px-6 rounded-xl"}>
        {isOnline ? (
          <>
            <Nav />
            <Navbar />
            <Pages />
            <Slider />
            <Cards />
          </>
        ) : (
          <h1 className="status-text flex flex-col items-center">You are currently offline. <Wifi size={40}/> </h1>
        )}
      </div>
    </div>
  );
};

export default App;
