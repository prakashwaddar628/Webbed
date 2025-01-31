import { useState } from "react";
import Navbar from "./components/nav/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Review from "./components/Review";
import Magic from "./components/Magic";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="bg-[#0e0f1a] min-h-screen overflow-hidden mt-5">
      <Navbar />
      <div className="overflow-y-scroll w-full px-2.5 m-2 ">
        <Dashboard />
        <Review />
        <Magic />
        <Cards />
      </div>
    </div>
  );
}

export default App;
