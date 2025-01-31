import { useState } from "react";
import Navbar from "./components/nav/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Review from "./components/Review";

function App() {
  return (
    <div className="bg-[#0e0f1a] min-h-screen">
      <Navbar />
      <div className="overflow-y-scroll w-full">
        <Dashboard />
        <Review />
      </div>
    </div>
  );
}

export default App;
