import React, { useState } from "react";
import WorkerHeader from "./Worker/WorkerHeader";
import WorkerSidebar from "./Worker/WorkerSidebar";
import TaskListView from "./Worker/TasklistView";
import TaskHistory from "./Worker/TaskHistory";
import Profile from "./Worker/Profile";

export default function WorkerDashboard() {
  // Which section is active? "workertask", "taskhistory", or "profile"
  const [dashboardView, setDashboardView] = useState("workertask");

  // Worker data – in a real app, you'd fetch this from an API or context
  const worker = {
    name: "John Doe",
    id: "W-07",
    zone: "Zone B",
    vehicle: "LHR-7890",
    status: "Active",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYdMgXsGUfO957pDma-wfByKVXDXZz3CrSAfItGBEST-r6o5eNClmeTG9GUfMYK6q_e_sjsq_muGMTVnVa0Bxit4yO_FyVK7BQkgpcHmugLwF6SxBO3qoZSplRYC49-Px8ZmXroQqngMEnIZPBNMGPRBc1aQMd7rA4T7gddUdJFSvAQ6VN06UJCgbDgpothNnxYMxrRogZjNQNB3N2nfkSboNDm6bqill5U15OwE4CBReOt2yeBsKweTfbl5-d7-lzuFz7e8Zr",
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light font-display">
      {/* Global Header */}
      <WorkerHeader worker={worker} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <WorkerSidebar
          dashboardView={dashboardView}
          setDashboardView={setDashboardView}
          worker={worker}
        />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {dashboardView === "workertask" && <TaskListView worker={worker} />}
          {dashboardView === "taskhistory" && <TaskHistory />}
          {dashboardView === "profile" && <Profile worker={worker} />}
        </div>
      </div>
    </div>
  );
}