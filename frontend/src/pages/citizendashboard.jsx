import React, { useState } from "react";
import CitizenHeader from "./Citizen/CitizenHeader";
import CitizenSidebar from "./Citizen/CitizenSidebar";
import CitizenDashboardView from "./Citizen/CitizenDashboardView";
import CitizenRequestView from "./Citizen/CitizenRequestView";
import CitizenRequestStatusView from "./Citizen/CitizenRequestStatusView";
import CitizenEarningsView from "./Citizen/CitizenEarningsView";
import CitizenGuidelinesView from "./Citizen/CitizenGuidelinesView";
import CitizenProfileView from "./Citizen/CitizenProfileView";

export default function CitizenDashboard() {
  const [citizendashboard, setCitizendashboard] = useState("Dashboard");

  // User data (could come from context or API)
  const user = {
    name: "Alex Johnson",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARLnZCokXKKDWEsIDIjwcwXqdOEMDA668FrQyd_Q6uUGsAeFMDQmCqAf28ukoRKC7G-fMKgKD_XJht4TxfdIuxMMbbIq1C_jGjSE1wAg6FrM47b-gCZm73h5z75p1UUmRoo0C3PMSX_zdnDzF9_6BzH4S9_LlrEtAfSH-f1v3GhyEJpV-jCKE6T1SM25HMnwr9K2dxjYPJ2AM7BDpLpC23RT4_wv31P6Yg0b3epeJRiMmI5W1ddzrRf45zQPvhSAOLQfzrlY6w",
  };

  return (
    <div className="bg-background-light min-h-screen text-[#121614]">
      <div className="flex flex-col h-screen">
        <CitizenHeader user={user} />

        <div className="flex flex-1 overflow-hidden">
          <CitizenSidebar
            currentView={citizendashboard}
            setCurrentView={setCitizendashboard}
          />

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            {citizendashboard === "Dashboard" && <CitizenDashboardView currentView={citizendashboard} setCurrentView={setCitizendashboard}/>}
            {citizendashboard === "Request" && <CitizenRequestView />}
            {citizendashboard === "RequestStatus" && <CitizenRequestStatusView />}
            {citizendashboard === "Earnings" && <CitizenEarningsView />}
            {citizendashboard === "Guidelines" &&  <CitizenGuidelinesView setCurrentView={setCitizendashboard} />}
            {citizendashboard === "Profile" && <CitizenProfileView user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}